import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI with your secret API key from .env.local
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // The System Prompt: This is where you give the AI its personality and rules.
    const systemMessage = {
      role: "system",
      content: `You are the virtual receptionist for ASAP Autobody & Refinishing in Smithville, ON. 
      Your tone is professional, helpful, and concise. 
      You can speak English and Mandarin. Always reply in the language the user speaks to you.
      
      CORE SERVICES: Collision repair, paint & refinishing, rust restoration, frame straightening, dent removal, classic car specialty.
      CONTACT INFO: Phone: 289-237-8359. Address: 2952 Thompson Rd, Smithville.
      
      RULES: 
      1. Never give exact price quotes. Always encourage them to bring the car in for a free estimate or upload photos.
      2. If asked about mechanics, engines, or performance tuning, refer them to our partner: MFP Auto Service.
      3. Never break character. You only talk about autobody repair.`
    };

    // Send the conversation history to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Fast, cheap, and smart enough for customer service
      messages: [systemMessage, ...messages],
      temperature: 0.3, // Keeps the AI focused and less creative/hallucinatory
    });

    return NextResponse.json({ 
      reply: response.choices[0].message.content 
    });

  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}