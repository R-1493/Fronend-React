const Stepper = ({ steps, currentStep }) => {
  if (currentStep === 0) return null

  return (
    <>
      <div className="hidden md:block px-4 sm:px-6 lg:px-8 py-6 bg-bg overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <ol className="flex items-center w-full text-sm text-center text-gray-500 sm:text-base">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              const Icon = step.icon

              return (
                <li
                  key={index}
                  className={`flex items-center ${
                    index !== steps.length - 1 ? 'md:w-full' : ''
                  } after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
                    isCompleted
                      ? 'text-white'
                      : isCurrent
                      ? 'text-white font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    {isCompleted ? (
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 me-2.5 text-blue-600" />
                    ) : isCurrent ? (
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 me-2.5 text-blue-600" />
                    ) : (
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 me-2.5" />
                    )}
                    <span className="inline-block whitespace-nowrap">
                      {step.label}
                    </span>
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      <div className="md:hidden p-4 space-y-2">
        <h3 className="text-base font-semibold text-white">
          Step {currentStep + 1}: {steps[currentStep]?.label || 'Current Step'}
        </h3>
        <div className="flex justify-center space-x-3">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`w-8 h-2 rounded-full ${
                index < currentStep
                  ? 'bg-blue-600'
                  : index === currentStep
                  ? 'bg-blue-600 animate-pulse'
                  : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Stepper
