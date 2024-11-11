Feature: Singin05

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
  And I enter text "equipo12"
  And I click view with selector "#name"
  And I wait for 4 seconds
  Then I should see "Invalid Email." in view with selector "#setup > div.form-group.error > p"
  And I wait for 2 seconds
