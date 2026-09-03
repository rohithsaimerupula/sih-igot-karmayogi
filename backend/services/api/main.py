from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.api.core.database import engine, Base
from services.api.api.v1.endpoints.api import router as api_router
from services.api.models.models import User, Competency

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="iGOT Karmayogi AI Competency Gap Platform",
    description="Official Backend API Architecture for India's Statistical Capacity Building (SIH 2026)",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "iGOT Karmayogi Group B API",
        "version": "2.0.0",
        "database": "connected"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("services.api.main:app", host="0.0.0.0", port=8000, reload=True)
