import stepperSteps from '../../utils/stepperSteps'
import image from '../../assets/image.png'

const SkipInfo = ({ selectSkip }) => {
  if (!selectSkip) return null

  return (
    <div className="flex items-center gap-4">
      <img src={image} alt="Skip" className="w-20 h-auto" />
      <div>
        <h3 className="text-white font-semibold text-lg">
          {selectSkip.size} Yard Skip
        </h3>
        <p className="text-white text-base">
          {selectSkip.hire_period_days} day hire period
        </p>
        <p className="text-orange-500 font-bold text-xl">
          ${selectSkip.price_before_vat || 120}
        </p>
      </div>
    </div>
  )
}

const StepText = ({ title, desc }) => {
  if (!title && !desc) return null

  return (
    <div>
      <h3 className="font-medium text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>
    </div>
  )
}

const StepperControl = ({
  currentStep,
  totalSteps,
  onNavigate,
  selectSkip,
}) => {
  const current = stepperSteps[currentStep]
  const hasInfo = current?.title || current?.desc
  const isStep2 = currentStep === 2

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="backdrop-blur-[23px] bg-[#00000068] border-t border-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile View */}
          <div className="lg:hidden mb-4">
            {isStep2 && selectSkip ? (
              <div className="flex flex-col items-start text-start">
                {hasInfo && (
                  <div className="mb-2">
                    <StepText title={current.title} desc={current.desc} />
                  </div>
                )}
                <SkipInfo selectSkip={selectSkip} />
              </div>
            ) : hasInfo ? (
              <div className="flex items-center justify-start h-20">
                <StepText title={current.title} desc={current.desc} />
              </div>
            ) : null}
          </div>

          {/* Buttons - Mobile */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <button
              onClick={() => onNavigate('back')}
              disabled={currentStep === 0}
              className="w-full px-4 py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
            >
              Back
            </button>
            <button
              onClick={() => onNavigate('next')}
              disabled={!selectSkip && isStep2}
              className="w-full px-4 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors disabled:opacity-40"
            >
              {currentStep === totalSteps - 1 ? 'Complete Order' : 'Continue'}
            </button>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex flex-col gap-2">
              {isStep2 && selectSkip ? (
                <>
                  {hasInfo && (
                    <div className="mb-1">
                      <StepText title={current.title} desc={current.desc} />
                    </div>
                  )}
                  <SkipInfo selectSkip={selectSkip} />
                </>
              ) : hasInfo ? (
                <StepText title={current.title} desc={current.desc} />
              ) : null}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('back')}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white transition-colors ${
                  currentStep === 0 ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                Back
              </button>
              <button
                onClick={() => onNavigate('next')}
                disabled={!selectSkip && isStep2}
                className={`px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors ${
                  !selectSkip && isStep2 ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                {currentStep === totalSteps - 1 ? 'Complete Order' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepperControl
