/**
 * @module
 * 装备额外属性收益
 *
 * 118. 紫雲
 *      https://wikiwiki.jp/kancolle/%E7%B4%AB%E9%9B%B2
 *
 * 521. 紫雲(熟練)
 *      https://wikiwiki.jp/kancolle/%E7%B4%AB%E9%9B%B2%28%E7%86%9F%E7%B7%B4%29
 *
 */

require('../../../../typedef');

const { CL_Ooyodo } = require('../../ship-classes');
const { 三隈改二特 } = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 紫雲 = [
    {
        equipment: 118,
        ship: {
            isClass: [CL_Ooyodo],
        },
        bonusImprove: {
            0: {
                fire: 1,
                evasion: 2,
                los: 2,
            },
            10: {
                fire: 3,
                evasion: 2,
                los: 3,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 紫雲_熟練 = [
    {
        equipment: 521,
        ship: {
            isClass: [CL_Ooyodo],
        },
        bonusImprove: {
            1: {
                fire: 3,
                los: 5,
                evasion: 5,
                hit: 3,
            },
            2: {
                fire: 3,
                los: 5,
                evasion: 6,
                hit: 3,
            },
            4: {
                fire: 4,
                torpedo: 1,
                los: 6,
                evasion: 6,
                hit: 3,
            },
            6: {
                fire: 4,
                torpedo: 1,
                los: 6,
                evasion: 6,
                hit: 4,
            },
        },
    },
    {
        equipment: 521,
        ship: {
            isID: [三隈改二特],
        },
        bonusImprove: {
            1: {
                fire: 6,
                aa: 1,
                los: 4,
                evasion: 3,
                hit: 4,
            },
            2: {
                fire: 6,
                aa: 1,
                los: 4,
                evasion: 4,
                hit: 4,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [...紫雲, ...紫雲_熟練];
