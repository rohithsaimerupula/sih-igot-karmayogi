import os
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = 'iGOT Karmayogi AI Competency Gap Platform'
    API_V1_STR: str = '/api/v1'
    SECRET_KEY: str = os.getenv('SECRET_KEY', 'sih_super_secret_jwt_key_karmayogi_2026_production')
    ALGORITHM: str = 'HS256'
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    DATABASE_URL: str = os.getenv('DATABASE_URL', 'sqlite:///./sih_karmayogi.db')
    GEMINI_API_KEY: str = os.getenv('GEMINI_API_KEY', '')

settings = Settings()
