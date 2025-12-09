import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateScript(prompt: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export async function generateImage(prompt: string) {
    const model = genAI.getGenerativeModel({ model: "imagemodel" });
    const result = await model.generateContent(prompt);
    return result.response.candidates[0].content.parts[0].inlineData.data;
}

// 필요할 때 추가:
export async function generateCharacterSheet(prompt: string) { /*...*/ }
export async function generateIdeas(prompt: string) { /*...*/ }
export async function generateInstagramPost(prompt: string) { /*...*/ }
export async function generateContinuationScript(prompt: string) { /*...*/ }
