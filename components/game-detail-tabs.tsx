'use client'

import { TabNavigation } from './tab-navigation'
import { Trophy, ImageIcon, MessageSquare } from 'lucide-react'

interface GameDetailTabsProps {
  title: string
}

export function GameDetailTabs({ title }: GameDetailTabsProps) {
  const overviewContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-cyan-400 mb-3">Storyline</h3>
        <p className="text-gray-400 leading-relaxed">
          Embark on an epic journey through a meticulously crafted world. Discover hidden secrets, forge meaningful relationships, and uncover the truth behind an ancient mystery. Every decision you make shapes your destiny.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-cyan-400 mb-3">Game Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <div className="text-xs text-gray-500 mb-1">Released</div>
            <div className="font-semibold text-white">November 2023</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <div className="text-xs text-gray-500 mb-1">Developer</div>
            <div className="font-semibold text-white">Neon Studios</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <div className="text-xs text-gray-500 mb-1">Publisher</div>
            <div className="font-semibold text-white">Cyber Games</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/20">
            <div className="text-xs text-gray-500 mb-1">Genre</div>
            <div className="font-semibold text-white">Action RPG</div>
          </div>
        </div>
      </div>
    </div>
  )

  const galleryContent = (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
          >
            <img
              src={`/generic-placeholder.png?key=img${i}`}
              alt={`Screenshot ${i}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center group-hover:backdrop-blur-sm">
              <ImageIcon className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const statsContent = (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-cyan-400 mb-3">Stats & Progress</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-500/20">
          <div className="text-xs text-gray-500 mb-1">Main Story</div>
          <div className="font-semibold text-white">35%</div>
        </div>

        <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-500/20">
          <div className="text-xs text-gray-500 mb-1">Side Quests</div>
          <div className="font-semibold text-white">30%</div>
        </div>

        <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-500/20">
          <div className="text-xs text-gray-500 mb-1">Exploration</div>
          <div className="font-semibold text-white">25%</div>
        </div>

        <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-500/20">
          <div className="text-xs text-gray-500 mb-1">Other</div>
          <div className="font-semibold text-white">10%</div>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed">
        This breakdown shows your general pacing and time distribution while playing. As you continue, your stats will automatically update.
      </p>
    </div>
  )

  const achievementsContent = (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-102 hover:bg-purple-600/5 flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white mb-1">Achievement {i}</h4>
            <p className="text-sm text-gray-400">Unlocked recently</p>
          </div>
          <div className="text-right text-cyan-400 font-bold">+50G</div>
        </div>
      ))}
    </div>
  )

  const reviewContent = (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-purple-500/30">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Your Review</h3>
        </div>
        <textarea
          placeholder="Share your thoughts about this game..."
          className="w-full p-4 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none resize-none h-24"
        />
        <button className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold hover:shadow-[0_0_20px_var(--neon-1)] transition-all">
          Submit Review
        </button>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', content: overviewContent },
    { id: 'gallery', label: 'Gallery', content: galleryContent },
    { id: 'stats', label: 'Stats & Progress', content: statsContent },
    { id: 'achievements', label: 'Achievements & Badges', content: achievementsContent },
    { id: 'review', label: 'Your Review', content: reviewContent },
  ]

  return <TabNavigation tabs={tabs} />
}
