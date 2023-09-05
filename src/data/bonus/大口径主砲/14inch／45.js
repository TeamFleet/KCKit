/**
 * @module
 * 装备额外属性收益
 *
 * 507. 14inch/45 連装砲
 *      https://wikiwiki.jp/kancolle/14inch%EF%BC%8F45%20%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 508. 14inch/45 三連装砲
 *      https://wikiwiki.jp/kancolle/14inch%EF%BC%8F45%20%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const {
    BB_Nevada,
    group_BB_Navy_USN,
    group_BB_Navy_RN,

    BB_Kongou,
    BB_Kongou2,
    BB_Fusou,
    BBV_Fusou,
    BB_Ise,
    BBV_Ise,
    BBVR_Ise,
} = require('../../ship-classes');
const { Radars_USN } = require('../../equipments');
const { Battleships } = require('../../../types/ships');

const group_BB_Navy_USN_exclude_Nevada = group_BB_Navy_USN.filter(
    (id) => id !== BB_Nevada
);

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 連装砲 = [
    {
        equipment: 507,
        ship: {
            isClass: [BB_Nevada],
        },
        bonusImprove: {
            0: {
                fire: 3,
                evasion: 2,
                hit: 2,
            },
            6: {
                fire: 4,
                armor: 1,
                evasion: 2,
                hit: 2,
            },
        },
    },
    {
        equipment: 507,
        ship: {
            isClass: [...group_BB_Navy_USN_exclude_Nevada],
        },
        bonusImprove: {
            3: {
                fire: 3,
                evasion: 1,
                hit: 1,
            },
            9: {
                fire: 3,
                armor: 1,
                evasion: 1,
                hit: 2,
            },
        },
    },
    {
        equipment: 507,
        ship: {
            isClass: [
                ...group_BB_Navy_RN,
                BB_Kongou,
                BB_Kongou2,
                BB_Fusou,
                BBV_Fusou,
                BB_Ise,
                BBV_Ise,
                BBVR_Ise,
            ],
        },
        bonusImprove: {
            3: {
                fire: 1,
                evasion: 1,
                hit: 1,
            },
            9: {
                fire: 1,
                armor: 1,
                evasion: 1,
                hit: 2,
            },
        },
    },
    {
        equipment: 507,
        ship: {
            isType: [...Battleships],
            isNotClass: [
                ...group_BB_Navy_USN,
                ...group_BB_Navy_RN,
                BB_Kongou,
                BB_Kongou2,
                BB_Fusou,
                BBV_Fusou,
                BB_Ise,
                BBV_Ise,
                BBVR_Ise,
            ],
        },
        bonusImprove: {
            3: {
                fire: 1,
            },
            9: {
                fire: 1,
                armor: 1,
                hit: 1,
            },
        },
    },

    {
        list: [507, 'SurfaceRadar'],
        equipments: [
            {
                isID: 507,
            },
            {
                isOneOf: Radars_USN.map((eid) => ({ isID: [eid] })),
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonus: {
            fire: 1,
            evasion: 1,
            hit: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三連装砲 = [
    {
        equipment: 508,
        ship: {
            isClass: [BB_Nevada],
        },
        bonusImprove: {
            0: {
                fire: 3,
                evasion: 2,
                hit: 2,
            },
            6: {
                fire: 4,
                armor: 1,
                evasion: 2,
                hit: 2,
            },
        },
    },
    {
        equipment: 508,
        ship: {
            isClass: [...group_BB_Navy_USN_exclude_Nevada],
        },
        bonusImprove: {
            2: {
                fire: 2,
                evasion: 1,
                hit: 1,
            },
            6: {
                fire: 3,
                armor: 1,
                evasion: 1,
                hit: 1,
            },
        },
    },
    {
        equipment: 508,
        ship: {
            isClass: [
                ...group_BB_Navy_RN,
                BB_Kongou,
                BB_Kongou2,
                BB_Fusou,
                BBV_Fusou,
                BB_Ise,
                BBV_Ise,
                BBVR_Ise,
            ],
        },
        bonusImprove: {
            2: {
                evasion: 1,
                hit: 1,
            },
            6: {
                fire: 1,
                armor: 1,
                evasion: 1,
                hit: 1,
            },
        },
    },
    {
        equipment: 508,
        ship: {
            isType: [...Battleships],
            isNotClass: [
                ...group_BB_Navy_USN,
                ...group_BB_Navy_RN,
                BB_Kongou,
                BB_Kongou2,
                BB_Fusou,
                BBV_Fusou,
                BB_Ise,
                BBV_Ise,
                BBVR_Ise,
            ],
        },
        bonusImprove: {
            6: {
                fire: 1,
                armor: 1,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    ...連装砲,
    ...三連装砲,

    {
        list: [507, 508],
        equipments: [
            {
                isID: 507,
            },
            {
                isID: 508,
            },
        ],
        ship: {
            isClass: [BB_Nevada],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 2,
        },
    },
    {
        list: [507, 508],
        equipments: [
            {
                isID: 507,
            },
            {
                isID: 508,
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_USN_exclude_Nevada],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            hit: 1,
        },
    },
    {
        list: [507, 508],
        equipments: [
            {
                isID: 507,
            },
            {
                isID: 508,
            },
        ],
        ship: {
            isClass: [
                ...group_BB_Navy_RN,
                BB_Kongou,
                BB_Kongou2,
                BB_Fusou,
                BBV_Fusou,
                BB_Ise,
                BBV_Ise,
                BBVR_Ise,
            ],
        },
        bonus: {
            fire: 1,
        },
    },
];
