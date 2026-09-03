from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import datetime

class UserBase(BaseModel):
    email: str
    name: str
    role: str
    department: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: str
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserBase

class CompetencyResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    category: str
    model_config = ConfigDict(from_attributes=True)

class GapScoreResponse(BaseModel):
    competency_id: str
    name: str
    current_level: float
    target_level: float
    gap_score: float
    priority: str

class RecommendationResponse(BaseModel):
    id: str
    title: str
    provider: str
    competency: str
    score: float
    reason: str
    priority_stage: str
    duration: str
    rating: float

class AssessmentSubmit(BaseModel):
    user_id: str
    score: int
    total: int

class AssessmentResult(BaseModel):
    status: str
    score: int
    total: int
    percentage: float
    nft_minted: bool
    network: str
