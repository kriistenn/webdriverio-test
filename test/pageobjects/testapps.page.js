const Page = require('./page')


class TestApps extends Page {
   get iTestBody() {return $('#innerLayout')}
   get iTest() {return $('#div-gpt-ad-listing-branding')}


   /**
    * Enter text Olx.kg 
    * @param {String} text the text to be entered
    */

   sendTextToBody(text) {
       this.iTestBody.waitForDisplayed()
       this.iTestBody.clearValue()
       this.iTestBody.click()
       this.iTestBody.keys(text)
   }

   /**
    * overwrite specifc options to adapt it to page 
    */
   open() {return super.open('olx')}
}

module.exports = new TestApps();
