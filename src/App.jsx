import { useState } from 'react'
import Stepper from './components/Stepper/Stepper'
import StepperControl from './components/Stepper/StepperControl'
import { stepperSteps } from './utils/stepperSteps'
export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const StepComponent = stepperSteps[currentStep].component

  const goToStep = (direction) => {
    const newIndex = direction === 'next' ? currentStep + 1 : currentStep - 1

    if (newIndex >= 0 && newIndex < stepperSteps.length) {
      setCurrentStep(newIndex)
    }
  }

  return (
    <div className="bg-bg min-h-screen text-white">
      <Stepper steps={stepperSteps} currentStep={currentStep} />
      <div className="py-10">
        <StepComponent />
      </div>
      <StepperControl
        currentStep={currentStep}
        totalSteps={stepperSteps.length}
        onNavigate={goToStep}
      />
    </div>
  )
}
