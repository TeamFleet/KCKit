module.exports = (type, localeId = require('../variables.js').locale) => {
    return require(`../locales/${localeId}.js`)[type]
}