Feature: Summary Feature

Background:
  Given user is on the login page
  When user login with valid credentials
  When user click on "Sign In" button
  And user should land on the dashboard
  When user clicks on "+ Create New Assistant" button
  And provides the assistant name "QARagini"
  And selects the assistant type as "Ecommerce"
  And clicks on vector database as "AlloyDB"
  And provides the description "For testing"
  And user click on "Create" button 
  When the message is displayed, I click the No button
  Then I should be able to see the AI Assistant name

# Verify project details for Summary functionality

Scenario: Edit Assistant name and add avtar to Summary page
  When user clicks on Summary button
  Then user should see project title, assistant tone, assistant type
  When user clicks on Project Title edit button
  Then user should see Project title edit page header, add avtar icon

# Edit Assistant name and add avtar

  When user clicks on add avtar icon
  Then user should see avtar list
  When user selects an avtar
  Then user should see "Change picture" button
  And user edits Assistant name
  When user click on "Save Prompt Settings" button
  Then user should see successful popup
  When user click on "Cancel" button 
  Then I should be able to see the AI Assistant name
  And user navigates back
  And user clicks on "Create a highly intelligent" icon

# Search the existing assistant and delete it

  When user searches for the assistant
  And user clicks on the options menu for the assistant
  And user clicks on the "Delete" assistant
  And user click on "Delete" button
  Then the assistant should be deleted successfully

Scenario: Enable toggle buttons and craft AI's expertise to Summary page
  When user clicks on Summary button
  Then user should see project title, assistant tone, assistant type
  When user clicks on Project Title edit button
  And user disable the "Co-Pilot" and "Model Selection" toggle
  Then user should see that "Co-Pilot" and "Model Selection" toggles are unchecked
  When user clicks on craft your AI's expertise input field and gives input
  And user hits enter
  And user click on "Save Prompt Settings" button
  Then user should see successful popup
  When user click on "Cancel" button 
  Then I should be able to see the AI Assistant name
  And user navigates back
  And user clicks on "Create a highly intelligent" icon 
  
  # Search the existing assistant and delete it

  When user searches for the assistant
  And user clicks on the options menu for the assistant
  And user clicks on the "Delete" assistant
  And user click on "Delete" button
  Then the assistant should be deleted successfully