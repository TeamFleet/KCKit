/**
 * @module
 * 装备额外属性收益
 * 327. **S-51J改**
 */

// https://wikiwiki.jp/kancolle/S-51J%E6%94%B9

const { 伊勢改二, 日向改二, 加賀改二護 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 327,
        ship: {
            isID: 伊勢改二,
        },
        bonus: {
            fire: 2,
            asw: 4,
            evasion: 1,
        },
    },
    {
        equipment: 327,
        ship: {
            isID: 日向改二,
        },
        bonus: {
            fire: 4,
            asw: 5,
            evasion: 2,
        },
    },
    {
        equipment: 327,
        ship: {
            isID: 加賀改二護,
        },
        bonus: {
            fire: 5,
            asw: 6,
            evasion: 4,
        },
    },
];
