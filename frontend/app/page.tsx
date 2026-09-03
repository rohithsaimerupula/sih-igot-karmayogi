'use client'
import React, { useState } from 'react'
import Header from '@/components/portal/Header'
import ResponsivePortal from '@/components/portal/ResponsivePortal'
import LoginModal from '@/components/portal/LoginModal'
import { Language, translations } from '@/components/portal/translations'

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>('English')
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const t = translations[currentLang]

  return (
    <main className="min-h-screen flex flex-col bg-[#F4F7FC]">
      {/* Official Government Header with active Language Toggle */}
      <Header 
        currentLang={currentLang} 
        onLangChange={setCurrentLang} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />

      {/* Natural Responsive Portal (Adapts to Mobile & Desktop automatically) */}
      <div className="flex-1">
        <ResponsivePortal 
          currentLang={currentLang} 
          onOpenLogin={() => setIsLoginOpen(true)} 
        />
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
            <p className="font-semibold text-slate-200">{t.officialPortal}</p>
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
