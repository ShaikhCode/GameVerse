'use client'

import { useState } from 'react'
import { GameCard } from './game-card'
import { GameFilters, FilterState } from './game-filters'
import { allGamesData } from '@/lib/mock'

export function GameGrid() {
  const [filters, setFilters] = useState<FilterState>({
    genre: 'all',
    platform: 'all',
    sortBy: 'rating',
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = allGamesData
    .filter((game) => {
      // Search filter
      if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }
      // Platform filter
      if (filters.platform !== 'all' && game.platform.toLowerCase() !== filters.platform.replace('-', ' ')) {
        return false
      }
      // Genre filter
      if (filters.genre !== 'all' && !game.genres.some(g => g.toLowerCase() === filters.genre.replace('-', ' '))) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'hours-played':
          return b.hoursPlayed - a.hoursPlayed
        case 'recently-added':
          return b.year - a.year
        case 'alphabetical':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Game Library
        </span>
      </h2>

      <GameFilters onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400">
            <p className="text-lg">No games found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
