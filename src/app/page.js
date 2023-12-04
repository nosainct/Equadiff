import ControlPanel from "@/components/ControlPanel"
import EquationInput from "@/components/EquationInput"
import ParameterInput from "@/components/ParameterInput"
import UserFeedback from "@/components/UserFeedback"
import Visualization from "@/components/Visualization"

export default function MainPage() {
  return (
    <div>
      <EquationInput />
      <ParameterInput />
      <Visualization />
      <ControlPanel />
      <UserFeedback />
    </div>
  )
}
