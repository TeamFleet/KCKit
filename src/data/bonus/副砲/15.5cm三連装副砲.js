/**
 * @module
 * 装备额外属性收益
 *
 *  12. 15.5cm三連装副砲
 *      https://wikiwiki.jp/kancolle/15.5cm%E4%B8%89%E9%80%A3%E8%A3%85%E5%89%AF%E7%A0%B2
 * 234. 15.5cm三連装副砲改
 *      https://wikiwiki.jp/kancolle/15.5cm%E4%B8%89%E9%80%A3%E8%A3%85%E5%89%AF%E7%A0%B2%E6%94%B9
 * 463. 15.5cm三連装副砲改二
 *      https://wikiwiki.jp/kancolle/15.5cm%E4%B8%89%E9%80%A3%E8%A3%85%E5%89%AF%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const { group_BB_Yamato } = require('../../ship-classes');
const { BB_YamatoClass2ndRemodel } = require('../../ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装副砲 = [
    {
        equipment: 12,
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            fire: 1,
            evasion: 1,
            hit: 1,
        },
    },
    {
        list: [12, 'SuparRadar'],
        equipments: {
            hasID: [12],
            hasOneOf: [
                142, // 15m二重測距儀+21号電探改二
                460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            evasion: 1,
            hit: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装副砲改 = [
    {
        equipment: 234,
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
            hit: 1,
        },
    },
    {
        list: [234, 'SuparRadar'],
        equipments: {
            hasID: [234],
            hasOneOf: [
                142, // 15m二重測距儀+21号電探改二
                460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            aa: 1,
            evasion: 1,
            hit: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装副砲改二 = [
    {
        equipment: 463,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
            hit: 3,
        },
    },
    {
        equipment: 463,
        ship: {
            isClass: [...group_BB_Yamato],
            isNotID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 1,
            hit: 1,
        },
    },
    {
        list: [463, 142],
        equipments: [
            {
                isID: 463,
            },
            {
                isID: 142, // 15m二重測距儀+21号電探改二
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            aa: 1,
            evasion: 1,
            hit: 1,
        },
    },
    {
        list: [463, 460],
        equipments: [
            {
                isID: 463,
            },
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
            hit: 2,
        },
    },
];

// ============================================================================

module.exports = [...三連装副砲, ...三連装副砲改, ...三連装副砲改二];
