/**
 * @module
 * 装备额外属性收益
 *
 * 171. OS2U
 *      https://wikiwiki.jp/kancolle/OS2U
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
        equipment: 171,
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonusImprove: {
            0: {
                fire: 1,
                los: 1,
            },
            3: {
                fire: 1,
                los: 2,
            },
            5: {
                fire: 1,
                los: 2,
                evasion: 1,
            },
            8: {
                fire: 1,
                los: 3,
                evasion: 1,
            },
            10: {
                fire: 2,
                los: 3,
                evasion: 2,
            },
        },
    },
    {
        equipment: 171,
        ship: {
            isClass: [...group_CA_Navy_USN, ...group_CL_Navy_USN],
        },
        bonusImprove: {
            5: {
                los: 1,
            },
            10: {
                fire: 1,
                los: 1,
            },
        },
    },
];
