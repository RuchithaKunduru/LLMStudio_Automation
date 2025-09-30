import { Given, When, Then } from '@cucumber/cucumber';
import { ChatbotPage } from '../pages/chatbotPage';

let chatbotPage: ChatbotPage;

Given('user clicks on chatbot icon', async function () {
    const chatbotPage = new ChatbotPage(this.page!);
    await chatbotPage.clickChatbot();
});

When('user sends message {string}',{ timeout: 60000 }, async function (message: string) {
    const chatbotPage = new ChatbotPage(this.page!);
    await chatbotPage.sendMessage(message);
});

Then('chatbot should reply with a greeting', async function () {
    const chatbotPage = new ChatbotPage(this.page!);
    await chatbotPage.verifyResponseContains(/hello|hi/i);
});