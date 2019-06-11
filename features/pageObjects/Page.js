"use strict";
const { By, until } = require('selenium-webdriver');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

const SearchBox = require("./components/SearchBox")
const SearchResults = require("./components/SearchResults")

var BASE_URL = "http://host.docker.internal:3000";

function Page(driver) {
    this.driver = driver
};
  
Page.prototype.open = function(url) {
    this.driver.get(BASE_URL + url)
    this.driver.wait(until.elementLocated(By.xpath("//*")), 5 * 1000)
};

Page.prototype.getHeader = function() {
    return this.driver.findElement(By.xpath(HeaderSelector))
};

Page.prototype.getPageTitle = function() {
    return setTimeoutPromise(2000).then(() => { return this.driver.getTitle() })
};

Page.prototype.getUrl = function() {
    return setTimeoutPromise(2000).then(() => { return this.driver.getCurrentUrl() })
};

Page.prototype.getSearchBox = function() {
    return new SearchBox(this.driver)
};

Page.prototype.hasSearchResults = function() {
    return new SearchResults(this.driver)
};

module.exports = Page;