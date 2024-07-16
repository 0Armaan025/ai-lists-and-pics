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
          className="px-4 py-2 bg-black text-white cursor-pointer mt-4 rounded-sm"
          style={{ fontFamily: "Poppins" }}
          disabled={loading}
        />
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table
            style={{
              fontFamily: "Poppins",
              marginTop: "20px",
              width: "80%",
              borderCollapse: "collapse",
            }}
            border={1}
          >
            <thead>
              <tr>
                <th style={{ padding: "8px" }}>Title</th>
                <th style={{ padding: "8px" }}>Detail</th>
                <th style={{ padding: "8px" }}>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "8px" }}>{item.title}</td>
                  <td style={{ padding: "8px" }}>{item.detail}</td>
                  <td style={{ padding: "8px" }}>
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={`${item.detail}'s image`}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      "No Image Available"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </center>
    </div>
  );
}
