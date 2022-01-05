Feature: I need to login to application

    Scenario Outline: As a user, I need to validate login credential

        Given I am on the login page "https://opensource-demo.orangehrmlive.com"
        When I enter username <uname>
        And I enter password <pwd>
        Then I verify on landing page <message>
        And I logout from application

        Examples:
            | uname | pwd      | message   |
            | Admin | admin123 | Dashboard |