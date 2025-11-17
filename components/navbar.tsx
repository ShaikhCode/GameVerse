'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
  onSearch?: (query: string) => void
}

export function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch?.(value)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'scale-95 top-4' : ''
      }`}
    >
      <div
        className={`mx-auto px-6 py-4 max-w-7xl glass-effect rounded-2xl ${
          isScrolled ? 'mx-4' : ''
        } border border-purple-500/30 neon-glow`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-bold text-black group-hover:shadow-[0_0_20px_var(--neon-1)] transition-shadow duration-300">
              ◆
            </div>
            <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              GameVerse
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md items-center gap-2 bg-black/40 border border-cyan-500/20 rounded-lg px-4 py-2 focus-within:border-cyan-400/50 transition-colors">
            <Search className="w-4 h-4 text-cyan-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Empty for now - removed unused buttons */}
          </div>
        </div>
      </div>
    </nav>
  )
}
