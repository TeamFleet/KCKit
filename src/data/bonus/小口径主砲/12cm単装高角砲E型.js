/**
 * @module
 * 装备额外属性收益
 *
 * 382. 12cm単装高角砲E型
 *      https://wikiwiki.jp/kancolle/12cm%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2E%E5%9E%8B
 *
 */

const { DD_Kamikaze, DD_Mutsuki } = require('../../ship-classes');
const {
    由良,
    由良改,
    由良改二,

    鬼怒,
    鬼怒改,
    鬼怒改二,

    那珂,
    那珂改,
    那珂改二,
} = require('../../ship-ids');

// ============================================================================

const 単体ボーナス = [
    {
        equipment: 382,
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            aa: 2,
            asw: 1,
            evasion: 2,
        },
    },
    {
        equipment: 382,
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki],
        },
        bonus: {
            aa: 2,
            evasion: 1,
        },
    },
    {
        equipment: 382,
        ship: {
            isID: [由良, 鬼怒, 那珂],
        },
        bonus: {
            aa: 1,
        },
    },
    {
        equipment: 382,
        ship: {
            isID: [由良改, 由良改二, 鬼怒改, 鬼怒改二, 那珂改, 那珂改二],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

const 相互シナジーボーナス = [
    {
        list: [382, 'SurfaceRadar'],
        equipments: {
            hasID: [382],
            hasSurfaceRadar: true,
        },
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            fire: 2,
            evasion: 3,
        },
    },
    {
        list: [382, 'AARadar'],
        equipments: {
            hasID: [382],
            hasAARadar: true,
        },
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            aa: 2,
            evasion: 3,
        },
    },

    {
        list: [382, 'SurfaceRadar'],
        equipments: {
            hasID: [382],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
    {
        list: [382, 'AARadar'],
        equipments: {
            hasID: [382],
            hasAARadar: true,
        },
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },

    {
        list: [382, 'SurfaceRadar'],
        equipments: {
            hasID: [382],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [由良改二, 鬼怒改二, 那珂改二],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
    {
        list: [382, 'AARadar'],
        equipments: {
            hasID: [382],
            hasAARadar: true,
        },
        ship: {
            isID: [由良改二, 鬼怒改二, 那珂改二],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
