const TestApps = require('../pageobjects/testapps.page')

describe('Switch to Olx', () => {
    it('should switch to the TestApp and emter text', () => {
        TestApps.open()
        TestApps.iTest.waitForDisplayed()
        browser.switchToFrame(TestApps.iTest)
        TestApps.sendTextToBody('WebdriverIO is awesome')
        expect(TestApps.iTest).toHaveText(
            'WebdriverIO is awesome'
        )
    })
})