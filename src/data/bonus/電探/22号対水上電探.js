/**
 * @module
 * 装备额外属性收益
 *
 * 517. 逆探(E27)＋22号対水上電探改四(後期調整型)
 *      https://wikiwiki.jp/kancolle/%E9%80%86%E6%8E%A2%28E27%29%EF%BC%8B22%E5%8F%B7%E5%AF%BE%E6%B0%B4%E4%B8%8A%E9%9B%BB%E6%8E%A2%E6%94%B9%E5%9B%9B%28%E5%BE%8C%E6%9C%9F%E8%AA%BF%E6%95%B4%E5%9E%8B%29
 *
 */

require('../../../../typedef');

const {
    DD_Yuugumo,
    group_DD_Navy_IJN,
    DE_Mikura,
} = require('../../ship-classes');
const {
    初霜改二,
    潮改二,
    Верный,
    霞改二,
    時雨改三,
    雪風改二,
    朝霜改二,
    清霜改二,
    清霜改二丁,
} = require('../../ship-ids');
const equipmentTypes = require('../../../types/equipments');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // Base ===================================================================
    {
        equipment: 517,
        ship: {
            canEquip: equipmentTypes.SmallRadars,
        },
        bonusImprove: {
            7: {
                hit: 1,
            },
            8: {
                evasion: 1,
                hit: 1,
            },
            9: {
                fire: 1,
                evasion: 1,
                hit: 1,
            },
            10: {
                fire: 1,
                evasion: 1,
                hit: 2,
            },
        },
    },

    // Mess ===================================================================
    {
        equipment: 517,
        ship: {
            isID: [朝霜改二, 清霜改二],
        },
        bonus: {
            fire: 2,
            los: 2,
            evasion: 3,
            hit: 3,
        },
    },
    {
        equipment: 517,
        ship: {
            isID: [清霜改二丁],
        },
        bonus: {
            fire: 3,
            los: 3,
            evasion: 4,
            hit: 3,
        },
    },
    {
        equipment: 517,
        ship: {
            isClass: [DD_Yuugumo],
            isNotID: [朝霜改二, 清霜改二, 清霜改二丁],
        },
        bonus: {
            fire: 1,
            los: 1,
            evasion: 1,
            hit: 2,
        },
    },
    {
        equipment: 517,
        ship: {
            isID: [初霜改二, 潮改二, Верный, 霞改二, 時雨改三, 雪風改二],
        },
        bonus: {
            fire: 1,
            los: 2,
            evasion: 3,
            hit: 2,
        },
    },
    {
        equipment: 517,
        ship: {
            isClass: [...group_DD_Navy_IJN].filter((cid) => cid !== DD_Yuugumo),
            isNotID: [初霜改二, 潮改二, Верный, 霞改二, 時雨改三, 雪風改二],
        },
        bonus: {
            los: 1,
            evasion: 1,
            hit: 1,
        },
    },
    {
        equipment: 517,
        ship: {
            isType: [31], // 海防艦
            isNotClass: [DE_Mikura],
        },
        bonus: {
            los: 1,
            evasion: 1,
            hit: 1,
        },
    },
];
