/**
 * 装备额外属性收益 - 96式150cm探照灯
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/96%E5%BC%8F150cm%E6%8E%A2%E7%85%A7%E7%81%AF

const { Hiei, Kirishima } = require('../../ship-series');
const { BB_Yamato } = require('../../ship-classes');
const { 比叡改二丙 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 140,
        ship: {
            isID: [...Hiei, ...Kirishima].filter((id) => id !== 比叡改二丙),
        },
        bonusCount: {
            1: {
                fire: 6,
                evasion: -2,
            },
        },
    },
    {
        equipment: 140,
        ship: {
            isID: [比叡改二丙],
        },
        bonusCount: {
            1: {
                fire: 9,
                torpedo: 3,
                evasion: -2,
            },
        },
    },
    {
        equipment: 140,
        ship: {
            isClass: [BB_Yamato],
        },
        bonusCount: {
            1: {
                fire: 4,
                evasion: -1,
            },
        },
    },
];
