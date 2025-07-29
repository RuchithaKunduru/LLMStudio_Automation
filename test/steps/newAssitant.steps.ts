import { Given, When, Then } from "@cucumber/cucumber";
import { AssistantPage } from "../pages/newAssistantPage";
import { expect } from '@playwright/test';
import { generateRandomName } from "../../utils/generteRandomName";

let assistant: string;

When("user clicks on {string} button", async function (string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickCreateNewAssistant();
});

When("provides the assistant name {string}", async function (name: string) {
  const assistantPage = new AssistantPage(this.page!);
  const randomName = generateRandomName(name);
  this.assistantName = randomName;
  assistant = randomName; 
  console.log("Generated Assistant Name:", randomName); 
  await assistantPage.verifyAssistantName(randomName);
});

When("selects the assistant type as {string}", async function (type: string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyAssistantType(type);
});

When("clicks on vector database as {string}", async function (db: string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyVectorDatabase(db);
});

When("provides the description {string}", async function (desc: string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyDescription(desc);
});

When("user clicks on the {string} button", async function (string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickCreateButton();
});

When("the message is displayed, I click the No button", async function () {
  await this.page.waitForTimeout(3000);
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickNoButton();
});

Then("I should be able to see the AI Assistant name", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyAIAssistantName();
});

Given("user clicks the list of assistants", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickListOfAssistants();
});

When("user selects the {string}", async function (aName: string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickPublishedAssistant(aName);
});

Then(
  "user should be able to see the list of filtering assistants",
  async function () {
    const assistantPage = new AssistantPage(this.page!);
    await assistantPage.verifyFilteringAssistants();
  }
);

When("user selects the Archived Assistant", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickArchievedAssistant();
});

When('user searches for the assistant', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.searchAssistant(assistant);
});

When('user clicks on the options menu for the assistant', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.optionsMenuForAssistant();
});

When('user deletes the assistant', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickDeleteButton();
});

When('user clicks on confirm delete button', async function () {
  const assistantPage = new AssistantPage(this.page!);    
  await assistantPage.clickConfirmDeleteButton();
});

Then('the assistant should no longer be visible in the list', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyDeleteMessage();
});

When('user searches for any existing assistant {string}', async function(eaName: string) {
  await this.page.waitForTimeout(5000);
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.searchExistingAssistant(eaName);
});

When('user archieves the assistant', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickArchiveButton();
});

When('user clicks on confirm archieve button', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickConfirmArchiveButton();
});

Then('the assistant should be archived successfully', async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyArchiveMessage();
});