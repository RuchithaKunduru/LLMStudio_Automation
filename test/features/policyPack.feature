Feature: Policy Pack Create, Update and delete

Background:
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    Then user should land on the dashboard

Scenario: Create Policy Pack
    Given user able to see All policies section
    And user clicks on All Polices button
    And user clicks on Create New Policy button
    And user provides policy name "QAPolicyPack"
    And selects the policy type as "Normal"
    And user enters the description "This policy pack is for QA Testing"
    And user click on "Create Policy Pack" button

    # Update Policy Pack
    Given user clicks on the created policy pack
    And user updates the information of the policy pack
    And user selects the AI Assistant tone as "Friendly"
    And user enables the toggle button of the file upload
    And user click on "Update Policy Pack" button
    Then user should be able to see the updated toast message

    # Scenario: Delete Policy Pack
    Given user go back to the main dashboard
    When user able to see All policies section
    Then user clicks on All Polices button
    When user able to see the created policy pack
    And user clicks on kebab menu of the policy pack
    And user clicks on delete button of the policy pack
    And user click on "Delete" button
    Then user should be able to see the deleted toast message

    # Scenario: Instant Learning section
    Given user go back to the main dashboard
    When user clicks on Instant learning section
    Then user should be able to see instant learning dashboard

    # Scenario: All Utility Agents section
    Given user go back to the main dashboard
    When user clicks on all utility agents section
    Then user should be able to see all the agents







