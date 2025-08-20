Feature: Summary Feature
Background:
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    And user should land on the dashboard
    When user searches for any existing assistant "ragini"
    Then user should see details about assistant
    When user clicks on assistant Project details
    Then user should see assistant Project page
    When user clicks on summary button

# Project details for Summary functionality

  Scenario: Verify Project Details in Summary Section
    When user should see project title, assistant tone, assistant type
    When user clicks on Project Title edit button
    Then user should see Project title edit page header, add avtar icon
    When user edits Assistant name
    When user clicks on save prompt settings button
    Then user should see successful popup





