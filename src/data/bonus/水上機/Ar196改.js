/**
 * @module
 * 装备额外属性收益
 *
 * 115. Ar196改
 *      https://wikiwiki.jp/kancolle/%E7%B4%AB%E9%9B%B2
 *
 */

const { group_BB_Navy_KM, group_CA_Navy_KM } = require('../../ship-classes');

module.exports = [
    {
        equipment: 115,
        ship: {
            isClass: [group_BB_Navy_KM, group_CA_Navy_KM],
        },
        bonusImprove: {
            0: {
                fire: 2,
                evasion: 1,
                los: 2,
            },
            10: {
                fire: 3,
                evasion: 2,
                los: 2,
            },
        },
    },
];
