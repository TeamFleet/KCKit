/**
 * @module
 * 装备额外属性收益
 *
 * 381. 16inch三連装砲 Mk.6
 *      https://wikiwiki.jp/kancolle/16inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.6
 *
 * 385. 16inch三連装砲 Mk.6 mod.2
 *      https://wikiwiki.jp/kancolle/16inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.6%20mod.2
 *
 * 390. 16inch三連装砲 Mk.6+GFCS
 *      https://wikiwiki.jp/kancolle/16inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.6%EF%BC%8BGFCS
 *
 */

const {
    BB_Kongou,
    BB_Kongou2,
    BB_Bismarck,
    BB_Richelieu,
    BB_Gangut,
    BB_VittorioVeneto,
    BB_ConteDiCavour,

    BB_Colorado,
    BB_Nevada,
    BB_Iowa,
    BB_NorthCarolina,
    BB_SouthDakota,

    group_BB_Navy_USN,
    group_BC_Navy_USN,
    group_BB_exclude_BC_Navy_USN,
} = require('../../ship-classes');

const group_BB_USN_Tier1 = [BB_Iowa, ...group_BB_exclude_BC_Navy_USN];
const group_BB_USN_Tier2 = group_BC_Navy_USN.filter((id) => id !== BB_Iowa);
const group_BB_Navy_USN_exclude_SouthDakota = group_BB_Navy_USN.filter(
    (id) => id !== BB_SouthDakota,
);

// ============================================================================

const MK6 = [
    {
        equipment: 381,
        ship: {
            isClass: [...group_BB_Navy_USN_exclude_SouthDakota],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            6: {
                fire: 2,
            },
        },
    },
    {
        equipment: 381,
        ship: {
            isClass: [BB_SouthDakota],
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            6: {
                fire: 3,
            },
        },
    },
];

// ============================================================================

const MK6mod2 = [
    {
        equipment: 385,
        ship: {
            isClass: [
                BB_Kongou,
                BB_Kongou2,
                BB_Bismarck,
                BB_VittorioVeneto,
                BB_Richelieu,
                BB_Gangut,
            ],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 385,
        ship: {
            isClass: [...group_BB_USN_Tier1],
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            6: {
                fire: 3,
            },
            10: {
                fire: 3,
                armor: 1,
            },
        },
    },
    {
        equipment: 385,
        ship: {
            isClass: [...group_BB_USN_Tier2],
        },
        bonusImprove: {
            0: {
                fire: 3,
                armor: 1,
            },
            6: {
                fire: 4,
                armor: 1,
            },
            10: {
                fire: 4,
                armor: 2,
            },
        },
    },
];

// ============================================================================

const MK6GFCS = [
    {
        equipment: 390,
        ship: {
            isClass: [
                BB_Kongou,
                BB_Kongou2,
                BB_Bismarck,
                BB_VittorioVeneto,
                BB_ConteDiCavour,
                BB_Richelieu,
                BB_Gangut,
                BB_Nevada,
            ],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 390,
        ship: {
            isClass: [BB_Colorado, BB_Iowa],
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            3: {
                fire: 3,
            },
            6: {
                fire: 3,
                armor: 1,
            },
        },
    },
    {
        equipment: 390,
        ship: {
            isClass: [BB_NorthCarolina, BB_SouthDakota],
        },
        bonusImprove: {
            0: {
                fire: 3,
                armor: 1,
            },
            3: {
                fire: 4,
                armor: 1,
            },
            6: {
                fire: 4,
                armor: 1,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

module.exports = [...MK6, ...MK6mod2, ...MK6GFCS];
