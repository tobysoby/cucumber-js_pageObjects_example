const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const StartPage = require(process.cwd() + "/pageObjects/startPage/StartPage")

var page 

Given('I open the google search', function () {
    return page = new StartPage(this.driver)
});

When('I enter {string} in the search box', function (string) {
    return page.getSearchBox().enterSearchString(string)
});

When('I press the search button', function () {
    return page.getSearchButton().press()
});

Then('I see search results', function () {
    return page.hasSearchResults().getFirstSearchResult()
    .then(res => {
        return expect(res).to.not.eq(null)
    })
});