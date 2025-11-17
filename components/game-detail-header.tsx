'use client'

import { Star, Calendar, User } from 'lucide-react'
import { ProgressRing } from './progress-ring'

interface GameDetailHeaderProps {
  title: string
  image: string
  platform: string
  year: number
  genres: string[]
  rating: number
  hoursPlayed: number
  completionPercentage: number
  developer: string
}

export function GameDetailHeader({
  title,
  image,
  platform,
  year,
  genres,
  rating,
  hoursPlayed,
  completionPercentage,
  developer,
}: GameDetailHeaderProps) {
  return (
    <div className="relative mb-12">
      {/* Hero Background */}
      <div className="absolute inset-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent rounded-2xl overflow-hidden -z-10">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover opacity-30 blur-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pt-8">
        {/* Left: Game Info */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-3 py-1 rounded-lg bg-purple-600/80 text-purple-100 font-semibold text-sm border border-purple-500/50">
                  {platform}
                </div>
                <div className="px-3 py-1 rounded-lg bg-cyan-600/80 text-cyan-100 font-semibold text-sm flex items-center gap-2 border border-cyan-500/50">
                  <Calendar className="w-4 h-4" />
                  {year}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Experience the ultimate gaming adventure with cutting-edge gameplay, immersive storytelling, and breathtaking visuals. A masterpiece that redefines the genre.
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 font-medium text-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-colors cursor-pointer"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl glass-effect border border-purple-500/30">
                <div className="text-xs text-gray-400 mb-1">Developer</div>
                <div className="font-bold text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  {developer}
                </div>
              </div>
              <div className="p-4 rounded-xl glass-effect border border-purple-500/30">
                <div className="text-xs text-gray-400 mb-1">Hours Played</div>
                <div className="font-bold text-white text-lg">{hoursPlayed}h</div>
              </div>
              <div className="p-4 rounded-xl glass-effect border border-purple-500/30">
                <div className="text-xs text-gray-400 mb-1">Rating</div>
                <div className="font-bold text-white flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {rating}/10
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Progress Ring */}
        <div className="flex justify-center lg:justify-end">
          <div className="p-8 rounded-2xl glass-effect border border-purple-500/30 neon-glow">
            <ProgressRing percentage={completionPercentage} label="Completion" />
          </div>
        </div>
      </div>
    </div>
  )
}
