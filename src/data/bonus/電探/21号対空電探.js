/**
 * @module
 * 装备额外属性收益
 *
 *  30. 21号対空電探
 *      https://wikiwiki.jp/kancolle/21%E5%8F%B7%E5%AF%BE%E7%A9%BA%E9%9B%BB%E6%8E%A2
 *
 */

require('../../../../typedef');

const { CAV_MogamiClassSuperRemodel } = require('../../ships');
const { DD_Akizuki } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 30,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonusCount: {
            1: {
                aa: 3,
                evasion: 2,
                los: 2,
            },
        },
    },
    {
        equipment: 30,
        ship: {
            isClass: [DD_Akizuki],
        },
        bonusCount: {
            1: {
                aa: 3,
                evasion: 2,
                los: 2,
            },
        },
    },

    // Set bonus: specials/ships-MogamiSuper.js
];
