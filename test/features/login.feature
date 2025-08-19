Feature: Login Feature

Scenario: Valid Login
    Given user is on the login page
    When user login with valid credentials
    When user click on "Sign In" button
    Then user should land on the dashboard

Scenario: InValid Login
    Given user is on the login page
    When user login with Invalid credentials
    When user click on "Sign In" button
    Then user should be able to see the error message

Scenario: Empty Fields Validation
    Given user is on the login page
    When user login with empty credentials
    When user click on "Sign In" button
    Then user should be able to see the warning message  

Scenario: User Validates Sign Up
    Given user is on the login page
    When user click on "Sign Up here" button
    Then user should be redirected to the sign up page
    When user fills in the sign up form with valid details
    When user click on "Sign up" button









