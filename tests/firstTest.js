module.exports = {
    'My first test case' (browser) {
        browser
            .url('https://www.linkedin.com')
            .waitForElementVisible('.nav__button-secondary')
            .assert.containsText(".nav__button-secondary", "Sign in");
    }
}