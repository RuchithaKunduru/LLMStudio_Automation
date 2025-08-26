import { verify } from "crypto";

export const locators = {
  search:'(//input[contains(@placeholder,"Search Your Assistant")])[1]',
  verifyAssistantProject:'//div[text()="Created on:"]',
  editbutton:'(//p[text()="Edit"])[1]',
  Description:(DescriptionLabel:string) =>`(//label[text()="${DescriptionLabel}"]/following-sibling:: textarea)[1]`,
  successSavedMessage:'//button[text()="Saved"]/preceding::p[1]',
  AIAssistantName:'input[placeholder="Add your name..."]',
  contactOptions:'input[placeholder="Add the contact details..."]',
  assistantBoundries:'(//textarea[@placeholder="Add the details..."])[2]',
};
     
