Feature: Singin01

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds
  And I click view with selector "#ember4"
  And I wait for 1 seconds
  Then I should see "Please fill out every field correctly to set up your site" in view with selector "body > div.gh-app > div > main > section > div > p"
  And I wait for 2 seconds
