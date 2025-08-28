Feature: Settings Feature
Background: 
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    And user should land on the dashboard
    When user searches for any existing assistant "anitaassistant"
    Then user should see details about assistant
    When user clicks on assistant Project details
    Then user should see assistant Project page

Scenario: Verify Settings Section
    Given user clicks on the "Settings" section
    When user click on "Co-Pilot" radio button
    And user click on "Model Selection" radio button
    And user enter text in Chat Initial Message input box
    Then Chat Initial Message input box should contain "Hi How may I help You??"
    And user enter text in Outdated Chat reply Message input box
    Then Chat Outdated Chat input box should contain "Ok, got it. Let me work on it and I’ll get back to you in a moment."
    When user edit "Chunk Size Limit" as "400" for chunk size
    Then "Chunk Size Limit" should be "400"
    When user edit "Chunk Upper Size Limit" as "2000" for chunk size
    Then "Chunk Upper Size Limit" should be "2000"
    When user edit "Chunk Lower Size Limit" as "500" for chunk size
    Then "Chunk Lower Size Limit" should be "500"
    And user click on "Save" button
    Then user should see success message