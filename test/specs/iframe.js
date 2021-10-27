const iFramePage = require('../pageobjects/iframe.page')

describe('Switch To IFrame', () => {
    it('should switch to iFrame and enter text', () => {
        iFramePage.open()
        iFramePage.iFrame.waitForDisplayed()
        browser.switchToFrame(iFramePage.iFrame)
        iFramePage.sendTextToBody('WebdriverIO is awesome')
        expect(iFramePage.iFrameBody).toHaveText(
            'WebdriverIO is awesome'
        )
    })
})