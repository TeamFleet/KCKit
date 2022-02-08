/**
 * @module
 * 装备额外属性收益
 *
 * 84. 2cm 四連装FlaK 38
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A664%E5%9E%8B%28%E8%A4%87%E5%BA%A7KMX%E6%90%AD%E8%BC%89%E6%A9%9F%29
 *
 */

require('../../../../typedef');

const { group_Navy_KM, group_Navy_RM } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 84,
        ship: {
            isClass: [...group_Navy_KM, ...group_Navy_RM],
        },
        bonusImprove: {
            4: {
                aa: 2,
                evasion: 2,
            },
            7: {
                fire: 1,
                aa: 3,
                evasion: 2,
            },
            10: {
                fire: 1,
                aa: 4,
                evasion: 3,
            },
        },
    },
    {
        equipment: 84,
        ship: {
            isNotClass: [...group_Navy_KM, ...group_Navy_RM],
        },
        bonusImprove: {
            4: {
                aa: 1,
                evasion: 1,
            },
            7: {
                fire: 1,
                aa: 2,
                evasion: 1,
            },
            10: {
                fire: 1,
                aa: 3,
                evasion: 2,
            },
        },
    },

    // ========================================================================

    {
        list: [
            {
                id: 84,
                star: 10,
            },
        ],
        ship: {
            isClass: [...group_Navy_KM, ...group_Navy_RM],
        },
        equipments: [
            {
                isID: 84,
                improvement: 10,
            },
        ],
        bonus: {
            fire: 1,
        },
    },
    {
        list: [
            {
                id: 84,
                star: 4,
            },
            'AARadar',
        ],
        ship: {
            canEquip: [29],
        },
        equipments: [
            {
                isID: 84,
                improvement: 4,
            },
            {
                isAARadar: true,
            },
        ],
        bonus: {
            aa: 1,
        },
    },
];
