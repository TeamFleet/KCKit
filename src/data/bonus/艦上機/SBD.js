/**
 * @module
 * 装备额外属性收益
 *
 * 195. SBD
 *      https://wikiwiki.jp/kancolle/SBD
 *
 */

require('../../../../typedef');

const { group_CV_Navy_USN } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 195,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 1,
        },
    },
];
