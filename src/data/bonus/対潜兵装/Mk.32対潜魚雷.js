/**
 * @module
 * 装备额外属性收益
 *
 * 472. Mk.32 対潜魚雷(Mk.2落射機)
 *      https://wikiwiki.jp/kancolle/Mk.32%20%E5%AF%BE%E6%BD%9C%E9%AD%9A%E9%9B%B7%28Mk.2%E8%90%BD%E5%B0%84%E6%A9%9F%29
 *
 */

require('../../../../typedef');

const {
    'Samuel B.Roberts Mk.II': SamuelBRobertsMkII,
} = require('../../ship-ids');
const {
    group_CL_Navy_USN,
    group_DD_Navy_USN,

    group_CL_Navy_RN,
    group_DD_Navy_RN,

    group_CL_Navy_RAN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 472,
        ship: {
            isID: [SamuelBRobertsMkII],
        },
        bonus: {
            asw: 3,
            evasion: 1,
        },
    },
    {
        equipment: 472,
        ship: {
            isClass: [...group_CL_Navy_USN, ...group_DD_Navy_USN],
            isNotID: [SamuelBRobertsMkII],
        },
        bonus: {
            asw: 2,
        },
    },
    {
        equipment: 472,
        ship: {
            isClass: [
                ...group_CL_Navy_RAN,
                ...group_CL_Navy_RN,
                ...group_DD_Navy_RN,
            ],
        },
        bonus: {
            asw: 1,
        },
    },
    // @ 海防艦
    {
        equipment: 472,
        ship: {
            isType: [31],
        },
        bonus: {
            evasion: 1,
        },
    },
];
