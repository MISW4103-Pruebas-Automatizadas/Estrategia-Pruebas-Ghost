const { Given, When, Then } = require("@cucumber/cucumber");

/**
 * Crear pasos para el escenario Ejemplo
 */

Given('I navigate to this web {string}', async function (string) {
  return await this.driver.url(string);
});
When("I click view with selector {selector}", async function (selector) {
  var element = await this.driver.$(selector);
  return await element.click();
});
Then("I enter text {text}", async function (text) {
  return await this.driver.keys(text);
});
Then("I report a blog", function () {
  this.hasBlog = true;
});

/**
 * Crear pasos adicionales para el escenario login
 */
Given('I navigate to this page {string}', async function (string) {
  return await this.driver.url(`${this.ghostHost}/${string}`);
});
