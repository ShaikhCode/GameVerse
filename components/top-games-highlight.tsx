'use client'

import { GameCard } from './game-card'
import { getGamesByIds } from '@/lib/mock'

const topGameIds = ['1', '2', '3']
const topGames = getGamesByIds(topGameIds)

export function TopGamesHighlight() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Top 3 Games
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topGames.map((game) => (
          <div key={game.id} className="relative">
            {/* Halo Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <GameCard {...game} />
          </div>
        ))}
      </div>
    </section>
  )
}
