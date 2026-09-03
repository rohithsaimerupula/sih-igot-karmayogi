'use client'
import React from 'react'
import { 
  ArrowRight, Users, BookOpen, Award, Sparkles, 
  CheckCircle2, Compass, ChevronRight, Play, Search, Sun, Bell
} from 'lucide-react'
import Link from 'next/link'
import { Language, translations } from './translations'

interface PortalProps {
  currentLang: Language
  onOpenLogin: () => void
}

export default function ResponsivePortal({ currentLang, onOpenLogin }: PortalProps) {
  const t = translations[currentLang]

  return (
    <div className="space-y-8 sm:space-y-12 pb-20 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#08214D] via-[#0E3A75] to-[#124285] text-white py-10 sm:py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tagline}</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {t.subTitle}
            </h1>

            <p className="text-slate-200 text-xs sm:text-base leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenLogin}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition flex items-center space-x-2"
              >
                <span>{t.signInBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/competency-hub"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition flex items-center space-x-2"
              >
                <span>{t.exploreAIBtn}</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.kcmLinked}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.mospiTailored}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.nftAnchored}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Companion Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">{t.statsOfficerPreview}</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">{t.activeSession}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">{t.demonstratedLevel}</span>
                  <span className="text-amber-400 font-bold">Level 2.4 / 5.0</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-full w-[48%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-slate-400">{t.targetRole}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40">
                  <span className="text-[10px] text-slate-300">{t.highestGap}</span>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">{t.surveySampling}</p>
                  <span className="text-[10px] text-red-300">{t.highPriority}</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40">
                  <span className="text-[10px] text-slate-300">{t.topRecommended}</span>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">{t.nsoManual}</p>
                  <span className="text-[10px] text-emerald-300">{t.matchScore}</span>
                </div>
              </div>

              <Link
                href="/competency-hub"
                className="w-full py-2.5 rounded-xl bg-[#1E50A0] hover:bg-blue-600 text-white font-semibold text-xs transition flex items-center justify-center space-x-1.5 shadow"
              >
                <span>{t.launchDiagnostics}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Search Bar */}
      <div className="max-w-md mx-auto px-4 sm:hidden">
        <div className="bg-white rounded-full px-4 py-2.5 flex items-center space-x-2 text-slate-500 shadow-sm border border-slate-200">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            className="w-full text-xs text-slate-800 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Official Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
            {t.statsTitle}
          </h2>
          <p className="text-slate-500 text-xs mt-1">{t.statsDesc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">{t.karmayogiOnboarded}</span>
            <p className="text-lg sm:text-2xl font-black text-[#1E50A0] mt-1">1,72,27,465</p>
            <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">{t.registeredMDOs}</span>
            <p className="text-lg sm:text-2xl font-black text-[#1E50A0] mt-1">25,532</p>
            <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">{t.coursesAvailable}</span>
            <p className="text-lg sm:text-2xl font-black text-[#1E50A0] mt-1">6,684</p>
            <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">{t.contentHours}</span>
            <p className="text-lg sm:text-2xl font-black text-[#1E50A0] mt-1">7,347</p>
            <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3"></div>
          </div>
        </div>
      </section>

      {/* Solutioning Hubs */}
      <section id="hubs" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">{t.hubsTitle}</h2>
          <p className="text-slate-500 text-xs mt-0.5">{t.hubsDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3">🎓</div>
            <h3 className="font-bold text-slate-900 text-sm">{t.learningHub}</h3>
            <p className="text-xs text-slate-500 mt-1">{t.learningHubDesc}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-3">💬</div>
            <h3 className="font-bold text-slate-900 text-sm">{t.discussionHub}</h3>
            <p className="text-xs text-slate-500 mt-1">{t.discussionHubDesc}</p>
          </div>

          <Link 
            href="/competency-hub"
            className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-5 rounded-2xl border-2 border-[#1E50A0] shadow-sm hover:shadow-md transition relative group block"
          >
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#1E50A0] text-white text-[9px] font-bold uppercase">
              SIH Module
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#1E50A0] text-white flex items-center justify-center text-xl mb-3 shadow">🧩</div>
            <h3 className="font-bold text-blue-950 text-sm flex items-center space-x-1">
              <span>{t.competencyHub}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-[#1E50A0]" />
            </h3>
            <p className="text-xs text-blue-800 mt-1">{t.competencyHubDesc}</p>
          </Link>
        </div>
      </section>

      {/* Bottom Sticky Mobile Tab Bar (For phone screen sizes only) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-6 flex justify-around items-center z-40 shadow-lg">
        <Link href="/" className="flex flex-col items-center text-blue-700">
          <Compass className="w-4 h-4" />
          <span className="text-[9px] mt-0.5 font-medium">{t.home}</span>
        </Link>
        <Link href="#hubs" className="flex flex-col items-center text-slate-500">
          <Users className="w-4 h-4" />
          <span className="text-[9px] mt-0.5 font-medium">{t.explore}</span>
        </Link>
        <Link href="/competency-hub" className="flex flex-col items-center text-amber-600">
          <div className="p-2 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md -mt-5 border-2 border-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[9px] mt-0.5 font-bold text-amber-700">{t.aiGap}</span>
        </Link>
        <button onClick={onOpenLogin} className="flex flex-col items-center text-slate-500">
          <Award className="w-4 h-4" />
          <span className="text-[9px] mt-0.5 font-medium">{t.achievement}</span>
        </button>
      </div>
    </div>
  )
}
