const vars = require('../variables')
const defaultLocale = 'ja_jp'

/**
 * 从名称对象中获取对应语种的名称
 * 
 * @param {Object} name - 名称对象
 * @param {String} locale - 语言ID
 * @returns {String}
 */

module.exports = (name = {}, locale = vars.locale) => {
    if (locale == 'en_us' && !name[locale] && name.ja_romaji) {
        return name.ja_romaji
            .split(' ')
            .map(string => string.charAt(0).toUpperCase() + string.slice(1))
            .join(' ')
    }
    return name[locale] || name[defaultLocale] || undefined
}