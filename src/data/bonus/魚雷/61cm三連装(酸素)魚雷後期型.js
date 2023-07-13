/**
 * @module
 * 装备额外属性收益
 *
 * 285. 61cm三連装(酸素)魚雷後期型
 *      https://wikiwiki.jp/kancolle/61cm%E4%B8%89%E9%80%A3%E8%A3%85%28%E9%85%B8%E7%B4%A0%29%E9%AD%9A%E9%9B%B7%E5%BE%8C%E6%9C%9F%E5%9E%8B
 *
 */

require('../../../../typedef');

const {
    DD_FubukiClass2ndRemodel,
    DD_AyanamiClass2ndRemodel,
    DD_AkatsukiClass2ndRemodel,
    DD_HatsuharuClass2ndRemodel,
} = require('../../ships');
const { 天霧改二, 天霧改二丁 } = require('../../ship-ids');

const group_all = [
    ...DD_FubukiClass2ndRemodel,
    ...DD_AyanamiClass2ndRemodel,
    ...DD_AkatsukiClass2ndRemodel,
    ...DD_HatsuharuClass2ndRemodel,
];
const group_all_exclude_amgiri2 = group_all.filter(
    (sid) => ![天霧改二, 天霧改二丁].includes(sid)
);

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ 特型駆逐艦 改二 / 初春型 改二
    {
        equipment: 285,
        ship: {
            isID: [...group_all_exclude_amgiri2],
        },
        bonusCount: {
            1: {
                torpedo: 2,
                evasion: 1,
            },
            2: {
                torpedo: 4,
                evasion: 2,
            },
        },
    },

    {
        equipment: 285,
        ship: {
            isID: [天霧改二],
        },
        bonusCount: {
            1: {
                torpedo: 2,
                evasion: 1,
            },
            2: {
                torpedo: 6,
                evasion: 2,
            },
            3: {
                torpedo: 8,
                evasion: 2,
            },
        },
    },

    {
        equipment: 285,
        ship: {
            isID: [天霧改二丁],
        },
        bonusCount: {
            1: {
                torpedo: 2,
                evasion: 1,
            },
            2: {
                torpedo: 5,
                evasion: 2,
            },
            3: {
                torpedo: 6,
                evasion: 2,
            },
        },
    },

    // ========================================================================

    {
        list: [
            {
                id: 285,
                star: 10,
            },
        ],
        ship: {
            isID: [...group_all],
        },
        equipments: [
            {
                isID: 285,
                improvement: 10,
            },
        ],
        bonus: {
            fire: 1,
            torpedo: 1,
        },
    },
    {
        list: [
            {
                id: 285,
                star: 10,
            },
            {
                id: 285,
                star: 10,
            },
        ],
        ship: {
            isID: [...group_all],
        },
        equipments: [
            {
                isID: 285,
                improvement: 10,
            },
            {
                isID: 285,
                improvement: 10,
            },
        ],
        bonus: {
            fire: 1,
        },
    },
    {
        list: [
            {
                id: 285,
                star: 10,
            },
            {
                id: 285,
                star: 10,
            },
            {
                id: 285,
                star: 10,
            },
        ],
        ship: {
            isID: [...group_all],
        },
        equipments: [
            {
                isID: 285,
                improvement: 10,
            },
            {
                isID: 285,
                improvement: 10,
            },
            {
                isID: 285,
                improvement: 10,
            },
        ],
        bonus: {
            torpedo: 3,
        },
    },

    // ========================================================================
];
