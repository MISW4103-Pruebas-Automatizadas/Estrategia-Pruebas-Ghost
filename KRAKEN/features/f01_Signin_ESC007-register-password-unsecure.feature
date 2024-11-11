Feature: Singin07

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds
  And I click view with selector "#password"
  And I wait for 1 seconds
  And I enter text "1234567890"
  And I wait for 1 seconds
  And I click view with selector "#name"
  And I wait for 4 seconds
  Then I should see "Sorry, you cannot use an insecure password" in view with selector "#setup > div:nth-child(4) > p"
  And I wait for 2 seconds
