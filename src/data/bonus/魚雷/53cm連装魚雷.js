/**
 * @module
 * 装备额外属性收益
 *
 * 174. 53cm連装魚雷
 *      https://wikiwiki.jp/kancolle/53cm%E9%80%A3%E8%A3%85%E9%AD%9A%E9%9B%B7
 *
 */

require('../../../../typedef');

const { DD_Kamikaze } = require('../../ship-classes');
const {
    金剛改二丙,
    比叡改二丙,
    榛名改二乙,
    榛名改二丙,

    由良改二,
    夕張改二,
    夕張改二特,
    夕張改二丁,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 174,
        ship: {
            isClass: [DD_Kamikaze],
        },
        bonus: {
            torpedo: 1,
            evasion: 2,
        },
    },

    {
        equipment: 174,
        ship: {
            isID: [由良改二, 夕張改二, 夕張改二特, 夕張改二丁],
        },
        bonus: {
            fire: 2,
            torpedo: 4,
            evasion: 4,
        },
    },

    {
        equipment: 174,
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二丙],
        },
        bonus: {
            torpedo: 6,
            evasion: 3,
        },
    },
    {
        equipment: 174,
        ship: {
            isID: [榛名改二乙],
        },
        bonus: {
            torpedo: 5,
            evasion: 2,
        },
    },

    // ------------------------------------------------------------------------

    // + 96式150cm探照灯
    {
        list: [174, 140],
        equipments: [
            {
                isID: 174,
            },
            {
                isID: 140,
            },
        ],
        ship: {
            isID: [比叡改二丙],
        },
        bonus: {
            torpedo: 5,
        },
    },

    // @神風型 @睦月型 -> 12cm単装砲改二
    // +35.6cm連装砲改四 -> 35.6cm連装砲改四
];
