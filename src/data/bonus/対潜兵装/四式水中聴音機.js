/**
 * @module
 * 装备额外属性收益
 *
 * 149. 四式水中聴音機
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E5%BE%B9%E7%94%B2%E5%BC%BE%E6%94%B9
 *
 */

const { DD_Akizuki, CL_AganoRevised } = require('../../ship-classes');
const { 雪風改二 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 149,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            asw: 2,
            evasion: 4,
        },
    },

    {
        equipment: 149,
        ship: {
            isID: [
                624, // 夕張改二丁
            ],
        },
        bonus: {
            asw: 3,
            evasion: 5,
        },
    },
    {
        equipment: 149,
        ship: {
            isID: [
                622, // 夕張改二
                623, // 夕張改二特
                141, // 五十鈴改二
                488, // 由良改二
                160, // 那珂改二
                雪風改二,
            ],
        },
        bonus: {
            asw: 1,
            evasion: 3,
        },
    },
    {
        equipment: 149,
        ship: {
            isClass: [DD_Akizuki],
        },
        bonus: {
            asw: 1,
            evasion: 2,
        },
    },
];
