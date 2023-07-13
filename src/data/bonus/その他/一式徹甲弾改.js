/**
 * @module
 * 装备额外属性收益
 *
 * 365. 一式徹甲弾改
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E5%BE%B9%E7%94%B2%E5%BC%BE%E6%94%B9
 *
 */

require('../../../../typedef');

const {
    group_BB_Ise,
    group_BB_Fusou,
    BB_Nagato,
    group_BB_Yamato,
    BB_Kongou,
    BB_Kongou2,
} = require('../../ship-classes');
const { BB_YamatoClass2ndRemodel } = require('../../ships');
const {
    長門改二,
    陸奥改二,
    比叡改二丙,
    榛名改二乙,
    榛名改二丙,
} = require('../../ship-ids');

const tier2IDs = [長門改二, 陸奥改二, ...BB_YamatoClass2ndRemodel];
const tier3IDs = [
    591, // 金剛改二丙
    比叡改二丙,
    榛名改二乙,
    榛名改二丙,
];

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 365,
        ship: {
            isID: tier3IDs,
        },
        bonusCount: {
            1: {
                fire: 3,
            },
        },
    },
    {
        equipment: 365,
        ship: {
            isID: tier2IDs,
        },
        bonusCount: {
            1: {
                fire: 2,
            },
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
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },
];
