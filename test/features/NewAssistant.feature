Feature: Create, search and Delete the Assistant


Background: 
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    And user should land on the dashboard

Scenario: User creates a new assistant with valid details
    When user click on "+ Create New Assistant" button
    And provides the assistant name "QAAssistant"
    And selects the assistant type as "Normal"
    And clicks on vector database as "AlloyDB"
    And provides the description "This is used for testing."
    And user click on "Create" button 
    When the message is displayed, I click the No button
    Then I should be able to see the AI Assistant name

Scenario: List of Published Assistant
    Given user should land on the dashboard
    And user clicks the list of assistants
    And user selects the "Published Assistant"
    Then user should be able to see the list of filtering assistants

Scenario: List of Archieved Assistants
    And user clicks the list of assistants
    And user selects the Archived Assistant
    Then user should be able to see the list of filtering assistants

Scenario: Search and delete an Assistant  
    Given user should land on the dashboard
    When user searches for the assistant
    And user clicks on the options menu for the assistant
    And user clicks on the "Delete" assistant
    And user click on "Delete" button
    Then the assistant should be deleted successfully

Scenario: Archieve an existing Assistant  
    Given user should land on the dashboard
    When user searches for any existing assistant "qaassistant30603"
    And user clicks on the options menu for the assistant
    And user clicks on the "Archive" assistant
    And user click on "Archive" button
    Then the assistant should be archived successfully

Scenario: Unarchieve an existing Assistant  
    Given user should land on the dashboard
    And user clicks the list of assistants
    And user selects the Archived Assistant
    Then user should be able to see the list of filtering assistants
    When user searches for any existing assistant "qaassistant30603"
    And user clicks on the options menu for the unarchieve assistant
    And user clicks on the "unarchive" assistant
    And user click on "Unarchive" button
    Then the assistant should be unarchived successfully    
    


