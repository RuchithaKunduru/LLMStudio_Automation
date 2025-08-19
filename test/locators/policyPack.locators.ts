export const policyPackLocators = {

  // Create New Policy Pack
  AllPoliciesSection: '//div[contains(text(),"All Policies (7)")]',
  allPolicies:'//div[contains(text(),"All Policies")]',
  createNewPolicyButton: '//button[contains(text(),"+ Create New Policy")]',
  policyName: '//input[@placeholder="Enter policy name"]',
  policyType: '#assistant_type',
  policyDescription: '//input[@placeholder="Enter policy description"]',
  policyPackButton: '//button[text()="Create Policy Pack"]',

  // Update Policy Pack
  createdPolices: "//div[contains(@class, 'grid-cols')]",
  anyOnePolicy:'//span[text()="QAPolicyPack731"]',
  infoOfPolicy:'//div/p[text()="Policy Pack Information"]',
  aiAssistantTone:'#demo-multiple-chip',
  enableFileUpload: "(//div[contains(., 'File Upload')]//input[@type='checkbox'])[2]",
  updatePolicyPackButton:'//button[text()="Update Policy Pack"]',
  UpdateToastMessage:'[text="Policy updated successfully"]',

  // Delete Policy Pack
  policypack:'//span[text()="QAPolicyPack363"]',
  policyKebabMenu:"xpath=//div/span[contains(text(), 'QAPolicyPack500')]/ancestor::div[2]//img[@alt='set default policy']",
  policyDeleteButton:'//div[text()="Delete"]',
  deleteToastMessage: '[text="Policy deleted successfully"]',

  // Instant learning section
  iLSection:'//div[text()="Instant Learning"]',
  iLDashboard:'//span[text()="Instant Learning Dashboard"]',

  // Utility Agents Section
  utilityAgents: '//div[contains(text(),"All Utility Agents")]',
  agentsDashboard: '//div/p[text()="Add utility agents to AI assistant"]',

  
};
