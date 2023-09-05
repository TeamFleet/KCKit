/**
 * @module
 * 装备额外属性收益
 *
 * 509. 12cm単装高角砲E型改
 *      https://wikiwiki.jp/kancolle/12cm%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2E%E5%9E%8B%E6%94%B9
 *
 */

require('../../../../typedef');

const { DD_Kamikaze, DD_Mutsuki, DD_Matsu } = require('../../ship-classes');
const {
    由良改,
    由良改二,

    鬼怒改,
    鬼怒改二,

    那珂改,
    那珂改二,

    時雨改二,
    時雨改三,
    雪風改二,
} = require('../../ship-ids');
const { LightCruisers } = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 単体ボーナス = [
    {
        equipment: 509,
        ship: {
            canEquip: [2],
        },
        bonusImprove: {
            2: { aa: 1 },
            10: {
                fire: 1,
                aa: 2,
                evasion: 2,
                hit: 1,
            },
        },
    },

    {
        equipment: 509,
        ship: {
            isType: [31], // 海防艦
        },
        bonusImprove: {
            2: { aa: 2, asw: 1, evasion: 4 },
            10: {
                aa: 3,
                asw: 2,
                evasion: 2,
            },
        },
    },
    {
        equipment: 509,
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki, DD_Matsu],
        },
        bonusImprove: {
            2: {
                aa: 2,
                evasion: 3,
            },
            10: {
                aa: 3,
                evasion: 1,
            },
        },
    },
    {
        equipment: 509,
        ship: {
            isID: [時雨改二, 時雨改三],
        },
        bonusImprove: {
            2: {
                evasion: 2,
            },
            10: {
                aa: 1,
            },
        },
    },
    {
        equipment: 509,
        ship: {
            isID: [雪風改二],
        },
        bonusImprove: {
            2: {
                aa: 3,
                evasion: 4,
            },
            10: {
                aa: 4,
                evasion: 2,
            },
        },
    },
    {
        equipment: 509,
        ship: {
            isID: [由良改, 由良改二],
        },
        bonusImprove: {
            2: {
                aa: 1,
                evasion: 3,
            },
            10: {
                aa: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 509,
        ship: {
            isID: [鬼怒改, 鬼怒改二, 那珂改, 那珂改二],
        },
        bonusImprove: {
            2: {
                aa: 1,
                evasion: 1,
            },
            10: {
                aa: 1,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 相互シナジーボーナス = [
    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
            hasSurfaceRadar: true,
        },
        ship: {
            isType: LightCruisers,
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
    {
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
            hasAARadar: true,
        },
        ship: {
            isType: LightCruisers,
        },
        bonus: {
            aa: 2,
            evasion: 1,
        },
    },

    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
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
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
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
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki, DD_Matsu],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
    {
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
            hasAARadar: true,
        },
        ship: {
            isClass: [DD_Kamikaze, DD_Mutsuki, DD_Matsu],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },

    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [時雨改三],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 3,
        },
    },
    {
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
            hasAARadar: true,
        },
        ship: {
            isID: [時雨改三],
        },
        bonus: {
            fire: 2,
            aa: 7,
            evasion: 6,
        },
    },

    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [時雨改二],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        },
    },
    {
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
            hasAARadar: true,
        },
        ship: {
            isID: [時雨改二],
        },
        bonus: {
            aa: 4,
            evasion: 2,
        },
    },

    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
    {
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
            hasAARadar: true,
        },
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            aa: 3,
            evasion: 2,
        },
    },

    {
        list: [509, 'SurfaceRadar'],
        equipments: {
            hasID: [509],
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
        list: [509, 'AARadar'],
        equipments: {
            hasID: [509],
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
