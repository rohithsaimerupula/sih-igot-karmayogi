from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from services.api.core.database import get_db
from services.api.core.security import create_access_token
from services.api.engine.gap_engine import compute_gap, get_priority, calculate_recommendation_score
from services.api.adapters.igot_adapter import igot_client
from services.ai.mcq_generator import generate_mcqs, FALLBACK_MCQS

router = APIRouter()

# 1. Auth Router
@router.post("/auth/login")
def login(payload: dict):
    email = payload.get("email", "buddiga.sreevidya@mospi.gov.in")
    token = create_access_token(email)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "name": "Buddiga Sree Vidya",
            "email": email,
            "role": "Senior Statistical Officer (SSO Grade-II)",
            "department": "Ministry of Statistics and Programme Implementation (MoSPI)"
        }
    }

# 2. Users Router
@router.get("/users/me")
def get_current_user():
    return {
        "id": "OFFICER-73822",
        "name": "Buddiga Sree Vidya",
        "email": "buddiga.sreevidya@mospi.gov.in",
        "role": "Senior Statistical Officer (SSO Grade-II)",
        "department": "MoSPI",
        "karma_points": 585
    }

# 3. Competencies Router
@router.get("/competencies")
def get_all_competencies():
    return [
        {"id": "c1", "name": "Sampling Theory & Survey Design", "category": "Domain"},
        {"id": "c2", "name": "National Accounts & GDP Aggregation", "category": "Domain"},
        {"id": "c3", "name": "Survey Field Quality Audit & Verification", "category": "Functional"},
        {"id": "c4", "name": "Time Series & Econometric Forecasting", "category": "Domain"},
        {"id": "c5", "name": "Official Statistical Computing (R / Python)", "category": "Technical"}
    ]

# 4. UserCompetencies Router (Gap Engine)
@router.get("/users/{user_id}/competencies")
@router.get("/users/{user_id}/gaps")
def get_user_competencies(user_id: str, db: Session = Depends(get_db)):
    domains = [
        {"id": "COMP-01", "name": "Sampling Theory & Survey Design", "target": 4.0, "actual": 2.1, "weight": 1.0},
        {"id": "COMP-02", "name": "National Accounts & GDP Aggregation", "target": 4.0, "actual": 3.5, "weight": 0.8},
        {"id": "COMP-03", "name": "Survey Field Quality Audit & Verification", "target": 3.5, "actual": 1.8, "weight": 1.0},
        {"id": "COMP-04", "name": "Time Series & Econometric Forecasting", "target": 3.5, "actual": 2.8, "weight": 0.7},
        {"id": "COMP-05", "name": "Official Statistical Computing (R / Python)", "target": 4.0, "actual": 1.5, "weight": 1.0},
    ]

    gaps = []
    for d in domains:
        g = compute_gap(d["target"], d["actual"], d["weight"])
        gaps.append({
            "competency_id": d["id"],
            "name": d["name"],
            "target_level": d["target"],
            "current_level": d["actual"],
            "gap_score": g,
            "priority": get_priority(g)
        })

    return {
        "user_id": user_id,
        "target_role": "Senior Statistical Officer (SSO Grade-II)",
        "overall_demonstrated_level": 2.34,
        "gaps": gaps
    }

# 5. Modules Router (iGOT Catalog Integration)
@router.get("/modules")
async def get_modules():
    return await igot_client.fetch_catalog()

# 6. Assessments Router
@router.get("/assessments/questions")
def get_assessment_questions():
    return {"count": len(FALLBACK_MCQS), "questions": FALLBACK_MCQS}

@router.post("/assessments/submit")
def submit_assessment(payload: dict):
    user_id = payload.get("user_id", "OFFICER-73822")
    score = payload.get("score", 4)
    total = payload.get("total", 5)
    percentage = (score / total) * 100
    passed = percentage >= 80.0

    return {
        "status": "success",
        "user_id": user_id,
        "score": score,
        "total": total,
        "percentage": percentage,
        "nft_minted": passed,
        "blockchain": {
            "network": "Polygon Amoy Testnet",
            "contract": "0x71C2B9a1dE09F39A",
            "token_id": 105 if passed else None,
            "soulbound": True
        }
    }

# 7. Recommendations Router
@router.get("/recommendations/{user_id}")
def get_recommendations(user_id: str):
    courses = [
        {
            "id": "COURSE-01",
            "title": "Advanced Stratified Sampling & Survey Estimation Techniques",
            "provider": "National Statistical Systems Training Academy (NSSTA)",
            "competency": "Sampling Theory & Survey Design",
            "score": calculate_recommendation_score(0.95, 0.90, 0.85, 0.80, 1.0, 0.95),
            "reason": "Directly bridges highest priority gap: Sampling Theory (1.9 Gap)",
            "priority_stage": "Now",
            "duration": "14 hours",
            "rating": 4.8
        },
        {
            "id": "COURSE-02",
            "title": "Official Statistical Computing with R and Survey Design",
            "provider": "Indian Statistical Institute (ISI Kolkata)",
            "competency": "Official Statistical Computing (R / Python)",
            "score": calculate_recommendation_score(0.92, 0.85, 0.80, 0.75, 1.0, 0.90),
            "reason": "Addresses critical gap in automated data tabulation (2.5 Gap)",
            "priority_stage": "Now",
            "duration": "22 hours",
            "rating": 4.7
        },
        {
            "id": "COURSE-03",
            "title": "Field Quality Audit & Area Discrepancy Reconciliation",
            "provider": "MoSPI Field Operations Division",
            "competency": "Survey Field Quality Audit & Verification",
            "score": calculate_recommendation_score(0.88, 0.80, 0.90, 0.70, 1.0, 0.85),
            "reason": "Fulfills mandatory EARAS area verification requirements (1.7 Gap)",
            "priority_stage": "Next",
            "duration": "8 hours",
            "rating": 4.6
        }
    ]
    return {"user_id": user_id, "recommendations": courses}

# 8. Document Ingestion Router
@router.post("/documents/upload")
async def upload_document(file: UploadFile = File(...)):
    return {
        "status": "processed",
        "filename": file.filename,
        "chunks_indexed": 48,
        "vector_store": "pgvector",
        "generated_mcqs": 5
    }
