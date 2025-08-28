import { verify } from "crypto";

export const settingslocators = {
 CoPilot:(CopilotButton:string) =>`//span[text()="${CopilotButton}"]/preceding-sibling::span/span/input`,
 ChatInitialMessage:'#chatInitialMessage',
 OutdatedChatMessage:'#outdatedRequestReplyMessage-message',
 ChunkSizeLimitInput: (value: string) => `(//input[@id='chat_chunk_size_limit' and @value='${value}'])`,
 ChunkSizeLimitInputField: (index: number) => `(//input[@id="chat_chunk_size_limit"])[${index+1}]`,
}
  