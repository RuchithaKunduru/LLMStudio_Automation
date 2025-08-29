import { Given, When, Then } from "@cucumber/cucumber";
import { EditPage } from "../pages/editPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";
import { generateRandomName } from "../../utils/generteRandomName";


When("user search AI Assistant {string}", async function (string) {
  const editPage = new EditPage(this.page!);
  await editPage.searchAssistant(string);
});

Then("user should see details about assistant", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.verifyAssistantPage();
});

//Edit Description
When("user provides the project description {string} in edit section", async function (description: string) {
  const editPage = new EditPage(this.page!);
  const randomDescription = generateRandomName(description);
  this.projectDescription = randomDescription;
  await editPage.editDescription("Project Description", randomDescription);
});

//Edit AI-Assistant Name
When("user provides the assistant name {string} in edit section", async function (name: string) {
  const editPage = new EditPage(this.page!);
  const randomName = generateRandomName(name);
  this.assistantName = randomName;
  console.log("Generated Assistant Name:", randomName);
  await editPage.verifyAssistantName(randomName);
});

//Edit Contact options
When("user provides the contact options {string} in edit section", async function (contact: string) {
  const editPage = new EditPage(this.page!);
  const randomContact = generateRandomName(contact);
  this.contactOption = randomContact;
  await editPage.editContactOptions(randomContact);
});

//Verify Success message
Then("user should see success message", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.verifySuccessMessage();
});


