import { verify } from "crypto";

export const locators = {
  //login locators
  usernameInput: '//input[@type="text"]',
  passwordInput: '//input[@type="password"]',
  signInButton: '//button[text()="Sign In"]',
  dashboardSection: '//div[text()="eLLM Studio"]',
  invalidCreds: '//div/p[contains(text(), "Invalid credentials")]',
  emptyCreds:'//div/p[contains(text(), "Please enter your username")]',

  search:'(//input[contains(@placeholder,"Search Your Assistant")])[1]',
  verifyAssistantProject:'//div[text()="Created on:"]',
  editbutton:'(//p[text()="Edit"])[1]',
  Description:(DescriptionLabel:string) =>`(//label[text()="${DescriptionLabel}"]/following-sibling:: textarea)[1]`,
  savebutton:'//button[text()="Save"]',
  successSavedMessage:'//button[text()="Saved"]/preceding::p[1]',
};
     
