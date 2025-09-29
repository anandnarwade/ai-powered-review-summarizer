import OpenAI from "openai";
import { conversationRepository } from "../repositories/conversation.repository";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

type ChatResponse = {
    id: string;
    message: string;     
}

//public interface
//Leaky abstraction
export const chatService = {
    async sendMessage(prompt: string, conversationId: string) : Promise<ChatResponse> {
         
         const response = await client.responses.create({
         //model: 'gpt-5-mini',
         model: 'gpt-4o-mini',
        // model: 'gpt-5-nano',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id: conversationRepository.getLastresponseId(conversationId),
        });
     
        conversationRepository.setLastresponseId(conversationId, response.id);
        return {
            id: response.id,
            message: response.output_text   
        };
    }
}