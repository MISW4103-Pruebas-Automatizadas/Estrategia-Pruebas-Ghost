Feature: My feature

@user1 @web
Scenario: My scenario 2
  Given I navigate to this web "https://www.w3schools.com"
  When I click view with selector "#search2"
  Then I enter text "sql tutorial"