export const locators = {

  search:'(//input[contains(@placeholder,"Search Your Assistant")])[1]',
  verifyAssistantProject:'(//div[text()="Created on:"])[1]',
  summaryButton: '(//p[text()="Summary"])[1]',
  projectTitle: '(//p[text()="Project Title"])[1]',
  assistantTone: '//div[text()="Assistant Tone"]',
  assistantType: '//div[text()="Assistant Type"]',
  projectTitileEditButton: '(//p[text()="Project Subtitle"]/following::button)[1]',
  projectEditHeader: '//h2[text()="Shape your virtual assistant"]',
  assistantNameInput: '#assistantName',
  addAvtarIcon: '//img[@alt="Add Icon"]',
  avtarList: '//img[@alt="Add Icon"]/following-sibling::div',
  selectAvtar: '(//img[@alt="Add Icon"]/following::img)[1]',
  button: (button:string)=> `//button[text()="${button}"]`,
  savePromptSettingsButton: '//button[text()="Save Prompt Settings"]',
  successfulPopup:'//div[text()="Prompt Settings Saved Successfully"]',
  backButton: (textContains:string)=>  `//h1[contains(text(), "${textContains}")]/preceding-sibling::img`,
  craftAIExpertiseInput: '#tags-filled',
  toggleInput: (toggleText: string) =>
  `//span[normalize-space(text())="${toggleText}"]/ancestor::label//input[@type="checkbox"]`
};