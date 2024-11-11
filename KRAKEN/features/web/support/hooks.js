const { After, AfterAll, Before } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const fs = require("fs");
const os = require("os");

const scenariosIds = [];

const outputScenarios = new console.Console(
  fs.createWriteStream("./reports/output.txt", { flags: "a" }),
);

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  
  // Si esta corriendo en docker ghost se encuentra en la red del compose
  const usuario = os.userInfo().username;
  console.log('USER =================================', usuario);
  this.ghostHost = usuario == 'node' ? 'http://ghost:2368' : 'http://localhost:2368';
  
  await this.driver.url(`${this.ghostHost}/ghost/#/signout`);
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
