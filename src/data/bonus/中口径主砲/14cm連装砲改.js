/**
 * @module
 * 装备额外属性收益
 * 310. **14cm連装砲改**
 */

// https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9

const {
    CL_Yuubari,
    CL_Yuubari2,
    CT_Katori,
    AV_Nisshin,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 310,
        ship: {
            isClass: [CL_Yuubari],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 310,
        ship: {
            isClass: [CL_Yuubari2],
        },
        bonusImprove: {
            0: {
                fire: 4,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
            7: {
                fire: 5,
                torpedo: 1,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
            10: {
                fire: 7,
                torpedo: 1,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
        },
    },

    {
        equipment: 310,
        ship: {
            isClass: [CT_Katori],
        },
        bonusImprove: {
            0: {
                fire: 2,
                evasion: 1,
            },
            10: {
                fire: 4,
                evasion: 3,
            },
        },
    },

    {
        equipment: 310,
        ship: {
            isClass: [AV_Nisshin],
        },
        bonusImprove: {
            0: {
                fire: 3,
                torpedo: 2,
                aa: 1,
                evasion: 1,
            },
            10: {
                fire: 4,
                torpedo: 3,
                aa: 1,
                evasion: 1,
            },
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [310, 'SurfaceRadar'],
        equipments: {
            hasID: [310],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CL_Yuubari2],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 2,
        },
    },
];
