/**
 * @module
 * 装备额外属性收益
 *
 * 317. 三式弾改
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E5%BC%BE%E6%94%B9
 *
 */

require('../../../../typedef');

const {
    長門改二,
    陸奥改二,
    金剛改二,
    金剛改二丙,
    比叡改二,
    比叡改二丙,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    霧島改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 317,
        ship: {
            isID: [
                78, // 金剛
                209, // 金剛改
                86, // 比叡
                210, // 比叡改
                79, // 榛名
                211, // 榛名改
                85, // 霧島
                212, // 霧島改
            ],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 1,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [金剛改二, 金剛改二丙, 比叡改二丙],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [比叡改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [榛名改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 317,
        ship: {
            isID: [榛名改二乙],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 4,
                evasion: 2,
            },
        },
    },
    {
        equipment: 317,
        ship: {
            isID: [榛名改二丙],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
                evasion: 1,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [霧島改二],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 2,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [長門改二],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 2,
            },
        },
    },

    {
        equipment: 317,
        ship: {
            isID: [陸奥改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
        },
    },
];
