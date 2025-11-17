'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Crown } from 'lucide-react'

interface GameCardProps {
  id: string
  title: string
  rank: number
  platform: string
  image: string
  onClick?: () => void
}

export function GameCard({ id, title, rank, platform, image, onClick }: GameCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5
    setTilt({ x: x * 10, y: y * 10 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <Link href={`/game/${id}`}>
      <div
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-padding group-hover:border-cyan-400/50 transition-all duration-300 pointer-events-none" />

        {/* Rank Badge */}
        {rank <= 3 && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-sm shadow-lg">
              <Crown className="w-4 h-4" />
              #{rank}
            </div>
          </div>
        )}

        {/* Platform Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-lg bg-purple-600/80 text-purple-100 font-semibold text-xs backdrop-blur border border-purple-500/50">
            {platform}
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-300">Global Rank #{rank}</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-black font-bold">›</span>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 blur-3xl opacity-30" />
        </div>
      </div>
    </Link>
  )
}
