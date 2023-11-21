Feature: Home page

  Scenario: Client sees OUR TOP SERVICES section
    Given I open the Home page
    Then the Home page should show the "OUR TOP SERVICES" section

  Scenario: Client opens Our Services page
    Given I open the Home page
    Then I should be able to open the Our Services page

  Scenario: Client sends email
    Given I open the Home page
    When I send the email
      | name       | emailAddress            | details             |
      | John Smith | tester1@standprof.co.uk | Hello, how are you? |
    Then I should see the "Thank you for your message."
