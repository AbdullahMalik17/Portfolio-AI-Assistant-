"""
Simple run script for Portfolio AI Assistant Backend
Just run: python run.py
"""

import os
import sys

# Load environment variables first
from dotenv import load_dotenv

load_dotenv()

# Check if environment is configured
api_key = os.getenv("GEMINI_API_KEY")
if not api_key or api_key == "your_gemini_api_key_here":
    print("=" * 60)
    print("⚠️  GEMINI_API_KEY not configured!")
    print("=" * 60)
    print("\nPlease configure your API key:")
    print("  1. Copy env.example to .env")
    print("  2. Edit .env and add your GEMINI_API_KEY")
    print("  3. Get your key from: https://makersuite.google.com/app/apikey")
    print("\nThen run this script again.")
    print("=" * 60)
    sys.exit(1)

# Import and run server
print("=" * 60)
print("🚀 Portfolio AI Assistant - Backend Server")
print("=" * 60)
print()
print("✅ Environment configured")
print("✅ Starting server...")
print()
print("Server running at:")
print("  • API: http://localhost:8000")
print("  • Docs: http://localhost:8000/docs")
print("  • Health: http://localhost:8000/health")
print()
print("Press Ctrl+C to stop the server")
print("=" * 60)
print()

try:
    import uvicorn
    from main import app

    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")

except KeyboardInterrupt:
    print("\n\n" + "=" * 60)
    print("⏹️  Server stopped")
    print("=" * 60)
    sys.exit(0)

except Exception as e:
    print(f"\n❌ Error: {e}")
    print("\nPlease ensure:")
    print("  1. Dependencies are installed: pip install -r requirements.txt")
    print("  2. You're in the backend directory")
    sys.exit(1)
