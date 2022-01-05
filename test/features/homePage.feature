Feature: validate the home page

    Background: Login to the application

        Given I am on the login page "https://opensource-demo.orangehrmlive.com"
        When I enter username Admin
        And I enter password admin123

    Scenario: Validate the each page tab

        Given I am on Dashboard Dashboard
        When I click on each page <tab>
        Then verify the landing page <heading>

        Examples:
            | tab         | heading     |
            | Admin       | Admin       |
            | PIM         | PIM         |
            | Leave       | Leave       |
            | Time        | Time        |
            | Recruitment | Recruitment |
            | My Info     | My Info     |
            | Performance | Performance |
            | Dashboard   | Dashboard   |
            | Directory   | Directory   |
            | Maintenance | Maintenance |
            | Buzz        | Buzz        |

