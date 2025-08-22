import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";

Given(
  "user is on the login page",
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

When("user click on {string} button", async function (loginButton: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.clickButtonText(loginButton);
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
});

Then(
  "user should be able to see the warning message",
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.verifyWarningMessage();
});

Then("user should be redirected to the sign up page", async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);    
    await loginPage.verifySignUpPage();
});

When("user fills in the sign up form with valid details", async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page!);
    await loginPage.fillSignUpForm();
});


