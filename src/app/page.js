"use client"

import ControlPanel from "@/components/ControlPanel"
import EquationInput from "@/components/EquationInput"
import UserFeedback from "@/components/UserFeedback"
import Visualization from "@/components/Visualization"

export default function MainPage() {
  return (
    <div>
      <section className="p-4 border border-gray-200 rounded-lg">
        <EquationInput />
      </section>
      <Visualization />
      <ControlPanel />
      <UserFeedback />
    </div>
  )
}
