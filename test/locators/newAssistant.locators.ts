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
  archiveButton: (archieve:string) => `//div[text()="${archieve}"]`, 
  confirmArchiveButton: '//button[text()="Archive"]',
  archiveMessage: '[text="Assistant archived successfully"]',
  unArchiveMessage:'[text="Assistant unArchived successfully"]',
  unArchivekebabMenu: "(//img[contains(@class, 'kebab_class')])[1]"


  
};
