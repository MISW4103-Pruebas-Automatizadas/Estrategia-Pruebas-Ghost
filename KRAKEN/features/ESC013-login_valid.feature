Feature: Login13

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/signout"
  And I wait for 1 seconds
  And I navigate to this page "ghost/#/signin"
  And I wait for 1 seconds

  And I click view with selector "#identification"
  And I enter text "equipo12@email.com"

  And I click view with selector "#password"
  And I enter text "q1w2e3r4t5y6"

  When I click view with selector "#ember5"
  And I wait for 4 seconds
  Then I should see the url ending as "ghost/#/signin"
  And I wait for 2 seconds