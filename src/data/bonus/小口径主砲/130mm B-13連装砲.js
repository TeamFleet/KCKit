/**
 * 装备额外属性收益
 * 282. **130mm B-13連装砲**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/130mm%20B-13%E9%80%A3%E8%A3%85%E7%A0%B2

const { vmf_DD, Yuubari } = require('../../ships')

module.exports = [

    {
        equipment: 282,
        ship: {
            isID: [
                ...vmf_DD,
                ...Yuubari
            ]
        },
        bonus: {
            fire: 2,
            armor: 1,
        }
    },

    // ------------------------------------------------------------------------
]
