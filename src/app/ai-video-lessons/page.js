'use client';

import React, { useState } from 'react';

export default function AIVideoGenerator() {
  const [curriculum, setCurriculum] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <div className="relative min-h-screen px-4 py-8 flex flex-col items-center text-[#a0c4ff] overflow-hidden" style={{ background: 'linear-gradient(135deg, #000, #0c0e17, #1a1c2b)' }}>
      {/* Star Animation Layer */}
      <div className="absolute top-0 left-0 w-full h-full stars" />

      {/* Feature Box Container */}
      <div className="features">
        <div className="feature text-[#a0c4ff]">
          <h1 className="text-3xl font-bold mb-4 text-center">
            AI-Generated Video Lessons
          </h1>

          <p className="text-sm mb-6 text-center">
            Convert text-based curriculum into auto-generated video lessons with local language narration.
          </p>

          <textarea
            rows={8}
            value={curriculum}
            onChange={(e) => setCurriculum(e.target.value)}
            placeholder="Paste your curriculum text here..."
            className="w-full p-4 rounded-md bg-gray-700 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
          />

          <div className="mb-4">
            <label className="block text-sm mb-1">Select Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
              <option value="ta">Tamil</option>
              <option value="bn">Bengali</option>
              <option value="mr">Marathi</option>
            </select>
          </div>

          <button
          disabled={!curriculum.trim()}
          className="w-full bg-[#4361ee] hover:bg-[#4895ef] text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Video Lesson
        </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .stars {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px);
          background-size: 100px 100px;
          background-repeat: repeat;
          animation: moveUp 20s linear infinite;
          z-index: 0;
        }

        @keyframes moveUp {
          0% {
            background-position-y: 0;
          }
          100% {
            background-position-y: -160px;
          }
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          max-width: 700px;
          z-index: 1;
        }

        .feature {
          background-color: rgba(255, 255, 255, 0.07);
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 0 24px rgba(160, 100, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
}
