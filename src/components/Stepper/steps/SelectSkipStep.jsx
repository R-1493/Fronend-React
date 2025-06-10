import React, { useEffect, useState } from 'react'
import image from '../../../assets/image.png'
const SelectSkipStep = ({ setSelectSkip, selectSkip }) => {
  const [skips, setSkips] = useState([])
  const [loading, setLoading] = useState(true)
  const url =
    'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setSkips(data)
      } catch (err) {
        console.error('Failed to fetch skips:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkips()
  }, [])

  const handleSelectSkip = (skip) => {
    setSelectSkip(skip)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-32">
      <h1 className="text-5xl font-bold text-center mb-4">
        Choose Your <span className="text-[#F14A16]">Skip</span> Size
      </h1>
      <p className="text-xl text-gray-400 text-center mb-8">
        Select the skip size that best suits your needs
      </p>

      {loading ? (
        <p className="text-center text-gray-400">Loading skip options...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 pt-20">
          {skips.map((skip) => (
            <div
              key={skip.id}
              className={`relative p-6 backdrop-blur-md rounded-2xl pt-20 text-white transition-all shadow-lg
    ${
      selectSkip?.id === skip.id
        ? 'border-2 border-[#F14A16] ring-2 ring-[#F14A16]/40'
        : 'border-2 border-white/10 hover:border-2 hover:border-[#F14A16]/60'
    }
  `}
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.05) 90%)',
              }}
            >
              {/* Floating skip image */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                <img
                  src={image}
                  alt={skip.size}
                  className="h-30 object-contain"
                />
              </div>

              <div className="flex items-center justify-between mt-6 gap-4">
                {/* Left: Info */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {skip.size} Yard Skip
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {skip.hire_period_days} day hire period
                  </p>
                  <p className="text-[#FC9918] text-xl font-semibold">
                    £{skip.price_before_vat}
                  </p>
                </div>

                {/* Right: Button */}
                {selectSkip?.id === skip.id ? (
                  <button
                    onClick={() => handleSelectSkip(skip)}
                    aria-pressed="true"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#F14A16] text-white font-semibold shadow-lg transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 9M7 13V6h13"
                      />
                    </svg>
                    Add to cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectSkip(skip)}
                    aria-pressed="false"
                    className="group inline-flex items-center justify-center px-6 py-2 border-2 border-[#F14A16] rounded-full text-[#F14A16] font-semibold transition-all hover:bg-[#F14A16] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#F14A16] group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 9M7 13V6h13"
                      />
                    </svg>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectSkipStep
