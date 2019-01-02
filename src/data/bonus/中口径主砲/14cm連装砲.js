/**
 * 装备额外属性收益
 * 4. **14cm連装砲**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2

const {
    CL_Yuubari, CT_Katori,
    AV_Nisshin
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 4,
        ship: {
            isClass: [
                CL_Yuubari,
                CT_Katori,
            ],
        },
        bonus: {
            fire: 1,
        }
    },

    {
        equipment: 4,
        ship: {
            isClass: [
                AV_Nisshin,
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 1,
        }
    },

]
