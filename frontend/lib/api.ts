const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

export async function fetchUserGaps(userId: string = 'OFFICER-73822') {
  try {
    const res = await fetch(`${API_BASE_URL}/users/${userId}/gaps`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch gaps')
    return await res.json()
  } catch (err) {
    console.warn('API error, using local fallback data:', err)
    return {
      user_id: userId,
      overall_demonstrated_level: 2.34,
      target_role: 'Senior Statistical Officer (SSO Grade-II)',
      gaps: [
        { competency_id: 'COMP-01', name: 'Sampling Theory & Survey Design', target_level: 4.0, current_level: 2.1, gap_score: 1.9, priority: 'High' },
        { competency_id: 'COMP-02', name: 'National Accounts & GDP Aggregation', target_level: 4.0, current_level: 3.5, gap_score: 0.5, priority: 'Low' },
        { competency_id: 'COMP-03', name: 'Survey Field Quality Audit & Verification', target_level: 3.5, current_level: 1.8, gap_score: 1.7, priority: 'High' },
        { competency_id: 'COMP-04', name: 'Time Series & Econometric Forecasting', target_level: 3.5, current_level: 2.8, gap_score: 0.7, priority: 'Medium' },
        { competency_id: 'COMP-05', name: 'Official Statistical Computing (R / Python)', target_level: 4.0, current_level: 1.5, gap_score: 2.5, priority: 'Critical' },
      ]
    }
  }
}

export async function fetchRecommendations(userId: string = 'OFFICER-73822') {
  try {
    const res = await fetch(`${API_BASE_URL}/recommendations/${userId}`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch recommendations')
    return await res.json()
  } catch (err) {
    console.warn('API error, using local recommendations fallback:', err)
    return {
      recommendations: [
        {
          id: 'COURSE-01',
          title: 'Advanced Stratified Sampling & Survey Estimation Techniques',
          provider: 'National Statistical Systems Training Academy (NSSTA)',
          duration: '14 hours',
          rating: 4.8,
          score: 0.96,
          reason: 'Directly bridges highest priority gap: Sampling Theory (1.9 Gap)',
          priority_stage: 'Now',
          competency: 'Sampling Theory & Design'
        },
        {
          id: 'COURSE-02',
          title: 'Official Statistical Computing with R and Survey Design',
          provider: 'Indian Statistical Institute (ISI Kolkata)',
          duration: '22 hours',
          rating: 4.7,
          score: 0.92,
          reason: 'Addresses Critical Gap: Statistical Computing (2.5 Gap)',
          priority_stage: 'Now',
          competency: 'Statistical Computing (R/Python)'
        }
      ]
    }
  }
}

export async function fetchQuestions() {
  try {
    const res = await fetch(`${API_BASE_URL}/assessments/questions`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch questions')
    return await res.json()
  } catch (err) {
    console.warn('API error, using default questions:', err)
    return null
  }
}

export async function submitAssessmentAnswers(score: number, total: number) {
  try {
    const res = await fetch(`${API_BASE_URL}/assessments/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: 'OFFICER-73822', score, total })
    })
    return await res.json()
  } catch (err) {
    return {
      status: 'success',
      score,
      total,
      percentage: (score / total) * 100,
      nft_credential: {
        minted: (score / total) >= 0.8,
        network: 'Polygon Amoy Testnet',
        contract: '0x71C2B9a1dE09F39A',
        token_id: 105
      }
    }
  }
}
