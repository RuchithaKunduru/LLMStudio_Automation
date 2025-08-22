export const newAssistantLocators = {


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
  llmStudioImage: '//img[@alt="e LLM Studio"]',

  // Assistant filtering
  listOfAssistants:'//div[contains(@class,"relative text-[18px]")]',
  publishedAssitant:(assistant:string)=>`//div[text()="${assistant}"]`,
  listOfFilteringAssistants: '//div[contains(@class,"MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row")]',

  // Search Assistant
  searchInput: '(//div/input[@placeholder="Search Your Assistant"])[1]',
  searchButton: '(//div/input[@placeholder="Search Your Assistant"])[1]',
  kebabMenu:'(//div[contains(@class,"kebab_class")])[1]',

  //Delete Assistant
  deleteMessage: '[text="Assistant deleted successfully"]',

  // Archive Assistant
  archiveButton: (archieve:string) => `//div[text()="${archieve}"]`, 
  archiveMessage: '[text="Assistant archived successfully"]',
  unArchiveMessage:'[text="Assistant unArchived successfully"]',
  unArchivekebabMenu: "(//img[contains(@class, 'kebab_class')])[1]"


  
};
