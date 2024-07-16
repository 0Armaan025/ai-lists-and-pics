import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import * as cheerio from "cheerio";

const fetchImage = async (query: string): Promise<string> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_SERPAPI_KEY;
    const url = `https://serpapi.com/search.json?q=${encodeURIComponent(
      query
    )}&engine=google_images&api_key=${apiKey}`;
    const { data } = await axios.get(url);

    
    const imageUrl = data?.images_results?.[0]?.thumbnail || "";

    return imageUrl;
  } catch (error) {
    console.error(`Error fetching image for ${query}:`, error);
    return "";
  }
};

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

  const prompt = `${userPrompt}, separated by commas, like 1.) Title - SubTitle, there must be no other text other than the list`;

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
