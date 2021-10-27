const Page = require('./page')

class IFramePage extends Page {
    get iFrame() {return $('#mce_0_ifr')}
    get iFrameBody() {return $('#tinymce')}

    /**
     * Enter text in the iframe
     *  @param {String} text the text to be entered
     */
   

    sendTextToBody(text) {
    this.iFrameBody.waitForDisplayed()
    this.iFrameBody.clearValue()
    this.iFrameBody.click()
    this.iFrameBody.keys(text)
}

/**
 * overwrite specifc options to adapt it to page object
 */

open() {return super.open('iframe')}
}

module.exports = new IFramePage();


