/**
 * @module
 * 装备额外属性收益
 *
 * 242. Swordfish
 *      https://wikiwiki.jp/kancolle/Swordfish
 *
 * 243. Swordfish Mk.II(熟練)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.II%28%E7%86%9F%E7%B7%B4%29
 *
 * 244. Swordfish Mk.III(熟練)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.III%28%E7%86%9F%E7%B7%B4%29
 *
 */

require('../../../../typedef');

const {
    CV_ArkRoyal,
    CVL_Houshou,
    CVL_HoushouRevised,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _ = [
    {
        equipment: 242,
        ship: {
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },
    {
        equipment: 242,
        ship: {
            isClass: [CVL_Houshou, CVL_HoushouRevised],
        },
        bonus: {
            fire: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkII_熟練 = [
    {
        equipment: 243,
        ship: {
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
    },
    {
        equipment: 243,
        ship: {
            isClass: [CVL_Houshou, CVL_HoushouRevised],
        },
        bonus: {
            fire: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkIII_熟練 = [
    {
        equipment: 244,
        ship: {
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 4,
            evasion: 2,
        },
    },
    {
        equipment: 244,
        ship: {
            isClass: [CVL_Houshou, CVL_HoushouRevised],
        },
        bonus: {
            fire: 3,
        },
    },
];

// ============================================================================

module.exports = [..._, ...MkII_熟練, ...MkIII_熟練];
