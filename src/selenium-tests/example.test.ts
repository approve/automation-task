const { Builder, By, until, Browser } = require('selenium-webdriver');
const assert = require("assert");
const { describe, it, before, after } = require("mocha")

describe('todoMVC automation task - suite', function () {
    let driver;

    before(async function () {
        driver = new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    });

    after(async () => await driver.quit());

    it('validates title is todos', async () => {
        await driver.get('https://todomvc.com/examples/react/dist/');
        const titleElement = await driver.wait(until.elementLocated(By.css("h1")), 5000);
        const titleText = await titleElement.getText();
        assert.equal(titleText, "todos");
    });
});