/**
 * @module
 * 装备额外属性收益
 *
 * 245. 38cm四連装砲
 *      https://wikiwiki.jp/kancolle/38cm%E5%9B%9B%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 246. 38cm四連装砲改
 *      https://wikiwiki.jp/kancolle/38cm%E5%9B%9B%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
 *
 * 468. 38cm四連装砲改 deux
 *      https://wikiwiki.jp/kancolle/38cm%E5%9B%9B%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%20deux
 *
 */

require('../../../../typedef');

const { group_BB_Navy_MN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _38cm四連装砲 = [
    {
        equipment: 245,
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonus: {
            fire: 2,
            hit: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _38cm四連装砲改 = [
    {
        equipment: 246,
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonus: {
            fire: 2,
            hit: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _38cm四連装砲改deux = [
    {
        equipment: 468,
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonusImprove: {
            0: {
                fire: 3,
                hit: 1,
            },
            4: {
                fire: 4,
                hit: 2,
            },
            8: {
                fire: 5,
                hit: 3,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 相互シナジーボーナス = [
    {
        list: ['LargeCaliber', 247],
        equipments: [
            {
                isOneOf: [{ isID: [245] }, { isID: [246] }, { isID: [468] }],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 2,
        },
    },
    {
        list: ['LargeCaliber', 247],
        equipments: [
            {
                isOneOf: [{ isID: [245] }, { isID: [246] }, { isID: [468] }],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 2,
        },
    },
    {
        list: ['LargeCaliber', 247],
        equipments: [
            {
                isOneOf: [{ isID: [245] }, { isID: [246] }, { isID: [468] }],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
            {
                isID: [
                    247, // 15.2cm三連装砲
                ],
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_MN],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 2,
        },
    },
];

// ============================================================================

module.exports = [
    ..._38cm四連装砲,
    ..._38cm四連装砲改,
    ..._38cm四連装砲改deux,
    ...相互シナジーボーナス,
];
