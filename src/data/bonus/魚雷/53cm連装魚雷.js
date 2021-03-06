/**
 * @module
 * 装备额外属性收益
 * 174. **53cm連装魚雷**
 */

// https://wikiwiki.jp/kancolle/53cm%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7

const { DD_Kamikaze } = require('../../ship-classes');
const { 比叡改二丙 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 174,
        ship: {
            isClass: [DD_Kamikaze],
        },
        bonus: {
            torpedo: 1,
            evasion: 2,
        },
    },

    {
        equipment: 174,
        ship: {
            isID: [
                591, // 金剛改二丙
                比叡改二丙,
            ],
        },
        bonus: {
            torpedo: 6,
            evasion: 3,
        },
    },

    // ------------------------------------------------------------------------

    // + 96式150cm探照灯
    {
        list: [174, 140],
        equipments: [
            {
                isID: 174,
            },
            {
                isID: 140,
            },
        ],
        ship: {
            isID: [比叡改二丙],
        },
        bonus: {
            torpedo: 5,
        },
    },
];
