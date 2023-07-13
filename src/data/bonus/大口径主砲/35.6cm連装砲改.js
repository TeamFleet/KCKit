/**
 * @module
 * 装备额外属性收益
 *
 * 328. 35.6cm連装砲改
 *      https://wikiwiki.jp/kancolle/35.6cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
 *
 */

require('../../../../typedef');

const {
    Kongou,
    Hiei,
    Haruna,
    Kirishima,
    Ise,
    Hyuuga,
    Fusou,
    Yamashiro,
} = require('../../ship-series');
const { BB_KongouClassRemodelAll } = require('../../ships');
const { 金剛改二丙, 比叡改二丙, 榛名改二乙 } = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ 金剛型(未改造) & 扶桑型 & 伊勢型
    {
        equipment: 328,
        ship: {
            isID: [
                ...Kongou,
                ...Hiei,
                ...Haruna,
                ...Kirishima,
                ...Ise,
                ...Hyuuga,
                ...Fusou,
                ...Yamashiro,
            ].filter((id) => !BB_KongouClassRemodelAll.includes(id)),
        },
        bonus: {
            fire: 1,
        },
    },

    // @ 金剛型改/改二
    {
        equipment: 328,
        ship: {
            isID: BB_KongouClassRemodelAll.filter(
                (id) =>
                    id !== 金剛改二丙 && id !== 比叡改二丙 && id !== 榛名改二乙
            ),
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    {
        equipment: 328,
        ship: {
            isID: [金剛改二丙],
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 1,
        },
    },

    {
        equipment: 328,
        ship: {
            isID: [比叡改二丙],
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 1,
        },
    },

    {
        equipment: 328,
        ship: {
            isID: [榛名改二乙],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        },
    },

    // ------------------------------------------------------------------------
];
