Feature: Singin

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds
  And I click view with selector "#blog-title"
  And I wait for 1 seconds
  And I enter text "Blog Equipo 12"
  And I wait for 1 seconds
  And I click view with selector "#name"
  And I wait for 1 seconds
  And I enter text "Equipo 12"
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
  And I wait for 2 seconds
  Then I should see "Let’s get started!" in view with selector "body > div.gh-app > div > main > section > div > section > div > div.gh-onboarding-header > h2"
  And I wait for 2 seconds
