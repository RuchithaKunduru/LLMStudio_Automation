export const locators = {
  search:'(//input[contains(@placeholder,"Search Your Assistant")])[1]',
  verifyAssistantProject:'(//div[text()="Created on:"])[1]',
  summarybutton:'(//p[text()="Summary"])[1]',
  projectTitle: '(//p[text()="Project Title"])[1]',
  assistantTone: '//div[text()="Assistant Tone"]',
  assistantType: '//div[text()="Assistant Type"]',
  projectTitileEditButton: '(//p[text()="Project Subtitle"]/following::button)[1]',
  projectEditHeader: '//h2[text()="Shape your virtual assistant"]',
  assistantNameInput: '#assistantName',
  addAvtarIcon: '//img[@alt="Add Icon"]',
  savePromptSettingsButton: '//button[text()="Save Prompt Settings"]',
  successfulPopup:'//div[text()="Prompt Settings Saved Successfully"]',
};