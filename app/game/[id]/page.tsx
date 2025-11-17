'use client'

import { Navbar } from '@/components/navbar'
import { GameDetailHeader } from '@/components/game-detail-header'
import { GameDetailTabs } from '@/components/game-detail-tabs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getGameById, allGamesData } from '@/lib/mock'

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const gameId = parseInt(params.id)
  const game = getGameById(params.id)
  
  const gameData = game || allGamesData[0]
  
  const previousId = gameId > 1 ? gameId - 1 : 1
  const nextId = gameId + 1

  return (
    <main className="min-h-screen bg-black relative z-10">
      <Navbar />

      {/* Back Button */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300 transition-all duration-300 mb-8 hover:shadow-[0_0_15px_var(--neon-1)]"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Library
        </Link>
      </div>

      {/* Game Detail Content */}
      <div className="pb-20 px-6 max-w-7xl mx-auto">
        <GameDetailHeader
          title={gameData.title}
          image={gameData.image}
          platform={gameData.platform}
          year={gameData.year}
          genres={gameData.genres}
          rating={gameData.rating}
          hoursPlayed={gameData.hoursPlayed}
          completionPercentage={gameData.completionPercentage}
          developer={gameData.developer}
        />

        {/* Tabs */}
        <div className="mb-16">
          <GameDetailTabs title={gameData.title} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-20 pt-12 border-t border-purple-500/20">
          <Link
            href={`/game/${previousId}`}
            className="group w-12 h-12 rounded-full border-2 border-purple-500/40 hover:border-purple-500/80 flex items-center justify-center hover:bg-purple-600/10 transition-all duration-300 hover:shadow-[0_0_20px_var(--neon-2)]"
            title="Previous Game"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400 group-hover:text-purple-300 group-hover:-translate-x-0.5 transition-all" />
          </Link>

          <div className="text-center text-gray-400 text-sm">Game #{gameId}</div>

          <Link
            href={`/game/${nextId}`}
            className="group w-12 h-12 rounded-full border-2 border-cyan-500/40 hover:border-cyan-500/80 flex items-center justify-center hover:bg-cyan-600/10 transition-all duration-300 hover:shadow-[0_0_20px_var(--neon-1)]"
            title="Next Game"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </main>
  )
}
