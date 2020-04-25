/**
 * @module
 * 装备额外属性收益
 *
 *  87. 新型高温高圧缶
 *      https://wikiwiki.jp/kancolle/%E6%96%B0%E5%9E%8B%E9%AB%98%E6%B8%A9%E9%AB%98%E5%9C%A7%E7%BC%B6
 *
 */

const { 金剛改二丙, 比叡改二丙 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 87,
        ship: {
            isID: [金剛改二丙, 比叡改二丙],
        },
        bonusImprove: {
            0: {
                torpedo: 1,
                evasion: 2,
            },
            8: {
                torpedo: 2,
                evasion: 3,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 3,
            },
        },
    },
];
