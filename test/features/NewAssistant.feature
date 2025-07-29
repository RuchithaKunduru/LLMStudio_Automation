Feature: Create, search and Delete the Assistant

Background:
    Given user am on the login page
    When user login with valid credentials
    When user click on signIn button
    And user should land on the dashboard

Scenario: User creates a new assistant with valid details
    When user clicks on "+ Create New Assistant" button
    And provides the assistant name "QAAssistant"
    And selects the assistant type as "Normal"
    And clicks on vector database as "AlloyDB"
    And provides the description "This is used for testing."
    And user clicks on the "Create" button 
    When the message is displayed, I click the No button
    Then I should be able to see the AI Assistant name

Scenario: List of Assistants
    # Published Assistant
    Given user should land on the dashboard
    And user clicks the list of assistants
    And user selects the "Published Assistant"
    Then user should be able to see the list of filtering assistants

    # Archieved Assistants
    And user clicks the list of assistants
    And user selects the Archived Assistant
    Then user should be able to see the list of filtering assistants

Scenario: Search and delete an Assistant  
    Given user should land on the dashboard
    When user searches for the assistant
    And user clicks on the options menu for the assistant
    And user deletes the assistant
    And user clicks on confirm delete button
    Then the assistant should no longer be visible in the list

Scenario: Archieve an existing Assistant  
    Given user should land on the dashboard
    When user searches for any existing assistant "QAAssistant1"
    And user clicks on the options menu for the assistant
    And user archieves the assistant
    And user clicks on confirm archieve button
    Then the assistant should be archived successfully
    


