const { After, AfterAll, Before } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const fs = require("fs");

const scenariosIds = [];

const outputScenarios = new console.Console(
  fs.createWriteStream("./reports/output.txt", { flags: "a" }),
);

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function () {
  scenariosIds.push(this.testScenarioId);
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterAll(async function () {
  scenariosIds.forEach((scenarioId) => {
    outputScenarios.log(scenarioId);
  });
});
