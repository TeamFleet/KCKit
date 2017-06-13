// const deepExtend = require('deep-extend')

let vars = {
    locale: "ja_jp",
    joint: "・",
    maxShipLv: 155,

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
    pathPics: {},

    hiddenShipIdStartFrom: 1000,
    enemyIdStartFrom: 1500
}

vars.register = (settings = {}) => {
    // deepExtend(vars, settings)
    Object.assign(vars, settings)
    // console.log(settings.db.ships[1]._name)
    // console.log(vars.db.ships[1]._name)
    return vars
}

module.exports = vars