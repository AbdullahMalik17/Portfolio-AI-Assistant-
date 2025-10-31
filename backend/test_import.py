"""
Simple import test to check for errors in main.py
"""

print("Testing imports...")

try:
    print("1. Importing FastAPI...")
    from fastapi import FastAPI

    print("   ✅ FastAPI imported")

    print("2. Importing dotenv...")
    from dotenv import load_dotenv

    print("   ✅ dotenv imported")

    print("3. Importing routes...")
    from routes import contact, assistant

    print("   ✅ routes imported")

    print("4. Loading .env...")
    load_dotenv()
    print("   ✅ .env loaded")

    print("5. Importing main module...")
    import main

    print("   ✅ main module imported")

    print("\n✅ All imports successful! No errors found.")
    print("\nYou can now run: python main.py")

except ImportError as e:
    print(f"\n❌ Import Error: {e}")
    print("\nPlease check:")
    print("  1. All dependencies are installed: pip install -r requirements.txt")
    print("  2. You're in the correct directory (backend/)")

except Exception as e:
    print(f"\n❌ Error: {e}")
    import traceback

    traceback.print_exc()
