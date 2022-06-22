/**
 * @module
 * 装备额外属性收益
 *
 * 464. 10cm連装高角砲群 集中配備
 *      https://wikiwiki.jp/kancolle/10cm%E9%80%A3%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E7%BE%A4%20%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99
 *
 */

require('../../../../typedef');

const {
    group_BB_Yamato,
    BB_Gangut,
    BB_ConteDiCavour,
} = require('../../ship-classes');
const {
    BB_YamatoClass2ndRemodel,
    BB_KongouClass2ndRemodel,
} = require('../../ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 集中配備 = [
    {
        equipment: 464,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            aa: 5,
            evasion: 4,
        },
    },
    {
        equipment: 464,
        ship: {
            isClass: [...group_BB_Yamato],
            isNotID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            aa: 3,
            evasion: 2,
        },
    },
    {
        equipment: 464,
        ship: {
            isID: [...BB_KongouClass2ndRemodel],
        },
        bonus: {
            aa: -2,
            evasion: -2,
        },
    },
    {
        equipment: 464,
        ship: {
            isClass: [BB_Gangut, BB_ConteDiCavour],
        },
        bonus: {
            aa: -2,
            evasion: -2,
        },
    },

    {
        list: [464, 142],
        equipments: [
            {
                isID: 464,
            },
            {
                isID: 142, // 15m二重測距儀+21号電探改二
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
        },
        bonus: {
            aa: 2,
            evasion: 1,
            hit: 1,
        },
    },

    {
        list: [464, 460],
        equipments: [
            {
                isID: 464,
            },
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
        ],
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            fire: 2,
            aa: 4,
            evasion: 3,
            hit: 4,
        },
    },
    {
        list: [464, 460],
        equipments: [
            {
                isID: 464,
            },
            {
                isID: 460, // 15m二重測距儀改+21号電探改二+熟練射撃指揮所
            },
        ],
        ship: {
            isClass: [...group_BB_Yamato],
            isNotID: [...BB_YamatoClass2ndRemodel],
        },
        bonus: {
            aa: 2,
            evasion: 1,
            hit: 1,
        },
    },
];

// ============================================================================

module.exports = [...集中配備];
