import { Page } from '@playwright/test';
import { contentLocators } from '../locators/content.locators';


export class ContentPage {
  constructor(private page: Page) {}

  async verifyMainPanel(){
    await this.page.locator(contentLocators.mainPanelSection);
  }

  async navigateToSection(section: string) {
    await this.page.click(contentLocators.differentSection(section));
  }

  async clickOnFile(file: string) {
    await this.page.click(contentLocators.selectFile(file));
  }

  async enterTitle(title: string) {
    await this.page.fill(contentLocators.titleInput, title);
  }

  async enterTextContent(text: string) {
    await this.page.fill(contentLocators.textContentInput, text);   
  }

  async verifySuccessMessage(message: string) {
    await this.page.waitForSelector(contentLocators.successMessage(message));
  }


}