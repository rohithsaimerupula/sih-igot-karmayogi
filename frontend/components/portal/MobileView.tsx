'use client'
import React, { useState } from 'react'
import { 
  Search, Bell, Sun, BookOpen, Users, Compass, Award, 
  ChevronRight, ArrowRight, Play, CheckCircle2, TrendingUp, Sparkles, ShieldCheck
} from 'lucide-react'
import Link from 'next/link'

export default function MobileView({ onOpenLogin }: { onOpenLogin: () => void }) {
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'learning' | 'achievement'>('home')

  return (
    <div className="max-w-[420px] mx-auto bg-white min-h-screen shadow-2xl rounded-[32px] overflow-hidden border-8 border-slate-800 flex flex-col relative my-6">
      {/* Top Status Bar Simulator */}
      <div className="bg-[#08214D] text-white px-6 pt-3 pb-2 flex justify-between items-center text-xs">
        <span className="font-semibold text-[11px]">21:56</span>
        <div className="flex items-center space-x-1.5 text-[10px]">
          <span className="px-1 py-0.2 rounded bg-blue-800/80 text-[9px]">5G+</span>
          <span>69%</span>
        </div>
      </div>

      {/* App Header (As in 1.jpeg) */}
      <div className="bg-[#08214D] px-5 py-3 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center shadow">
            <svg viewBox="0 0 100 100" className="w-6 h-6 text-amber-500">
              <path fill="#F26522" d="M50 15 L58 38 L80 40 L62 55 L68 78 L50 65 L32 78 L38 55 L20 40 L42 38 Z"/>
              <circle cx="50" cy="50" r="12" fill="#1E50A0"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-xs leading-none">कर्मयोगी भारत</h1>
            <span className="text-[9px] text-blue-200">iGOT Mobile App</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative cursor-pointer">
            <Bell className="w-4 h-4 text-slate-200" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center">9+</span>
          </div>
          <Sun className="w-4 h-4 text-slate-200" />
          <button 
            onClick={onOpenLogin}
            className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center border-2 border-white shadow"
          >
            BS
          </button>
        </div>
      </div>

      {/* Search Bar Pill (As in 1.jpeg) */}
      <div className="bg-[#08214D] px-5 pb-4">
        <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-2 text-slate-500 shadow-inner">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Program..." 
            className="w-full text-xs text-slate-800 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Main Mobile Screen Body */}
      <div className="flex-1 overflow-y-auto pb-24">
        {activeTab === 'home' && (
          <div className="p-4 space-y-5">
            {/* In Spotlight (As in 1.jpeg) */}
            <div>
              <h2 className="font-bold text-slate-900 text-sm mb-3">In Spotlight</h2>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-lg">🌿</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-700 mt-1.5 leading-tight">Bharat Kalp</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-lg">🛍️</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-700 mt-1.5 leading-tight">iGOT Marketplace</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-lg">🎓</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-700 mt-1.5 leading-tight">Specializations</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-lg">👤</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-700 mt-1.5 leading-tight">MDO Channel</span>
                </div>
              </div>
            </div>

            {/* AI COMPANION FEATURE BUTTON BANNER */}
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#08214D] via-[#1E50A0] to-[#0D3B66] text-white shadow-xl overflow-hidden border border-amber-400/40">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl"></div>
              <div className="flex items-center space-x-2 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIH 2026 AI Feature Module</span>
              </div>
              <h3 className="font-bold text-sm leading-snug">Competency Gap Platform</h3>
              <p className="text-[11px] text-slate-200 mt-1">
                Evaluate your official statistical competencies, take grounded quizzes, and view your personalized GapRadar.
              </p>
              <Link
                href="/competency-hub"
                className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition"
              >
                <span>Open Competency Engine</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* AI Daksh Badge Banner (As in 1.jpeg) */}
            <div className="rounded-xl p-3 border border-orange-200 bg-gradient-to-r from-amber-50/50 via-white to-orange-50/50 text-center relative">
              <div className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[9px] mb-1">
                AI Daksh Badge
              </div>
              <p className="text-[11px] font-semibold text-slate-800">
                Complete any 3 courses from the AI Daksh Program &amp; earn your badge!
              </p>
            </div>

            {/* Continue Learning (As in 1.jpeg, 11.jpeg) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-slate-900 text-sm">Continue Learning</h2>
                <span className="text-[10px] text-blue-700 font-medium">View All</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                    AI
                  </div>
                  <div>
                    <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.2 rounded font-semibold uppercase">Beginner</span>
                    <h4 className="text-xs font-semibold text-slate-800 leading-tight mt-0.5">
                      Statistical Sampling &amp; Survey Estimation
                    </h4>
                    <p className="text-[10px] text-slate-500">By National Statistical Systems Training Academy</p>
                  </div>
                </div>
                <button 
                  onClick={onOpenLogin}
                  className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow"
                >
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="p-4 space-y-4">
            <h2 className="font-bold text-slate-900 text-sm">Explore Hubs</h2>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">💬</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Discussion Hub</h4>
                    <p className="text-[10px] text-slate-500">Discuss with official statistical peers</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

              {/* Competencies Highlight (As in 12.jpeg Coming Soon -> Our Solution!) */}
              <Link 
                href="/competency-hub"
                className="p-3 rounded-xl bg-blue-50/70 border-2 border-blue-400 shadow-sm flex items-center justify-between block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">🧩</div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-xs font-bold text-blue-950">Competency Hub</h4>
                      <span className="text-[8px] bg-green-600 text-white px-1.5 py-0.2 rounded uppercase font-bold">Live AI</span>
                    </div>
                    <p className="text-[10px] text-blue-700">Explore &amp; diagnose your skill gaps</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">📖</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Learner Passbook</h4>
                    <p className="text-[10px] text-slate-500">View earned NFT verifiable credentials</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievement' && (
          <div className="p-4 space-y-4">
            <h2 className="font-bold text-slate-900 text-sm">Learner Statistics</h2>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <span className="text-[10px] text-slate-500 font-medium">Karma Points</span>
                <p className="text-base font-black text-blue-900 mt-0.5">585 Karma P...</p>
              </div>
              <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-100">
                <span className="text-[10px] text-slate-500 font-medium">Department Rank</span>
                <p className="text-base font-black text-orange-900 mt-0.5">1175th Rank</p>
              </div>
            </div>
            
            {/* Pyramid Leaderboard (As in 14.jpeg, 16.jpeg) */}
            <div className="p-4 rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white text-center">
              <p className="text-[11px] font-bold text-slate-700 mb-2">Top Karmayogis (Aug 2026)</p>
              <div className="flex justify-center items-end space-x-2 my-2">
                <div className="w-20 bg-pink-500 text-white rounded-t-lg p-2 text-[10px] font-bold">
                  <span>#2</span><br/>6043 pts
                </div>
                <div className="w-24 bg-amber-500 text-white rounded-t-lg p-3 text-xs font-bold">
                  <span>🏆 #1</span><br/>6569 pts
                </div>
                <div className="w-20 bg-cyan-500 text-white rounded-t-lg p-2 text-[10px] font-bold">
                  <span>#3</span><br/>4980 pts
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Fixed Navigation Bar (Exact replica of iGOT screenshots) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-4 flex justify-around items-center shadow-lg">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-700' : 'text-slate-500'}`}
        >
          <div className={`p-1 rounded-full ${activeTab === 'home' ? 'bg-blue-100 text-blue-700' : ''}`}>
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-[9px] mt-0.5 font-medium">Home</span>
        </button>

        <button 
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center ${activeTab === 'explore' ? 'text-blue-700' : 'text-slate-500'}`}
        >
          <div className={`p-1 rounded-full ${activeTab === 'explore' ? 'bg-blue-100 text-blue-700' : ''}`}>
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[9px] mt-0.5 font-medium">Explore</span>
        </button>

        <Link 
          href="/competency-hub"
          className="flex flex-col items-center text-amber-600"
        >
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md -mt-4 border-2 border-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[9px] mt-0.5 font-bold text-amber-700">AI Gap</span>
        </Link>

        <button 
          onClick={() => setActiveTab('achievement')}
          className={`flex flex-col items-center ${activeTab === 'achievement' ? 'text-blue-700' : 'text-slate-500'}`}
        >
          <div className={`p-1 rounded-full ${activeTab === 'achievement' ? 'bg-blue-100 text-blue-700' : ''}`}>
            <Award className="w-4 h-4" />
          </div>
          <span className="text-[9px] mt-0.5 font-medium">Achievement</span>
        </button>
      </div>
    </div>
  )
}
