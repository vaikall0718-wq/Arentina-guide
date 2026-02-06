import { GoogleGenAI } from "@google/genai";
import { WORLD_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    if (!process.env.API_KEY) {
      console.warn("API Key not found in environment variables.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return ai;
};

export const chatWithChronicler = async (
  userMessage: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  const client = getAIClient();
  
  // Prepare system instruction with World Data context
  const systemInstruction = `
    당신은 '아렌티나 대륙'의 역사를 기록하는 '연대기 기록자(Chronicler)'입니다.
    사용자의 질문에 대해 아래 제공된 세계관 설정을 바탕으로 대답하세요.
    
    [세계관 설정 데이터]
    ${JSON.stringify(WORLD_DATA, null, 2)}
    
    [지침]
    1. 말투는 고풍스럽고 신비로운 판타지 사서나 현자처럼 하세요. (~하게나, ~이라네, ~군요 등의 어미 사용)
    2. 설정에 없는 내용은 "그 부분은 아직 역사서에 기록되지 않았습니다."라고 정중히 거절하거나, 세계관의 분위기에 맞춰 적절히 답변하세요(단, 사실인 것처럼 날조하지 마세요).
    3. 각 국가의 관점을 물어보면, 해당 국가의 입장에서 서술하세요 (예: 제국에 대해 묻는다면 제국의 위엄을, 신성국에 대해 묻는다면 신앙심을 강조).
    4. 답변은 한국어로 하세요.
    5. 너무 길지 않게, 핵심을 요약하여 전달하세요.
  `;

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct prompt with history manually since we are doing a single turn generation for simplicity in this demo context
    // Ideally use chat.sendMessage, but stateless request is safer for simple demo components
    const contents = [
      { role: 'user', parts: [{ text: `System Instruction: ${systemInstruction}` }] },
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await client.models.generateContent({
      model,
      contents,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Flash doesn't support thinking, explicit disable
      }
    });

    return response.text || "기록을 찾을 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "오류가 발생하여 연대기를 펼칠 수 없습니다. (API Key를 확인해주세요)";
  }
};