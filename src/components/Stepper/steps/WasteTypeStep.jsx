import { useState } from 'react'

const wasteTypes = [
  {
    id: 'construction',
    title: 'Construction Waste',
    description: 'Building materials and renovation debris.',
  },
  {
    id: 'household',
    title: 'Household Waste',
    description: 'General household items and furniture..',
  },
  {
    id: 'garden',
    title: 'Garden Waste',
    description: 'Green waste and landscaping materials',
  },
  {
    id: 'Commercial Waste',
    title: 'Commercial Waste ',
    description: 'Business and office clearance.',
  },
]

const WasteTypeStep = () => {
  const [selectedTypes, setSelectedTypes] = useState([])

  const toggleType = (id) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((type) => type !== id) : [...prev, id]
    )
  }

  return (
    <div className="max-w-5xl mx-auto pb-32 p-4">
      <h2 className="text-2xl font-bold text-center mb-10 text-white">
        What type of waste are you disposing of?
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {wasteTypes.map(({ id, title, description }) => (
          <label
            key={id}
            className={`relative cursor-pointer w-full text-left block p-6 rounded-lg border-2 shadow-md transition-all duration-200 pl-12 ${
              selectedTypes.includes(id)
                ? 'bg-[#0037C1]/10 border-[#F14A16]'
                : 'bg-[#1C1C1C]/50 border-[#2A2A2A] hover:border-[#F14A16]/40'
            }`}
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes(id)}
              onChange={() => toggleType(id)}
              className="appearance-none absolute top-4 right-4 w-5 h-5   border-2 rounded  border-[#2A2A2A] checked:bg-[#F14A16] checked:border-[#F14A16] peer"
            />
            <svg
              className="absolute top-5 right-5 w-3 h-3 text-white pointer-events-none scale-[0.75] peer-checked:visible invisible"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              {description}
            </p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default WasteTypeStep
