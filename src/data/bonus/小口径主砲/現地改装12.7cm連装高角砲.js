/**
 * @module
 * 装备额外属性收益
 *
 * 397. 現地改装12.7cm連装高角砲
 *      https://wikiwiki.jp/kancolle/%E7%8F%BE%E5%9C%B0%E6%94%B9%E8%A3%8512.7cm%E9%80%A3%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2
 *
 */

const { 丹陽, 雪風改二 } = require('../../ship-ids');

// ============================================================================

module.exports = [
    {
        equipment: 397,
        ship: {
            isID: [丹陽],
        },
        bonusImprove: {
            0: {
                fire: 5,
                aa: 2,
                evasion: 1,
            },
            4: {
                fire: 9,
                aa: 2,
                evasion: 2,
            },
        },
    },
    {
        equipment: 397,
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 1,
        },
        // bonusImprove: {
        //     0: {
        //         fire: 3,
        //         aa: 1,
        //         evasion: 1,
        //     },
        //     },
        //     4: {
        //         fire: 9,
        //         aa: 2,
        //         evasion: 2,
        //     },
        // },
    },

    // ========================================================================

    // + 对水上電探
    {
        list: [397, 'SurfaceRadar'],
        equipments: {
            hasID: [397],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonus: {
            fire: 3,
            evasion: 3,
        },
    },
];
