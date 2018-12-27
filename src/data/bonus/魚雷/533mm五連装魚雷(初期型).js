/**
 * 装备额外属性收益 - 533mm五連装魚雷(初期型)
 * 
 * https://wikiwiki.jp/kancolle/533mm%E4%BA%94%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 * 
 * @module
 */

const { group_DD_Navy_USN } = require('../../ship-classes')

module.exports = [

    {
        equipment: 314,
        ship: {
            isClass: group_DD_Navy_USN,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        }
    },

    // ------------------------------------------------------------------------

]
