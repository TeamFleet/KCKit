/**
 * 装备额外属性收益
 * 316. **Re.2001 CB改**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/Re.2001%20CB%E6%94%B9

const {
    group_CV_Navy_RM,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 316,
        ship: {
            isClass: group_CV_Navy_RM
        },
        bonus: {
            fire: 4,
            aa: 1,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------

]
