/**
 * @module
 * 装备额外属性收益
 *
 * 408. 装甲艇(AB艇)
 *      https://wikiwiki.jp/kancolle/%E8%A3%85%E7%94%B2%E8%89%87%28AB%E8%89%87%29
 *
 */

require('../../../../typedef');

const { Destroyers } = require('../../../types/ships');
const { Akitsumaru, Shinsyuumaru } = require('../../ship-series');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 408,
        ship: {
            isID: [...Shinsyuumaru],
        },
        bonus: {
            fire: 2,
            los: 2,
            evasion: 2,
        },
    },

    {
        equipment: 408,
        ship: {
            isID: [...Akitsumaru],
        },
        bonus: {
            fire: 1,
            asw: 1,
            los: 1,
            evasion: 1,
        },
    },

    {
        equipment: 408,
        ship: {
            isType: [...Destroyers],
        },
        bonus: {
            fire: 1,
            los: 1,
            evasion: -5,
        },
    },
];
