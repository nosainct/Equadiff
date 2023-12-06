"use client"

import { useState } from "react"
import ParameterInput from "./ParameterInput" // Assurez-vous que le chemin d'importation est correct

export default function EquationInput() {
  const [equation, setEquation] = useState("")
  const [parameters, setParameters] = useState({})

  const handleEquationChange = (newEquation) => {
    setEquation(newEquation)
  }

  const handleParametersChange = (newParameters) => {
    setParameters(newParameters)
  }

  const handleSubmit = async () => {
    console.log("rentre dans le submit")
    const data = {
      equation: equation,
      initial_conditions: [parameters.initialCondition, parameters.secondInitialCondition], // Assurez-vous que cela correspond aux attentes de l'API
      t_span: [0, 10],  // Exemple de plage temporelle, à ajuster selon vos besoins
      t_eval: [0, 0.1, 0.2, 0.3,0.4,0.5,0.6,0.7,0.8,0.9, 10] // Points temporels pour l'évaluation, à générer selon vos besoins
    }
  
    try {
      
      const response = await fetch('http://localhost:3000/api/solver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result); // Ici, vous pouvez traiter la réponse, par exemple, en mettant à jour l'état pour afficher les graphiques
    } catch (e) {
      console.error("There was a problem with the fetch operation:", e);
    }
  }
  

  return (
    <div>
      <ParameterInput onParametersChange={handleParametersChange} />
      <div className="flex m-auto mt-2 w-3/4">
        <input
          type="text"
          name="equation"
          id="equation"
          value={equation}
          onChange={(e) => handleEquationChange(e.target.value)}
          className="w-full p-3 bg-indigo-500 border-2 border-blue-500 shadow-sm focus:border-blue-500 sm:text-sm rounded-l-lg "
          placeholder="y'-2*x*y+y^2=5-x^2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 p-2 text-white rounded-r-lg block w-1/4">
          =
        </button>
      </div>
    </div>
  )
}
