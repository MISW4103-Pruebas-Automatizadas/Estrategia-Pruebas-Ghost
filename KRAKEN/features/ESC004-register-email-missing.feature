Feature: Singin04

@user1 @web
Scenario: Quiero crear el blog y el usuario autorizado(falta email)
  Given I navigate to this page "ghost/#/setup"
  And I wait for 1 seconds
  
  And I click view with selector "#blog-title"
  And I enter text "Blog Equipo 12"
  And I wait for 1 seconds
  
  And I click view with selector "#name"
  And I enter text "Equipo 12"
  And I wait for 1 seconds
  
  And I click view with selector "#password"
  And I enter text "q1w2e3r4t5y6"
  And I wait for 1 seconds

  When I click view with selector "#ember4"
  And I wait for 4 seconds
  Then I should see "Please enter an email" in view with selector "#setup > div.form-group.error > p"
  And I wait for 2 seconds
