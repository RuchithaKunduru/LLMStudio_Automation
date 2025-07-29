import { Page, expect } from '@playwright/test';
import { locators } from '../locators/LLM.locators';

export class PolicyPackPage {
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

  async verifyMainDashboard() {
  console.log('Navigating to main dashboard...');  
  await Promise.all([
    this.page.waitForLoadState('networkidle'),
    this.page.goto('https://dev-egpt.techo.camp/')
  ]);
    await this.page.waitForSelector(locators.mainDashboard, { timeout: 30000 });
  }

  async verifyInvalidError() {
    const errorLocator = this.page.locator(locators.invalidCreds);
    await expect(errorLocator).toHaveText('Invalid credentials. Please try again.');
  }

  async verifyWarningMessage(){
    const errorLocator = this.page.locator(locators.emptyCreds);
    await expect(errorLocator).toHaveText('Please enter your username');
  }

  async clickCreateNewAssistant(){
    const btn = this.page.locator(locators.createNewAssistantButton);
    await btn.waitFor({ state: 'visible' });
    await btn.click();

  }

  async verifyAssistantName(name: string){
    await this.page.fill(locators.nameInput, name);

  }

  async verifyAssistantType(type: string){
    await this.page.selectOption(locators.typeDropdown, { label: type });

  }

  async verifyVectorDatabase(db: string){
    await this.page.click(locators.vectorOption);

  }

  async verifyDescription(desc: string){
    await this.page.fill(locators.descriptionInput, desc);

  }

  async clickCreateButton(){
    await this.page.click(locators.createSubmitButton);
    await this.page.waitForTimeout(5000);
  }

  async clickNoButton() {
    const noButton = this.page.locator(locators.noButton);
    await noButton.click();
  }

  async verifyAIAssistantName(){
    await this.page.locator(locators.aiAssistantName);
  }

  async verifyAllPoliciesSection(){
    await this.page.locator(locators.AllPoliciesSection);
  }

  async clickAllPoliciesButton(){
    await this.page.click(locators.allPolicies);
  }

  async clickCreateNewPolicyButton(){
    await this.page.click(locators.createNewPolicyButton);
  }

  async verifyPolicyName(pName: string){
    await this.page.fill(locators.policyName, pName);
  }

  async verifyPolicyType(pType: string){
    await this.page.locator(locators.policyType).selectOption({ label: pType });

  }

  async verifyPolicyDescription(pDesc:string){
    const input = this.page.locator(locators.policyDescription);
    await input.waitFor({ state: 'visible' });
    await input.fill(pDesc);
  }

  async clickCreatePolicyPack(){
    await this.page.click(locators.policyPackButton);
  }

  async verifyCreatedPolicies(){
    // await this.page.waitForLoadState('networkidle'); 
    await this.page.waitForSelector(locators.createdPolices, { timeout: 10000 });

  }

  async clickAnyOnePolicyPack(){
    await this.page.click(locators.anyOnePolicy);
  }

  async updateInfoOfPolicyPack(){
    await this.page.click(locators.infoOfPolicy);
  }

  async selectAIAssistantTone(tone: string){
    await this.page.click(locators.aiAssistantTone);
    await this.page.waitForTimeout(1000);
    await this.page.waitForSelector('[role="listbox"]');
    await this.page.getByText(tone).click();
    await this.page.keyboard.press("Escape");
  }

  async enableFileUploadButton(){
    await this.page.check(locators.enableFileUpload);
  }

  async clickUpdatePolicyPackButton(){
    await this.page.click(locators.updatePolicyPackButton);
  }

  async verifyPolicyToastMessage(){
    await this.page.locator(locators.UpdateToastMessage).isVisible;
  }

  async verifyPolicyPack(pPack: string){
    await this.page.locator(locators.policypack);
  }

  async verifyKebabMenu(){
    await this.page.click(locators.policyKebabMenu);
  }

  async verifyDeleteButton(){
    await this.page.click(locators.policyDeleteButton);
  }

  async verifyDeleteToastMessage(){
    await this.page.locator(locators.deleteToastMessage).isVisible;
  }

  async clickInstantLearning(){
    await this.page.click(locators.iLSection);
  }

  async verifyILDashboard(){
    await this.page.locator(locators.iLDashboard);
  }

  async clickUtilityAgents(){
    await this.page.click(locators.utilityAgents);
  }

  async verifyAgentsDashboard(){
    await this.page.locator(locators.agentsDashboard);
  }

  async clickListOfAssistants(){
    await this.page.click(locators.listOfAssistants);
  }

  async clickPublishedAssistant(aName: string){
    const assistantOption = this.page.locator(locators.publishedAssitant);
    await assistantOption.waitFor({ state: 'visible' });
    await assistantOption.click();
  }

  async verifyFilteringAssistants(){
    await this.page.locator(locators.listOfFilteringAssistants);
  }
  
  async clickArchievedAssistant(){
    const assistantOption = this.page.locator(locators.archievedAssistant);
    await assistantOption.waitFor({ state: 'visible' });
    await assistantOption.click();
  }

  async searchAssistant(name: string){
    await this.page.fill(locators.searchInput, name);
    await this.page.waitForTimeout(500);

  }

  async isAssistantVisible(name: string): Promise<boolean> {
    return await this.page.locator(`text=${name}`).isVisible();
  }

  async deleteAssistant(name: string){
    const assistantRow = this.page.locator(`xpath=//tr[td[contains(text(),'${name}')]]`);
    await assistantRow.locator(locators.deleteButton).click();
    await this.page.click(locators.confirmDeleteButton);
    await this.page.waitForTimeout(1000); // wait for deletion
  }
}
