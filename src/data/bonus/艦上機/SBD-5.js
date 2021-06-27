/**
 * @module
 * 装备额外属性收益
 *
 * 419. SBD-5
 *      https://wikiwiki.jp/kancolle/SBD-5
 *
 */

require('../../../../typedef');

const { group_CV_Navy_USN } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 419,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            2: {
                fire: 3,
            },
            7: {
                fire: 4,
            },
        },
    },
];
