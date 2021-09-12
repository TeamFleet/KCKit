/**
 * @module
 * 装备额外属性收益
 *
 * 434. Corsair Mk.II
 *      https://wikiwiki.jp/kancolle/Corsair%20Mk.II
 *
 * 435. Corsair Mk.II(Ace)
 *      https://wikiwiki.jp/kancolle/Corsair%20Mk.II%28Ace%29
 *
 */

require('../../../../typedef');

const {
    CVB_Illustrious,
    CV_ArkRoyal,
    group_CV_Navy_USN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkII = [
    {
        equipment: 434,
        ship: {
            isClass: [CVB_Illustrious],
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 5,
        },
    },
    {
        equipment: 434,
        ship: {
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
        },
    },
    {
        equipment: 434,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkII_Ace = [
    {
        equipment: 435,
        ship: {
            isClass: [CVB_Illustrious],
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 5,
        },
    },
    {
        equipment: 435,
        ship: {
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
        },
    },
    {
        equipment: 435,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...MkII, ...MkII_Ace];
