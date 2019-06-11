"use strict";
const { By, until } = require('selenium-webdriver')

const SearchResultsListSelector = "//ul[contains(@class, 'react-autosuggest__suggestions-list')]"
const SearchResultsSelector = "//li"

var logStr = "SearchResultsComponent: "

function SearchResultsComponent(driver) {
    this.driver = driver
    this.component = this.driver.wait(until.elementLocated(By.xpath(SearchResultsListSelector)), 5 * 1000)
}

SearchResultsComponent.prototype.constructor = SearchResultsComponent;

SearchResultsComponent.prototype.getFirstSearchResult = function() {
    return this.component.findElements(By.xpath(SearchResultsSelector))
    .then(es => {
        return es[0]
    })
};

module.exports = SearchResultsComponent;