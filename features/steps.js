const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const StartPage = require("./pageObjects/startPage/StartPage")

var page 

Given('I open my locally running version of moscow_mule', function () {
    return page = new StartPage(this.driver)
});

When('I enter {string} in the search box', function (string) {
    return page.getSearchBox().enterSearchString(string)
});

Then('I see search results', function () {
    return page.hasSearchResults().getFirstSearchResult()
    .then(res => {
        return expect(res).to.not.eq(null)
    })
});