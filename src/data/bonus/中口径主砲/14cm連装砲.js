/**
 * @module
 * 装备额外属性收益
 * 119. **14cm連装砲**
 */

// https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2

const {
    CL_Yuubari,
    CL_Yuubari2,
    CT_Katori,
    AV_Nisshin
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 119,
        ship: {
            isClass: [CL_Yuubari, CL_Yuubari2, CT_Katori]
        },
        bonus: {
            fire: 1
        }
    },

    {
        equipment: 119,
        ship: {
            isClass: [AV_Nisshin]
        },
        bonus: {
            fire: 2,
            torpedo: 1
        }
    }
];
