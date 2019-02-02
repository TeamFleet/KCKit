/**
 * 装备额外属性收益
 * 188. **Re.2001 G改**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/Re.2001%20G%E6%94%B9

const {
    group_CV_Navy_RM,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 188,
        ship: {
            isClass: group_CV_Navy_RM
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------

]
