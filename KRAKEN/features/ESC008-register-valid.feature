Feature: Singin08

@user1 @web
Scenario: Quiero crear el blog y el usuario autorizado(valido)
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds

  And I click view with selector "#blog-title"
  And I enter text "Blog Equipo 12"
  And I wait for 1 seconds

  And I click view with selector "#name"
  And I enter text "Equipo 12"
  And I wait for 1 seconds

  And I click view with selector "#email"
  And I enter text "equipo12@email.com"
  And I wait for 1 seconds

  And I click view with selector "#password"
  And I enter text "q1w2e3r4t5y6"
  And I wait for 1 seconds

  When I click view with selector "#ember4"
  And I wait for 4 seconds
  Then I should see the url ending as "ghost/#/dashboard"
  And I wait for 2 seconds
