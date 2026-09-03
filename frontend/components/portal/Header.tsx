'use client'
import React from 'react'
import { Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Language, translations } from './translations'

interface HeaderProps {
  currentLang?: Language
  onLangChange?: (lang: Language) => void
  onOpenLogin?: () => void
}

export default function Header({ 
  currentLang = 'English', 
  onLangChange = () => {}, 
  onOpenLogin = () => {} 
}: HeaderProps) {
  const t = translations[currentLang]

  return (
    <header className="bg-[#08214D] text-white sticky top-0 z-50 shadow-md">
      {/* Top Gov of India Banner */}
      <div className="bg-[#061838] px-4 py-1.5 text-xs flex justify-between items-center text-slate-300 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500"></span>
          <span className="font-medium">{t.govIndia}</span>
        </div>
        
        {/* Working Language Switcher */}
        <div className="flex items-center space-x-2 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <select 
            value={currentLang} 
            onChange={(e) => onLangChange(e.target.value as Language)}
            className="bg-transparent text-xs text-white border-none outline-none cursor-pointer font-semibold"
          >
            <option value="English" className="text-slate-900 font-medium">English</option>
            <option value="Hindi" className="text-slate-900 font-medium">हिंदी (Hindi)</option>
            <option value="Telugu" className="text-slate-900 font-medium">తెలుగు (Telugu)</option>
          </select>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Karmayogi Lotus Emblem */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm border border-orange-300">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-amber-500">
                <path fill="#F26522" d="M50 15 L58 38 L80 40 L62 55 L68 78 L50 65 L32 78 L38 55 L20 40 L42 38 Z"/>
                <circle cx="50" cy="50" r="12" fill="#1E50A0"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg tracking-tight text-white">कर्मयोगी भारत</span>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">iGOT</span>
              </div>
              <p className="text-[10px] text-slate-300 -mt-0.5 font-light">{t.tagline}</p>
            </div>
          </Link>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center space-x-3">
          <Link 
            href="/competency-hub"
            className="hidden sm:flex px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 shadow-sm items-center space-x-1 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Competency Hub</span>
          </Link>

          <button
            onClick={onOpenLogin}
            className="px-4 py-1.5 rounded-lg bg-[#1E50A0] hover:bg-[#153e80] text-white font-semibold text-xs border border-blue-400/40 shadow transition"
          >
            {t.signInBtn}
          </button>
        </div>
      </div>
    </header>
  )
}
