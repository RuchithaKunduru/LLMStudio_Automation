import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";

Given(
  "user am on the login page",
  { timeout: 20000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.navigateToLogin();
  }
);

When(
  "user login with valid credentials",
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password
    );
  }
);

When("user click on signIn button", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.clickSignIn();
});

Then("user should land on the dashboard", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.verifyDashboard();
});

Given(
  "the user is on the main dashboard page",
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.verifyMainDashboard();
  }
);

When(
  "user login with Invalid credentials",
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.login(
      testData.invalidUser.username,
      testData.invalidUser.password
    );
  }
);

Then(
  "user should be able to see the error message",
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.verifyInvalidError();
  }
);

When(
  "user login with empty credentials",
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.login(
      testData.emptyUser.username,
      testData.emptyUser.password
    );
  }
);

Then(
  "user should be able to see the warning message",
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.verifyWarningMessage();
  }
);

// When("user clicks on {string} button", async function (string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickCreateNewAssistant();
// });

// When("provides the assistant name {string}", async function (name: string) {
//   const loginPage = new LoginPage(this.page!);
//   const randomName = generateRandomName();
//   this.assistantName = randomName;
//   await loginPage.verifyAssistantName(randomName);
// });

// When("selects the assistant type as {string}", async function (type: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyAssistantType(type);
// });

// When("clicks on vector database as {string}", async function (db: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyVectorDatabase(db);
// });

// When("provides the description {string}", async function (desc: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyDescription(desc);
// });

// When("user clicks on the {string} button", async function (string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickCreateButton();
// });

// When("the message is displayed, I click the No button", async function () {
//   await this.page.waitForTimeout(3000);
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickNoButton();
// });

// Then("I should be able to see the AI Assistant name", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyAIAssistantName();
// });

// Given("user able to see All policies section", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyAllPoliciesSection();
// });

// When("user clicks on All Polices button", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickAllPoliciesButton();
// });

// // When('user clicks on {string} button', async function (){
// //   const loginPage = new LoginPage(this.page!);
// //   await loginPage.clickAnyPolicy();
// // });

// When("user clicks on Create New Policy button", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickCreateNewPolicyButton();
// });

// When(
//   "user provides policy name {string}",
//   { timeout: 30000 },
//   async function (pName: string) {
//     const loginPage = new LoginPage(this.page!);
//     const generatedPolicyName = generateRandomPolicyName();
//     this.policyName = generatedPolicyName;
//     await loginPage.verifyPolicyName(generatedPolicyName);
//   }
// );

// When("selects the policy type as {string}", async function (pType: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyPolicyType(pType);
// });

// When("user enters the description {string}", async function (pDesc: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyPolicyDescription(pDesc);
// });

// When("user clicks on create policy pack button", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickCreatePolicyPack();
// });

// Given("user able to see all created policies", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyCreatedPolicies();
// });

// When("user clicks on any one of the policy pack", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickAnyOnePolicyPack();
// });

// When("user updates the information of the policy pack", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.updateInfoOfPolicyPack();
// });

// When(
//   "user selects the AI Assistant tone as {string}",
//   async function (tone: string) {
//     const loginPage = new LoginPage(this.page!);
//     await loginPage.selectAIAssistantTone(tone);
//   }
// );

// When("user enables the toggle button of the file upload", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.enableFileUploadButton();
// });

// When("user clicks on update policy pack button", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickUpdatePolicyPackButton();
// });

// Then("user should be able to see the updated toast message", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyPolicyToastMessage();
// });

// When("user check for {string} policy pack", async function (pPack: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyPolicyPack(pPack);
// });

// When("user clicks on kebab menu of the policy pack", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyKebabMenu();
// });

// When("user clicks on delete button", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyDeleteButton();
// });

// Then("user should be able to see the deleted toast message", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyDeleteToastMessage();
// });

// When("user clicks on Instant learning section", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickInstantLearning();
// });

// Then(
//   "user should be able to see instant learning dashboard",
//   async function () {
//     const loginPage = new LoginPage(this.page!);
//     await loginPage.verifyILDashboard();
//   }
// );

// When("user clicks on all utility agents section", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickUtilityAgents();
// });

// Then("user should be able to see all the agents", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.verifyAgentsDashboard();
// });

// Given("user clicks the list of assistants", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickListOfAssistants();
// });

// When("user selects the {string}", async function (aName: string) {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickPublishedAssistant(aName);
// });

// Then(
//   "user should be able to see the list of filtering assistants",
//   async function () {
//     const loginPage = new LoginPage(this.page!);
//     await loginPage.verifyFilteringAssistants();
//   }
// );

// When("user selects the Archived Assistant", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.clickArchievedAssistant();
// });

// Given("the user searches for the newly created assistant", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.searchAssistant(this.assistantName);
// });

// Then("the assistant should appear in the search result", async function () {
//   const loginPage = new LoginPage(this.page!);
//   const isVisible = await loginPage.isAssistantVisible(this.assistantName);
//   expect(isVisible).toBe(true);
// });

// When("the user deletes the assistant", async function () {
//   const loginPage = new LoginPage(this.page!);
//   await loginPage.deleteAssistant(this.assistantName);
// });

// Then("the assistant should no longer be present", async function () {
//   const loginPage = new LoginPage(this.page!);
//   const isStillVisible = await loginPage.isAssistantVisible(this.assistantName);
//   expect(isStillVisible).toBe(false);
// });
