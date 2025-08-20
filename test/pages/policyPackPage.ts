import { Page } from '@playwright/test';
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

  async verifyPolicyName(pName: string){
    await this.page.fill(policyPackLocators.policyName, pName);
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

  async clickAnyOnePolicyPack(){
    await this.page.click(policyPackLocators.anyOnePolicy);
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
  }

  async verifyPolicyToastMessage(){
    await this.page.locator(policyPackLocators.UpdateToastMessage).isVisible;
  }

  async verifyPolicyPack(pPack: string){
    await this.page.locator(policyPackLocators.policypack);
  }

  async verifyKebabMenu(){
    await this.page.click(policyPackLocators.policyKebabMenu);
  }

  async verifyDeleteButton(){
    await this.page.click(policyPackLocators.policyDeleteButton);
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
