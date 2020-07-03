/**
 * @module
 * 装备额外属性收益
 *
 * 384. 後期型潜水艦搭載電探＆逆探
 *      https://wikiwiki.jp/kancolle/%E5%BE%8C%E6%9C%9F%E5%9E%8B%E6%BD%9C%E6%B0%B4%E8%89%A6%E6%90%AD%E8%BC%89%E9%9B%BB%E6%8E%A2%EF%BC%86%E9%80%86%E6%8E%A2
 *
 */

const { I47, I58, I400, I401 } = require('../../ship-series');
// ============================================================================

module.exports = [
    {
        equipment: 384,
        ship: {
            isID: [...I58],
        },
        bonus: {
            evasion: 2,
        },
    },
    {
        equipment: 384,
        ship: {
            isID: [...I47, ...I400, ...I401],
        },
        bonus: {
            evasion: 3,
        },
    },
];
