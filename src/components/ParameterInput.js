"use client"

import { useState } from "react"

export default function ParameterInput({ onParametersChange }) {
  const [order, setOrder] = useState("first") // Premier ou second ordre
  const [initialCondition, setInitialCondition] = useState("")
  const [secondInitialCondition, setSecondInitialCondition] = useState("")
  const [variableName, setVariableName] = useState("y")
  const [timeRange, setTimeRange] = useState({ start: 0, end: 10 })
  const [parameters, setParameters] = useState({})

  const updateParameters = (newParams) => {
    const updatedParameters = { ...parameters, ...newParams }
    setParameters(updatedParameters)
    onParametersChange(updatedParameters)
  }

  const handleOrderChange = (event) => {
    setOrder(event.target.value)
    onParametersChange({ ...parameters, order: event.target.value })
  }

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="mb-4">
        <label
          htmlFor="order"
          className="block text-sm font-medium text-gray-700">
          Ordre de l'équation
        </label>
        <select
          id="order"
          value={order}
          onChange={handleOrderChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="first">Premier Ordre</option>
          <option value="second">Second Ordre</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nom de la Variable
        </label>
        <select
          value={variableName}
          onChange={(e) => {
            setVariableName(e.target.value)
            updateParameters({ variableName: e.target.value })
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="x">x</option>
          <option value="y">y</option>
          <option value="z">z</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {variableName}(0) =
        </label>
        <input
          type="text"
          value={secondInitialCondition}
          onChange={(e) => {
            setInitialCondition(e.target.value)
            updateParameters({ initialCondition: e.target.value })
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Valeur initiale"
        />
      </div>

      {order === "second" && (
        <div className="mb-4">
          <label
            htmlFor="secondInitialCondition"
            className="block text-sm font-medium text-gray-700">
            {variableName}'(0) =
          </label>
          <input
            type="text"
            value={initialCondition}
            onChange={(e) => {
              setSecondInitialCondition(e.target.value)
              updateParameters({ setSecondInitialCondition: e.target.value })
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Valeur initiale"
          />
        </div>
      )}

      {/* Ajouter d'autres champs pour les paramètres spécifiques à l'équation */}
      {/* Exemple : coefficients, paramètres non linéaires, etc. */}
    </div>
  )
}
