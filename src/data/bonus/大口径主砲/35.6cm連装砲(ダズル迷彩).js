/**
 * @module
 * 装备额外属性收益
 *
 * 104. 35.6cm連装砲(ダズル迷彩)
 *      https://wikiwiki.jp/kancolle/35.6cm%E9%80%A3%E8%A3%85%E7%A0%B2%28%E3%83%80%E3%82%BA%E3%83%AB%E8%BF%B7%E5%BD%A9%29
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
        equipment: 104,
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        },
    },

    {
        equipment: 104,
        ship: {
            isID: [金剛改二, 金剛改二丙],
        },
        bonus: {
            fire: 2,
        },
    },

    {
        equipment: 104,
        ship: {
            isID: [比叡改二, 比叡改二丙, 霧島改二],
        },
        bonus: {
            fire: 1,
        },
    },

    // ------------------------------------------------------------------------
];
