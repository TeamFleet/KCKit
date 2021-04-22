/**
 * @module
 * 装备额外属性收益
 *
 * 409. 武装大発
 *      https://wikiwiki.jp/kancolle/%E6%AD%A6%E8%A3%85%E5%A4%A7%E7%99%BA
 *
 */

require('../../../../typedef');

const { Akitsumaru, Shinsyuumaru } = require('../../ship-series');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 409,
        ship: {
            isID: [...Shinsyuumaru],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 3,
        },
    },

    {
        equipment: 409,
        ship: {
            isID: [...Akitsumaru],
        },
        bonus: {
            fire: 1,
            aa: 1,
            asw: 1,
            evasion: 1,
        },
    },
];
