/**
 * @module
 * 装备额外属性收益
 * 326. **S-51J**
 */

// https://wikiwiki.jp/kancolle/S-51J%E6%94%B9

const { 伊勢改二, 日向改二, 加賀改二護 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 326,
        ship: {
            isID: 伊勢改二,
        },
        bonus: {
            fire: 1,
            asw: 3,
            evasion: 1,
        },
    },
    {
        equipment: 326,
        ship: {
            isID: 日向改二,
        },
        bonus: {
            fire: 3,
            asw: 4,
            evasion: 2,
        },
    },
    {
        equipment: 326,
        ship: {
            isID: 加賀改二護,
        },
        bonus: {
            fire: 3,
            asw: 5,
            evasion: 3,
        },
    },
];
