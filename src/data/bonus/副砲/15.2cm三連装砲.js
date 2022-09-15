/**
 * @module
 * 装备额外属性收益
 *
 * 247. 15.2cm三連装砲
 *      https://wikiwiki.jp/kancolle/15.2cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const { group_BB_Navy_MN, group_Aux_Navy_MN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 247,
        ship: {
            isClass: [...group_BB_Navy_MN, ...group_Aux_Navy_MN],
        },
        bonus: {
            fire: 2,
            hit: 2,
        },
    },
];
