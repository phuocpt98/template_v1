
import { GoogleGenAI, Type } from "@google/genai";

// Kiểm tra an toàn để tránh crash khi deploy lên GitHub Pages
const getApiKey = () => {
  try {
    return process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getTemplateRecommendation = async (userInput: string) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.error("API Key is missing. AI features will not work.");
    return {
      category: "General",
      reasoning: "AI Assistant is currently unavailable in this preview environment. Please check back later.",
      tips: ["Please contact us directly for personal consultation."]
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants a web template. Context: ${userInput}. Recommend the best category from: Wedding, Hotel, Portfolio, Business, Restaurant and explain why. Keep it professional and short.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            tips: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["category", "reasoning"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return null;
  }
};
