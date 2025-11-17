'use client'

import { useEffect, useState } from 'react'

interface ProgressRingProps {
  percentage: number
  size?: number
  strokeWidth?: number
  label: string
}

export function ProgressRing({ percentage, size = 200, strokeWidth = 8, label }: ProgressRingProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference

  useEffect(() => {
    let current = 0
    const increment = percentage / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= percentage) {
        setDisplayPercentage(percentage)
        clearInterval(timer)
      } else {
        setDisplayPercentage(Math.floor(current))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [percentage])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00eaff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ff3df9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              {displayPercentage}%
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm">{label}</div>
    </div>
  )
}
