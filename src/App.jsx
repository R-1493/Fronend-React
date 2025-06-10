import { useState, useEffect } from 'react'
import Stepper from './components/Stepper/Stepper'
import StepperControl from './components/Stepper/StepperControl'
import stepperSteps from './utils/stepperSteps'

export default function App() {
  // make Step 2 the default starting step 
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem('currentStep')
    return savedStep ? parseInt(savedStep) : 2
  })

  const [selectSkip, setSelectSkip] = useState(() => {
    const savedSkip = localStorage.getItem('selectSkip')
    return savedSkip ? JSON.parse(savedSkip) : null
  })

  const StepComponent = stepperSteps[currentStep].component

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('currentStep', currentStep)
  }, [currentStep])

  useEffect(() => {
    localStorage.setItem('selectSkip', JSON.stringify(selectSkip))
  }, [selectSkip])

  const goToStep = (direction) => {
    const newIndex = direction === 'next' ? currentStep + 1 : currentStep - 1

    if (newIndex >= 0 && newIndex < stepperSteps.length) {
      setCurrentStep(newIndex)
    }
  }

  return (
    <div className="min-h-screen text-white bg-[radial-gradient(circle_at_20%_40%,#35589A_0%,#0F101C_50%,#370665_100%)]">
      <Stepper steps={stepperSteps} currentStep={currentStep} />
      <div className="py-10">
        <StepComponent setSelectSkip={setSelectSkip} selectSkip={selectSkip} />
      </div>
      <StepperControl
        currentStep={currentStep}
        totalSteps={stepperSteps.length}
        onNavigate={goToStep}
        selectSkip={selectSkip}
      />
    </div>
  )
}
