export const contentLocators = {

  // Content section
  mainPanelSection: 'mainPanelSection',
  differentSection: (section: string) => `(//div/p[text()="${section}"])[1]`,
  selectFile: (file: string) => `//span[contains(text(),"${file}")]`,
  titleInput: 'input[placeholder="Enter content title..."]',
  textContentInput: '#lablel-details',
  successMessage: (message: string) => `//div[contains(text(),"${message}")]`

}