/**
 * @module
 * 装备额外属性收益
 *
 * 217. 強風改
 *      https://wikiwiki.jp/kancolle/%E5%BC%B7%E9%A2%A8%E6%94%B9
 *
 */

require('../../../../typedef');

const { CAV_MogamiClassSuperRemodel } = require('../../ships');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 217,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
        },
    },
];
