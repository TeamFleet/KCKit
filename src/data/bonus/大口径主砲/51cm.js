/**
 * @module
 * 装备额外属性收益
 *
 * 128. 試製51cm連装砲
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD51cm%E9%80%A3%E8%A3%85%E7%A0%B2
 * 281. 51cm連装砲
 *      https://wikiwiki.jp/kancolle/51cm%E9%80%A3%E8%A3%85%E7%A0%B2
 * 465. 試製51cm三連装砲
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD51cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const { group_BB_Yamato } = require('../../ship-classes');
const { 大和改二重 } = require('../../ship-ids');
const { BB_YamatoClass2ndRemodel } = require('../../ships');

const BB_YamatoClass2ndRemodel_exclude_大和改二重 =
    BB_YamatoClass2ndRemodel.filter((sid) => sid !== 大和改二重);

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 連装砲 = [
    ...[128, 281].map((eid) => ({
        equipment: eid,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            hit: 1,
        },
    })),
    {
        list: [142, 'SuperCaliber'],
        equipments: {
            hasID: [
                142, // 15m二重測距儀+21号電探改二
            ],
            hasOneOf: [128, 281].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            fire: 1,
            hit: 2,
        },
    },
    {
        list: [460, 'SuperCaliber'],
        equipments: {
            hasID: [
                460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            ],
            hasOneOf: [128, 281].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [...group_BB_Yamato],
            isNotID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            hit: 2,
        },
    },
    {
        list: [460, 'SuperCaliber'],
        equipments: {
            hasID: [
                460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            ],
            hasOneOf: [128, 281].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            evasion: 1,
            hit: 3,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 試製三連装砲 = [
    {
        equipment: 465,
        ship: {
            isID: [大和改二重],
        },
        bonus: {
            fire: 2,
            evasion: 8,
            hit: 2,
        },
    },
    {
        equipment: 465,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel_exclude_大和改二重],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            hit: 1,
        },
    },

    {
        list: [142, 465],
        equipments: [
            {
                isID: 142, // 15m二重測距儀+21号電探改二
            },
            {
                isID: 465,
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            fire: 2,
            hit: 2,
        },
        passEquippableCheck: true,
    },
    {
        list: [460, 465],
        equipments: [
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
            {
                isID: 465,
            },
        ],
        ship: {
            isID: [大和改二重],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 3,
        },
    },
    {
        list: [460, 465],
        equipments: [
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
            {
                isID: 465,
            },
        ],
        ship: {
            isID: [...BB_YamatoClass2ndRemodel_exclude_大和改二重],
        },
        bonus: {
            fire: 2,
            evasion: 1,
            hit: 3,
        },
    },
    {
        list: [460, 465],
        equipments: [
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
            {
                isID: 465,
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
            isNotID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            hit: 2,
        },
        passEquippableCheck: true,
    },
];

// ============================================================================

module.exports = [...連装砲, ...試製三連装砲];
