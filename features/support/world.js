'use strict';

const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder} = require('selenium-webdriver');

var buildChromeDriverOnSeleniumGrid = function() {
  const hub_url = "http://localhost:4444/wd/hub"

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities({
      browserName: 'chrome',
      version: '70.0',
      enableVNC: true,
      name: 'Road Cucumber',
      "chromeOptions": {
        "args": [
          "--start-fullscreen",
          "--window-size=320,568"
        ]
    }
    })
    .usingServer(hub_url)
    .build()
};

var buildDriver = function() {
    setDefaultTimeout(60 * 1000)
    return buildChromeDriverOnSeleniumGrid()
};

var World = function World() {

  this.driver = buildDriver()

};

setWorldConstructor(World)