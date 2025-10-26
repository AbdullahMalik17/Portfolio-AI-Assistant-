# Portfolio AI Assistant - Python Backend

Backend API server built with FastAPI and Google Gemini AI SDK integration.

## Features

- 🚀 **FastAPI** - Modern, fast Python web framework
- 🤖 **Gemini AI Integration** - Google Gemini AI for intelligent responses
- 📧 **Contact Form** - Handle contact form submissions
- 💬 **AI Chat** - Conversational AI assistant endpoint
- 🔒 **CORS Enabled** - Configured for frontend integration

## Setup

### 1. Create Virtual Environment

```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On Linux/Mac
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Copy `env.example` to `.env` and add your Gemini API key:

```bash
copy env.example .env
```

Edit `.env`:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 4. Run the Server

```bash
python main.py
```

Or with uvicorn directly:
```bash
uvicorn main:app --reload
```

Server will run at: http://localhost:8000

## API Endpoints

### Health Check
```
GET /health
```

### Root
```
GET /
```

### Contact Form
```
POST /api/contact
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

### AI Assistant Info
```
GET /api/assistant/info
```

### AI Chat
```
POST /api/assistant/chat
Body: {
  "message": "Hello, AI!"
}
```

### Project Suggestions
```
POST /api/assistant/suggest-project
Body: "I want to build an e-commerce site"
```

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env` file

## Development

### Project Structure
```
backend/
├── main.py              # FastAPI server
├── routes/
│   ├── contact.py       # Contact form handler
│   └── assistant.py     # AI assistant routes
├── agents/
│   └── gemini_agent.py  # Gemini AI integration
├── requirements.txt     # Python dependencies
└── env.example          # Environment variables template
```

## Testing

Run with pytest:
```bash
pytest
```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

