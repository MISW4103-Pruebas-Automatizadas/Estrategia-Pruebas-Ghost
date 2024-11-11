Feature: Login10

@user1 @web
Scenario: Con el usuario autorizado quiero entrar al panel administrativo del blog(password faltante)
  Given I navigate to this page "ghost/#/signout"
  And I wait for 1 seconds

  And I navigate to this page "ghost/#/signin"
  And I click view with selector "#identification"
  And I enter text "equipo12@email.com"
  And I wait for 1 seconds

  When I click view with selector "#ember5"
  And I wait for 4 seconds
  Then I should see "Please fill out the form to sign in." in view with selector "body > div.gh-app > div > main > div.gh-flow > div > section > p"
  And I wait for 2 seconds
