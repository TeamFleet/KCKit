/**
 * @module
 * 装备额外属性收益
 *
 * 428. 320mm/44 連装砲
 *      https://wikiwiki.jp/kancolle/320mm%EF%BC%8F44%20%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 429. 320mm/44 三連装砲
 *      https://wikiwiki.jp/kancolle/320mm%EF%BC%8F44%20%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const {
    BB_Gangut,
    BB_ConteDiCavour,
    BB_VittorioVeneto,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 連装砲 = [
    {
        equipment: 428,
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
    },
    {
        equipment: 428,
        ship: {
            isClass: [BB_VittorioVeneto],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
    {
        equipment: 428,
        ship: {
            isClass: [BB_Gangut],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装砲 = [
    {
        equipment: 429,
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 429,
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
        list: [428, 429],
        equipments: {
            hasID: [428, 429],
        },
        ship: {
            isClass: [BB_ConteDiCavour, BB_VittorioVeneto],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    {
        list: [428, 429],
        equipments: {
            hasID: [428, 429],
        },
        ship: {
            isClass: [BB_Gangut],
        },
        bonus: {
            fire: 1,
        },
    },
];
