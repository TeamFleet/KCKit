/**
 * @module
 * 装备额外属性收益
 *
 * 439. Hedgehog(初期型)
 *      https://wikiwiki.jp/kancolle/Hedgehog%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 *
 */

require('../../../../typedef');

const {
    DD_Matsu,

    group_CL_Navy_USN,
    group_DD_Navy_USN,
    group_CL_Navy_RN,
    group_DD_Navy_RN,
} = require('../../ship-classes');
const {
    TrainingCruisers,
    LightCruisersNoCT,
    Destroyers,
} = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 初期型 = [
    {
        equipment: 439,
        ship: {
            isClass: [
                ...group_CL_Navy_USN,
                ...group_DD_Navy_USN,
                ...group_CL_Navy_RN,
                ...group_DD_Navy_RN,
            ],
        },
        bonusCount: {
            1: {
                asw: 3,
                evasion: 1,
            },
        },
    },

    {
        equipment: 439,
        ship: {
            isType: [31], // 海防艦
        },
        bonusCount: {
            1: {
                asw: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 439,
        ship: {
            isClass: [DD_Matsu],
        },
        bonusCount: {
            1: {
                asw: 2,
                evasion: 1,
            },
        },
    },

    {
        equipment: 439,
        ship: {
            isType: [...TrainingCruisers], // 練巡
        },
        bonusCount: {
            1: {
                asw: 1,
                evasion: 1,
            },
        },
    },
    {
        equipment: 439,
        ship: {
            isType: [...LightCruisersNoCT],
            isNotClass: [...group_CL_Navy_USN, ...group_CL_Navy_RN],
        },
        bonusCount: {
            1: {
                asw: 1,
                evasion: 1,
            },
        },
    },
    {
        equipment: 439,
        ship: {
            isType: [...Destroyers],
            isNotClass: [...group_DD_Navy_USN, ...group_DD_Navy_RN, DD_Matsu],
        },
        bonusCount: {
            1: {
                asw: 1,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

module.exports = [...初期型];
