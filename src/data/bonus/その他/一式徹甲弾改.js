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
    group_BB_Yamato,
    BB_Kongou,
    BB_Kongou2,
} = require('../../ship-classes');
const { BB_YamatoClass2ndRemodel } = require('../../ships');
const { 長門改二, 陸奥改二, 比叡改二丙 } = require('../../ship-ids');

const tier2IDs = [長門改二, 陸奥改二, ...BB_YamatoClass2ndRemodel];
const tier3IDs = [
    591, // 金剛改二丙
    比叡改二丙,
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
                ...group_BB_Yamato,
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
