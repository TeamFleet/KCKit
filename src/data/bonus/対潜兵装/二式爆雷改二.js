/**
 * @module
 * 装备额外属性收益
 *
 * 488. 二式爆雷改二
 *      https://wikiwiki.jp/kancolle/%E5%BC%B7%E9%A2%A8%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const transformBonusToImprove = require('../../../utils/transform-bonus-to-improve');

const { group_DD_Navy_IJN } = require('../../ship-classes');
const {
    扶桑改二,
    山城改二,

    矢矧改二,

    時雨,
    時雨改,
    時雨改二,

    潮改二,
    初霜改二,

    丹陽,
    雪風改二,
    磯風乙改,
    浜風乙改,

    涼月改,
    冬月改,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 二式爆雷改二_時雨改二 = [
    {
        equipment: 488,
        ship: {
            isID: [時雨改二],
        },
        bonus: {
            asw: 6,
            evasion: 5,
            hit: 2,
        },
    },
];
transformBonusToImprove(二式爆雷改二_時雨改二, {
    3: { evasion: 1 },
    5: { asw: 1, evasion: 1 },
    7: { asw: 1, evasion: 1, hit: 1 },
    8: { asw: 1, evasion: 2, hit: 1 },
    9: { asw: 2, evasion: 2, hit: 1 },
    10: { asw: 3, evasion: 2, hit: 1 },
});

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 二式爆雷改二_Tier2 = [
    {
        equipment: 488,
        ship: {
            isID: [丹陽, 雪風改二, 磯風乙改, 浜風乙改],
        },
        bonus: {
            asw: 3,
            evasion: 2,
            hit: 1,
        },
    },
    {
        equipment: 488,
        ship: {
            isID: [時雨, 時雨改, 潮改二, 初霜改二, 涼月改, 冬月改],
        },
        bonus: {
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 488,
        ship: {
            isID: [扶桑改二, 山城改二, 矢矧改二],
        },
        bonus: {
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 488,
        ship: {
            isClass: [...group_DD_Navy_IJN],
            isNotID: [
                潮改二,
                初霜改二,
                時雨,
                時雨改,
                時雨改二,
                丹陽,
                雪風改二,
                磯風乙改,
                浜風乙改,
                涼月改,
                冬月改,
            ],
        },
        bonus: {
            asw: 1,
            evasion: 1,
        },
    },
];
transformBonusToImprove(二式爆雷改二_Tier2, {
    5: { asw: 1 },
    7: { asw: 1, evasion: 1 },
    9: { asw: 2, evasion: 1, hit: 1 },
});

// ============================================================================

module.exports = [...二式爆雷改二_時雨改二, ...二式爆雷改二_Tier2];
