"use client"

export default function EquationInput() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <label
        htmlFor="equation"
        className="block text-sm font-medium text-gray-700">
        Enter Differential Equation
      </label>
      <input
        type="text"
        name="equation"
        id="equation"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="dy/dx = ..."
      />
      {/* Ajouter des options pour le type d'équation ici */}
    </div>
  )
}
