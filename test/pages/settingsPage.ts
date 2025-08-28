import { Page, expect } from '@playwright/test';
import { settingslocators } from '../locators/settings.locators';
import { randomUUID } from 'crypto';

export class SettingsPage {
constructor(public page: Page) {}

async clickButtonText(CopilotButton: string) {
    await this.page.click(settingslocators.coPilot(CopilotButton));
}

async chatInitialMessage(text: string) {
      await this.page.fill(settingslocators.chatInitialMessage, text);
}

async validateChatInitialMessage() {
  return await this.page.inputValue(settingslocators.chatInitialMessage);
}

async outdatedChatreplyMessage(text: string) {
     await this.page.fill(settingslocators.outdatedChatMessage, text);
}

async validateOutdatedChatreplyMessage() {
  return await this.page.inputValue(settingslocators.outdatedChatMessage);
}

async enterChunkSize(value: string, index: number = 0) {
  const input = this.page.locator(settingslocators.chunkSizeLimitInputField(index));
  await input.click({ clickCount: 3 }); // Clear the field first
  await this.page.keyboard.press('Backspace');
  await input.fill(value);  // Fill new value
}

async verifyChunkSize(value: string, index: number = 0) {
  const input = this.page.locator(settingslocators.chunkSizeLimitInputField(index));
  await expect(input).toHaveValue(value);
}
}