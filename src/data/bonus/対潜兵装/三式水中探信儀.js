/**
 * 装备额外属性收益
 * 47. **三式水中探信儀**
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%B0%B4%E4%B8%AD%E6%8E%A2%E4%BF%A1%E5%84%80

const {
    Kamikaze,
    Harukaze,
    Ushio,
    Ikazuchi,
    Shigure,
    Yamakaze,
    Yamagumo,
    Isokaze,
    Hamakaze,
    Maikaze,
    Kishinami,
    Asashimo,
} = require('../../ships');

module.exports = [
    {
        equipment: 47,
        ship: {
            isID: [
                ...Ushio,
                ...Ikazuchi,
                ...Yamagumo,
                ...Isokaze,
                ...Hamakaze,
                ...Kishinami,
            ],
        },
        bonus: {
            evasion: 2,
            asw: 2,
        },
    },

    {
        equipment: 47,
        ship: {
            isID: [
                ...Kamikaze,
                ...Harukaze,
                ...Shigure,
                ...Yamakaze,
                ...Maikaze,
                ...Asashimo,
            ],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            asw: 3,
        },
    },

    // ------------------------------------------------------------------------
];
