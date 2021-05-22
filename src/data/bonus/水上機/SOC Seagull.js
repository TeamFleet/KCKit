/**
 * @module
 * 装备额外属性收益
 *
 * 414. SOC Seagull
 *      https://wikiwiki.jp/kancolle/SOC%20Seagull
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
        equipment: 414,
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonusImprove: {
            0: {
                los: 1,
            },
            8: {
                los: 1,
                evasion: 1,
            },
        },
    },
    {
        equipment: 414,
        ship: {
            isClass: [...group_CA_Navy_USN, ...group_CL_Navy_USN],
        },
        bonusImprove: {
            0: {
                fire: 1,
                los: 2,
            },
            4: {
                fire: 1,
                los: 3,
            },
            8: {
                fire: 1,
                los: 3,
                evasion: 2,
            },
            10: {
                fire: 2,
                los: 3,
                evasion: 2,
            },
        },
    },
];
