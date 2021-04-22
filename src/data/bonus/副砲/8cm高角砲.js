/**
 * @module
 * 装备额外属性收益
 *
 *  66. 8cm高角砲
 *      https://wikiwiki.jp/kancolle/8cm%E9%AB%98%E8%A7%92%E7%A0%B2
 *
 */

require('../../../../typedef');
const {
    CAV_MogamiClassSuperRemodel,
    CL_AganoClass2ndRemodel,
} = require('../../ships');

// const AARadarsHighTier = [
//     30, // 21号対空電探
//     32, // 42号対空電探
//     89, // 21号対空電探改
//     410, // 21号対空電探改二
// ];

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 66,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2,
        },
    },

    {
        equipment: 66,
        ship: {
            isID: [...CL_AganoClass2ndRemodel],
        },
        bonus: {
            aa: 2,
            evasion: 1,
        },
    },

    {
        list: [66, `AARadar`],
        equipments: {
            hasID: [66],
            hasAARadar: true,
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel, ...CL_AganoClass2ndRemodel],
        },
        bonus: {
            aa: 1,
            evasion: 2,
        },
        // passEquippableCheck: true,
    },
];
