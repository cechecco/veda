'use server'

import OpenAI from 'openai';
import { Feature } from './actions';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatContext {
  feature: Feature | null;
  features: Feature[];
}

interface ChatError {
  error: string;
}

export async function getChatGPTResponse(message: string, context: ChatContext): Promise<ChatContext | ChatError> {
  try {
    const systemMessage = `You are an AI assistant for a feature management system. Your task is to modify the current feature and its sub-features based on the user's request. The user may also request the creation of one or more new features. In this case, generate objects with random UUIDs for the new features. Only return the modified or newly created objects in JSON format. The JSON should follow this structure:
    {
      "feature": {
        "id": string,
        "name": string,
        "description": string,
        "parentId": string | null,
        "type": "project" | "feature"
      },
      "features": [
        {
          "id": string,
          "name": string,
          "description": string,
          "parentId": string | null,
          "type": "project" | "feature"
        }
      ]
    }
    Current context: ${JSON.stringify(context)}`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: message }
      ],
      model: 'gpt-3.5-turbo',
    });

    const response = completion.choices[0].message.content;
    
    if (!response) {
      return { error: "No response generated" };
    }

    try {
      return JSON.parse(response);
    } catch (parseError) {
      console.error('Error parsing ChatGPT response as JSON:', parseError);
      return { error: "Invalid JSON response" };
    }

  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    return { error: "Error processing request" };
  }
}
