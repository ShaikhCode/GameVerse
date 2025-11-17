'use client'

import { Navbar } from '@/components/navbar'
import { StatCard } from '@/components/stat-card'
import { Gamepad2, Clock, Trophy, Zap, Flame, Grid3X3 as Grid3x3Gap } from 'lucide-react'
import { TopGamesHighlight } from '@/components/top-games-highlight'
import { GameGrid } from '@/components/game-grid'

export default function Home() {
  const stats = [
    { icon: <Gamepad2 className="w-5 h-5" />, label: 'Total Games', value: 42 },
    { icon: <Clock className="w-5 h-5" />, label: 'Hours Played', value: 1250, suffix: 'h' },
    { icon: <Trophy className="w-5 h-5" />, label: 'Completion Rate', value: '87%' },
    { icon: <Zap className="w-5 h-5" />, label: 'Platforms', value: 5 },
    { icon: <Flame className="w-5 h-5" />, label: 'Top Genre', value: 'RPG' },
    { icon: <Grid3x3Gap className="w-5 h-5" />, label: 'Recently Added', value: 3 },
  ]

  return (
    <main className="min-h-screen bg-black relative z-10">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Game Collection
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Track your gaming journey across platforms and genres</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>

      {/* Top Games and Game Grid Sections */}
      <TopGamesHighlight />
      <GameGrid />

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-gray-500 text-sm border-t border-purple-500/20 mt-20">
        <p>My gaming hub.</p>
      </footer>
    </main>
  )
}
