/**
 * @module
 * 装备额外属性收益
 *
 * 220. 8cm高角砲改+増設機銃
 *      https://wikiwiki.jp/kancolle/8cm%E9%AB%98%E8%A7%92%E7%A0%B2%E6%94%B9%EF%BC%8B%E5%A2%97%E8%A8%AD%E6%A9%9F%E9%8A%83
 *
 */

require('../../../../typedef');
const {
    CVL_Houshou2ndRemodel,
    CAV_MogamiClassSuperRemodel,
    CL_AganoClass2ndRemodel,
} = require('../../ships');

// const AARadarsHighTier = [
//     106, // 13号対空電探改
//     30, // 21号対空電探
//     32, // 42号対空電探
//     89, // 21号対空電探改
//     410, // 21号対空電探改二
//     124, // FuMO25 レーダー
// ];

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 220,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 2,
            aa: 5,
            evasion: 4,
        },
    },
    {
        equipment: 220,
        ship: {
            isID: [...CL_AganoClass2ndRemodel],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
        },
    },
    {
        equipment: 220,
        ship: {
            isID: [...CVL_Houshou2ndRemodel],
        },
        bonusImprove: {
            0: {
                aa: 2,
                evasion: 2,
            },
            10: {
                fire: 1,
                aa: 3,
                evasion: 3,
            },
        },
    },

    // ========================================================================

    {
        list: [220, 'AARadar'],
        equipments: {
            hasID: [220],
            hasAARadar: true,
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel, ...CL_AganoClass2ndRemodel],
        },
        bonus: {
            aa: 4,
            evasion: 5,
        },
    },
    {
        list: [
            66, // 8cm高角砲
            220,
            `AARadar`,
        ],
        equipments: [
            {
                isID: 66,
            },
            {
                isID: 220,
            },
            {
                isAARadar: true,
            },
        ],
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel, ...CL_AganoClass2ndRemodel],
        },
        bonus: {
            aa: -1,
            evasion: -2,
        },
        // passEquippableCheck: true,
    },
    {
        list: [220, 'AARadar'],
        equipments: {
            hasID: [220],
            hasAARadar: true,
        },
        ship: {
            isID: [...CVL_Houshou2ndRemodel],
        },
        bonus: {
            aa: 3,
            evasion: 3,
        },
    },
    // {
    //     list: [220, `AARadar[${AARadarsHighTier.join(',')}]`],
    //     equipments: {
    //         hasID: [220],
    //         hasOneOf: AARadarsHighTier.map((eid) => ({
    //             isID: eid,
    //         })),
    //     },
    //     ship: {
    //         isID: [...CAV_MogamiClassSuperRemodel, ...CL_AganoClass2ndRemodel],
    //     },
    //     bonus: {
    //         aa: 1,
    //         evasion: 2,
    //     },
    //     passEquippableCheck: true,
    // },
    // {
    //     list: [66, 220, `AARadar[${AARadarsHighTier.join(',')}]`],
    //     equipments: [
    //         {
    //             isID: 66,
    //         },
    //         {
    //             isID: 220,
    //         },
    //         {
    //             isOneOf: AARadarsHighTier.map((eid) => ({
    //                 isID: eid,
    //             })),
    //         },
    //     ],
    //     ship: {
    //         isID: [...CAV_MogamiClassSuperRemodel, ...CL_AganoClass2ndRemodel],
    //     },
    //     bonus: {
    //         aa: -1,
    //         evasion: -2,
    //     },
    //     passEquippableCheck: true,
    // },
];
