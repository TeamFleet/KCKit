/**
 * @module
 * 装备额外属性收益
 *
 * 502. 35.6cm連装砲改三(ダズル迷彩仕様)
 *      https://wikiwiki.jp/kancolle/35.6cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%E4%B8%89%28%E3%83%80%E3%82%BA%E3%83%AB%E8%BF%B7%E5%BD%A9%E4%BB%95%E6%A7%98%29
 *
 */

require('../../../../typedef');

const {
    金剛改二,
    金剛改二丙,
    比叡改二,
    比叡改二丙,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    霧島改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 単体ボーナス = [
    {
        equipment: 502,
        ship: {
            isID: [金剛改二],
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [金剛改二丙],
        },
        bonusImprove: {
            0: {
                fire: 2,
                aa: 1,
                evasion: 1,
            },
            4: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
            6: {
                fire: 3,
                aa: 2,
                evasion: 1,
            },
            8: {
                fire: 3,
                aa: 2,
                evasion: 2,
            },
            10: {
                fire: 3,
                aa: 3,
                evasion: 2,
            },
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [比叡改二],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [比叡改二丙],
        },
        bonusImprove: {
            0: {
                fire: 1,
                aa: 1,
            },
            5: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
            8: {
                fire: 2,
                aa: 1,
                evasion: 1,
            },
            10: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [榛名改二],
        },
        bonusImprove: {
            0: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
            2: {
                fire: 2,
                aa: 2,
                evasion: 2,
            },
            4: {
                fire: 2,
                aa: 3,
                evasion: 2,
            },
            6: {
                fire: 3,
                aa: 3,
                evasion: 2,
            },
            8: {
                fire: 3,
                aa: 3,
                evasion: 3,
            },
            10: {
                fire: 3,
                aa: 4,
                evasion: 3,
            },
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [榛名改二乙],
        },
        bonusImprove: {
            0: {
                fire: 5,
                aa: 4,
                evasion: 3,
            },
            1: {
                fire: 5,
                aa: 4,
                evasion: 4,
            },
            3: {
                fire: 5,
                aa: 5,
                evasion: 4,
            },
            5: {
                fire: 6,
                aa: 5,
                evasion: 4,
            },
            7: {
                fire: 6,
                aa: 5,
                evasion: 5,
            },
            8: {
                fire: 6,
                aa: 6,
                evasion: 5,
            },
            9: {
                fire: 7,
                aa: 6,
                evasion: 5,
            },
            10: {
                fire: 7,
                aa: 7,
                evasion: 5,
            },
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [榛名改二丙],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 3,
                evasion: 3,
            },
            1: {
                fire: 3,
                aa: 3,
                evasion: 4,
            },
            3: {
                fire: 3,
                aa: 4,
                evasion: 4,
            },
            5: {
                fire: 4,
                aa: 4,
                evasion: 4,
            },
            7: {
                fire: 4,
                aa: 4,
                evasion: 5,
            },
            8: {
                fire: 4,
                aa: 5,
                evasion: 5,
            },
            9: {
                fire: 5,
                aa: 5,
                evasion: 5,
            },
            10: {
                fire: 5,
                aa: 6,
                evasion: 5,
            },
        },
    },
    {
        equipment: 502,
        ship: {
            isID: [霧島改二],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            5: {
                fire: 1,
                evasion: 1,
            },
            8: {
                fire: 2,
                evasion: 1,
            },
            10: {
                fire: 2,
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
        list: [502, 'SurfaceRadar'],
        equipments: {
            hasID: [502],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [榛名改二乙],
        },
        bonus: {
            fire: 3,
            evasion: 4,
        },
    },
    {
        list: [502, 'SurfaceRadar'],
        equipments: {
            hasID: [502],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [金剛改二, 金剛改二丙, 榛名改二, 榛名改二丙],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },

    {
        list: [502, 410],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 410, // 21号対空電探改二
            },
        ],
        ship: {
            isID: [榛名改二乙, 榛名改二丙],
        },
        bonus: {
            aa: 1,
        },
    },
    {
        list: [
            502,
            {
                id: 410,
                star: 10,
            },
        ],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 410, // 21号対空電探改二
                improvement: 10,
            },
        ],
        ship: {
            isID: [榛名改二乙, 榛名改二丙],
        },
        bonus: { fire: 1, evasion: 1 },
    },

    {
        list: [502, 411],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 411, // 42号対空電探改二
            },
        ],
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            aa: 2,
        },
    },
    {
        list: [
            502,
            {
                id: 411,
                star: 2,
            },
        ],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 411, // 42号対空電探改二
                improvement: 2,
            },
        ],
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        list: [
            502,
            {
                id: 411,
                star: 4,
            },
        ],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 411, // 42号対空電探改二
                improvement: 4,
            },
        ],
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            evasion: 1,
        },
    },
    {
        list: [
            502,
            {
                id: 411,
                star: 6,
            },
        ],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 411, // 42号対空電探改二
                improvement: 6,
            },
        ],
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            hit: 1,
        },
    },
    {
        list: [
            502,
            {
                id: 411,
                star: 10,
            },
        ],
        equipments: [
            {
                isID: 502,
            },
            {
                isID: 411, // 42号対空電探改二
                improvement: 10,
            },
        ],
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [...単体ボーナス, ...相互シナジーボーナス];
