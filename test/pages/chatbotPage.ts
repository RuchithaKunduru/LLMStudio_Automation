import { Page, expect } from '@playwright/test';
import { chatbotLocators } from '../locators/chatbot.locators';

export class ChatbotPage {
  constructor(private page: Page) {}

  async clickChatbot(){
    await this.page.click(chatbotLocators.chatbotIcon);
  }

  async sendMessage(message: string) {
    await this.page.click(chatbotLocators.inputField);
    await this.page.fill(chatbotLocators.inputField, message);
    await this.page.press(chatbotLocators.inputField, 'Enter');

    await this.page.waitForSelector(chatbotLocators.responseText, { state: 'visible', timeout: 60000 });
  }

  async verifyResponseContains(expectedText: string | RegExp) {
    const responses = this.page.locator(chatbotLocators.responseText);
    await expect(responses.last()).toContainText(expectedText, { timeout: 60000 });
  }
}