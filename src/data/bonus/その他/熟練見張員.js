/**
 * @module
 * 装备额外属性收益
 *
 * 129. 熟練見張員
 *      https://wikiwiki.jp/kancolle/%E7%86%9F%E7%B7%B4%E8%A6%8B%E5%BC%B5%E5%93%A1
 *
 * 412. 水雷戦隊 熟練見張員
 *      https://wikiwiki.jp/kancolle/%E6%B0%B4%E9%9B%B7%E6%88%A6%E9%9A%8A%20%E7%86%9F%E7%B7%B4%E8%A6%8B%E5%BC%B5%E5%93%A1
 *
 */

require('../../../../typedef');

const {
    DD_KagerouROCN,
    group_CAV_Navy_IJN,
    group_CA_Navy_IJN,
    group_CL_S_Navy_IJN,
    group_DD_Navy_IJN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 熟練見張員 = [
    {
        equipment: 129,
        ship: {
            isClass: [...group_CAV_Navy_IJN, ...group_CA_Navy_IJN],
        },
        bonus: {
            fire: 1,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 129,
        ship: {
            isClass: [...group_CL_S_Navy_IJN],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 129,
        ship: {
            isClass: [...group_DD_Navy_IJN, DD_KagerouROCN],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            asw: 2,
            los: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 水雷戦隊熟練見張員 = [
    {
        equipment: 412,
        ship: {
            isClass: [...group_CAV_Navy_IJN, ...group_CA_Navy_IJN],
        },
        bonusCount: {
            1: {
                fire: 1,
                los: 1,
                evasion: 1,
            },
            2: {
                fire: 1,
                los: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 412,
        ship: {
            isClass: [...group_CL_S_Navy_IJN],
        },
        bonusCount: {
            1: {
                fire: 3,
                torpedo: 3,
                los: 3,
                evasion: 2,
            },
            2: {
                fire: 3,
                torpedo: 3,
                los: 6,
                evasion: 4,
            },
        },
    },
    {
        equipment: 412,
        ship: {
            isClass: [...group_DD_Navy_IJN, DD_KagerouROCN],
        },
        bonusCount: {
            1: {
                fire: 2,
                torpedo: 4,
                asw: 2,
                los: 1,
                evasion: 3,
            },
            2: {
                fire: 2,
                torpedo: 4,
                asw: 2,
                los: 2,
                evasion: 6,
            },
        },
    },
    {
        equipment: 412,
        ship: {
            isClass: [
                ...group_CL_S_Navy_IJN,
                ...group_DD_Navy_IJN,
                DD_KagerouROCN,
            ],
        },
        bonusImprove: {
            maxCount: 1,
            4: {
                fire: 1,
            },
            8: {
                fire: 1,
                torpedo: 1,
            },
        },
    },
];

// ============================================================================

module.exports = [...熟練見張員, ...水雷戦隊熟練見張員];
