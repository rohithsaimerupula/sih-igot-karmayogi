'use client'
import React, { useState } from 'react'
import Header from '@/components/portal/Header'
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, Award, Sparkles, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const sampleQuestions = [
  {
    id: 1,
    question: "In Stratified Random Sampling, what is the primary objective of dividing the population into homogeneous strata?",
    options: [
      "To increase sample size without increasing survey cost",
      "To minimize within-stratum variance and improve estimation precision",
      "To ensure every individual has an identical probability of selection",
      "To eliminate non-sampling errors during field enumeration"
    ],
    correct: 1,
    provenance: "MoSPI NSS Survey Design Manual 2024, Page 42, Section 3.2",
    competency: "Sampling Theory & Design"
  },
  {
    id: 2,
    question: "Which index number formula satisfies both the Time Reversal Test and the Factor Reversal Test in National Accounts Statistics?",
    options: [
      "Laspeyres Price Index",
      "Paasche Price Index",
      "Fisher's Ideal Index",
      "Marshall-Edgeworth Index"
    ],
    correct: 2,
    provenance: "Central Statistics Office (CSO) National Accounts Guidelines, Page 118",
    competency: "National Accounts Statistics"
  },
  {
    id: 3,
    question: "When conducting field verification of agricultural census data, what is the standard tolerance limit for area discrepancy under the EARAS scheme?",
    options: [
      "Less than 1.0%",
      "Between 3.0% and 5.0%",
      "Exactly 10.0%",
      "No tolerance allowed"
    ],
    correct: 1,
    provenance: "Directorate of Economics & Statistics Field Protocol Manual, Page 19",
    competency: "Survey Field Verification"
  },
  {
    id: 4,
    question: "In autoregressive integrated moving average models (ARIMA(p, d, q)), what does the parameter 'd' represent?",
    options: [
      "The order of seasonal autoregression",
      "The degree of differencing required to achieve stationarity",
      "The number of lagged forecast errors in prediction",
      "The decay factor of the exponential smoothing filter"
    ],
    correct: 1,
    provenance: "Indian Statistical Institute (ISI) Time Series Handbook, Vol II, Page 88",
    competency: "Time Series & Forecasting"
  },
  {
    id: 5,
    question: "Which R function from the 'survey' package computes variance estimates for complex survey designs with multi-stage clusters?",
    options: [
      "svydesign() and svymean()",
      "lm() and summary()",
      "sample.split()",
      "var.test()"
    ],
    correct: 0,
    provenance: "Official Statistical Computing in R, MoSPI Training Division, Page 15",
    competency: "Statistical Computing (R/Python)"
  }
]

export default function AssessmentRunnerPage() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQ = sampleQuestions[currentIdx]

  const handleSelect = (optIdx: number) => {
    if (isSubmitted) return
    setSelectedAnswers({ ...selectedAnswers, [currentIdx]: optIdx })
  }

  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ans]) => {
    return acc + (sampleQuestions[Number(qIdx)].correct === ans ? 1 : 0)
  }, 0)

  return (
    <div className="min-h-screen bg-[#F4F7FC]">
      <Header />

      <div className="bg-[#08214D] text-white py-4 border-b border-blue-900">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link href="/competency-hub" className="inline-flex items-center space-x-1.5 text-xs text-blue-200 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Competency Hub</span>
          </Link>
          <div className="flex items-center space-x-2 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 text-xs text-amber-300 font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Time Left: 14:20</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {currentQ.competency}
                </span>
                <h3 className="text-xs text-slate-500 font-medium mt-1">
                  Question {currentIdx + 1} of {sampleQuestions.length}
                </h3>
              </div>
              <div className="flex space-x-1.5">
                {sampleQuestions.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center cursor-pointer transition ${
                      currentIdx === i
                        ? 'bg-[#1E50A0] text-white shadow'
                        : selectedAnswers[i] !== undefined
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>

              <div className="space-y-3">
                {currentQ.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(oIdx)}
                    className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition flex items-center justify-between border ${
                      selectedAnswers[currentIdx] === oIdx
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-medium shadow-sm ring-1 ring-blue-500'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center border ${
                        selectedAnswers[currentIdx] === oIdx
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center space-x-2">
                <span className="text-amber-500 font-bold uppercase text-[9px] bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  RAG Citation
                </span>
                <span>{currentQ.provenance}</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 disabled:opacity-40 hover:bg-slate-100 transition"
              >
                Previous
              </button>

              {currentIdx < sampleQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx(currentIdx + 1)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#1E50A0] hover:bg-blue-700 transition flex items-center space-x-1.5 shadow"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitted(true)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-110 transition flex items-center space-x-1.5 shadow-md"
                >
                  <span>Submit Assessment</span>
                  <Award className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Diagnostic Complete
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Score: {score} / {sampleQuestions.length} ({Math.round((score / sampleQuestions.length) * 100)}%)
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Your demonstrated capability vector and role gap index have been recalculated using the SIH Gap Engine algorithm.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 max-w-md mx-auto text-left space-y-2">
              <div className="flex items-center space-x-2 text-purple-900">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold">Polygon Amoy Soulbound Credential Minted</span>
              </div>
              <p className="text-[11px] text-purple-800">
                Competency Certificate issued to wallet <code>0x71C...39A</code> on Polygon Amoy Testnet.
              </p>
              <div className="text-[9px] font-mono text-purple-700 bg-white p-2 rounded border border-purple-200 truncate">
                Tx: 0x9f4a2b1c8e7d6f5a4b3c2d1e0f8a7b6c5d4e3f2a1b0c
              </div>
            </div>

            <div className="flex justify-center space-x-3 pt-2">
              <Link
                href="/competency-hub"
                className="px-5 py-2.5 rounded-xl bg-[#1E50A0] text-white font-bold text-xs shadow hover:bg-blue-700 transition"
              >
                Return to Competency Hub
              </Link>
              <Link
                href="/learning-path"
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow hover:bg-amber-400 transition"
              >
                View Recommended Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
