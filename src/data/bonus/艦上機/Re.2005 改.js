/**
 * 装备额外属性收益
 * 189. **Re.2005 改**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/Re.2005%20%E6%94%B9

const {
    group_CV_Navy_RM,
    group_CV_Navy_KM,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 189,
        ship: {
            isClass: [
                ...group_CV_Navy_RM,
                ...group_CV_Navy_KM
            ]
        },
        bonus: {
            aa: 1,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------

]
