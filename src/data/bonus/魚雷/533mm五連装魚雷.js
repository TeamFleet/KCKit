/**
 * @module
 * 装备额外属性收益
 *
 * 314. 533mm五連装魚雷(初期型)
 *      https://wikiwiki.jp/kancolle/533mm%E4%BA%94%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 * 376. 533mm五連装魚雷(後期型)
 *      https://wikiwiki.jp/kancolle/533mm%E4%BA%94%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7%28%E5%BE%8C%E6%9C%9F%E5%9E%8B%29
 *
 */

const {
    group_CA_Navy_USN,
    group_CL_Navy_USN,
    group_DD_Navy_USN,

    group_CL_Navy_RAN,

    group_DD_Navy_RN,
} = require('../../ship-classes');

const 初期型 = [
    {
        equipment: 314,
        ship: {
            isClass: group_DD_Navy_USN,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        },
    },
];

const 後期型 = [
    {
        equipment: 376,
        ship: {
            isClass: [
                ...group_CA_Navy_USN,
                ...group_CL_Navy_USN,
                ...group_DD_Navy_USN,
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 4,
        },
    },
    {
        equipment: 376,
        ship: {
            isClass: [...group_DD_Navy_RN],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        },
    },
    {
        equipment: 376,
        ship: {
            isClass: [...group_CL_Navy_RAN],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
        },
    },
];

module.exports = [...初期型, ...後期型];
