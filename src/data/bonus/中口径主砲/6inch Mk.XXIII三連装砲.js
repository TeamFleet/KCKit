/**
 * @module
 * 装备额外属性收益
 *
 * 399. 6inch Mk.XXIII三連装砲
 *      https://wikiwiki.jp/kancolle/6inch%20Mk.XXIII%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

const { group_CL_Navy_RN } = require('../../ship-classes');

// ============================================================================

module.exports = [
    {
        equipment: 399,
        ship: {
            isClass: [...group_CL_Navy_RN],
        },
        bonusImprove: {
            0: {
                fire: 1,
                evasion: 2,
            },
            3: {
                fire: 2,
                evasion: 2,
            },
        },
    },
];
