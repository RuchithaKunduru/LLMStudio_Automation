import { Given, When, Then } from "@cucumber/cucumber";
import { SettingsPage } from "../pages/settingsPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";
import { expect } from "@playwright/test";

// Co-Pilot button enabled and disabled
When("user click on {string} radio button", async function (CopilotButton: string) {
  const settingsPage = new SettingsPage(this.page!);
  await settingsPage.clickButtonText(CopilotButton);
})

// Send text in Chat Initial Message
When('user enter text in Chat Initial Message input box', async function () {
  const settingsPage = new SettingsPage(this.page!);
  await settingsPage.ChatInitialMessage("Hi How may I help You??");
});

Then('Chat Initial Message input box should contain {string}', async function (expectedText: string) {
  const settingsPage = new SettingsPage(this.page!);
  const actualText = await settingsPage.validateChatInitialMessage();
  expect(actualText).toBe(expectedText);
});

// Send text in Outdated Chat reply Message
When('user enter text in Outdated Chat reply Message input box', async function () {
  const settingsPage = new SettingsPage(this.page!);
  await settingsPage.OutdatedChatreplyMessage("Ok, got it. Let me work on it and I’ll get back to you in a moment.");
});

Then('Chat Outdated Chat input box should contain {string}', async function (expectedText: string) {
  const settingsPage = new SettingsPage(this.page!);
  const actualText = await settingsPage.validateOutdatedChatreplyMessage();
  expect(actualText).toBe(expectedText);
});

//Update Chunk Size Limit,Chunk Upper Size Limit,Chunk Lower Size Limit
When('user edit {string} as {string} for chunk size', async function (fieldName: string, value: string) {
  const settingsPage = new SettingsPage(this.page!);
  if (fieldName === "Chunk Size Limit") {
    await settingsPage.enterChunkSize(value, 0);
  } else if (fieldName === "Chunk Upper Size Limit") {
    await settingsPage.enterChunkSize(value, 1);
  } else if (fieldName === "Chunk Lower Size Limit") {
    await settingsPage.enterChunkSize(value, 2);
  }
});

Then('{string} should be {string}', async function (fieldName: string, value: string) {
  const settingsPage = new SettingsPage(this.page!);
  if (fieldName === "Chunk Size Limit") {
    await settingsPage.verifyChunkSize(value, 0);
  } else if (fieldName === "Chunk Upper Size Limit") {
    await settingsPage.verifyChunkSize(value, 1);
  } else if (fieldName === "Chunk Lower Size Limit") {
    await settingsPage.verifyChunkSize(value, 2);
  }
});


