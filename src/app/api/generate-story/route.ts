import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userPrompt = url.searchParams.get("prompt") || "";

  if (!userPrompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_API_KEY as string
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `${userPrompt}, separated by commas, like 1.) Apple - Tim Cook, there must be no other text other than the list`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const entries = text.split(",");

    const data = await Promise.all(
      entries.map(async (entry) => {
        const [title, detail] = entry.trim().split(" - ");
        const imageUrl = await fetchImage(detail.trim());
        return { title: title.trim(), detail: detail.trim(), imageUrl };
      })
    );

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function fetchImage(query: string): Promise<string> {
  try {
    const url = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(
      query
    )}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const imageUrl = $("img").first().attr("src");
    return imageUrl || "";
  } catch (error) {
    console.error(`Error fetching image for ${query}:`, error);
    return "";
  }
}
