/**
 * @module
 * 装备额外属性收益
 *
 * 147. 120mm/50 連装砲
 *      https://wikiwiki.jp/kancolle/120mm%EF%BC%8F50%20%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 393. 120mm/50 連装砲 mod.1936
 *      https://wikiwiki.jp/kancolle/120mm%EF%BC%8F50%20%E9%80%A3%E8%A3%85%E7%A0%B2%20mod.1936
 *
 * 394. 120mm/50 連装砲改 A.mod.1937
 *      https://wikiwiki.jp/kancolle/120mm%EF%BC%8F50%20%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%20A.mod.1937
 *
 */

const { group_DD_Navy_RM } = require('../../ship-classes');
const { Grecale } = require('../../ship-series');

// ============================================================================

const STANDARD = [
    {
        equipment: 147,
        ship: {
            isClass: [...group_DD_Navy_RM],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

const mod1936 = [
    {
        equipment: 393,
        ship: {
            isClass: [...group_DD_Navy_RM],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

const Amod1937 = [
    {
        equipment: 394,
        ship: {
            isClass: [...group_DD_Navy_RM],
            isNotID: [...Grecale],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 394,
        ship: {
            isID: [...Grecale],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 3,
        },
    },
];

// ============================================================================

module.exports = [...STANDARD, ...mod1936, ...Amod1937];
