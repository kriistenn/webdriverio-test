const windowPage = require('../pageobjects/switchWindow.page')

describe('Switch To Window', () => {
    it('should switch to the next window', () => {
        windowPage.open()
        windowPage.link.waitForDisplayed()
        windowPage.link.click()
        browser.switchWindow('window/new')
        expect(windowPage.h3Header).toHaveText(
            'New Window'
        )
    })
})