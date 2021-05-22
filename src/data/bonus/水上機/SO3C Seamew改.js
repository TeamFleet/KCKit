/**
 * @module
 * 装备额外属性收益
 *
 * 415. SO3C Seamew改
 *      https://wikiwiki.jp/kancolle/SO3C%20Seamew%E6%94%B9
 *
 */

require('../../../../typedef');

const {
    group_BB_Navy_USN,
    group_CA_Navy_USN,
    group_CL_Navy_USN,
} = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 415,
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonus: {
            los: 1,
            asw: 1,
        },
    },
    {
        equipment: 415,
        ship: {
            isClass: [...group_CA_Navy_USN, ...group_CL_Navy_USN],
        },
        bonus: {
            fire: 1,
            asw: 1,
            los: 1,
        },
    },
];
