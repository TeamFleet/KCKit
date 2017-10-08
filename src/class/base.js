const vars = require('../variables')

module.exports = class {
    constructor(data) {
        for (let i in data) {
            this[i] = data[i]
        }
    }

    getName(theLocale = vars.locale) {
        return this.name
            ? (this.name[theLocale] || this.name.ja_jp)
            : null
    }

    get _name() {
        return this.getName()
    }

    /**
     * 检查名称是否为（完全匹配）给定字符串
     * 
     * @param {String} nameToCheck - 要检查的名称
     * @param {Boolean|String} [locale] - 要检查的语言。如果为 true 检查当前语言，如果为 falsy 检查所有语言
     * @returns {Boolean} - 是否匹配
     */
    isName(nameToCheck, locale) {
        if (locale === true) locale = vars.locale
        if (locale) {
            if (this.name[locale] === nameToCheck) return true
            return false
        }

        for (let key in this.name) {
            if (key === 'suffix') continue
            if (this.name[key] === nameToCheck) return true
        }
        return false
    }

    /**
     * 检查名称是否包含给定字符串
     * 
     * @param {String} nameToCheck - 要检查的名称
     * @param {Boolean|String} [locale] - 要检查的语言。如果为 true 检查当前语言，如果为 falsy 检查所有语言
     * @returns {Boolean} - 是否匹配
     */
    hasName(nameToCheck, locale) {
        if (locale === true) locale = vars.locale
        if (locale) {
            if (this.name[locale].includes(nameToCheck)) return true
            return false
        }

        for (let key in this.name) {
            if (key === 'suffix') continue
            if (this.name[key].includes(nameToCheck)) return true
        }
        return false
    }
    isNameOf(...args) {
        return this.hasName(...args)
    }
}