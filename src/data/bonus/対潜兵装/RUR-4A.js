/**
 * @module
 * 装备额外属性收益
 *
 * 377. RUR-4A Weapon Alpha改
 *      https://wikiwiki.jp/kancolle/RUR-4A%20Weapon%20Alpha%E6%94%B9
 *
 */

const { 'Fletcher Mk.II': FletcherMkII } = require('../../ship-ids');

const {
    group_CL_Navy_USN,
    group_DD_Navy_USN,

    group_CL_Navy_RN,
    group_DD_Navy_RN,

    group_CL_Navy_RAN,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 377,
        ship: {
            isID: [FletcherMkII],
        },
        bonus: {
            asw: 3,
            evasion: 3,
        },
    },
    {
        equipment: 377,
        ship: {
            isClass: [...group_CL_Navy_USN, ...group_DD_Navy_USN],
            isNotID: [FletcherMkII],
        },
        bonus: {
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 377,
        ship: {
            isClass: [
                ...group_CL_Navy_RAN,
                ...group_CL_Navy_RN,
                ...group_DD_Navy_RN,
            ],
        },
        bonus: {
            asw: 1,
            evasion: 1,
        },
    },
];
