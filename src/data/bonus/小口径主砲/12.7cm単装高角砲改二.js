/**
 * @module
 * 装备额外属性收益
 *
 * 379. 12.7cm単装高角砲改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

const { DD_Kamikaze, DD_Mutsuki, DD_Matsu } = require('../../ship-classes');
const {
    天龍,
    天龍改,
    天龍改二,

    龍田,
    龍田改,
    龍田改二,

    北上,
    北上改,
    北上改二,

    大井,
    大井改,
    大井改二,

    五十鈴,
    五十鈴改,
    五十鈴改二,

    由良,
    由良改,
    由良改二,

    鬼怒,
    鬼怒改,
    鬼怒改二,

    那珂,
    那珂改,
    那珂改二,

    夕張,
    夕張改,
    夕張改二,
    夕張改二特,
    夕張改二丁,
} = require('../../ship-ids');

// ============================================================================

const 単体ボーナス = [
    {
        equipment: 379,
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            fire: 1,
            aa: 2,
        },
    },
    {
        equipment: 379,
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki],
        },
        bonus: {
            fire: 1,
            aa: 2,
        },
    },
    {
        equipment: 379,
        ship: {
            isClass: [DD_Matsu],
        },
        bonus: {
            fire: 3,
            aa: 4,
        },
    },
    {
        equipment: 379,
        ship: {
            isID: [天龍, 天龍改, 龍田, 龍田改],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 379,
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
        equipment: 379,
        ship: {
            isID: [五十鈴, 五十鈴改, 由良, 鬼怒, 鬼怒改, 那珂, 那珂改],
        },
        bonus: {
            fire: 2,
            aa: 2,
            asw: 1,
        },
    },
    {
        equipment: 379,
        ship: {
            isID: [由良改],
        },
        bonus: {
            fire: 2,
            aa: 3,
            asw: 1,
        },
    },
    {
        equipment: 379,
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
        equipment: 379,
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
        equipment: 379,
        ship: {
            isID: [北上, 北上改, 北上改二, 大井, 大井改, 大井改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
        },
    },
    {
        equipment: 379,
        ship: {
            isID: [夕張, 夕張改, 夕張改二特],
        },
        bonus: {
            fire: 1,
            asw: 1,
        },
    },
    {
        equipment: 379,
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
        equipment: 379,
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
            aa: 1,
        },
    },
];

// ============================================================================

const 相互シナジーボーナス = [
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            fire: 1,
            evasion: 4,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki],
        },
        bonus: {
            fire: 2,
            evasion: 3,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Matsu],
        },
        bonus: {
            fire: 4,
            evasion: 3,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [北上改二, 大井改二, 五十鈴改二, 鬼怒改二, 那珂改二],
        },
        bonus: {
            fire: 2,
            evasion: 3,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [由良改二],
        },
        bonus: {
            fire: 3,
            evasion: 4,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [
                天龍,
                天龍改,
                天龍改二,

                龍田,
                龍田改,
                龍田改二,

                夕張,
                夕張改,
                夕張改二,
                夕張改二特,
                夕張改二丁,
            ],
        },
        bonus: {
            fire: 3,
            evasion: 5,
        },
    },
    {
        list: [379, 'SurfaceRadar'],
        equipments: {
            hasID: [379],
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
            isNotID: [
                天龍,
                天龍改,
                天龍改二,
                龍田,
                龍田改,
                龍田改二,
                北上改二,
                大井改二,
                五十鈴改二,
                由良改二,
                鬼怒改二,
                那珂改二,
                夕張,
                夕張改,
                夕張改二,
                夕張改二特,
                夕張改二丁,
            ],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
