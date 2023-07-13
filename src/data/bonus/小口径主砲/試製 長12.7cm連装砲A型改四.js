/**
 * @module
 * 装备额外属性收益
 *
 * 455. 試製 長12.7cm連装砲A型改四
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD%20%E9%95%B712.7cm%E9%80%A3%E8%A3%85%E7%A0%B2A%E5%9E%8B%E6%94%B9%E5%9B%9B
 *
 */

require('../../../../typedef');

const { DD_Fubuki, group_DD_Tokugata } = require('../../ship-classes');
const {
    深雪改二,
    磯波改二,
    浦波,
    浦波改,
    浦波改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 455,
        ship: {
            isID: [浦波改二],
        },
        bonus: {
            fire: 5,
            torpedo: 1,
            aa: 1,
            asw: 1,
            evasion: 1,
        },
    },
    {
        equipment: 455,
        ship: {
            isID: [深雪改二],
        },
        bonus: {
            fire: 5,
            aa: 1,
        },
    },
    {
        equipment: 455,
        ship: {
            isID: [磯波改二],
        },
        bonus: {
            fire: 4,
            aa: 1,
            asw: 1,
        },
    },
    {
        equipment: 455,
        ship: {
            isID: [浦波, 浦波改],
        },
        bonus: {
            fire: 4,
            aa: 1,
        },
    },
    {
        equipment: 455,
        ship: {
            isClass: [DD_Fubuki],
            isNotID: [深雪改二, 磯波改二, 浦波, 浦波改, 浦波改二],
        },
        bonus: {
            fire: 3,
            aa: 1,
        },
    },
    {
        equipment: 455,
        ship: {
            isClass: group_DD_Tokugata.filter(
                (classId) => classId !== DD_Fubuki
            ),
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },

    // ========================================================================
    // + 对水上電探
    {
        list: [455, 'SurfaceRadar'],
        equipments: {
            hasID: [455],
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
        list: [455, 'AARadar'],
        equipments: {
            hasID: [455],
            hasAARadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            aa: 4,
        },
    },

    // + 61cm三連装(酸素)魚雷
    {
        list: [455, 125],
        equipments: [{ isID: 455 }, { isID: 125 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        },
    },
];
