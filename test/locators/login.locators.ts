export const loginLocators = {
  //login locators
  usernameInput: '//input[@type="text"]',
  passwordInput: '//input[@type="password"]',
  signInButton: (loginButton:string)=> `//button[text()="${loginButton}"]`,
  dashboardSection: '//div[text()="eLLM Studio"]',
  invalidCreds: '//div/p[contains(text(), "Invalid credentials")]',
  emptyCreds:'//div/p[contains(text(), "Please enter your username")]',
  signUpPage: '//button[text()="Sign up"]',
  name: '(//input[@type="text"])[2]',
  email: '//input[@type="email"]',
  mainDashboard: '//div[text()="eLLM Studio"]'

  
};
