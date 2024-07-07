// src/app/api/generateStory/route.ts

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userPrompt = url.searchParams.get("prompt") || "";

  if (!userPrompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(
    "xxx"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `${userPrompt}, separated by commas, like 1.) Apple - Tim Cook, there must be no other text other than the list`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Split the response text into individual entries
    const entries = text.split(",");

    // Process each entry to extract company and name
    const data = entries.map((entry) => {
      const [company, name] = entry.trim().split(" - ");
      return { company: company.trim(), name: name.trim() };
    });

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
