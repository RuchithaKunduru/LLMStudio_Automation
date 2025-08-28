import { verify } from "crypto";

export const settingslocators = {
 coPilot:(CopilotButton:string) =>`//span[text()="${CopilotButton}"]/preceding-sibling::span/span/input`,
 chatInitialMessage:'#chatInitialMessage',
 outdatedChatMessage:'#outdatedRequestReplyMessage-message',
 chunkSizeLimitInput: (value: string) => `(//input[@id='chat_chunk_size_limit' and @value='${value}'])`,
 chunkSizeLimitInputField: (index: number) => `(//input[@id="chat_chunk_size_limit"])[${index+1}]`,
}
  