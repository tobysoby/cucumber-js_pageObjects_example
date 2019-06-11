Feature: Simple stuff works

    My local install of moscow_mule works

    Scenario: Accessing the page works
        Given I open my locally running version of moscow_mule
        When I enter "smoketest" in the search box
        Then I see search results