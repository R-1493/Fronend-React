const StepperControl = ({ currentStep, totalSteps, onNavigate }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => onNavigate('back')}
        disabled={currentStep === 0}
        className={`px-4 py-2 rounded ${
          currentStep === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white'
        }`}
      >
        Back
      </button>

      <button
        onClick={() => onNavigate('next')}
        className={`px-4 py-2 rounded ${
          currentStep === totalSteps - 1
            ? 'bg-green-600 text-white'
            : 'bg-blue-500 text-white'
        }`}
      >
        {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}

export default StepperControl
