/**
 * @module
 * 装备额外属性收益
 *
 *  78. 12.7cm単装砲
 *      https://wikiwiki.jp/kancolle/12.7cm%E5%8D%98%E8%A3%85%E7%A0%B2
 *
 */

const { group_DD_Navy_KM } = require('../../ship-classes');

// ============================================================================
module.exports = [
    {
        equipment: 78,
        ship: {
            isClass: [...group_DD_Navy_KM],
        },
        bonusImprove: {
            0: {
                fire: 1,
                evasion: 1,
            },
            8: {
                fire: 2,
                evasion: 1,
            },
            10: {
                fire: 2,
                armor: 1,
                evasion: 1,
            },
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [78, 'SurfaceRadar'],
        equipments: {
            hasID: [78],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [...group_DD_Navy_KM],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            evasion: 2,
        },
    },
];
