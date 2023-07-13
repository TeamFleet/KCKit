/**
 * @module
 * 装备额外属性收益
 *
 * 294. 12.7cm連装砲A型改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2A%E5%9E%8B%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const { group_DD_Tokugata } = require('../../ship-classes');
const { 深雪改二 } = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 294,
        ship: {
            isID: [深雪改二],
        },
        bonusCount: {
            1: {
                fire: 2,
            },
            2: {
                fire: 6,
            },
            3: {
                fire: 11,
            },
        },
    },
    {
        equipment: 294,
        ship: {
            isID: [深雪改二],
        },
        bonusImprove: {
            6: {
                hit: 4,
            },
            7: { fire: 6, hit: 4 },
            8: {
                fire: 7,
                hit: 4,
            },
            9: {
                fire: 8,
                hit: 4,
            },
            10: {
                fire: 9,
                hit: 4,
            },
        },
    },
    {
        equipment: 294,
        ship: {
            isClass: group_DD_Tokugata,
            isNotID: [深雪改二],
        },
        bonus: {
            fire: 1,
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [294, 'SurfaceRadar'],
        equipments: {
            hasID: [294],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 2,
        },
    },

    // + 61cm三連装(酸素)魚雷
    {
        list: [294, 125],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 125,
            },
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        },
    },

    // + 61cm三連装(酸素)魚雷 x2
    // @ 吹雪型
    {
        list: [294, 125, 125],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 125,
            },
            {
                isID: 125,
            },
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        },
    },

    // + 61cm三連装(酸素)魚雷後期型
    {
        list: [294, 285],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 285,
            },
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 4,
        },
    },

    // + 61cm三連装(酸素)魚雷後期型 x2
    // @ 吹雪型
    {
        list: [294, 285, 285],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 285,
            },
            {
                isID: 285,
            },
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        },
    },
];
