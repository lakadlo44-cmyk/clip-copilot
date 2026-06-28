import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";
import { buildPrompt } from "@/lib/prompt";

export async function POST(req: Request) {

  const body = await req.json();

  const prompt = buildPrompt(
    body.campaign,
    body.rules
  );

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  try {

    const ideas = JSON.parse(text);

    return NextResponse.json({
      ideas
    });

  } catch {

    return NextResponse.json({
      ideas: [
        {
          title: "Gemini Output",
          hook: text,
          text: "",
          caption: "",
          hashtags: "",
          score: 90
        }
      ]
    });

  }

}
