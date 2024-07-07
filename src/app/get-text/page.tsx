// src/app/page.tsx
"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

export default function GetText() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `/api/generate-story?prompt=${encodeURIComponent(prompt)}`
      );
      const data = await response.json();
      setStory(
        data.text ||
          data.data
            .map((leader: any) => `${leader.company} - ${leader.name}`)
            .join(", ")
      );
    } catch (error) {
      console.error("Error generating story:", error);
      setStory("Failed to generate story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <center>
        <h3 style={{ fontFamily: "Poppins" }} className="text-3xl mt-4">
          Let's generate 😎
        </h3>
        <br />
        <input
          type="text"
          placeholder="Eg: Top Tech Companies' CEO(s)"
          className="px-4 py-2 border-2 border-black w-80"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <input
          type="button"
          value="Generate!"
          onClick={generateStory}
          className="px-4 py-2 bg-black text-white cursor-pointer mt-4 rounded-sm"
          style={{ fontFamily: "Poppins" }}
          disabled={loading}
        />
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p style={{ fontFamily: "Poppins", marginTop: "20px" }}>{story}</p>
        )}
      </center>
    </div>
  );
}
