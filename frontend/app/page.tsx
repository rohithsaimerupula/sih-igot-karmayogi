'use client'
import React, { useState } from 'react'
import Header from '@/components/portal/Header'
import DesktopView from '@/components/portal/DesktopView'
import MobileView from '@/components/portal/MobileView'
import LoginModal from '@/components/portal/LoginModal'

export default function HomePage() {
  const [isMobileView, setIsMobileView] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col bg-[#F4F7FC]">
      {/* Official Government Header */}
      <Header 
        onToggleView={() => setIsMobileView(!isMobileView)} 
        isMobileView={isMobileView} 
      />

      {/* View Switcher Banner for Evaluators */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-center text-xs border-b border-slate-800 flex items-center justify-center space-x-4">
        <span>Smart India Hackathon 2026 Presentation Mode:</span>
        <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
          <button
            onClick={() => setIsMobileView(false)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
              !isMobileView ? 'bg-[#1E50A0] text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            💻 Desktop Portal (igotkarmayogi.gov.in)
          </button>
          <button
            onClick={() => setIsMobileView(true)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
              isMobileView ? 'bg-[#1E50A0] text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            📱 Mobile App View (Screenshot Match)
          </button>
        </div>
        <button
          onClick={() => setIsLoginOpen(true)}
          className="ml-2 px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition"
        >
          Sign In
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {isMobileView ? (
          <MobileView onOpenLogin={() => setIsLoginOpen(true)} />
        ) : (
          <DesktopView onOpenLogin={() => setIsLoginOpen(true)} />
        )}
      </div>

      {/* Parichay / iGOT Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {/* Official Footer */}
      <footer className="bg-[#08214D] text-white py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400">
          <div>
            <p className="font-semibold text-slate-200">iGOT Karmayogi Bharat &bull; AI Competency Companion Layer</p>
            <p className="text-[11px] mt-0.5">Ministry of Personnel, Public Grievances and Pensions &bull; MoSPI</p>
          </div>
          <div className="flex space-x-6 text-xs">
            <a href="https://igotkarmayogi.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">Official Website</a>
            <span className="text-slate-600">&bull;</span>
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <span className="text-slate-600">&bull;</span>
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
