import { Page, expect } from '@playwright/test';
import { editLocators } from '../locators/edit.locators';
import { randomUUID } from 'crypto';
//import { locators } from '../locators/login.locators';


export class EditPage {
  constructor(private page: Page) {}

  async searchAssistant(AssistantName:string){
    await this.page.waitForSelector(editLocators.search);
    await this.page.fill(editLocators.search,AssistantName);
  }

  async verifyAssistantPage(){
    await this.page.waitForSelector(editLocators.verifyAssistantProject);
    await expect(this.page.locator(editLocators.verifyAssistantProject)).toBeVisible();
  }

  //edit project description
  async editDescription(label: string, value: string) {
    const input = this.page.locator(editLocators.Description(label));
    await input.waitFor({ state: "visible", timeout: 10000 });
    await input.fill(value);
  }

  //edit assistant name  
  async verifyAssistantName(name: string) {
    const nameInput = this.page.locator(editLocators.AIAssistantName);
    await nameInput.waitFor({ state: 'visible', timeout: 10000 });
    await nameInput.fill(name);
  }
  
  //edit contact options
  async editContactOptions(value: string) {
    const input = this.page.locator(editLocators.contactOptions);
    await input.waitFor({ state: "visible", timeout: 10000 });
    await input.fill(value);
  }

  //verify success message after save
  async verifySuccessMessage(){
    await this.page.waitForSelector(editLocators.successSavedMessage);
    await expect(this.page.locator(editLocators.successSavedMessage)).toHaveText("Your changes have been saved!");
  }
}

