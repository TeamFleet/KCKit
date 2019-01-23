/**
 * 装备额外属性收益
 * 283. **533mm 三連装魚雷**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/533mm%20%E4%B8%89%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7

const { vmf_DD } = require('../../ships')

module.exports = [

    {
        equipment: 283,
        ship: {
            isID: vmf_DD,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            armor: 1,
        }
    },

    // ------------------------------------------------------------------------
]
