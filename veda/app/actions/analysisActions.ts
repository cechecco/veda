'use server'

import { Feature } from '../dashboard/actions';
interface RICEScore {
  id: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
  score: number;
}

export async function calculateRICE(feature: Feature | null, features: Feature[]) {
  const responseStructure: RICEScore[] = [];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a product manager expert in RICE prioritization. Calculate the RICE score for the given features. Respond only with a valid JSON object in the specified format. The response must be a valid JSON array where each object has the structure: { \"id\": string, \"reach\": number, \"impact\": number, \"confidence\": number, \"effort\": number, \"score\": number }."
        },
        {
          role: "user",
          content: `Calculate the RICE score for these features: ${JSON.stringify(features)}. Do not include any explanations or additional text.`
        }
      ],
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();

  // console.log(data.choices[0].message);
  const riceScores = JSON.parse(data.choices[0].message.content);

  console.log(riceScores)

  return riceScores
}

export async function performMoSCoWAnalysis(feature: Feature | null, features: Feature[]) {
  // Implement MoSCoW analysis logic here
  // This is a placeholder implementation
  const categories = ["Must Have", "Should Have", "Could Have", "Won't Have"];
  return categories.reduce((acc, category) => {
    acc[category] = Math.random() > 0.5;
    return acc;
  }, {} as Record<string, boolean>);
}

export async function getGeneralFeedback(feature: Feature | null, features: Feature[]) {
  // Implement general feedback logic here
  // This is a placeholder implementation
  return "This is a general feedback about the feature and its analysis.";
}
