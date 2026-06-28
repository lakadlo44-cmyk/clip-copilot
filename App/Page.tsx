"use client";

import CampaignForm from "@/components/CampaignForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-3">
          🎬 ClipPilot AI
        </h1>

        <p className="text-gray-400 mb-10">
          Upload campaign assets and instantly generate viral Reel ideas using Gemini AI.
        </p>

        <CampaignForm />

      </div>
    </main>
  );
}
