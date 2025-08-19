import { Page, expect } from '@playwright/test';
import { locators } from '../locators/edit.locators';

export class EditPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto('https://dev-egpt.techo.camp/');
  }

  async login(username: string, password: string) {
    console.log('Filling login credentials...');
    await this.page.fill(locators.usernameInput, username);

    await this.page.fill(locators.passwordInput, password);
    console.log('Credentials filled.');
  }

  async clickSignIn() {
    await this.page.click(locators.signInButton);
  }

  async verifyDashboard() {
    await this.page.waitForSelector(locators.dashboardSection);
  }
  
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
    await this.page.fill(locators.Description(Description),edit);
  }

  async clickEditLink(){
    await this.page.waitForSelector(locators.editbutton);
      await this.page.click(locators.editbutton);
        
  }
  async verifyEditPage(){
    await this.page.waitForSelector(locators.savebutton);
        await expect(this.page.locator(locators.savebutton)).toBeDisabled();
  }
  async verifySaveButtonEnabled(){
    await this.page.waitForSelector(locators.savebutton);
        await expect(this.page.locator(locators.savebutton)).toBeEnabled();
  }
  async ClickSaveBtn(){
    await this.page.waitForSelector(locators.savebutton);
      await this.page.click(locators.savebutton);
        
  }
  async verifySuccessMessage(){
    await this.page.waitForSelector(locators.successSavedMessage);
        await expect(this.page.locator(locators.successSavedMessage)).toHaveText("Your changes have been saved!");
  }
}

