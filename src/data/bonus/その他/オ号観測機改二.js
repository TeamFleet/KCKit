/**
 * @module
 * 装备额外属性收益
 * 325. **オ号観測機改二**
 */

// https://wikiwiki.jp/kancolle/%E3%82%AA%E5%8F%B7%E8%A6%B3%E6%B8%AC%E6%A9%9F%E6%94%B9

const { 伊勢改二, 日向改二, 加賀改二護 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 325,
        ship: {
            isID: 伊勢改二,
        },
        bonus: {
            fire: 1,
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 325,
        ship: {
            isID: [日向改二, 加賀改二護],
        },
        bonus: {
            fire: 2,
            asw: 3,
            evasion: 1,
        },
    },
];
