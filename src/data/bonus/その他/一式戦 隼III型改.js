/**
 * @module
 * 装备额外属性收益
 *
 * 491. 一式戦 隼III型改(熟練/20戦隊)
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E6%88%A6%20%E9%9A%BCIII%E5%9E%8B%E6%94%B9%28%E7%86%9F%E7%B7%B4%EF%BC%8F20%E6%88%A6%E9%9A%8A%29
 *
 */

require('../../../../typedef');

const { あきつ丸, あきつ丸改, 山汐丸, 山汐丸改 } = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 熟練_20戦隊 = [
    {
        equipment: 491,
        ship: {
            isID: [あきつ丸, あきつ丸改],
        },
        bonus: {
            fire: 1,
            aa: 2,
            asw: 1,
            evasion: 1,
            hit: 1,
        },
    },
    {
        equipment: 491,
        ship: {
            isID: [山汐丸, 山汐丸改],
        },
        bonus: {
            fire: 3,
            aa: 4,
            asw: 2,
            evasion: 3,
            hit: 2,
        },
    },
];

// ============================================================================

module.exports = [...熟練_20戦隊];
