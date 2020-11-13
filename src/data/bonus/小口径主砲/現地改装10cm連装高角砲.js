/**
 * @module
 * 装备额外属性收益
 *
 * 398. 現地改装10cm連装高角砲
 *      https://wikiwiki.jp/kancolle/%E7%8F%BE%E5%9C%B0%E6%94%B9%E8%A3%8510cm%E9%80%A3%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2
 *
 */

const { 丹陽, 雪風改二 } = require('../../ship-ids');

// ============================================================================

module.exports = [
    {
        equipment: 398,
        ship: {
            isID: [丹陽],
        },
        bonus: {
            fire: 4,
            aa: 4,
            evasion: 2,
        },
    },
    {
        equipment: 398,
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 2,
        },
    },
];
