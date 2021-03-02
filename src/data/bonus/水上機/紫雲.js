/**
 * @module
 * 装备额外属性收益
 *
 * 118. 紫雲
 *      https://wikiwiki.jp/kancolle/%E7%B4%AB%E9%9B%B2
 *
 */

const { CL_Ooyodo } = require('../../ship-classes');

module.exports = [
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
