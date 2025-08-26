import { Given, When, Then } from "@cucumber/cucumber";
import { EditPage } from "../pages/editPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";

When("user search AI Assistant {string}", async function (string) {
  const loginPage = new EditPage(this.page!);
  await loginPage.searchAssistant(string);
});

Then("user should see details about assistant", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.verifyAssistantPage();
});

When("user clicks on assistant Project details", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.projectDetails();
});

Then("user should see assistant Project page", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.verifyEditButton();
});
When("user clicks on edit link", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.clickEditLink();
});

//Edit Project Details
When("user edit {string} as {string}", async function (string, string2) {
  const loginPage = new EditPage(this.page!);
  await loginPage.EditProjectDetails(string, string2);
});
Then("user should see success message", async function () {
  const loginPage = new EditPage(this.page!);
  await loginPage.verifySuccessMessage();
});
// Edit AI Assistant’s Name
When("user edit {string} as a random value", async function (string) {
  const loginPage = new EditPage(this.page!);
  await loginPage.AIassistantName();
});

// Edit AI Contact Options
When("user edit {string} as a value", async function (string) {
  const loginPage = new EditPage(this.page!);
  await loginPage.contactOptions();
});
// Edit AI Assistant’s Boundaries
When("When user edit {string} as a value for edit", async function (string) {
  const loginPage = new EditPage(this.page!);
  await loginPage.assistantBoundaries();
});
