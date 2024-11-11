Feature: Login

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog
  Given I navigate to this page "ghost/#/signin"
  When I click view with selector "#identification"
  Then I enter text "equipo12@email.com"
  When I click view with selector "#password"
  Then I enter text "q1w2e3r4t5y6"