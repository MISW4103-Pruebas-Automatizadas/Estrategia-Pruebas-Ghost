const { Given, When, Then } = require("@cucumber/cucumber");

/**
 * Create steps to next scenario
 * 
 * Scenario: My scenario 2
    Given I navigate to page "https://www.facebook.com"
    When I click view with selector "#email"
 */

Given("I navigate to this web {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return await this.driver.url(string);
});
When("I click view with selector {selector}", async function (selector) {
  var element = await this.driver.$(selector);
  return await element.click();
});
Then("I enter text {text}", async function (text) {
  return await this.driver.keys(text);
});
