/**
 * @module
 * 装备额外属性收益
 *
 *  69. カ号観測機
 *      https://wikiwiki.jp/kancolle/%E3%82%AB%E5%8F%B7%E8%A6%B3%E6%B8%AC%E6%A9%9F
 *
 */

const { 伊勢改二, 日向改二, 加賀改二護 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 69,
        ship: {
            isID: 伊勢改二,
        },
        bonus: {
            fire: 1,
            asw: 1,
        },
    },
    {
        equipment: 69,
        ship: {
            isID: [日向改二, 加賀改二護],
        },
        bonus: {
            fire: 1,
            asw: 2,
        },
    },
];
