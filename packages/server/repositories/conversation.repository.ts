//Implementaion detail
const conversations = new Map<string, string>();

export const conversationRepository = {
    
    getLastresponseId(conversationId: string) {
    return conversations.get(conversationId);
    },
    
    setLastresponseId(conversationId: string, responseId: string){
    return conversations.set(conversationId, responseId);
    }
}

