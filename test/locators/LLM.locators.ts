export const locators = {
  //login locators
  usernameInput: '//input[@type="text"]',
  passwordInput: '//input[@type="password"]',
  signInButton: '//button[text()="Sign In"]',
  dashboardSection: '//div[text()="eLLM Studio"]',
  invalidCreds: '//div/p[contains(text(), "Invalid credentials")]',
  emptyCreds:'//div/p[contains(text(), "Please enter your username")]',

  // Create New Assistant
  mainDashboard: '//div[text()="eLLM Studio"]',
  createNewAssistantButton: '#createAssistant',
  nameInput: '#name',
  typeDropdown: '#type',
  vectorOption: '//span[text()="AlloyDB"]',
  descriptionInput: '#description',
  createSubmitButton: '//button[text()="Create"]',
  noButton:'//button[contains(text(),"No")]',
  aiAssistantName: '//div[contains(text(),"AI Assistant Name")]', 

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
  policyKebabMenu:"xpath=//div/span[contains(text(), 'QAPolicyPack363')]/ancestor::div[2]//img[@alt='set default policy']",
  policyDeleteButton:'//div[text()="Delete"]',
  deleteToastMessage: '[text="Policy deleted successfully"]',

  // Instant learning section
  iLSection:'//div[text()="Instant Learning"]',
  iLDashboard:'//span[text()="Instant Learning Dashboard"]',

  // Utility Agents Section
  utilityAgents: '//div[contains(text(),"All Utility Agents")]',
  agentsDashboard: '//div/p[text()="Add utility agents to AI assistant"]',

  // Assistant filtering
  listOfAssistants:'//div[contains(@class,"relative text-[18px]")]',
  publishedAssitant:'//div[text()="Published Assistant"]',
  archievedAssistant:'//div[text()="Archived Assistant"]',
  listOfFilteringAssistants: '//div[contains(@class,"MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row")]',

  // Search Assistant
  searchInput: '(//div/input[@placeholder="Search Your Assistant"])[1]',
  kebabMenu:"//img[contains(@class, 'kebab_class')]",

  //Delete Assistant
  deleteButton: '//div[text()="Delete"]',
  confirmDeleteButton: '//button[text()="Delete"]',
  deleteMessage: '[text="Assistant deleted successfully"]',

  // Archive Assistant
  archiveButton: '//div[text()="Archive"]', 
  confirmArchiveButton: '//button[text()="Archive"]',
  archiveMessage: '[text="Assistant archived successfully"]',


  
};
