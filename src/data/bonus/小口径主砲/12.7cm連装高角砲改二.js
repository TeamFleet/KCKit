/**
 * @module
 * 装备额外属性收益
 *
 * 380. 12.7cm連装高角砲改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const { DD_Matsu } = require('../../ship-classes');
const { DD_Div7_2ndRemodel } = require('../../ships');
const {
    天龍改二,
    龍田改二,
    球磨改二,
    球磨改二丁,
    北上改二,
    大井改二,
    五十鈴改二,
    由良改二,
    鬼怒改二,
    那珂改二,

    夕張改,
    夕張改二,
    夕張改二丁,

    丹陽,
    雪風改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 単体ボーナス = [
    {
        equipment: 380,
        ship: {
            isClass: [DD_Matsu],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 4,
            },
            2: {
                fire: 4,
                aa: 6,
            },
            3: {
                fire: 5,
                aa: 8,
            },
        },
    },
    {
        equipment: 380,
        ship: {
            isID: [...DD_Div7_2ndRemodel],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
                evasion: 2,
            },
            2: {
                fire: 5,
                aa: 5,
                evasion: 2,
            },
            3: {
                fire: 7,
                aa: 7,
                evasion: 2,
            },
        },
    },
    {
        equipment: 379,
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonus: {
            fire: 3,
            aa: 3,
        },
    },
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
            isID: [球磨改二, 球磨改二丁],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 2,
            },
            2: {
                fire: 6,
                aa: 2,
            },
            3: {
                fire: 9,
                aa: 2,
            },
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
        equipment: 380,
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

/** @type {Array<EquipmentBonus>} */
const 相互シナジーボーナス = [
    {
        list: [380, 'SurfaceRadar'],
        equipments: {
            hasID: [380],
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
        list: [380, 'SurfaceRadar'],
        equipments: {
            hasID: [380],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [...DD_Div7_2ndRemodel],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },
    {
        list: [380, 'SurfaceRadar'],
        equipments: {
            hasID: [380],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
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
            isID: [球磨改二, 球磨改二丁],
        },
        bonus: {
            fire: 3,
            evasion: 4,
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
    {
        list: [380, 'AAGun'],
        equipments: {
            hasID: [380],
            hasAAGuns: true,
        },
        ship: {
            isID: [...DD_Div7_2ndRemodel],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 1,
        },
    },
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
