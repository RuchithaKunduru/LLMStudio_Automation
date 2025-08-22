import { Given, When, Then } from "@cucumber/cucumber";
import { PolicyPackPage } from "../pages/policyPackPage";
import { generateRandomPolicyName } from "../../utils/generateRandomPolicyName";
import { savePolicyName, getPolicyName} from '../support/policyStore';

Given("user able to see All policies section", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyAllPoliciesSection();
});

When("user clicks on All Polices button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickAllPoliciesButton();
});

When("user clicks on Create New Policy button", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickCreateNewPolicyButton();
});

When(
  "user provides policy name {string}",
  { timeout: 30000 },
  async function (pName: string) {
    const policyPage = new PolicyPackPage(this.page!);
    const generatedPolicyName = generateRandomPolicyName(pName); // e.g., "QAPolicyPack123"
    this.policyName = generatedPolicyName;     // available in THIS scenario
    savePolicyName(generatedPolicyName);       // persists for NEXT scenarios
    await policyPage.typePolicyName(generatedPolicyName);
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

Given("user able to see all created policies", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyCreatedPolicies();
});

When("user clicks on the created policy pack",{ timeout: 100000 }, async function () {
   if (!this.policyName) throw new Error("No policy pack name stored");

    const policyPage = new PolicyPackPage(this.page!);
    await policyPage.clickPolicyPack(this.policyName);
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

Then("user should be able to see the updated toast message", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyPolicyToastMessage();
});

Given("user able to see the created policy pack", async function () {
  const policyName = getPolicyName(); // retrieves the persisted policy name
  if (!this.policyName) throw new Error("No policy pack name found in storage");
    const policyPage = new PolicyPackPage(this.page!);
    await policyPage.verifyCreatedPolicyPack(this.policyName);
});

When("user clicks on kebab menu of the policy pack", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.verifyKebabMenu(this.policyName);
});

When("user clicks on delete button of the policy pack", async function () {
  const policyPage = new PolicyPackPage(this.page!);
  await policyPage.clickDeleteButton();
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