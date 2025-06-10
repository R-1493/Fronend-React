const Stepper = ({ steps, currentStep }) => {
  if (currentStep === 0) return null

  return (
    <>
      <div className="hidden md:block px-4 sm:px-6 lg:px-8 py-6 overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <ol className="flex items-center w-full text-xs font-medium sm:text-base">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              const Icon = step.icon

              return (
                <li
                  key={index}
                  className={`flex w-full relative justify-center ${
                    index !== steps.length - 1 &&
                    `after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute after:top-5 after:left-1/2 after:-translate-x-0.5 ${
                      isCompleted || isCurrent
                        ? 'after:bg-[#F14A16]'
                        : 'after:bg-white'
                    }`
                  }`}
                >
                  <div className="flex flex-col items-center z-10">
                    <span
                      className={`
                        flex justify-center items-center w-10 h-10 rounded-full mb-3
                        ${
                          isCompleted
                            ? 'bg-[#F14A16] text-white '
                            : isCurrent
                            ? 'border-4 border-white bg-[#F14A16] text-white'
                            : 'bg-white border-2 border-white text-gray-400'
                        }
                      `}
                    >
                      <Icon />
                    </span>
                    <span
                      className={`text-sm ${
                        isCurrent
                          ? 'text-[#F14A16] font-bold'
                          : isCompleted
                          ? 'text-white font-bold'
                          : 'text-[#BEBEBE] font-normal'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Mobile Stepper */}
      <div className="md:hidden p-4 space-y-2">
        <h3 className="text-base font-semibold text-white">
          Step {currentStep}: {steps[currentStep - 1]?.label || 'Current Step'}
        </h3>
        <div className="flex justify-center space-x-3">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`w-8 h-2 rounded-full ${
                index < currentStep
                  ? 'bg-[#F14A16]'
                  : index === currentStep
                  ? 'bg-[#F14A16] animate-pulse'
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
