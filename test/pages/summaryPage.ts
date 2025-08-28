import { Page, expect } from '@playwright/test';
import { locators } from '../locators/Summary.locators';

export class SummaryPage {
  constructor(private page: Page) {}
  
  async projectDetails(){
    await this.page.click(locators.verifyAssistantProject);
  }
  async verifySummaryButton(){
    await this.page.waitForSelector(locators.summaryButton);
    await expect(this.page.locator(locators.summaryButton)).toBeVisible();
  }
  async clickSummaryButton(){
    await this.page.waitForSelector(locators.summaryButton);
    await this.page.click(locators.summaryButton);
  }
  async verifyProjectTile(){
    await this.page.waitForSelector(locators.projectTitle);
    await expect(this.page.locator(locators.projectTitle)).toBeVisible();
  }
  async verifyAssistantTone(){
    await this.page.waitForSelector(locators.assistantTone);
    await expect(this.page.locator(locators.assistantTone)).toBeVisible();
  }
  async verifyAssistantType(){
    await this.page.waitForSelector(locators.assistantType);
    await expect(this.page.locator(locators.assistantType)).toBeVisible();
  }
  async clickProjectTitileEditButton(){
    await this.page.waitForSelector(locators.projectTitileEditButton);
    await this.page.click(locators.projectTitileEditButton);
  }
  async verifyProjectEditHeader(){
    await this.page.waitForSelector(locators.projectEditHeader);
    await expect(this.page.locator(locators.projectEditHeader)).toBeVisible();
  }
  async verifyAddAvtarIcon(){
    await this.page.waitForSelector(locators.addAvtarIcon);
    await expect(this.page.locator(locators.addAvtarIcon)).toBeVisible();
  }
  async clickAddAvtarIcon(){
    await this.page.waitForSelector(locators.addAvtarIcon);
    await this.page.click(locators.addAvtarIcon);
  }
  async verifyAvtarList(){
    await this.page.waitForSelector(locators.avtarList);
    await expect(this.page.locator(locators.avtarList)).toBeVisible();
  }
  async clickOnAvtar(){
    await this.page.waitForSelector(locators.selectAvtar);
    await this.page.click(locators.selectAvtar);
  }
  async verifyChangePictureButton(button:string){
    await this.page.waitForSelector(locators.button(button));
    await expect(this.page.locator(locators.button(button))).toBeVisible();
  }
  async editAssistantNameInput(){
    await this.page.waitForSelector(locators.assistantNameInput);
    await this.page.click(locators.assistantNameInput);
    await this.page.fill(locators.assistantNameInput, "QARagini")
  }
  async clickSavePromptSettingsButton(button:string){
    await this.page.waitForSelector(locators.button(button));
    await this.page.click(locators.button(button));
  }
  async verifysuccessfulPopup(){
    await this.page.waitForSelector(locators.successfulPopup);
    await expect(this.page.locator(locators.successfulPopup)).toBeVisible();
  }
  async navigateBack() {
  await this.page.goBack();
  }
  async clickBackButton(textContains:string){
    await this.page.waitForSelector(locators.backButton(textContains));
    await this.page.click(locators.backButton(textContains));
  }
  async disableToggle(toggleText:string){
    await this.page.waitForSelector(locators.toggleInput(toggleText));
    await this.page.click(locators.toggleInput(toggleText));
  }
  async verifyToggleUnchecked(toggleText:string){
    await this.page.waitForSelector(locators.toggleInput(toggleText));
    await expect(this.page.locator(locators.toggleInput(toggleText))).not.toBeChecked();
  }
  async craftAIExpertise(){
    await this.page.waitForSelector(locators.craftAIExpertiseInput);
    await this.page.click(locators.craftAIExpertiseInput)
    await this.page.fill(locators.craftAIExpertiseInput, "Business Analysis")
  }
  async hitEnter(){
    await this.page.keyboard.press('Enter');
  }
}
