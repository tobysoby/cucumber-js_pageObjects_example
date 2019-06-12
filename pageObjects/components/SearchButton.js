"use strict";
const { By, until } = require('selenium-webdriver')

const SearchButtonSelector = "//input[contains(@name, 'btnK')]"

var logStr = "SearchButtonComponent: "

function SearchButtonComponent(driver) {
    this.driver = driver
    this.component = this.driver.wait(until.elementLocated(By.xpath(SearchButtonSelector)), 5 * 1000)
}

SearchButtonComponent.prototype.constructor = SearchButtonComponent;

SearchButtonComponent.prototype.press = function() {
    return this.component.click()
}

module.exports = SearchButtonComponent;