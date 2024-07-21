import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const fetchImage = async (query: string) => {
  try {
    const url = `https://some-api-ten.vercel.app/get-image/${encodeURIComponent(
      query
    )}`;
    const { data } = await axios.get(url);

    const imageUrl = data?.full_image_url || "";
    return imageUrl;
  } catch (error) {
    console.error(`Error fetching image for ${query}:`, error);
    return "";
  }
};

export async function GET(request: any) {
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

    const entries = text.split("\n").filter((entry) => entry.trim() !== "");

    const uniqueEntries = new Set();
    const data = [];

    for (const entry of entries) {
      const [title, detail] = entry.split(" - ");
      const company = detail.trim();
      if (!uniqueEntries.has(company)) {
        uniqueEntries.add(company);
        const imageUrl = await fetchImage(title);
        data.push({ title: title.trim(), detail: company, imageUrl });
      }
    }

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
