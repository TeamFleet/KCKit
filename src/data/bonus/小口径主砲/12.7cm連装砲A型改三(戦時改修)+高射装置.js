/**
 * @module
 * 装备额外属性收益
 *
 * 295. 12.7cm連装砲A型改三(戦時改修)+高射装置
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2A%E5%9E%8B%E6%94%B9%E4%B8%89%28%E6%88%A6%E6%99%82%E6%94%B9%E4%BF%AE%29%EF%BC%8B%E9%AB%98%E5%B0%84%E8%A3%85%E7%BD%AE
 *
 */

require('../../../../typedef');

const { group_DD_Tokugata } = require('../../ship-classes');
const { 深雪改二, 磯波改二 } = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 295,
        ship: {
            isID: [深雪改二],
        },
        bonusCount: {
            1: {
                fire: 4,
                aa: 2,
            },
            2: {
                fire: 10,
                aa: 4,
            },
            3: {
                fire: 17,
                aa: 6,
            },
        },
    },
    {
        equipment: 295,
        ship: {
            isID: [磯波改二],
        },
        bonus: {
            fire: 3,
            aa: 3,
            asw: 1,
        },
    },
    {
        equipment: 295,
        ship: {
            isClass: group_DD_Tokugata,
            isNotID: [深雪改二, 磯波改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [295, 'SurfaceRadar'],
        equipments: {
            hasID: [295],
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

    // + 对空電探
    {
        list: [295, 'AARadar'],
        equipments: {
            hasID: [295],
            hasAARadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            aa: 6,
        },
    },
];
