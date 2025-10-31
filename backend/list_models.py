"""
Quick script to list available Gemini models
"""

import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
print(f"API Key: {api_key[:10]}..." if api_key else "No API key found")

try:
    genai.configure(api_key=api_key)
    print("\n✅ Successfully configured Gemini API\n")
    print("Available models that support generateContent:\n")

    models = genai.list_models()
    for m in models:
        if "generateContent" in m.supported_generation_methods:
            print(f"  - {m.name}")
            print(f"    Display Name: {m.display_name}")
            print(
                f"    Description: {m.description[:100] if m.description else 'N/A'}..."
            )
            print()

except Exception as e:
    print(f"❌ Error: {e}")
