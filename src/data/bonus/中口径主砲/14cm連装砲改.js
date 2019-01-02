/**
 * 装备额外属性收益
 * 310. **14cm連装砲改**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9

const {
    CL_Yuubari, CT_Katori,
    AV_Nisshin
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 310,
        ship: {
            isClass: [
                CL_Yuubari,
            ],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        }
    },

    {
        equipment: 310,
        ship: {
            isClass: [
                CT_Katori,
            ],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        }
    },

    {
        equipment: 310,
        ship: {
            isClass: [
                AV_Nisshin,
            ],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            aa: 1,
            evasion: 1,
        }
    },

]
