'use server'

import { Feature } from './actions';
interface RICEScore {
  id: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
  score: number;
}

interface MoSCoWCategory {
  id: string;
  category: "Must Have" | "Should Have" | "Could Have" | "Won't Have";
}

interface MoSCoWAnalysisResult {
  features: MoSCoWCategory[];
}

interface GeneralFeedback {
  feedback: string;
  list: string[];
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

export async function performMoSCoWAnalysis(feature: Feature | null, features: Feature[]): Promise<MoSCoWAnalysisResult> {
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
          content: "You are a product manager expert in MoSCoW prioritization. Categorize the given features using the MoSCoW method. Respond only with a valid JSON object in the specified format."
        },
        {
          role: "user",
          content: `Categorize these features using the MoSCoW method: ${JSON.stringify(features)}. Respond with a JSON array where each object has the structure: { "id": string, "category": string }. The category must be one of: "Must Have", "Should Have", "Could Have", "Won't Have". Do not include any explanations or additional text.`
        }
      ],
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();
  const moscowCategories = JSON.parse(data.choices[0].message.content);

  console.log(moscowCategories);

  return moscowCategories;
}

export async function getGeneralFeedback(feature: Feature | null, features: Feature[], riceScores: RICEScore[], moscowCategories: MoSCoWCategory[]): Promise<GeneralFeedback> {
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
          content: "You are a product manager expert in feature prioritization. Analyze the given features, RICE scores, and MoSCoW categories to provide feedback and prioritize the features."
        },
        {
          role: "user",
          content: `Analyze these features: ${JSON.stringify(features)}, with RICE scores: ${JSON.stringify(riceScores)}, and MoSCoW categories: ${JSON.stringify(moscowCategories)}. Provide general feedback and a prioritized list of feature IDs. Respond with a JSON object containing 'feedback' (string) and 'list' (array of feature IDs in priority order).`
        }
      ],
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();
  const result = JSON.parse(data.choices[0].message.content);

  console.log(result);

  return result;
}
