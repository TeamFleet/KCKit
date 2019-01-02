/**
 * 装备额外属性收益
 * 307. **GFCS Mk.37**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/GFCS%20Mk.37

const { group_Navy_USN } = require('../../ship-classes')

module.exports = [

    // @ US Navy
    {
        equipment: 307,
        ship: {
            isClass: group_Navy_USN,
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------
]
