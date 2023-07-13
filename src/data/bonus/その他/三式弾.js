/**
 * @module
 * 装备额外属性收益
 *
 *  35. 三式弾
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E5%BC%BE
 *
 */

require('../../../../typedef');

const {
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
        equipment: 35,
        ship: {
            isID: [金剛改二, 金剛改二丙, 比叡改二丙],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [比叡改二],
        },
        bonusCount: {
            1: {
                aa: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonusCount: {
            1: {
                aa: 1,
                evasion: 1,
            },
        },
    },

    {
        equipment: 35,
        ship: {
            isID: [霧島改二],
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },
];
