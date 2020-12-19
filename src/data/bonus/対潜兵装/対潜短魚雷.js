/**
 * @module
 * 装备额外属性收益
 *
 * 378. 対潜短魚雷(試作初期型)
 *      https://wikiwiki.jp/kancolle/%E5%AF%BE%E6%BD%9C%E7%9F%AD%E9%AD%9A%E9%9B%B7%28%E8%A9%A6%E4%BD%9C%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 *
 */

const {
    'Fletcher Mk.II': FletcherMkII,
    丹陽,
    雪風改二,
} = require('../../ship-ids');

const {
    group_CL_Navy_USN,
    group_DD_Navy_USN,

    group_CL_Navy_RN,
    group_DD_Navy_RN,

    group_CL_Navy_RAN,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 378,
        ship: {
            isID: [FletcherMkII],
        },
        bonus: {
            asw: 4,
            evasion: 2,
        },
    },
    {
        equipment: 378,
        ship: {
            isClass: [...group_CL_Navy_USN, ...group_DD_Navy_USN],
            isNotID: [FletcherMkII],
        },
        bonus: {
            asw: 3,
            evasion: 1,
        },
    },
    {
        equipment: 378,
        ship: {
            isClass: [...group_CL_Navy_RN, ...group_DD_Navy_RN],
        },
        bonus: {
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 378,
        ship: {
            isClass: [...group_CL_Navy_RAN],
        },
        bonus: {
            asw: 1,
            evasion: 1,
        },
    },
    {
        equipment: 378,
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonus: {
            asw: 1,
            evasion: 1,
        },
    },
];
