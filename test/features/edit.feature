Feature: Edit Feature
Background: 
   Given user is on the login page
   When user login with valid credentials
   When user click on "Sign In" button
   And user should land on the dashboard
   When user searches for any existing assistant "anitaassistant"
   Then user should see details about assistant
   When user clicks on assistant Project details
   Then user should see assistant Project page
   
Scenario: Verify Edit Section
   # Verify Project Details in Edit section
   Given user clicks on the "Edit" section
   When user provides the project description "Functionality testing1 on LLM studio" in edit section
   When user click on "Save" button
   Then user should see success message
  # Verify AI Assistant’s Name in Edit section
   When user provides the assistant name "AnitaAssistant" in edit section
   When user click on "Save" button
   Then user should see success message 
  #Verify Contact Options in edit section
   When user provides the contact options "Anita contact" in edit section
   When user click on "Save" button
   Then user should see success message
 
