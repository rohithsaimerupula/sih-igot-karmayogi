'use client'
import React, { useState } from 'react'
import { X, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'sso' | 'credentials'>('sso')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('statistician')
  const router = useRouter()

  if (!isOpen) return null

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to the AI Competency Companion Dashboard
    router.push('/competency-hub')
  }

  const handleQuickDemo = (selectedRole: string) => {
    setRole(selectedRole)
    if (selectedRole === 'statistician') {
      setEmail('buddiga.sreevidya@mospi.gov.in')
    } else if (selectedRole === 'mdo') {
      setEmail('director.des@ap.gov.in')
    } else {
      setEmail('evaluator.sih@nic.in')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="bg-[#08214D] text-white p-5 flex items-center justify-between relative">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center shadow">
              <span className="text-orange-500 font-black text-sm">क</span>
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">iGOT Karmayogi Sign In</h3>
              <p className="text-[11px] text-blue-200">Single Sign-On for Government of India</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('sso')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center space-x-1.5 ${
              activeTab === 'sso'
                ? 'border-[#1E50A0] text-[#1E50A0] bg-blue-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#1E50A0]" />
            <span>Parichay Jan-SSO</span>
          </button>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center space-x-1.5 ${
              activeTab === 'credentials'
                ? 'border-[#1E50A0] text-[#1E50A0] bg-blue-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Govt Email / NIC</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {activeTab === 'sso' ? (
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
                <div className="flex items-center space-x-2 text-slate-700 mb-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-xs text-slate-900">Official Government Parichay Gateway</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Authenticate securely using your Ministry/NIC credentials with dual-factor OTP authorization.
                </p>
              </div>

              {/* Quick Demo Selector for Evaluators */}
              <div className="text-left bg-blue-50/70 p-3.5 rounded-xl border border-blue-100">
                <p className="text-[11px] font-bold text-blue-900 mb-2 uppercase tracking-wide">
                  Demo Fast-Access Profiles (SIH Jury):
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('statistician')}
                    className="p-2 rounded-lg bg-white border border-blue-200 text-left hover:border-blue-500 transition"
                  >
                    <p className="text-[11px] font-bold text-slate-800">Statistician</p>
                    <p className="text-[9px] text-slate-500">Sree Vidya (MoSPI)</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('mdo')}
                    className="p-2 rounded-lg bg-white border border-blue-200 text-left hover:border-blue-500 transition"
                  >
                    <p className="text-[11px] font-bold text-slate-800">Dept Nodal</p>
                    <p className="text-[9px] text-slate-500">Director DES</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('admin')}
                    className="p-2 rounded-lg bg-white border border-blue-200 text-left hover:border-blue-500 transition"
                  >
                    <p className="text-[11px] font-bold text-slate-800">SIH Jury</p>
                    <p className="text-[9px] text-slate-500">Evaluator View</p>
                  </button>
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full py-3 px-4 rounded-xl bg-[#1E50A0] hover:bg-[#153e80] text-white font-semibold text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Continue with Parichay SSO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-slate-400">
                Authorized by National Informatics Centre (NIC) &bull; Karmayogi Bharat
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Government Email (gov.in / nic.in)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="official.name@gov.in"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1E50A0] hover:bg-[#153e80] text-white font-semibold text-xs shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Sign In to Learning Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
