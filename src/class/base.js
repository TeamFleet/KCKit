const { locale } = require('../variables')

module.exports = class {
    constructor(data) {
        for (let i in data) {
            this[i] = data[i]
        }
    }

    getName(locale = locale) {
        return this.name
            ? (this.name[locale] || this.name)
            : null
    }

    get _name() {
        return this.getName()
    }
}