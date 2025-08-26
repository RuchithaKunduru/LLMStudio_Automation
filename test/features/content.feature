Feature: Upload text, search,edit and delete content


Background: 
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    And user should land on the dashboard

Scenario: User validates the content of the uploaded text files
    Given user searches for any existing assistant "anitaassistant"
    Then user should see details about assistant
    When user clicks on assistant Project details
    Then user should see the main panel of the assistant

    Given user clicks on the "Content " section
    And user clicks on "Text" file
    And user click on "Upload Text" button
    And user enters content title as "Content Testing"
    And user enters the text content "This is a sample text content for testing purposes."
    Then user click on "Save" button
    Then user should be able to see success message as "File updated successfully"

    # User Validates the editing of the uploaded text files
    