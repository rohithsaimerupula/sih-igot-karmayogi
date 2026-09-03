import time

class CacheService:
    def __init__(self):
        self.cache = {}
        self.ttl = {}

    def get(self, key: str):
        if key in self.cache:
            if time.time() < self.ttl.get(key, 0):
                return self.cache[key]
            else:
                del self.cache[key]
                del self.ttl[key]
        return None

    def set(self, key: str, value, expire_seconds: int = 1800):
        self.cache[key] = value
        self.ttl[key] = time.time() + expire_seconds

cache_service = CacheService()
