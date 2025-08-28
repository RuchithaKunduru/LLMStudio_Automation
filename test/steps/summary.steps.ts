import { When, Then } from "@cucumber/cucumber";
import { SummaryPage } from "../pages/summaryPage";

When('user clicks on assistant Project details', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.projectDetails();
});

Then('user should see assistant Project page', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyProjectTile();
});

//Verify and Edit Project Title in Summary page

When('user clicks on Summary button', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.clickSummaryButton();
});

Then('user should see project title, assistant tone, assistant type', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyProjectTile();
  await summaryPage.verifyAssistantTone();
  await summaryPage.verifyAssistantType();
});

When('user clicks on Project Title edit button', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.clickProjectTitileEditButton();
});

Then('user should see Project title edit page header, add avtar icon', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyProjectEditHeader();
  await summaryPage.verifyAddAvtarIcon();
});

// Edit Assistant name and add avtar

When('user clicks on add avtar icon', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.clickAddAvtarIcon();
});

Then('user should see avtar list', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyAvtarList();
});

When('user selects an avtar', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.clickOnAvtar();
});

Then('user should see {string} button', async function (button: string) {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyChangePictureButton(button);
});

Then('user edits Assistant name', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.editAssistantNameInput();
});

Then('user should see successful popup', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifysuccessfulPopup();
});
When('user navigates back', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.navigateBack();
})
Then('user clicks on {string} icon', async function (textContains:string) {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.clickBackButton(textContains);
})

// Disable toggles and craft AI's expertise

When('user disable the {string} and {string} toggle',
  async function (toggle1: string, toggle2: string) {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.disableToggle(toggle1);
  await summaryPage.disableToggle(toggle2);
});

Then('user should see that {string} and {string} toggles are unchecked', 
  async function (toggle1: string, toggle2: string) {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.verifyToggleUnchecked(toggle1);
  await summaryPage.verifyToggleUnchecked(toggle2);

})
When(`user clicks on craft your AI's expertise input field and gives input`, async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.craftAIExpertise();
})
When('user hits enter', async function () {
  const summaryPage = new SummaryPage(this.page!);
  await summaryPage.hitEnter();
})