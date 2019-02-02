/**
 * 装备额外属性收益
 * 184. **Re.2001 OR改**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/Re.2001%20OR%E6%94%B9

const {
    group_CV_Navy_RM,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 184,
        ship: {
            isClass: group_CV_Navy_RM
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
        }
    },

    // ------------------------------------------------------------------------

]
