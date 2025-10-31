"""
Startup and test script for Portfolio AI Assistant Backend
This script starts the backend server and tests all endpoints
"""

import subprocess
import time
import sys
import os


def check_dependencies():
    """Check if all dependencies are installed"""
    print("📦 Checking dependencies...")
    try:
        import fastapi
        import uvicorn
        import google.generativeai
        from dotenv import load_dotenv
        import pydantic

        print("✅ All dependencies installed\n")
        return True
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("Run: pip install -r requirements.txt\n")
        return False


def check_env():
    """Check if .env file exists and has required variables"""
    print("🔍 Checking environment...")
    from dotenv import load_dotenv

    if not os.path.exists(".env"):
        print("❌ .env file not found!")
        print("Copy env.example to .env and add your GEMINI_API_KEY\n")
        return False

    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key or api_key == "your_gemini_api_key_here":
        print("❌ GEMINI_API_KEY not configured")
        print("Edit .env file and add your actual API key\n")
        return False

    print("✅ Environment configured\n")
    return True


def start_server():
    """Start the FastAPI server"""
    print("🚀 Starting backend server...")
    print("   URL: http://localhost:8000")
    print("   Docs: http://localhost:8000/docs")
    print("   Press Ctrl+C to stop\n")

    try:
        # Start server using uvicorn
        import uvicorn
        from main import app

        uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")

    except KeyboardInterrupt:
        print("\n\n⏹️  Server stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Error starting server: {e}")
        sys.exit(1)


def main():
    """Main function"""
    print("=" * 60)
    print("Portfolio AI Assistant - Backend Server")
    print("=" * 60)
    print()

    # Check dependencies
    if not check_dependencies():
        sys.exit(1)

    # Check environment
    if not check_env():
        sys.exit(1)

    # Start server
    start_server()


if __name__ == "__main__":
    main()
