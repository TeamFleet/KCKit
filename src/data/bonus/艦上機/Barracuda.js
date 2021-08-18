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

const { CV_ArkRoyal } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const MkII = [
    {
        equipment: 424,
        ship: {
            isClass: [CV_ArkRoyal],
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
            isClass: [CV_ArkRoyal],
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            asw: 4,
            evasion: 1,
        },
    },
];

// ============================================================================

module.exports = [...MkII, ...MkIII];
