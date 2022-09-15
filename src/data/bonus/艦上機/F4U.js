/**
 * @module
 * 装备额外属性收益
 *
 * 473. F4U-2 Night Corsair
 *      https://wikiwiki.jp/kancolle/F4U-2%20Night%20Corsair
 *
 * 474. F4U-4
 *      https://wikiwiki.jp/kancolle/F4U-4
 *
 * 476. F4U-7
 *      https://wikiwiki.jp/kancolle/F4U-7
 *
 */

require('../../../../typedef');
const { group_CV_Navy_USN, group_CV_Navy_RN } = require('../../ship-classes');
const {
    'Gambier Bay Mk.II': GambierBayMkII,
    Langley改,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const F4U_2_Night_Corsair = [
    {
        equipment: 473,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 473,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const F4U_4 = [
    {
        equipment: 474,
        ship: {
            isID: [GambierBayMkII, Langley改],
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 474,
        ship: {
            isClass: [...group_CV_Navy_USN],
            isNotID: [GambierBayMkII, Langley改],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 474,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const F4U_7 = [];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [...F4U_2_Night_Corsair, ...F4U_4, ...F4U_7];
