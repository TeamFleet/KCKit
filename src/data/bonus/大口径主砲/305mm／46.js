/**
 * @module
 * 装备额外属性收益
 *
 * 426. 305mm/46 連装砲
 *      https://wikiwiki.jp/kancolle/305mm%EF%BC%8F46%20%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 427. 305mm/46 三連装砲
 *      https://wikiwiki.jp/kancolle/305mm%EF%BC%8F46%20%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const { BB_Gangut, BB_ConteDiCavour } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 連装砲 = [
    {
        equipment: 426,
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonusCount: {
            1: {
                fire: 3,
                evasion: 1,
            },
            2: {
                fire: 4,
                evasion: 2,
            },
        },
    },
    {
        equipment: 426,
        ship: {
            isClass: [BB_Gangut],
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 1,
            },
            2: {
                fire: 3,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装砲 = [
    {
        equipment: 427,
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 427,
        ship: {
            isClass: [BB_Gangut],
        },
        bonus: {
            fire: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    ...連装砲,
    ...三連装砲,

    {
        list: [426, 427],
        equipments: {
            hasID: [426, 427],
        },
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },

    {
        list: [426, 427],
        equipments: {
            hasID: [426, 427],
        },
        ship: {
            isClass: [BB_Gangut],
        },
        bonus: {
            fire: 1,
        },
    },
];
