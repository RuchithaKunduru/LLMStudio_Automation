export const policyPackLocators = {

  // Create New Policy Pack
  AllPoliciesSection: '//div[contains(text(),"All Policies (7)")]',
  allPolicies:'//div[contains(text(),"All Policies")]',
  createNewPolicyButton: '//button[contains(text(),"+ Create New Policy")]',
  policyType: '#assistant_type',
  policyDescription: '//input[@placeholder="Enter policy description"]',

  // Update Policy Pack
  createdPolices: "//div[contains(@class, 'grid-cols')]",
  infoOfPolicy:'//div/p[text()="Policy Pack Information"]',
  aiAssistantTone:'#demo-multiple-chip',
  enableFileUpload: "(//div[contains(., 'File Upload')]//input[@type='checkbox'])[2]",
  UpdateToastMessage:'[text="Policy updated successfully"]',

  // Delete Policy Pack
  policyKebabMenu:(policyName:string) => `//div/span[contains(text(), '${policyName}')]/ancestor::div[2]//img[@alt='set default policy']`,
  policyDeleteButton:'//div[text()="Delete"]',
  deleteToastMessage: '[text="Policy deleted successfully"]',

  // Instant learning section
  iLSection:'//div[text()="Instant Learning"]',
  iLDashboard:'//span[text()="Instant Learning Dashboard"]',

  // Utility Agents Section
  utilityAgents: '//div[contains(text(),"All Utility Agents")]',
  agentsDashboard: '//div/p[text()="Add utility agents to AI assistant"]',

  
};
