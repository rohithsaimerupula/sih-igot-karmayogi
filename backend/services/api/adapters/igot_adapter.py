from abc import ABC, abstractmethod
from typing import List, Dict, Any

class IGotAdapter(ABC):
    @abstractmethod
    async def fetch_user_courses(self, user_id: str) -> List[Dict[str, Any]]:
        pass

    @abstractmethod
    async def fetch_catalog(self) -> List[Dict[str, Any]]:
        pass

class MockIGotAdapter(IGotAdapter):
    async def fetch_user_courses(self, user_id: str) -> List[Dict[str, Any]]:
        return [
            {"course_id": "c101", "title": "Foundation Course on Official Statistics", "status": "completed", "score": 92},
            {"course_id": "c102", "title": "Introduction to Civil Registration System", "status": "in_progress", "progress_pct": 65}
        ]

    async def fetch_catalog(self) -> List[Dict[str, Any]]:
        return [
            {"id": "m1", "title": "Advanced Stratified Sampling & Estimation", "provider": "NSSTA", "hours": 14.0},
            {"id": "m2", "title": "Official Statistical Computing with R", "provider": "ISI Kolkata", "hours": 22.0},
            {"id": "m3", "title": "National Accounts & GDP Aggregation", "provider": "CSO", "hours": 18.0}
        ]

igot_client = MockIGotAdapter()
