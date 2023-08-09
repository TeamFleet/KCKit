/**
 * @module
 * 装备额外属性收益
 *
 * 132. 零式水中聴音機
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E6%B0%B4%E4%B8%AD%E8%81%B4%E9%9F%B3%E6%A9%9F
 *
 */

require('../../../../typedef');

const {
    大鳳改,
    翔鶴改二,
    翔鶴改二甲,
    瑞鶴改二,
    瑞鶴改二甲,
    大和改二,
    大和改二重,
    武蔵改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 132,
        ship: {
            isID: [大鳳改, 翔鶴改二, 翔鶴改二甲, 瑞鶴改二, 瑞鶴改二甲],
        },
        bonusCount: {
            1: {
                evasion: 2,
            },
        },
    },

    {
        equipment: 132,
        ship: {
            isID: [大和改二, 大和改二重, 武蔵改二],
        },
        bonusCount: {
            1: {
                evasion: 1,
            },
        },
    },

    {
        equipment: 132,
        ship: {
            canEquip: [28],
        },
        bonusImprove: {
            3: {
                evasion: 1,
            },
            5: {
                asw: 1,
                evasion: 1,
            },
            7: {
                asw: 1,
                evasion: 2,
            },
            8: {
                asw: 2,
                evasion: 2,
            },
            9: {
                asw: 2,
                evasion: 2,
                hit: 1,
            },
            10: {
                asw: 3,
                evasion: 2,
                hit: 1,
            },
            maxCount: 1,
        },
    },
];
