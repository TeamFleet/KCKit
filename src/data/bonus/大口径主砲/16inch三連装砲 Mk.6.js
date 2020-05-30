/**
 * @module
 * 装备额外属性收益
 *
 * 381. 16inch三連装砲 Mk.6
 *      https://wikiwiki.jp/kancolle/16inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.6
 *
 */

const { group_BB_Navy_USN } = require('../../ship-classes');

// ============================================================================

module.exports = [
    {
        equipment: 381,
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            6: {
                fire: 2,
            },
        },
    },
];
