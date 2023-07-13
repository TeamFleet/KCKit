/**
 * @module
 * 装备额外属性收益
 *
 * 503. 35.6cm連装砲改四
 *      https://wikiwiki.jp/kancolle/35.6cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%E5%9B%9B
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
        equipment: 503,
        ship: {
            isID: [金剛改二, 比叡改二, 榛名改二, 霧島改二],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 503,
        ship: {
            isID: [金剛改二丙, 比叡改二丙],
        },
        bonus: {
            fire: 3,
            aa: 1,
            hit: 1,
        },
    },
    {
        equipment: 503,
        ship: {
            isID: [榛名改二乙],
        },
        bonus: {
            fire: 4,
            aa: 4,
            hit: 2,
        },
    },
    {
        equipment: 503,
        ship: {
            isID: [榛名改二丙],
        },
        bonus: {
            fire: 4,
            aa: 3,
            hit: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 相互シナジーボーナス = [
    {
        list: [503, 'SurfaceRadar'],
        equipments: {
            hasID: [503],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二, 榛名改二乙],
        },
        bonus: {
            fire: 2,
            evasion: 1,
            hit: 2,
        },
    },

    {
        list: [503, 'SuperSurfaceRadar'],
        equipments: {
            hasID: [503],
            hasSuperSurfaceRadar: true,
        },
        ship: {
            isID: [金剛改二丙],
        },
        bonus: {
            fire: 3,
            evasion: 2,
            hit: 2,
        },
    },
    {
        list: [503, 'SuperSurfaceRadar'],
        equipments: {
            hasID: [503],
            hasSuperSurfaceRadar: true,
        },
        ship: {
            isID: [比叡改二丙, 榛名改二乙],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 2,
        },
    },

    {
        list: [503, 174],
        equipments: [
            {
                isID: 503,
            },
            {
                isID: 174, // 53cm連装魚雷
            },
        ],
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            torpedo: 4,
        },
    },
    {
        list: [
            503,
            {
                id: 174,
                star: 6,
            },
        ],
        equipments: [
            {
                isID: 503,
            },
            {
                isID: 174, // 53cm連装魚雷
                improvement: 6,
            },
        ],
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二乙, 榛名改二丙],
        },
        bonus: { torpedo: 1 },
    },
    {
        list: [
            503,
            {
                id: 174,
                star: 8,
            },
        ],
        equipments: [
            {
                isID: 503,
            },
            {
                isID: 174, // 53cm連装魚雷
                improvement: 8,
            },
        ],
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二乙, 榛名改二丙],
        },
        bonus: { hit: 1 },
    },
    {
        list: [
            503,
            {
                id: 174,
                star: 10,
            },
        ],
        equipments: [
            {
                isID: 503,
            },
            {
                isID: 174, // 53cm連装魚雷
                improvement: 10,
            },
        ],
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二乙, 榛名改二丙],
        },
        bonus: { fire: 1 },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [...単体ボーナス, ...相互シナジーボーナス];
