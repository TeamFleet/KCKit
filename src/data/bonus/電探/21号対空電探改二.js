/**
 * @module
 * 装备额外属性收益
 *
 * 410. 21号対空電探改二
 *      https://wikiwiki.jp/kancolle/21%E5%8F%B7%E5%AF%BE%E7%A9%BA%E9%9B%BB%E6%8E%A2%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const { CAV_MogamiClassSuperRemodel } = require('../../ships');
const { DD_Akizuki } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 410,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 5,
                evasion: 4,
                los: 2,
                armor: 1,
            },
        },
    },
    {
        equipment: 410,
        ship: {
            isClass: [DD_Akizuki],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 5,
                evasion: 4,
                los: 2,
                armor: 1,
            },
        },
    },
];
