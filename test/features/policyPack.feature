Feature: Policy Pack Create, Update and delete

Background:
    Given user am on the login page
    When user login with valid credentials
    When user click on signIn button
    And user should land on the dashboard

Scenario: Create Policiy Pack
    Given user able to see All policies section
    And user clicks on All Polices button
    And user clicks on Create New Policy button
    And user provides policy name "QAPolicyPack"
    And selects the policy type as "Normal"
    And user enters the description "This policy pack is for QA Testing"
    And user clicks on create policy pack button

Scenario: Update Policy Pack
    Given user clicks on All Polices button
    And user able to see all created policies
    When user clicks on any one of the policy pack
    And user updates the information of the policy pack
    And user selects the AI Assistant tone as "Friendly"
    And user enables the toggle button of the file upload
    And user clicks on update policy pack button
    Then user should be able to see the updated toast message

Scenario: Delete Policy Pack
    Given user clicks on All Polices button
    And user able to see all created policies 
    When user check for "QAPolicyPack731" policy pack   
    And user clicks on kebab menu of the policy pack
    And user clicks on delete button
    Then user should be able to see the deleted toast message

Scenario: Instant Learning section
    Given user should land on the dashboard
    When user clicks on Instant learning section
    Then user should be able to see instant learning dashboard

Scenario: All Utility Agents section
    Given user should land on the dashboard
    When user clicks on all utility agents section
    Then user should be able to see all the agents







