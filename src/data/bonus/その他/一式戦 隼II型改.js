/**
 * @module
 * 装备额外属性收益
 *
 * 489. 一式戦 隼II型改(20戦隊)
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E6%88%A6%20%E9%9A%BCII%E5%9E%8B%E6%94%B9%2820%E6%88%A6%E9%9A%8A%29
 *
 */

require('../../../../typedef');

const {
    伊勢改二,
    日向改二,

    加賀改二護,

    あきつ丸,
    あきつ丸改,
    熊野丸,
    熊野丸改,
    山汐丸,
    山汐丸改,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _20戦隊 = [
    {
        equipment: 489,
        ship: {
            isID: [あきつ丸, あきつ丸改, 山汐丸, 熊野丸],
        },
        bonusImprove: {
            0: {
                fire: 1,
                aa: 2,
                asw: 1,
                evasion: 1,
                hit: 1,
            },
            3: {
                fire: 1,
                aa: 2,
                asw: 1,
                evasion: 2,
                hit: 1,
            },
            6: {
                fire: 1,
                aa: 2,
                asw: 2,
                evasion: 2,
                hit: 1,
            },
            8: {
                fire: 1,
                aa: 2,
                asw: 2,
                evasion: 2,
                hit: 2,
            },
        },
    },
    {
        equipment: 489,
        ship: {
            isID: [山汐丸改, 熊野丸改],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 4,
                asw: 2,
                evasion: 3,
                hit: 2,
            },
            3: {
                fire: 3,
                aa: 4,
                asw: 2,
                evasion: 4,
                hit: 2,
            },
            6: {
                fire: 3,
                aa: 4,
                asw: 3,
                evasion: 4,
                hit: 2,
            },
            8: {
                fire: 3,
                aa: 4,
                asw: 2,
                evasion: 4,
                hit: 3,
            },
        },
    },
    {
        equipment: 489,
        ship: {
            isID: [伊勢改二, 日向改二, 加賀改二護],
        },
        bonusImprove: {
            3: { evasion: 1 },
            6: {
                asw: 1,
                evasion: 1,
            },
            8: {
                asw: 1,
                evasion: 1,
                hit: 1,
            },
        },
    },
    {
        equipment: 489,
        ship: {
            isType: [9],
        },
        bonusImprove: {
            3: { evasion: 1 },
            6: {
                asw: 1,
                evasion: 1,
            },
            8: {
                asw: 1,
                evasion: 1,
                hit: 1,
            },
        },
    },
];

// ============================================================================

module.exports = [..._20戦隊];
