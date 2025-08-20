import { Page, expect } from '@playwright/test';
import { locators } from '../locators/Summary.locators';

export class SummaryPage {
  constructor(private page: Page) {}
  async searchAssistant(AssistantName:string){
    await this.page.waitForSelector(locators.search);
    await this.page.fill(locators.search,AssistantName);
  }
  async verifyAssistantPage(){
    await this.page.waitForSelector(locators.verifyAssistantProject);
    await expect(this.page.locator(locators.verifyAssistantProject)).toBeVisible();
  }
  async projectDetails(){
    await this.page.click(locators.verifyAssistantProject);
  }
  async verifySummaryButton(){
    await this.page.waitForSelector(locators.summarybutton);
        await expect(this.page.locator(locators.summarybutton)).toBeVisible();
  }
  async clickSummaryButton(){
    await this.page.waitForSelector(locators.summarybutton);
      await this.page.click(locators.summarybutton);
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
  async ClickProjectTitileEditButton(){
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
  async EditAssistantNameInput(){
    await this.page.waitForSelector(locators.assistantNameInput);
      await this.page.click(locators.assistantNameInput);
      await this.page.fill(locators.assistantNameInput, "QARagini")
  }
  async ClickSavePromptSettingsButton(){
    await this.page.waitForSelector(locators.savePromptSettingsButton);
      await this.page.click(locators.savePromptSettingsButton);
  }
  async verifysuccessfulPopup(){
    await this.page.waitForSelector(locators.successfulPopup);
        await expect(this.page.locator(locators.successfulPopup)).toBeVisible();
  }
}
