/**
 * @module
 * 装备额外属性收益
 *
 * 386. 6inch三連装速射砲 Mk.16
 *      https://wikiwiki.jp/kancolle/6inch%E4%B8%89%E9%80%A3%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.16
 *
 * 387. 6inch三連装速射砲 Mk.16 mod.2
 *      https://wikiwiki.jp/kancolle/6inch%E4%B8%89%E9%80%A3%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.16%20mod.2
 *
 */

const {
    group_BB_exclude_BC_Navy_USN,
    group_CA_Navy_USN,
    group_CL_Navy_USN,
} = require('../../ship-classes');

// ============================================================================

const MK16 = [
    {
        equipment: 386,
        ship: {
            isClass: [
                ...group_BB_exclude_BC_Navy_USN,
                ...group_CA_Navy_USN,
                ...group_CL_Navy_USN,
            ],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            2: {
                fire: 2,
            },
            7: {
                fire: 3,
            },
        },
    },
];

// ============================================================================

const MK16mod2 = [
    {
        equipment: 387,
        ship: {
            isClass: [
                ...group_BB_exclude_BC_Navy_USN,
                ...group_CA_Navy_USN,
                ...group_CL_Navy_USN,
            ],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            2: {
                fire: 2,
            },
            7: {
                fire: 3,
            },
        },
    },
];

module.exports = [...MK16, ...MK16mod2];
