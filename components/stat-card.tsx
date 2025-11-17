'use client'

import { useEffect, useState } from 'react'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number | string
  suffix?: string
  className?: string
}

export function StatCard({ icon, label, value, suffix = '', className = '' }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (typeof value !== 'number') return

    let current = 0
    const increment = value / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div
      className={`group p-6 rounded-2xl glass-effect border border-purple-500/30 hover:border-purple-500/60 neon-pulse transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-purple-400/60 text-sm font-medium">{label}</span>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center text-cyan-400">
          {icon}
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          {typeof value === 'number' ? displayValue : value}
          {suffix && <span className="text-lg">{suffix}</span>}
        </div>
      </div>
    </div>
  )
}
