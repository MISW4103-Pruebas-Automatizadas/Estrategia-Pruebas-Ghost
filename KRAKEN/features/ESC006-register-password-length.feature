Feature: Singin06

@user1 @web
Scenario: Quiero crear el blog y el usuario autorizado(password muy corta)
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds

  And I click view with selector "#password"
  And I enter text "123"
  And I wait for 1 seconds

  When I click view with selector "#name"
  And I wait for 1 seconds
  Then I should see "Password must be at least 10 characters long" in view with selector "#setup > div:nth-child(4) > p"
  And I wait for 2 seconds
