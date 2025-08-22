import { Given, When, Then } from "@cucumber/cucumber";
import { AssistantPage } from "../pages/newAssistantPage";
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

When("the message is displayed, user click the No button", async function () {
  await this.page.waitForTimeout(3000);
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickNoButton();
});

Then("user should be able to see the AI Assistant name", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyAIAssistantName();
});

Given("user go back to the main dashboard",async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickLLMStudioImage();
});

Given("user clicks the list of assistants", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickListOfAssistants();
});

When("user selects the {string}", async function (assistant: string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickPublishedAssistant(assistant);
});

Then(
  "user should be able to see the list of filtering assistants",
  async function () {
    const assistantPage = new AssistantPage(this.page!);
    await assistantPage.verifyFilteringAssistants();
  }
);

When("user searches for the assistant", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.searchAssistant(assistant);
});

When("user clicks on the options menu for the assistant", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.optionsMenuForAssistant();
});

Then(
  "the assistant should be deleted successfully",
  async function () {
    const assistantPage = new AssistantPage(this.page!);
    await assistantPage.verifyDeleteMessage();
  }
);

When(
  "user searches for any existing assistant {string}",
  async function (eaName: string) {
    await this.page.waitForTimeout(5000);
    const assistantPage = new AssistantPage(this.page!);
    await assistantPage.searchExistingAssistant(eaName);
  }
);

When("user clicks on search assistant", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickSearchAssistant();
});

When("user clicks on the {string} assistant", async function (archieve:string) {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.clickArchiveButton(archieve);
});

When("user clicks on the options menu for the unarchieve assistant", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.optionsMenuForUnArchiveAssistant();
});

Then("the assistant should be archived successfully", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyArchiveMessage();
});

Then("the assistant should be unarchived successfully", async function () {
  const assistantPage = new AssistantPage(this.page!);
  await assistantPage.verifyUnArchiveMessage();
});