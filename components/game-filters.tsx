'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface GameFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  genre: string
  platform: string
  sortBy: string
}

export function GameFilters({ onFilterChange }: GameFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    genre: 'all',
    platform: 'all',
    sortBy: 'rating',
  })
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const genres = ['All Genres', 'RPG', 'Action', 'Strategy', 'Indie', 'Shooter']
  const platforms = ['All Platforms', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
  const sortOptions = ['Rating', 'Hours Played', 'Recently Added', 'Alphabetical']

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
    setOpenDropdown(null)
  }

  const FilterButton = ({ label, value, options, filterKey }: any) => (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(openDropdown === filterKey ? null : filterKey)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 hover:border-purple-500/60 text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium hover:shadow-[0_0_15px_var(--neon-2)]"
      >
        {label}: <span className="text-cyan-400">{value}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === filterKey ? 'rotate-180' : ''}`} />
      </button>

      {openDropdown === filterKey && (
        <div className="absolute top-full mt-2 left-0 min-w-max bg-black/90 border border-purple-500/40 rounded-lg overflow-hidden shadow-2xl z-50 glass-effect">
          {options.map((option: string) => (
            <button
              key={option}
              onClick={() => handleFilterChange(filterKey, option.toLowerCase().replace(' ', '-'))}
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-purple-600/20 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="flex flex-wrap gap-4 items-center py-6">
      <FilterButton label="Genre" value={filters.genre} options={genres} filterKey="genre" />
      <FilterButton label="Platform" value={filters.platform} options={platforms} filterKey="platform" />
      <FilterButton label="Sort By" value={filters.sortBy} options={sortOptions} filterKey="sortBy" />
    </div>
  )
}
