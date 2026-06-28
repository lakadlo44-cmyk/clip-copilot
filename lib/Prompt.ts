export function buildPrompt(
campaign:string,
rules:string
){

return `

You are the world's best viral content strategist.

Campaign:
${campaign}

Rules:
${rules}

Generate EXACTLY 5 Instagram Reel ideas.

Each idea must contain:

Title

Hook

Clip Timestamp

On Screen Text

Caption

Hashtags

Audio Instructions

Compliance Checklist

Viral Score out of 100

Return ONLY valid JSON.

`;
}
