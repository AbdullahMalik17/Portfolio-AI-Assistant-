import { NextResponse } from 'next/server';

// Ensure this route runs on Node.js (not edge)
export const runtime = 'nodejs';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatRequest = {
  message: string;
  conversation_history?: ChatMessage[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequest;
    const { message, conversation_history } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid request: message is required' },
        { status: 400 }
      );
    }

    const apiKey = "AIzaSyC3FiyU_iCC3jDs1eMNUekwvMqrGUarDDs";
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'Server not configured: GEMINI_API_KEY missing' },
        { status: 503 }
      );
    }

    // Import dynamically to avoid bundling issues when key is missing
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const system =
      'You are an assistant that answers questions about the portfolio owner in a concise, friendly, professional tone. If asked for private data (addresses, phone, secrets), politely decline. If unsure, say you are unsure.The Name of Owner is Abdullah Malik. He is a software engineer and AI enthusiast.He has learnt HTML, CSS , JavaScript , TypeScript , Python , OpenAI Agent SDK ,N8n ,GIT & Github .He will also learnt Agent kit . The Link of his Repository is [Link](https://github.com/AbdullahMalik17/AbdullahMalik17). He made project of Web DEvelopment and its github link is [link](https://github.com/AbdullahMalik17/Projects-of-html). He made many Chabot as [link](https://github.com/AbdullahMalik17/Agentic_AI/tree/main/_Projects)';

    // Build prompt with simple history
    const historyText = (conversation_history || [])
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n');
    const prompt = `${system}\n\n${historyText ? historyText + '\n\n' : ''}User: ${message}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const text =
      result.response?.text?.() ??
      (
        (Array.isArray((result as any).candidates) &&
          (result as any).candidates[0]?.content?.parts?.[0]?.text) ||
        'I apologize, but I could not generate a response.'
      );

    return NextResponse.json({ success: true, response: text, model: 'gemini-2.5-flash' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}


