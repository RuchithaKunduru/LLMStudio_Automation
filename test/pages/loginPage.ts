import { Page, expect } from '@playwright/test';
import { loginLocators } from '../locators/login.locators';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto('https://dev-egpt.techo.camp/');
  }

  async login(username: string, password: string) {
    console.log('Filling login credentials...');
    await this.page.fill(loginLocators.usernameInput, username);

    await this.page.fill(loginLocators.passwordInput, password);
    console.log('Credentials filled.');
  }

  async clickButtonText(loginButton: string) {
    await this.page.click(loginLocators.ButtonText(loginButton));
  }

  async verifyDashboard() {
    await this.page.waitForSelector(loginLocators.dashboardSection);
  }

  async verifyMainDashboard() {
  console.log('Navigating to main dashboard...');  
  await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.page.goto('https://dev-egpt.techo.camp/')
  ]);
    await this.page.waitForSelector(loginLocators.mainDashboard, { timeout: 30000 });
  }

  async verifyInvalidError() {
    const errorLocator = this.page.locator(loginLocators.invalidCreds);
    await expect(errorLocator).toHaveText('Invalid credentials. Please try again.');
  }

  async verifyWarningMessage(){
    const errorLocator = this.page.locator(loginLocators.emptyCreds);
    await expect(errorLocator).toHaveText('Please enter your username');
  }

  async verifySignUpPage(){
    await this.page.locator(loginLocators.signUpPage).isVisible();
  }

  async fillSignUpForm(){
    await this.page.fill(loginLocators.usernameInput, 'testuser1');
    await this.page.fill(loginLocators.passwordInput, 'Test@1234');  
    await this.page.fill(loginLocators.name, 'Test User' );
    await this.page.fill(loginLocators.email,'testuser1@techolution.com');
  }
}
