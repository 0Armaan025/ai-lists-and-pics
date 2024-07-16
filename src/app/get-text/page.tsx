"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

export default function GetText() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState<any[]>([]);
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
      const responseData = await response.json();
      setData(responseData.data || []);
    } catch (error) {
      console.error("Error generating story:", error);
      alert("Failed to generate story.");
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
          className="px-4 py-2 mb-4  bg-black text-white cursor-pointer mt-4 rounded-sm"
          style={{ fontFamily: "Poppins" }}
          disabled={loading}
        />
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="mt-4 mb-4"
            style={{ maxWidth: "80%", margin: "0 auto" }}
          >
            <table
              className="table-auto w-full border-collapse border border-black"
              style={{ fontFamily: "Poppins" }}
            >
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-black px-4 py-2">Title</th>
                  <th className="border border-black px-4 py-2">Detail</th>
                  <th className="border border-black px-4 py-2">Image</th>
                </tr>
              </thead>
              <tbody className="mb-4">
                {data.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="border border-black px-4 py-2">
                      {item.title}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {item.detail}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={`${item.detail}'s image`}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        "No Image Available"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
          </div>
        )}
      </center>
    </div>
  );
}
