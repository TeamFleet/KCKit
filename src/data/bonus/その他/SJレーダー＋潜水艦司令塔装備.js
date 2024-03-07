/**
 * @module
 * 装备额外属性收益
 *
 * 519. SJレーダー+潜水艦司令塔装備
 *      https://wikiwiki.jp/kancolle/SJ%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC%EF%BC%8B%E6%BD%9C%E6%B0%B4%E8%89%A6%E5%8F%B8%E4%BB%A4%E5%A1%94%E8%A3%85%E5%82%99
 *
 */

require('../../../../typedef');

const { SS_Gato, SS_Salmon } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 519,
        ship: {
            isClass: [SS_Salmon],
        },
        bonus: {
            evasion: 2,
            hit: 2,
        },
    },
    {
        equipment: 519,
        ship: {
            isClass: [SS_Gato],
        },
        bonus: {
            torpedo: 1,
            evasion: 2,
            hit: 2,
        },
    },
];
