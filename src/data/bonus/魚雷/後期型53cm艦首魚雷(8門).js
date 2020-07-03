/**
 * @module
 * 装备额外属性收益
 *
 * 383. 後期型53cm艦首魚雷(8門)
 *      https://wikiwiki.jp/kancolle/%E5%BE%8C%E6%9C%9F%E5%9E%8B53cm%E8%89%A6%E9%A6%96%E9%AD%9A%E9%9B%B7%288%E9%96%80%29
 *
 */

const { I47, I58, I400, I401 } = require('../../ship-series');

// ============================================================================

const 単体ボーナス = [
    {
        equipment: 383,
        ship: {
            isID: [...I58],
        },
        bonus: {
            torpedo: 1,
        },
    },
    {
        equipment: 383,
        ship: {
            isID: [...I400, ...I401],
        },
        bonus: {
            torpedo: 2,
        },
    },
    {
        equipment: 383,
        ship: {
            isID: [...I47],
        },
        bonus: {
            torpedo: 3,
        },
    },
];

// ============================================================================

const 相互シナジーボーナス = [
    // + 後期型潜水艦搭載電探＆逆探
    {
        list: [383, 384],
        equipments: [{ isID: 383 }, { isID: 384 }],
        ship: {
            isType: [
                13, // SS
                14, // SSV
            ],
        },
        bonus: {
            torpedo: 3,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
