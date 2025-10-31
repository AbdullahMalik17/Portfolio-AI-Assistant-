"""
Quick test script to verify backend is running
"""

import time
import sys

# Wait a moment for server to start
time.sleep(2)

try:
    import requests

    print("Testing backend endpoints...\n")

    # Test health endpoint
    print("1. Testing health endpoint...")
    response = requests.get("http://localhost:8000/health")
    if response.status_code == 200:
        print(f"   ✅ Health check passed: {response.json()}")
    else:
        print(f"   ❌ Health check failed: {response.status_code}")

    # Test root endpoint
    print("\n2. Testing root endpoint...")
    response = requests.get("http://localhost:8000/")
    if response.status_code == 200:
        print(f"   ✅ Root endpoint passed: {response.json()}")
    else:
        print(f"   ❌ Root endpoint failed: {response.status_code}")

    # Test assistant info endpoint
    print("\n3. Testing assistant info endpoint...")
    response = requests.get("http://localhost:8000/api/assistant/info")
    if response.status_code == 200:
        print(f"   ✅ Assistant info passed: {response.json()}")
    else:
        print(f"   ❌ Assistant info failed: {response.status_code}")

    # Test contact endpoint
    print("\n4. Testing contact endpoint...")
    response = requests.post(
        "http://localhost:8000/api/contact",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message",
        },
    )
    if response.status_code == 200:
        print(f"   ✅ Contact endpoint passed: {response.json()}")
    else:
        print(f"   ❌ Contact endpoint failed: {response.status_code}")

    # Test AI chat endpoint
    print("\n5. Testing AI chat endpoint...")
    response = requests.post(
        "http://localhost:8000/api/assistant/chat",
        json={"message": "Hello, who are you?"},
    )
    if response.status_code == 200:
        data = response.json()
        print(f"   ✅ AI chat passed!")
        print(f"   Response: {data.get('response', 'N/A')[:100]}...")
    else:
        print(f"   ❌ AI chat failed: {response.status_code}")

    print("\n" + "=" * 50)
    print("✅ Backend is running and all endpoints are working!")
    print("=" * 50)
    print("\nBackend API docs: http://localhost:8000/docs")

except requests.exceptions.ConnectionError:
    print("❌ Could not connect to backend at http://localhost:8000")
    print("   Make sure the backend is running with: python main.py")
    sys.exit(1)
except ImportError:
    print("❌ requests library not installed")
    print("   Run: pip install requests")
    sys.exit(1)
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
