/**
 * @module
 * 装备额外属性收益
 *
 *  70. 三式指揮連絡機(対潜)
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%8C%87%E6%8F%AE%E9%80%A3%E7%B5%A1%E6%A9%9F%28%E5%AF%BE%E6%BD%9C%29
 *
 * 451. 三式指揮連絡機改
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%8C%87%E6%8F%AE%E9%80%A3%E7%B5%A1%E6%A9%9F%E6%94%B9
 *
 */

require('../../../../typedef');

const { Aux_LHA_特種船丙型, Aux_AO_特2TL型 } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三式指揮連絡機_対潜 = [
    {
        equipment: 70,
        ship: {
            isClass: [Aux_AO_特2TL型],
        },
        bonus: {
            fire: 1,
            asw: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三式指揮連絡機改 = [
    {
        equipment: 451,
        ship: {
            isClass: [Aux_LHA_特種船丙型],
        },
        bonus: {
            fire: 1,
            asw: 2,
        },
    },
    {
        equipment: 451,
        ship: {
            isClass: [Aux_AO_特2TL型],
        },
        bonus: {
            fire: 1,
            asw: 3,
        },
    },
];

// ============================================================================

module.exports = [...三式指揮連絡機_対潜, ...三式指揮連絡機改];
