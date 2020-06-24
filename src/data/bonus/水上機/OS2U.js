/**
 * @module
 * 装备额外属性收益
 *
 * 171. OS2U
 *      https://wikiwiki.jp/kancolle/OS2U
 *
 */

const {
    group_BB_Navy_USN,
    group_CA_Navy_USN,
    group_CL_Navy_USN,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 171,
        ship: {
            isClass: [
                ...group_BB_Navy_USN,
                ...group_CA_Navy_USN,
                ...group_CL_Navy_USN,
            ],
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
