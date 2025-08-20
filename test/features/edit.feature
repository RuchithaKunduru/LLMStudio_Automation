Feature: Edit Feature

  Scenario: Verify Project Details in Edit Section
    Given user am on the login page
    When user login with valid credentials
   
    When user search AI Assistant "anitaassistant"
    Then user should see details about assistant

    When user clicks on assistant Project details
    Then user should see assistant Project page

    When user clicks on edit link
    Then user should see edit page

# Project details for edit functionalitu
    When user edit "Project Description" as "Functionality testing on LLM studio"
    Then user should see save button enabled
    When user clicks on save button
    Then user should see success message

