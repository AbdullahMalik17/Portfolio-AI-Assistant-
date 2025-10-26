"""
AI Assistant Routes
Handles AI assistant interactions using Gemini/OpenAI
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict
import logging
import os

# Import AI provider
from agents.gemini_agent import GeminiAgent

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

# Initialize AI Agent
try:
    gemini_agent = GeminiAgent()
    AI_AVAILABLE = True
except Exception as e:
    logger.warning(f"⚠️ AI Agent not initialized: {str(e)}")
    AI_AVAILABLE = False


class ChatMessage(BaseModel):
    content: str
    role: str = "user"  # "user" or "assistant"


class ChatRequest(BaseModel):
    message: str
    conversation_history: Optional[List[ChatMessage]] = None


class ChatResponse(BaseModel):
    response: str
    success: bool
    model: Optional[str] = None


class AssistantInfo(BaseModel):
    available: bool
    model: str
    description: str


@router.get("/assistant/info", response_model=AssistantInfo)
async def get_assistant_info():
    """
    Get AI assistant information
    """
    return AssistantInfo(
        available=AI_AVAILABLE,
        model="Gemini Pro" if AI_AVAILABLE else "Not configured",
        description="AI Assistant powered by Google Gemini"
    )


@router.post("/assistant/chat", response_model=ChatResponse)
async def chat_with_assistant(request: ChatRequest):
    """
    Chat with AI assistant
    
    - **message**: User's message
    - **conversation_history**: Previous conversation messages (optional)
    
    Returns AI assistant response
    """
    if not AI_AVAILABLE:
        raise HTTPException(
            status_code=503,
            detail="AI Assistant is not available. Please configure GEMINI_API_KEY in environment variables."
        )
    
    try:
        logger.info(f"🤖 AI Chat request: {request.message[:50]}...")
        
        # Get response from Gemini
        response = await gemini_agent.get_response(
            user_message=request.message,
            conversation_history=request.conversation_history
        )
        
        logger.info(f"✅ AI Response generated successfully")
        
        return ChatResponse(
            response=response,
            success=True,
            model="gemini-pro"
        )
    
    except Exception as e:
        logger.error(f"❌ Error in AI chat: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred: {str(e)}"
        )


@router.post("/assistant/suggest-project")
async def suggest_project_type(description: str):
    """
    Get project suggestions based on description
    """
    if not AI_AVAILABLE:
        raise HTTPException(status_code=503, detail="AI not available")
    
    try:
        prompt = f"""
        Based on this project description: "{description}"
        
        Suggest:
        1. Technology stack recommendations
        2. Features to consider
        3. Best practices
        
        Keep it concise and professional.
        """
        
        response = await gemini_agent.get_response(user_message=prompt)
        
        return {
            "success": True,
            "suggestions": response
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

