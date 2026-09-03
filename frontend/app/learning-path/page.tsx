'use client'
import React, { useState } from 'react'
import Header from '@/components/portal/Header'
import { ArrowLeft, BookOpen, Clock, Award, Star, ExternalLink, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: "Advanced Stratified Sampling & Survey Estimation Techniques",
    provider: "National Statistical Systems Training Academy (NSSTA)",
    duration: "14 hours",
    rating: 4.8,
    matchScore: 96,
    reason: "Directly bridges highest priority gap: Sampling Theory (1.9 Gap)",
    stage: "Now",
    competency: "Sampling Theory & Design"
  },
  {
    id: 2,
    title: "Official Statistical Computing with R and Survey Design",
    provider: "Indian Statistical Institute (ISI Kolkata)",
    duration: "22 hours",
    rating: 4.7,
    matchScore: 92,
    reason: "Addresses Critical Gap: Statistical Computing (2.5 Gap)",
    stage: "Now",
    competency: "Statistical Computing (R/Python)"
  },
  {
    id: 3,
    title: "Field Quality Audit & Area Discrepancy Reconciliation",
    provider: "Ministry of Statistics & Programme Implementation",
    duration: "8 hours",
    rating: 4.6,
    matchScore: 88,
    reason: "Fulfills Survey Field Verification requirement (1.7 Gap)",
    stage: "Next",
    competency: "Survey Field Verification"
  },
  {
    id: 4,
    title: "National Accounts Statistics & Index Number Formulation",
    provider: "Central Statistics Office (CSO)",
    duration: "18 hours",
    rating: 4.9,
    matchScore: 78,
    reason: "Maintains proficiency in National Accounts (0.5 Gap)",
    stage: "Later",
    competency: "National Accounts Statistics"
  }
]

export default function LearningPathPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'Now' | 'Next' | 'Later'>('All')

  const filtered = activeTab === 'All' ? courses : courses.filter(c => c.stage === activeTab)

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      <Header />

      <div className="bg-[#08214D] text-white py-6 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/competency-hub" className="inline-flex items-center space-x-1.5 text-xs text-blue-200 hover:text-white mb-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Competency Hub</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">AI-Curated Learning Pathways</h1>
          <p className="text-xs text-blue-200 mt-1">
            Prioritized courses from the iGOT Karmayogi catalog matching your evaluated competency deficit
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="flex space-x-2 border-b border-slate-200 pb-3">
          {(['All', 'Now', 'Next', 'Later'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                activeTab === tab
                  ? 'bg-[#1E50A0] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab === 'All' ? 'All Recommended' : `${tab} Priority`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(c => (
            <div key={c.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {c.competency}
                </span>
                <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  {c.matchScore}% Match
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{c.provider}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Why recommended: </span>
                <span>{c.reason}</span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{c.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{c.rating}</span>
                  </span>
                </div>

                <button
                  onClick={() => alert(`Redirecting to official iGOT course: ${c.title}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#1E50A0] hover:bg-blue-700 text-white font-semibold text-xs flex items-center space-x-1 transition shadow"
                >
                  <span>Start Course</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
