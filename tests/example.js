var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
// This is your api key, make sure you use it in all your tests.
eyes.setApiKey('YOUR_API_KEY');

describe('angularjs homepage', function() {
    it('should add one and two', function() {
        // Start visual testing with browser viewport set to 1024x768.
        eyes.open(browser, 'Angular Demo Site', 'Simple Protractor Test', {width: 1024, height: 768});
        browser.get('http://juliemr.github.io/protractor-demo/');

        // Visual validation point #1
        eyes.checkWindow('Demo start');

        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        // Visual validation point #2
        eyes.checkWindow('Input Ready');
        element(by.id('gobutton')).click();

        // Visual validation point #3
        eyes.checkWindow('Result');

        // End visual testing. Validate visual correctness.
        eyes.close();
    });
});
