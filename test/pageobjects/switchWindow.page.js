const Page = require('./page')

class SwitchWindowPage extends Page {
    get link() {return $('.example a')}
    get h3Header() {return $('.example h3')}

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('windows')
    }
}

module.exports = new SwitchWindowPage();