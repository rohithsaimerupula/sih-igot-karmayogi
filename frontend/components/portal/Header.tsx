'use client'
import React, { useState } from 'react'
import { Bell, Search, Globe, ChevronDown, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Header({ onToggleView, isMobileView }: { onToggleView?: () => void, isMobileView?: boolean }) {
  const [lang, setLang] = useState('English')

  return (
    <header className="bg-[#08214D] text-white sticky top-0 z-50 shadow-md">
      {/* Top Gov of India Banner */}
      <div className="bg-[#061838] px-4 py-1 text-xs flex justify-between items-center text-slate-300 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500"></span>
          <span>Government of India &bull; भारत सरकार</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onToggleView}
            className="hidden sm:flex items-center space-x-1.5 px-2 py-0.5 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xs border border-blue-700/40 transition"
          >
            <span>Preview Mode: <b>{isMobileView ? '📱 Mobile App' : '💻 Desktop Web'}</b></span>
          </button>
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-blue-300" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-xs text-slate-200 border-none outline-none cursor-pointer"
            >
              <option value="English" className="text-black">English</option>
              <option value="Hindi" className="text-black">हिंदी (Hindi)</option>
              <option value="Telugu" className="text-black">తెలుగు (Telugu)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Karmayogi Lotus Emblem */}
          <div className="flex items-center space-x-3">
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
              <p className="text-[10px] text-slate-300 -mt-0.5 font-light">लोकहितं मम करणीयम् &bull; Mission Karmayogi</p>
            </div>
          </div>
        </div>

        {/* Desktop Links & Action CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#hubs" className="text-sm text-slate-200 hover:text-white transition">Hubs</Link>
          <Link href="#programs" className="text-sm text-slate-200 hover:text-white transition">Programs</Link>
          <Link href="#competencies" className="text-sm text-slate-200 hover:text-white transition flex items-center space-x-1">
            <span className="text-amber-400 font-medium">Competency Engine</span>
            <span className="text-[9px] bg-red-500 text-white px-1.5 py-0.2 rounded-full uppercase font-bold">New AI</span>
          </Link>
          <Link href="#stats" className="text-sm text-slate-200 hover:text-white transition">Statistics</Link>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-slate-700">
            <Link 
              href="/competency-hub"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 shadow-sm flex items-center space-x-1 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch AI Gap Engine</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
