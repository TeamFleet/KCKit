/**
 * @module
 * 装备额外属性收益
 *
 * 204. 艦本新設計 増設バルジ(大型艦)
 *      https://wikiwiki.jp/kancolle/%E8%89%A6%E6%9C%AC%E6%96%B0%E8%A8%AD%E8%A8%88%20%E5%A2%97%E8%A8%AD%E3%83%90%E3%83%AB%E3%82%B8%28%E5%A4%A7%E5%9E%8B%E8%89%A6%29
 *
 */

const { 金剛改二丙, 比叡改二丙 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 204,
        ship: {
            isID: [金剛改二丙, 比叡改二丙],
        },
        bonusImprove: {
            0: {
                torpedo: 1,
                armor: 1,
            },
            7: {
                torpedo: 1,
                armor: 2,
            },
            10: {
                torpedo: 2,
                armor: 2,
            },
        },
    },
];
