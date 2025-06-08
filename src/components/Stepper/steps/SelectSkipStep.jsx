import React, { useEffect, useState } from 'react'

const SelectSkipStep = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 pb-32">
      <h2 className="text-2xl font-bold text-center mb-4">
        Choose Your Skip Size
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Select the skip size that best suits your needs
      </p>

      {loading ? (
        <p className="text-center text-gray-400">Loading skip options...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skips.map((skip) => (
            <div
              key={skip.id}
              className="rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all bg-gray-900 p-4 text-white shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{skip.name}</h3>
              <p className="text-sm text-gray-300 mb-1">
                Size: {skip.size} yd³
              </p>
              <p className="text-sm text-gray-300 mb-1">
                Hire Period: {skip.hire_period_days} days
              </p>
              <p className="text-sm text-green-400 font-bold">
                From £{skip.price}
              </p>
              {skip.description && (
                <p className="text-sm text-gray-500 mt-2">{skip.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectSkipStep
