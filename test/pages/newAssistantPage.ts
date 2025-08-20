import { Page, expect } from '@playwright/test';
import { newAssistantLocators } from '../locators/newAssistant.locators';

export class AssistantPage {
  constructor(private page: Page) {}

  async clickCreateNewAssistant(){
    const btn = this.page.locator(newAssistantLocators.createNewAssistantButton);
    await btn.waitFor({ state: 'visible' });
    await btn.click();

  }

  async verifyAssistantName(name: string){
    const nameInput = this.page.locator(newAssistantLocators.nameInput);
    await nameInput.waitFor({ state: 'visible', timeout: 10000 });
    await nameInput.fill(name);
  }

  async verifyAssistantType(type: string){
    await this.page.selectOption(newAssistantLocators.typeDropdown, { label: type });

  }

  async verifyVectorDatabase(db: string){
    await this.page.click(newAssistantLocators.vectorOption);

  }

  async verifyDescription(desc: string){
    await this.page.fill(newAssistantLocators.descriptionInput, desc);

  }

  async clickCreateButton(){
    await this.page.click(newAssistantLocators.createSubmitButton);
    await this.page.waitForTimeout(5000);
  }

  async clickNoButton() {
    const noButton = this.page.locator(newAssistantLocators.noButton);
    await noButton.click();
  }

  async verifyAIAssistantName(){
    await this.page.locator(newAssistantLocators.aiAssistantName);
  }
  
  async clickListOfAssistants(){
    await this.page.click(newAssistantLocators.listOfAssistants);
  }

  async clickPublishedAssistant(aName: string){
    const assistantOption = this.page.locator(newAssistantLocators.publishedAssitant);
    await assistantOption.waitFor({ state: 'visible' });
    await assistantOption.click();
  }

  async verifyFilteringAssistants(){
    await this.page.locator(newAssistantLocators.listOfFilteringAssistants);
  }
  
  async clickArchievedAssistant(){
    const assistantOption = this.page.locator(newAssistantLocators.archievedAssistant);
    await assistantOption.waitFor({ state: 'visible' });
    await assistantOption.click();
  }

  async searchAssistant(assistantName: string) {
    const searchInput = this.page.locator(newAssistantLocators.searchInput);
    await searchInput.fill(assistantName);
    await this.page.waitForTimeout(1000);

  }

  async optionsMenuForAssistant() {
    const kebabMenu = this.page.locator(newAssistantLocators.kebabMenu);
    await kebabMenu.click();
  }

  async verifyDeleteMessage(){
    await this.page.locator(newAssistantLocators.deleteMessage).isVisible;
  }

  async searchExistingAssistant(eaName: string) {
    const searchInput = this.page.locator(newAssistantLocators.searchInput);
    await searchInput.fill(eaName);
    await this.page.waitForTimeout(1000);
  }

  async clickArchiveButton(archieve: string) {
    const archiveButton = this.page.locator(newAssistantLocators.archiveButton(archieve));
    await archiveButton.click();
  }

  async optionsMenuForUnArchiveAssistant(){
    const kebabMenu = this.page.locator(newAssistantLocators.unArchivekebabMenu);
    await kebabMenu.click();
  }

  async verifyArchiveMessage() {
    await this.page.locator(newAssistantLocators.archiveMessage).isVisible;
  }

  async verifyUnArchiveMessage(){
    await this.page.locator(newAssistantLocators.unArchiveMessage).isVisible;
  }
}
