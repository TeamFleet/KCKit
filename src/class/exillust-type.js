const vars = require('../variables')
const ItemBase = require('./base.js')

module.exports = class ExillustType extends ItemBase {
    constructor(data) {
        super(data);
    }

    getTime(theLocale = vars.locale) {
        return this.time
            ? (this.time[theLocale] || this.time.ja_jp)
            : null
    }
    get _time() {
        return this.getTime()
    }
}