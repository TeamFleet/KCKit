/**
 * @module
 * 装备额外属性收益
 *
 * 283. 533mm 三連装魚雷
 *      https://wikiwiki.jp/kancolle/533mm%20%E4%B8%89%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7
 *
 * 400. 533mm 三連装魚雷(53-39型)
 *      https://wikiwiki.jp/kancolle/533mm%20%E4%B8%89%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7%2853-39%E5%9E%8B%29
 *
 */

const { vmf_DD } = require('../../ships');

// ============================================================================

const Base = [
    {
        equipment: 283,
        ship: {
            isID: vmf_DD,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            armor: 1,
        },
    },
];

// ============================================================================

const Type_53_39 = [
    {
        equipment: 400,
        ship: {
            isID: vmf_DD,
        },
        bonus: {
            fire: 1,
            torpedo: 5,
            armor: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...Base, ...Type_53_39];
