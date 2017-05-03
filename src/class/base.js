const vars = require('../variables')

module.exports = class {
    constructor(data) {
        for (let i in data) {
            this[i] = data[i]
        }
    }

    getName(theLocale = vars.locale) {
        return this.name
            ? (this.name[theLocale] || this.name)
            : null
    }

    get _name() {
        return this.getName()
    }
}