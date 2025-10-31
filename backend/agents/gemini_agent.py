"""
Gemini AI Agent Integration
Handles AI interactions using Google Gemini API
"""

import os
import logging
from typing import Optional, List, Dict, Any

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class GeminiAgent:
    """
    Google Gemini AI Agent
    Handles chat interactions and AI responses
    """

    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")

        if not self.api_key:
            raise ValueError("GEMINI_API_KEY environment variable is not set")

        # Try to import google.generativeai
        try:
            import google.generativeai as genai

            genai.configure(api_key=self.api_key)
            self.genai = genai
            self.model = genai.GenerativeModel("gemini-2.5-flash")
            logger.info("✅ Gemini AI Agent initialized successfully")
        except ImportError:
            logger.warning("⚠️ google-generativeai not installed. Using mock mode.")
            self.model = None

    async def get_response(
        self,
        user_message: str,
        conversation_history: Optional[List[Dict[str, str]]] = None,
    ) -> str:
        """
        Get AI response for user message

        Args:
            user_message: User's message
            conversation_history: Previous conversation context

        Returns:
            AI assistant's response
        """
        try:
            if self.model is None:
                return self._get_mock_response(user_message)

            # Prepare the prompt with context
            if conversation_history:
                # Include conversation history for context
                context = "\n".join(
                    [
                        f"{msg.get('role', 'user')}: {msg.get('content', '')}"
                        for msg in conversation_history
                    ]
                )
                full_prompt = f"{context}\n\nUser: {user_message}\nAssistant:"
            else:
                full_prompt = user_message

            # Generate response
            response = self.model.generate_content(full_prompt)

            # Extract text from response
            if hasattr(response, "text"):
                return response.text
            elif hasattr(response, "candidates") and response.candidates:
                return response.candidates[0].content.parts[0].text
            else:
                return "I apologize, but I couldn't generate a response."

        except Exception as e:
            logger.error(f"❌ Error generating AI response: {str(e)}")
            return f"I encountered an error: {str(e)}. Please try again."

    def _get_mock_response(self, message: str) -> str:
        """
        Mock response when Gemini is not properly configured
        """
        return f"""
        [Mock Mode - Gemini not fully configured]

        You sent: {message}

        To enable full AI functionality:
        1. Install: pip install google-generativeai
        2. Set GEMINI_API_KEY in .env file
        3. Restart the server
        """

    def generate_project_suggestions(self, description: str) -> Dict[str, Any]:
        """
        Generate project suggestions based on description
        """
        prompt = f"""
        Analyze this project description and provide recommendations:

        {description}

        Provide:
        1. Recommended technology stack
        2. Key features to implement
        3. Best practices
        4. Estimated complexity
        """

        response = self.get_response(prompt)

        return {"description": description, "suggestions": response}
