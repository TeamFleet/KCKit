/**
 * @module
 * 装备额外属性收益
 * 35. **三式弾**
 */

// https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E5%BC%BE

const { 榛名改二 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 35,
        ship: {
            isID: [
                149, // 金剛改二
                591, // 金剛改二丙
                592, // 比叡改二丙
            ],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [
                150, // 比叡改二
            ],
        },
        bonusCount: {
            1: {
                aa: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [榛名改二],
        },
        bonusCount: {
            1: {
                aa: 1,
                evasion: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [
                152, // 霧島改二
            ],
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },
];
