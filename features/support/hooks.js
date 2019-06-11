'use strict';

const { After, Before } = require('cucumber');

After(function(scenarioResult) {
    if (scenarioResult.result.status === 'failed') {
        var timestamp = Date.now().toString();
        this.driver.takeScreenshot()
        .then(function(image, err) {
            require('fs').writeFile('screenshots/error_' + timestamp + '.png', image, 'base64', function(err) {
                console.log(err);
            });
        })
    }
    try {
        return this.driver.quit();
    }
    catch(err) {
        console.log(err);
    };
});