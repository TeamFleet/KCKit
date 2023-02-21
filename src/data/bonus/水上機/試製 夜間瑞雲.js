/**
 * @module
 * 装备额外属性收益
 *
 * 490. 試製 夜間瑞雲(攻撃装備)
 *      https://wikiwiki.jp/kancolle/%E5%BC%B7%E9%A2%A8%E6%94%B9
 *
 */

require('../../../../typedef');

const { BB_IseClass2ndRemodel } = require('../../ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 攻撃装備 = [
    {
        equipment: 490,
        ship: {
            isID: [...BB_IseClass2ndRemodel],
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 2,
        },
    },
];

// ============================================================================

module.exports = [...攻撃装備];
