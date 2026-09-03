import uuid
import datetime
from sqlalchemy import Column, String, Float, Integer, Text, DateTime, ForeignKey, JSON
from services.api.core.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email = Column(String(255), unique=True, index=True, nullable=False)
    name = Column(String(255), default="Buddiga Sree Vidya")
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), default="Statistical Officer")
    department = Column(String(100), default="Ministry of Statistics and Programme Implementation (MoSPI)")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Competency(Base):
    __tablename__ = "competencies"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(255), nullable=False)
    description = Column(Text)
    category = Column(String(100), default="Domain")

class UserCompetency(Base):
    __tablename__ = "user_competencies"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String, ForeignKey("users.id"), index=True)
    competency_id = Column(String, ForeignKey("competencies.id"), index=True)
    current_level = Column(Float, default=1.0)
    target_level = Column(Float, default=4.0)
    weight = Column(Float, default=1.0)
    last_assessed = Column(DateTime, default=datetime.datetime.utcnow)

class LearningModule(Base):
    __tablename__ = "learning_modules"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String(255), nullable=False)
    description = Column(Text)
    provider = Column(String(255), default="National Statistical Systems Training Academy (NSSTA)")
    duration_hours = Column(Float, default=10.0)
    language = Column(String(50), default="English")
    competency_id = Column(String, ForeignKey("competencies.id"), index=True)
    rating = Column(Float, default=4.8)

class Assessment(Base):
    __tablename__ = "assessments"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String, ForeignKey("users.id"), index=True)
    score = Column(Float, default=0.0)
    total_questions = Column(Integer, default=5)
    percentage = Column(Float, default=0.0)
    passed = Column(Integer, default=1)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class MCQQuestion(Base):
    __tablename__ = "mcq_questions"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    competency_id = Column(String, index=True)
    question = Column(Text, nullable=False)
    options = Column(JSON, nullable=False)
    answer = Column(String(255), nullable=False)
    provenance = Column(String(255))
    explanation = Column(Text)
