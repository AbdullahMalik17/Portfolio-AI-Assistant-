"""
Portfolio AI Assistant - FastAPI Backend
Main server file with OpenAI/Gemini Agents SDK integration
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import routes
from routes import contact, assistant

app = FastAPI(
    title="Portfolio AI Assistant API",
    description="Backend API for Portfolio with AI Assistant Integration",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router, prefix="/api", tags=["contact"])
app.include_router(assistant.router, prefix="/api", tags=["assistant"])


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Portfolio AI Assistant API",
        "version": "1.0.0",
        "status": "running"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Portfolio AI Assistant API"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

