'use client'
import React from 'react'
import { 
  ArrowRight, ShieldCheck, Users, BookOpen, Award, Sparkles, 
  CheckCircle2, Compass, BarChart3, ChevronRight, Play, ExternalLink
} from 'lucide-react'
import Link from 'next/link'

export default function DesktopView({ onOpenLogin }: { onOpenLogin: () => void }) {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#08214D] to-[#0E3A75] text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mission Karmayogi &bull; National Programme for Civil Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              AI-Enabled Learning &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Competency Gap Platform
              </span>
            </h1>

            <p className="text-slate-300 text-base leading-relaxed max-w-xl">
              Capacity building ecosystem for India\'s Official Statistical System. 
              Dynamically audit competency gaps, generate grounded practice assessments from official statistical manuals, 
              and earn verifiable Polygon blockchain credentials.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenLogin}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-xl transition flex items-center space-x-2"
              >
                <span>Parichay SSO Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/competency-hub"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center space-x-2"
              >
                <span>Explore AI Gap Engine</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>KCM Competency Linked</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MoSPI Domain Tailored</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Polygon NFT Anchored</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Cards Simulation */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Statistical Officer Preview</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">Active Session</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Demonstrated Level</span>
                  <span className="text-amber-400 font-bold">Level 2.4 / 5.0</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-full w-[48%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-slate-400">Target Role: Senior Statistical Officer (SSO &bull; MoSPI)</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40">
                  <span className="text-[10px] text-slate-300">Highest Gap</span>
                  <p className="text-sm font-bold text-white mt-0.5">Survey Sampling</p>
                  <span className="text-[10px] text-red-300">Priority: High (0.84)</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-700/40">
                  <span className="text-[10px] text-slate-300">Top Recommended</span>
                  <p className="text-sm font-bold text-white mt-0.5">NSO Field Manual</p>
                  <span className="text-[10px] text-emerald-300">95% Match &bull; iGOT</span>
                </div>
              </div>

              <Link
                href="/competency-hub"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition flex items-center justify-center space-x-1.5 shadow"
              >
                <span>Launch Full Gap Diagnostics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official Metrics Section (As in media_1788446133034.jpg) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Learn and network with civil servants &amp; subject matter experts
          </h2>
          <p className="text-slate-500 text-xs mt-1">Official platform statistics across Indian ministries and departments</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Karmayogi Onboarded</span>
            <p className="text-2xl font-black text-[#1E50A0] mt-1">1,72,27,465</p>
            <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Registered MDO\'s</span>
            <p className="text-2xl font-black text-[#1E50A0] mt-1">25,532</p>
            <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Courses Available</span>
            <p className="text-2xl font-black text-[#1E50A0] mt-1">6,684</p>
            <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-3"></div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">Available Content (Hours)</span>
            <p className="text-2xl font-black text-[#1E50A0] mt-1">7,347</p>
            <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3"></div>
          </div>
        </div>
      </section>

      {/* Solutioning Space for All of Government (As in media_1788446133033.jpg) */}
      <section id="hubs" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Solutioning space for all of Government</h2>
          <p className="text-slate-500 text-xs mt-0.5">Explore dedicated capacity building hubs across national public service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3">🎓</div>
            <h3 className="font-bold text-slate-900 text-sm">Learning Hub</h3>
            <p className="text-xs text-slate-500 mt-1">Learn anywhere, anytime across multi-device formats.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-3">💬</div>
            <h3 className="font-bold text-slate-900 text-sm">Discussion Hub</h3>
            <p className="text-xs text-slate-500 mt-1">Discuss and learn with peers across public administration.</p>
          </div>

          <Link 
            href="/competency-hub"
            className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-5 rounded-2xl border-2 border-[#1E50A0] shadow-sm hover:shadow-md transition relative group block"
          >
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#1E50A0] text-white text-[9px] font-bold uppercase">
              Integrated Module
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#1E50A0] text-white flex items-center justify-center text-xl mb-3 shadow">🧩</div>
            <h3 className="font-bold text-blue-950 text-sm flex items-center space-x-1">
              <span>Competency Hub (AI Platform)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-[#1E50A0]" />
            </h3>
            <p className="text-xs text-blue-800 mt-1">
              Identify your statistical competency requirements, take AI baseline tests, and rank custom courses.
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
