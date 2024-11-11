Feature: Singin03

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds
  And I click view with selector "#blog-title"
  And I wait for 1 seconds
  And I enter text "Blog Equipo 12"
  And I wait for 1 seconds
  And I click view with selector "#email"
  And I wait for 1 seconds
  And I enter text "equipo12@email.com"
  And I wait for 1 seconds
  And I click view with selector "#password"
  And I wait for 1 seconds
  And I enter text "q1w2e3r4t5y6"
  And I wait for 1 seconds
  And I click view with selector "#ember4"
  And I wait for 4 seconds
  Then I should see "Please enter a name." in view with selector ".response > body > div.gh-app > div > main > section > div > p"
  And I wait for 2 seconds
