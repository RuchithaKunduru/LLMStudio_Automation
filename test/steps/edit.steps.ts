import { Given, When, Then } from "@cucumber/cucumber";
import { EditPage } from "../pages/editPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";

When("user search AI Assistant {string}", async function (string) {
  const editPage = new EditPage(this.page!);
  await editPage.searchAssistant(string);
});

Then("user should see details about assistant", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.verifyAssistantPage();
});

When("user clicks on assistant Project details", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.projectDetails();
});

Then("user should see assistant Project page", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.verifyEditButton();
});
When("user clicks on edit link", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.clickEditLink();
});

//Edit Project Details
When("user edit {string} as {string}", async function (string, string2) {
  const editPage = new EditPage(this.page!);
  await editPage.EditProjectDetails(string, string2);
});

Then("user should see success message", async function () {
  const editPage = new EditPage(this.page!);
  await editPage.verifySuccessMessage();
});

// Edit AI Assistant’s Name
When("user edit {string} as a random value", async function (string) {
  const editPage = new EditPage(this.page!);
  await editPage.AIassistantName();
});

// Edit AI Contact Options
When("user edit {string} as a value", async function (string) {
  const editPage = new EditPage(this.page!);
  await editPage.contactOptions();
});

// Edit AI Assistant’s Boundaries
When("When user edit {string} as a value for edit", async function (string) {
  const editPage = new EditPage(this.page!);
  await editPage.assistantBoundaries();
});
