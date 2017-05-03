const deepExtend = require('deep-extend')

const register = (settings = {}) => {
    deepExtend(vars, settings)
    return vars
}

let vars = {
    locale: "ja_jp",
    joint: "・",
    maxShipLv: 155,

    speed: {
        5: '低速',
        10: '高速',
        15: '高速+',
        20: '最速'
    },
    range: {
        1: '短',
        2: '中',
        3: '长',
        4: '超长'
    },
    rank: {
        1: '|',
        2: '||',
        3: '|||',
        4: '\\',
        5: '\\\\',
        6: '\\\\\\',
        7: '》'
    },

    extPic: '.png',

    db: {},
    pathPics: {
    }
}

module.exports = {
    register,
    ...vars
}