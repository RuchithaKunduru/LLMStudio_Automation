Feature: Chatbot Conversation

Background: 
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    And user should land on the dashboard

    When user searches for any existing assistant "anitaassistant"
    Then user should see details about assistant

    When user clicks on assistant Project details
    Then user should see assistant Project page

  Scenario: User sends a greeting and receives a response
    Given user clicks on chatbot icon
    When user sends message "Hello"
    Then chatbot should reply with a greeting