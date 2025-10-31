"""
Quick setup verification script
Tests if Gemini API key is configured correctly
"""

import os
import sys
from dotenv import load_dotenv


def test_environment():
    """Test if .env file exists and has required variables"""
    print("🔍 Checking environment setup...")

    # Load .env file
    load_dotenv()

    # Check for .env file
    if not os.path.exists(".env"):
        print("❌ .env file not found!")
        print("   Please copy env.example to .env and add your GEMINI_API_KEY")
        return False

    print("✅ .env file found")

    # Check for API key
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key or api_key == "your_gemini_api_key_here":
        print("❌ GEMINI_API_KEY not set or using placeholder")
        print("   Please edit .env file and add your actual Gemini API key")
        return False

    print("✅ GEMINI_API_KEY is set")
    return True


def test_gemini_api():
    """Test if Gemini API is working"""
    print("\n🤖 Testing Gemini API...")

    try:
        import google.generativeai as genai
    except ImportError:
        print("❌ google-generativeai not installed")
        print("   Run: pip install -r requirements.txt")
        return False

    print("✅ google-generativeai installed")

    # Configure Gemini
    api_key = os.getenv("GEMINI_API_KEY")

    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel("gemini-2.5-flash")

        # Test with simple query
        print("   Sending test query to Gemini...")
        response = model.generate_content("Say hello in one sentence!")

        print("✅ Gemini API is working!")
        print(f"   Response: {response.text[:100]}...")
        return True

    except Exception as e:
        print(f"❌ Error connecting to Gemini API: {e}")
        print("   Please check your API key is correct")
        return False


def test_dependencies():
    """Test if all dependencies are installed"""
    print("\n📦 Checking dependencies...")

    required_packages = [
        "fastapi",
        "uvicorn",
        "google.generativeai",
        "dotenv",
        "pydantic",
    ]

    missing = []

    for package in required_packages:
        try:
            if "." in package:
                # Handle packages with dots
                __import__(package)
            else:
                __import__(package)
            print(f"✅ {package}")
        except ImportError:
            print(f"❌ {package} not found")
            missing.append(package)

    if missing:
        print(f"\n❌ Missing packages: {', '.join(missing)}")
        print("   Run: pip install -r requirements.txt")
        return False

    print("✅ All dependencies installed")
    return True


def main():
    print("=" * 50)
    print("Portfolio AI Assistant - Setup Verification")
    print("=" * 50)

    all_tests_pass = True

    # Test dependencies
    if not test_dependencies():
        all_tests_pass = False

    # Test environment
    if not test_environment():
        all_tests_pass = False
        return

    # Test Gemini API
    if not test_gemini_api():
        all_tests_pass = False

    print("\n" + "=" * 50)
    if all_tests_pass:
        print("🎉 All checks passed! You're ready to go!")
        print("\nNext steps:")
        print("  1. Run: python main.py")
        print("  2. Open: http://localhost:8000/docs")
        print("  3. Frontend is at: http://localhost:3000")
    else:
        print("⚠️  Some checks failed. Please fix the issues above.")
    print("=" * 50)


if __name__ == "__main__":
    main()
