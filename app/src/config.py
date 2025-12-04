import os

class Config:
    # Defaults allow running locally without docker
    API_URL = os.environ.get("API_URL", "http://localhost:8000")
    AUTH_URL = os.environ.get("AUTH_URL", "http://localhost:9000")
    
    # Feature Flags
    ENABLE_LAUNCHPAD = True