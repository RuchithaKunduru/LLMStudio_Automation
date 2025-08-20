import { Given, When, Then } from "@cucumber/cucumber";
import { SummaryPage } from "../pages/summaryPage";

When('user search AI Assistant {string}', async function (string) {
         const loginPage = new SummaryPage(this.page!);
         await loginPage.searchAssistant(string);
         });
Then('user should see details about assistant', async function () {
           const loginPage = new SummaryPage(this.page!);
         await loginPage.verifyAssistantPage();
         });
When('user clicks on assistant Project details', async function () {
         const loginPage = new SummaryPage(this.page!);
         await loginPage.projectDetails();
         });
Then('user should see assistant Project page', async function () {
           const loginPage = new SummaryPage(this.page!);
         await loginPage.verifySummaryButton();
         });
When('user clicks on summary button', async function () {
         const loginPage = new SummaryPage(this.page!);
         await loginPage.clickSummaryButton();
         });

//Verify and Edit Project Title in Summary page

When('user should see project title, assistant tone, assistant type', async function () {
  const loginPage = new SummaryPage(this.page!);
         await loginPage.verifyProjectTile();
         await loginPage.verifyAssistantTone();
         await loginPage.verifyAssistantType();
});
When('user clicks on Project Title edit button', async function () {
  const loginPage = new SummaryPage(this.page!);
         await loginPage.ClickProjectTitileEditButton();
});
Then('user should see Project title edit page header, add avtar icon', async function () {
           const loginPage = new SummaryPage(this.page!);
         await loginPage.verifyProjectEditHeader();
         await loginPage.verifyAddAvtarIcon();
});
When('user edits Assistant name', async function () {
  const loginPage = new SummaryPage(this.page!);
         await loginPage.EditAssistantNameInput();
});
When('user clicks on save prompt settings button', async function () {
  const loginPage = new SummaryPage(this.page!);
         await loginPage.ClickSavePromptSettingsButton();
});
Then('user should see successful popup', async function () {
           const loginPage = new SummaryPage(this.page!);
         await loginPage.verifysuccessfulPopup();
});