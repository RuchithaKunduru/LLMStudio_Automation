import { Page, expect } from '@playwright/test';
import { locators } from '../locators/edit.locators';
import { randomUUID } from 'crypto';
//import { locators } from '../locators/login.locators';


export class EditPage {
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

  async verifyEditButton(){
    await this.page.waitForSelector(locators.editbutton);
    await expect(this.page.locator(locators.editbutton)).toBeVisible();
  }

  async EditProjectDetails(Description:string,edit:string){
    await this.page.locator(locators.Description(Description));
    const randomName=await this.getUniqueUser();
    await this.page.fill(locators.Description(Description),randomName);
  }

  getUniqueUser (): string {
    const randomNum = Math. floor(Math. random() * 1000). toString
    return `User  -${randomUUID( ). slice (0, 6)}-${randomNum}` ;
  }

  async clickEditLink(){
    await this.page.waitForSelector(locators.editbutton);
    await this.page.click(locators.editbutton);
  }

  async verifySuccessMessage(){
    await this.page.waitForSelector(locators.successSavedMessage);
    await expect(this.page.locator(locators.successSavedMessage)).toHaveText("Your changes have been saved!");
  }

  async AIassistantName(){
    await this.page.locator(locators.AIAssistantName);
    const randomName=await this.getUniqueUser();
    await this.page.fill(locators.AIAssistantName,randomName);
  }

  async contactOptions(){
    await this.page.locator(locators.contactOptions);
    const randomName=await this.getUniqueUser();
    await this.page.fill(locators.contactOptions,randomName);
  }

  async assistantBoundaries(){
    await this.page.locator(locators.assistantBoundries);
    const randomName=await this.getUniqueUser();
    await this.page.fill(locators.assistantBoundries,randomName);
  }
}

