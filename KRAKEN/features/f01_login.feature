Feature: Login

@user1 @web
Scenario: My scenario 2
  Given I navigate to this web "http://localhost:2369"
  When I click view with selector "#email"
  Then I enter text "yo@localhost.com"