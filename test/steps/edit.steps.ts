import { Given, When, Then } from "@cucumber/cucumber";
import { EditPage } from "../pages/editPage";
import { CustomWorld } from "../support/custom-world";
import testData from "../test-data/test-data.json";

Given(
  "user am on the login page",
  { timeout: 20000 },
  async function (this: CustomWorld) {
    const loginPage = new EditPage(this.page!);
    await loginPage.navigateToLogin();
  }
);

When(
  "user login with valid credentials",
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new EditPage(this.page!);
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password,
      
    );
    await loginPage.clickSignIn();
    await loginPage.verifyDashboard();
  }
);
When('user search AI Assistant {string}', async function (string) {
         const loginPage = new EditPage(this.page!);
         await loginPage.searchAssistant(string);  
         });
       
   
Then('user should see details about assistant', async function () {
           const loginPage = new EditPage(this.page!);
         await loginPage.verifyAssistantPage();  
         });

When('user clicks on assistant Project details', async function () {
         const loginPage = new EditPage(this.page!);
         await loginPage.projectDetails();  
         });
       
   
Then('user should see assistant Project page', async function () {
           const loginPage = new EditPage(this.page!);
         await loginPage.verifyEditButton();  
         });
When('user clicks on edit link', async function () {
         const loginPage = new EditPage(this.page!);
         await loginPage.clickEditLink();  
         });
       
   
Then('user should see edit page', async function () {
           const loginPage = new EditPage(this.page!);
         await loginPage.verifyEditPage();  
         });
//Edit Project Details
When('user edit {string} as {string}', async function (string, string2) {
  const loginPage = new EditPage(this.page!);
         await loginPage.EditProjectDetails(string,string2);  
           
});
Then('user should see save button enabled', async function () {
           const loginPage = new EditPage(this.page!);
         await loginPage.verifySaveButtonEnabled();  
         });

When('user clicks on save button', async function () {
  const loginPage = new EditPage(this.page!);
         await loginPage.ClickSaveBtn();  
           
});
Then('user should see success message', async function () {
           const loginPage = new EditPage(this.page!);
         await loginPage.verifySuccessMessage();  
         });
