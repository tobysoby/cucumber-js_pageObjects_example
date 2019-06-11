Feature: Simple stuff works

    My local install of moscow_mule works

    Scenario: Accessing the page works
        Given I open the google search
        When I enter "cucumber js" in the search box
        And I press the search button
        Then I see search results