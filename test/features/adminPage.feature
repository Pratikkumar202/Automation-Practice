Feature: To chck the functionality of Admin Page

    Background:  Login to the application

        Given I am on the login page "https://opensource-demo.orangehrmlive.com"
        When I enter username Admin
        And I enter password admin123

    Scenario Outline: Verify the tabs in Admin page
        Given I am on Dashboard Dashboard
        And I move to Admin Page
        When I hover over <tabs>
        Then I verify the dropdown data in respective <tabs>

        Examples:
            | tabs               |
            | User Management    |
            | Job                |
            | Organization       |
            | Qualifications     |
            | Nationalities      |
            | Corporate Branding |
            | Configuration      |