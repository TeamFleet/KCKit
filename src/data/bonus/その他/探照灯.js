/**
 * 装备额外属性收益 - 探照灯
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/%E6%8E%A2%E7%85%A7%E7%81%AF

const {
    Hiei,
    Kirishima,

    Choukai,

    Jintsu,

    Akatsuki,
    Akigumo,
    Yukikaze,
} = require('../../ship-series');

module.exports = [
    {
        equipment: 74,
        ship: {
            isID: [...Akigumo],
        },
        bonus: {
            fire: 2,
        },
    },

    {
        equipment: 74,
        ship: {
            isID: [...Yukikaze],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },

    {
        equipment: 74,
        ship: {
            isID: [...Hiei, ...Kirishima, ...Choukai, ...Akatsuki],
        },
        bonusCount: {
            1: {
                fire: 4,
                evasion: -1,
            },
        },
    },

    {
        equipment: 74,
        ship: {
            isID: [...Jintsu],
        },
        bonusCount: {
            1: {
                fire: 8,
                torpedo: 6,
                evasion: -1,
            },
        },
    },
];
