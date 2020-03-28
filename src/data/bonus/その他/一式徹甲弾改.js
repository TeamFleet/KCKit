/**
 * @module
 * 装备额外属性收益
 *
 * 365. 一式徹甲弾改
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E5%BE%B9%E7%94%B2%E5%BC%BE%E6%94%B9
 *
 */

const {
    group_BB_Ise,
    group_BB_Fusou,
    BB_Nagato,
    BB_Yamato,
    BB_Kongou,
    BB_Kongou2,
} = require('../../ship-classes');

const tier2IDs = [
    541, // 長門改二
    573, // 陸奥改二
    136, // 大和改
    546, // 武蔵改二
];
const tier3IDs = [
    591, // 金剛改二丙
];

module.exports = [
    {
        equipment: 365,
        ship: {
            isID: tier3IDs,
        },
        bonus: {
            fire: 3,
        },
    },
    {
        equipment: 365,
        ship: {
            isID: tier2IDs,
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 365,
        ship: {
            isClass: [
                ...group_BB_Ise,
                ...group_BB_Fusou,
                BB_Nagato,
                BB_Yamato,
                BB_Kongou,
                BB_Kongou2,
            ],
            isNotID: [...tier2IDs, ...tier3IDs],
        },
        bonus: {
            fire: 1,
        },
    },
];
