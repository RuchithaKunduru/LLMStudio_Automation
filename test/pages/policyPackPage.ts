import { Page, expect} from '@playwright/test';
import { policyPackLocators } from '../locators/policyPack.locators';

export class PolicyPackPage {
  constructor(private page: Page) {}  

  

  async verifyAllPoliciesSection(){
    await this.page.locator(policyPackLocators.AllPoliciesSection);
  }

  async clickAllPoliciesButton(){
    await this.page.click(policyPackLocators.allPolicies);
  }

  async clickCreateNewPolicyButton(){
    await this.page.click(policyPackLocators.createNewPolicyButton);
  }

  async typePolicyName(pName: string){
    // await this.page.fill(policyPackLocators.policyName, pName);
    await this.page.getByRole('textbox', { name: /policy name/i }).fill(pName);
  }

  async verifyPolicyType(pType: string){
    await this.page.locator(policyPackLocators.policyType).selectOption({ label: pType });

  }

  async verifyPolicyDescription(pDesc:string){
    const input = this.page.locator(policyPackLocators.policyDescription);
    await input.waitFor({ state: 'visible' });
    await input.fill(pDesc);
  }

  async verifyCreatedPolicies(){
    // await this.page.waitForLoadState('networkidle'); 
    await this.page.waitForSelector(policyPackLocators.createdPolices, { timeout: 10000 });

  }

  async clickPolicyPack(policyName: string) {
    // const policyLocator = `//div[contains(@class, "policy-pack-name") and text()='${policyName}']`;
    const policyLocator=`//span[text()='${policyName}']/ancestor::div[contains(@class, "assistant-name-card")]`
    await this.page.click(policyLocator);
  }

  async updateInfoOfPolicyPack(){
    await this.page.click(policyPackLocators.infoOfPolicy);
  }

  async selectAIAssistantTone(tone: string){
    await this.page.click(policyPackLocators.aiAssistantTone);
    await this.page.waitForTimeout(1000);
    await this.page.waitForSelector('[role="listbox"]');
    await this.page.getByText(tone).click();
    await this.page.keyboard.press("Escape");
  }

  async enableFileUploadButton(){
    await this.page.check(policyPackLocators.enableFileUpload);
    await this.page.waitForTimeout(1000);
  }

  async verifyPolicyToastMessage(){
    await this.page.locator(policyPackLocators.UpdateToastMessage).isVisible;
    await this.page.waitForTimeout(3000);
  }

  async verifyCreatedPolicyPack(policyName: string) {
    // const policyLocator = `//div[contains(@class, "policy-pack-name") and text()='${policyName}']`;
    const policyLocator=`//span[text()='${policyName}']/ancestor::div[contains(@class, "assistant-name-card")]`
    await this.page.locator(policyLocator);
  }

  async verifyKebabMenu(policyName: string) {
    await this.page.click(policyPackLocators.policyKebabMenu(policyName));
  }

  async clickDeleteButton(){
    await this.page.waitForTimeout(2000);
    await this.page.locator(policyPackLocators.policyDeleteButton).waitFor({ state: 'visible', timeout: 30000 });
    await this.page.locator(policyPackLocators.policyDeleteButton).click();
  }

  async verifyDeleteToastMessage(){
    await this.page.locator(policyPackLocators.deleteToastMessage).isVisible;
  }

  async clickInstantLearning(){
    await this.page.click(policyPackLocators.iLSection);
  }

  async verifyILDashboard(){
    await this.page.locator(policyPackLocators.iLDashboard);
  }

  async clickUtilityAgents(){
    await this.page.click(policyPackLocators.utilityAgents);
  }

  async verifyAgentsDashboard(){
    await this.page.locator(policyPackLocators.agentsDashboard);
  }

  
  async isAssistantVisible(name: string): Promise<boolean> {
    return await this.page.locator(`text=${name}`).isVisible();
  }

}
