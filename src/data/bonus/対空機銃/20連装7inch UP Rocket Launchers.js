/**
 * 装备额外属性收益 - 20連装7inch UP Rocket Launchers
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/20%E9%80%A3%E8%A3%857inch%20UP%20Rocket%20Launchers

const {
    BB_QueenElizabeth,
    BB_Nelson,
    CV_ArkRoyal,
    DD_J,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 301,
        ship: {
            isClass: [
                BB_QueenElizabeth,
                BB_Nelson,
                CV_ArkRoyal,
                DD_J,
            ]
        },
        bonus: {
            aa: 2,
            evasion: 1,
            armor: 1,
        }
    },

    // ------------------------------------------------------------------------

]
