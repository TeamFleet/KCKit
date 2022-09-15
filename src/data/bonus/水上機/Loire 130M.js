/**
 * @module
 * 装备额外属性收益
 *
 * 471. Loire 130M
 *      https://wikiwiki.jp/kancolle/Loire%20130M
 *
 */

require('../../../../typedef');

const { group_BB_Navy_MN, group_Aux_Navy_MN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 471,
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonusImprove: {
            0: {
                fire: 4,
                evasion: 2,
                hit: 3,
            },
            6: {
                fire: 4,
                evasion: 3,
                hit: 4,
            },
            8: {
                fire: 5,
                evasion: 4,
                hit: 5,
            },
        },
    },
    {
        equipment: 471,
        ship: {
            isClass: [...group_Aux_Navy_MN],
        },
        bonusImprove: {
            0: {
                fire: 2,
                evasion: 2,
                hit: 2,
            },
            6: {
                fire: 2,
                evasion: 3,
                hit: 3,
            },
            8: {
                fire: 3,
                evasion: 4,
                hit: 4,
            },
        },
    },
];
