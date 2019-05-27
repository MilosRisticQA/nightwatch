module.exports = {
    'My first test case' (browser) {
        //Login
        const signInButton = '.nav__button-secondary'
        const emailField = '#username'
        const emailValue = 'analyst_qa@yahoo.com'
        const passwordField = '#password'
        const passwordValue = 'VezbamoTestiranje.'
        const logInButton = '.btn__primary--large[type="submit"]'
        //Job search
        const jobsHeader = '#jobs-nav-item'
        const jobTitle = 'input[placeholder="Search jobs"][type="text"]'
        const jobTitleValue = 'QA Automation'
        const location = 'input[placeholder="Search location"][type="text"]'
        const locationValue = 'Barcelona, Catalonia, Spain'
        const search = '.jobs-search-box__submit-button'
        //Pick first job in the list
        const jobSpecific = '.jobs-search-results__list li:nth-of-type(1)'
        //Save and Share job to a connection
        const jobSave = 'button[data-control-name="jobs_save_button__save"]'
        const share = '.external-social-share'
        const shareInMessage = '.message-anywhere-button'
        const recipient = 'input[placeholder="Type a name or multiple names"]'
        const messageSend = '.msg-form__send-button.artdeco-button.artdeco-button--1'
        

        browser
        //Login
            .url('https://www.linkedin.com')
            .waitForElementVisible(signInButton)
            .assert.containsText(signInButton, "Sign in")
            .click(signInButton)
            .saveScreenshot('tests_ouput/signIn.png')
            .setValue(emailField, emailValue)
            .setValue(passwordField, passwordValue)
            .click(logInButton)
            .saveScreenshot('tests_output/logIn.png')
        //Job search
            .click(jobsHeader)
            .setValue(jobTitle, jobTitleValue)
            .setValue(location, locationValue)
            .click(search)
            .saveScreenshot('tests_output/job-location-search.png')
        //Pick first job in the list
            .click(jobSpecific)
            .pause(1000)
            .saveScreenshot('tests_output/job-specific.png')
        //Save and Share job to a connection
            .click(jobSave)
            .pause(1000)
            .click(share)
            .pause(3000)
            .click(shareInMessage)
            .pause(1000)
            .setValue(recipient, 'Marko Manić')
            .pause(2000)
            .keys(browser.Keys.ENTER)
            .pause(1000)
            .saveScreenshot('tests_output/message.png')
            .waitForElementVisible(messageSend)
            .click(messageSend)
            .saveScreenshot('tests_output/messageSend.png')
            .pause(2000);





            




    }
}