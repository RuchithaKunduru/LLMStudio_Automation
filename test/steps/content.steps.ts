import { Given, When, Then } from "@cucumber/cucumber";
import { ContentPage } from "../pages/contentPage";

When("user should see the main panel of the assistant", async function () {
  const contentPage = new ContentPage(this.page!);
  // Assuming there's a method to verify the main panel of the assistant
  await contentPage.verifyMainPanel();  
});

Given("user clicks on the {string} section", async function (section: string) {
  const contentPage = new ContentPage(this.page!);
  await contentPage.navigateToSection(section);
});

When("user clicks on {string} file",async function(file: string) {
    const contentPage = new ContentPage(this.page!);
    await contentPage.clickOnFile(file);
});

When("user enters content title as {string}", async function(title: string) {
    const contentPage = new ContentPage(this.page!);
    await contentPage.enterTitle(title);
    await this.page.waitForTimeout(2000);
});

When("user enters the text content {string}", async function(text: string) {
    const contentPage = new ContentPage(this.page!);
    await contentPage.enterTextContent(text);
    await this.page.waitForTimeout(2000);
});

Then("user should be able to see success message as {string}", async function(message: string) {
  const contentPage = new ContentPage(this.page!);
  await contentPage.verifySuccessMessage(message);
});




