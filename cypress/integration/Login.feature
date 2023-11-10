Feature: Login

  I want to log into Gmail
  
  @smoke
  Scenario: Gmail Login
    Given I open Gmail login page
    When I type in
        |  username  | password  |
        |  sampletestcypress@gmail.com | Cypress!  |
    And I click on Sign in button
    Then "Your Feed" should be shown
     