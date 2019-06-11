"use strict";
const { By, until } = require('selenium-webdriver')

const SearchBoxSelector = "//div[contains(@class, 'react-autosuggest__container')]/input"

var logStr = "SearchBoxComponent: "

function SearchBoxComponent(driver) {
    this.driver = driver
    this.component = this.driver.wait(until.elementLocated(By.xpath(SearchBoxSelector)), 5 * 1000)
}

SearchBoxComponent.prototype.constructor = SearchBoxComponent;

SearchBoxComponent.prototype.getText = function() {
    return this.component.getText()
}

SearchBoxComponent.prototype.enterSearchString = function(searchString) {
    return this.component.sendKeys(searchString)
}

module.exports = SearchBoxComponent;