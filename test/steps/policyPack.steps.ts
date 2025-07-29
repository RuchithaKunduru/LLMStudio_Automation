import { Given, When, Then } from "@cucumber/cucumber";
import { PolicyPackPage } from "../pages/policyPackPage";
import { generateRandomPolicyName } from "../../utils/generateRandomPolicyName";

Given("user able to see All policies section", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyAllPoliciesSection();
});

When("user clicks on All Polices button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickAllPoliciesButton();
});

// When('user clicks on {string} button', async function (){
//   const policyPage = new PolicyPackPage(this.page!);
//   await policyPage.clickAnyPolicy();
// });

When("user clicks on Create New Policy button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickCreateNewPolicyButton();
});

When(
  "user provides policy name {string}",
  { timeout: 30000 },
  async function (pName: string) {
    const policyPage = new PolicyPackPage(this.page!);
    const generatedPolicyName = generateRandomPolicyName();
    this.policyName = generatedPolicyName;
    await policyPage.verifyPolicyName(generatedPolicyName);
  }
);

When("selects the policy type as {string}", async function (pType: string) {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyPolicyType(pType);
});

When("user enters the description {string}", async function (pDesc: string) {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyPolicyDescription(pDesc);
});

When("user clicks on create policy pack button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickCreatePolicyPack();
});

Given("user able to see all created policies", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyCreatedPolicies();
});

When("user clicks on any one of the policy pack", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickAnyOnePolicyPack();
});

When("user updates the information of the policy pack", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.updateInfoOfPolicyPack();
});

When(
  "user selects the AI Assistant tone as {string}",
  async function (tone: string) {
    const policyPage = new PolicyPackPage(this.page!);
    await policyPage.selectAIAssistantTone(tone);
  }
);

When("user enables the toggle button of the file upload", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.enableFileUploadButton();
});

When("user clicks on update policy pack button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickUpdatePolicyPackButton();
});

Then("user should be able to see the updated toast message", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyPolicyToastMessage();
});

When("user check for {string} policy pack", async function (pPack: string) {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyPolicyPack(pPack);
});

When("user clicks on kebab menu of the policy pack", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyKebabMenu();
});

When("user clicks on delete button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyDeleteButton();
});

Then("user should be able to see the deleted toast message", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyDeleteToastMessage();
});

When("user clicks on Instant learning section", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickInstantLearning();
});

Then(
  "user should be able to see instant learning dashboard",
  async function () {
    const policyPage = new PolicyPackPage(this.page!);
    await policyPage.verifyILDashboard();
  }
);

When("user clicks on all utility agents section", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickUtilityAgents();
});

Then("user should be able to see all the agents", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyAgentsDashboard();
});