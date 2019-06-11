"use strict";
const { By, until } = require('selenium-webdriver');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
var Page = require('../Page');

function StartPage(driver) {
    Page.call(this, driver)
    this.open("/")
};
  
StartPage.prototype = Object.create(Page.prototype);
StartPage.prototype.constructor = StartPage;

module.exports = StartPage;