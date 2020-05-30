/**
 * @module
 * 装备额外属性收益
 *
 * 380. 12.7cm連装高角砲改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

const {
    天龍改二,
    龍田改二,
    北上改二,
    大井改二,
    五十鈴改二,
    由良改二,
    鬼怒改二,
    那珂改二,

    夕張改,
    夕張改二,
    夕張改二丁,
} = require('../../ship-ids');

// ============================================================================

const 単体ボーナス = [
    {
        equipment: 380,
        ship: {
            isID: [天龍改二, 龍田改二],
        },
        bonus: {
            fire: 1,
            aa: 2,
            asw: 2,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [五十鈴改二, 鬼怒改二, 那珂改二],
        },
        bonus: {
            fire: 2,
            aa: 3,
            asw: 2,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [由良改二],
        },
        bonus: {
            fire: 2,
            aa: 4,
            asw: 2,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [夕張改],
        },
        bonus: {
            fire: 1,
            asw: 1,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [夕張改二],
        },
        bonus: {
            fire: 1,
            aa: 2,
            asw: 1,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [夕張改二丁],
        },
        bonus: {
            fire: 1,
            aa: 2,
            asw: 3,
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [北上改二, 大井改二],
        },
        bonus: {
            fire: 3,
            aa: 2,
        },
    },
    {
        equipment: 379,
        ship: {
            isType: [
                21, // 練習巡洋艦
                12, // 水上機母艦
                24, // 水上機母艦
            ],
        },
        bonus: {
            fire: 1,
            aa: 2,
        },
    },
];

// ============================================================================

const 相互シナジーボーナス = [
    {
        list: [380, 'SurfaceRadar'],
        equipments: {
            hasID: [380],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [北上改二, 大井改二, 五十鈴改二, 由良改二, 鬼怒改二],
        },
        bonus: {
            fire: 3,
            evasion: 3,
        },
    },
    {
        list: [380, 'SurfaceRadar'],
        equipments: {
            hasID: [380],
            hasSurfaceRadar: true,
        },
        ship: {
            isType: [
                3, // CL
                34,
                35,
                28,
                2,
                21,
                12, // AV
                24,
            ],
            isNotID: [北上改二, 大井改二, 五十鈴改二, 由良改二, 鬼怒改二],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
