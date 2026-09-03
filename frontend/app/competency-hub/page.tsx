'use client'
import React, { useState } from 'react'
import Header from '@/components/portal/Header'
import { 
  Sparkles, Award, ArrowLeft, BookOpen, CheckCircle2, 
  TrendingUp, AlertCircle, FileText, ChevronRight, Play 
} from 'lucide-react'
import Link from 'next/link'

export default function CompetencyHubPage() {
  const [activeDomain, setActiveDomain] = useState('Sampling Theory')

  const competencies = [
    { name: 'Sampling Theory & Design', level: 2.1, target: 4.0, gap: 1.9, priority: 'High', courses: 3 },
    { name: 'National Accounts Statistics', level: 3.5, target: 4.0, gap: 0.5, priority: 'Low', courses: 1 },
    { name: 'Survey Field Verification', level: 1.8, target: 3.5, gap: 1.7, priority: 'High', courses: 4 },
    { name: 'Time Series & Forecasting', level: 2.8, target: 3.5, gap: 0.7, priority: 'Medium', courses: 2 },
    { name: 'Statistical Computing (R/Python)', level: 1.5, target: 4.0, gap: 2.5, priority: 'Critical', courses: 5 },
  ]

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      <Header />

      {/* Breadcrumb & Title */}
      <div className="bg-[#08214D] text-white py-6 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center space-x-1 text-xs text-blue-200 hover:text-white mb-2">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to iGOT Portal</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">Official Statistical Competency Companion</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase">SIH Prototype</span>
              </div>
              <p className="text-xs text-blue-200 mt-1">
                Integrated Companion for Karmayogi Bharat &bull; Ministry of Statistics and Programme Implementation (MoSPI)
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 text-xs">
                <span className="text-slate-300">Learner: </span>
                <span className="font-bold text-amber-300">Buddiga Sree Vidya (MoSPI)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Diagnostics Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Top Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold uppercase">Demonstrated Level</span>
            <p className="text-2xl font-black text-slate-900 mt-1">2.34 <span className="text-xs font-normal text-slate-400">/ 4.0</span></p>
            <span className="text-[11px] text-amber-600 font-medium">Target Role: SSO Grade-II</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold uppercase">Identified Skill Gaps</span>
            <p className="text-2xl font-black text-red-600 mt-1">3 Critical</p>
            <span className="text-[11px] text-slate-500">Across 5 audited domains</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold uppercase">Recommended Courses</span>
            <p className="text-2xl font-black text-blue-600 mt-1">15 Modules</p>
            <span className="text-[11px] text-emerald-600 font-medium">Mapped to iGOT Catalog</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold uppercase">Verified Credentials</span>
            <p className="text-2xl font-black text-purple-600 mt-1">2 NFTs</p>
            <span className="text-[11px] text-purple-600 font-medium">Polygon Amoy Testnet</span>
          </div>
        </div>

        {/* Competency Gap Breakdown & Adaptive Quiz Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Table / Radar */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Competency Gap Diagnostics (GapRadar)</h3>
                <p className="text-xs text-slate-500">Evaluated based on baseline assessments &amp; administrative records</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Formula: Gap = max(0, Target - Actual) &times; Weight
              </span>
            </div>

            <div className="space-y-4">
              {competencies.map((comp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">{comp.name}</h4>
                      <span className="text-[11px] text-slate-500">Current: L{comp.level} &bull; Target: L{comp.target}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      comp.priority === 'Critical' ? 'bg-red-100 text-red-700 border border-red-200' :
                      comp.priority === 'High' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                      'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    }`}>
                      {comp.priority} Priority Gap ({comp.gap})
                    </span>
                  </div>

                  {/* Progress bar comparison */}
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${(comp.level / 4.0) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Action: Adaptive Assessment Runner Launcher */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-[#08214D] to-[#1E50A0] text-white p-6 rounded-2xl shadow-xl space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] uppercase">
                <Sparkles className="w-3 h-3" />
                <span>AI Practice Mode</span>
              </div>

              <h3 className="font-bold text-base leading-snug">Generate Grounded Quiz from MoSPI Manuals</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Take an adaptive 5-question test generated from official statistical guidelines with full document page provenance.
              </p>

              <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-xs space-y-1 text-slate-200">
                <p>&bull; 5 Adaptive MCQs</p>
                <p>&bull; Instant gap score update</p>
                <p>&bull; Polygon NFT certificate on &gt;80% score</p>
              </div>

              <button
                onClick={() => alert('Starting Grounded MCQ Diagnostic Runner...')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-110 text-slate-950 font-bold text-xs shadow-lg transition flex items-center justify-center space-x-2"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Start Competency Diagnostic</span>
              </button>
            </div>

            {/* Blockchain Verifiable Passbook Anchor */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-purple-700">
                <Award className="w-5 h-5" />
                <h4 className="font-bold text-xs text-slate-900">Verifiable NFT Credentials</h4>
              </div>
              <p className="text-[11px] text-slate-500">
                Your earned badges are anchored on Polygon Amoy testnet for tamper-proof verification by department heads.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600 truncate">
                Contract: 0x71C...Amoy &bull; Token #104
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
