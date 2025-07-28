Feature: Login Feature

  Scenario: Valid Login
    Given user am on the login page
    When user login with valid credentials
    When user click on signIn button
    And user should land on the dashboard

  Scenario: InValid Login
    Given user am on the login page
    When user login with Invalid credentials
    When user click on signIn button
    Then user should be able to see the error message

  Scenario: Empty Fields Validation
    Given user am on the login page
    When user login with empty credentials
    When user click on signIn button
    Then user should be able to see the warning message  






