/**
 * @module
 * 装备额外属性收益
 *
 * 442. 潜水艦後部魚雷発射管4門(初期型)
 *      https://wikiwiki.jp/kancolle/%E6%BD%9C%E6%B0%B4%E8%89%A6%E5%BE%8C%E9%83%A8%E9%AD%9A%E9%9B%B7%E7%99%BA%E5%B0%84%E7%AE%A14%E9%96%80%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 *
 * 443. 潜水艦後部魚雷発射管4門(後期型)
 *      https://wikiwiki.jp/kancolle/%E6%BD%9C%E6%B0%B4%E8%89%A6%E5%BE%8C%E9%83%A8%E9%AD%9A%E9%9B%B7%E7%99%BA%E5%B0%84%E7%AE%A14%E9%96%80%28%E5%BE%8C%E6%9C%9F%E5%9E%8B%29
 *
 */

require('../../../../typedef');

const { group_SS_Navy_USN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 初期型 = [
    {
        equipment: 442,
        ship: {
            isClass: [...group_SS_Navy_USN],
        },
        bonus: {
            torpedo: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 後期型 = [
    {
        equipment: 443,
        ship: {
            isClass: [...group_SS_Navy_USN],
        },
        bonus: {
            torpedo: 2,
        },
    },
];

// ============================================================================

module.exports = [...初期型, ...後期型];
