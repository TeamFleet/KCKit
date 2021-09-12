/**
 * @module
 * 装备额外属性收益
 *
 * 424. Barracuda Mk.II
 *      https://wikiwiki.jp/kancolle/Barracuda%20Mk.II
 *
 * 425. Barracuda Mk.III
 *      https://wikiwiki.jp/kancolle/Barracuda%20Mk.III
 *
 */

require('../../../../typedef');

const { group_CV_Navy_RN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkII = [
    {
        equipment: 424,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonusImprove: {
            2: {
                fire: 3,
                aa: 3,
            },
            6: {
                fire: 4,
                aa: 3,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkIII = [
    {
        equipment: 425,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonusImprove: {
            2: {
                fire: 2,
                torpedo: 1,
                asw: 3,
                evasion: 1,
            },
            6: {
                fire: 3,
                torpedo: 1,
                asw: 4,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

module.exports = [...MkII, ...MkIII];
