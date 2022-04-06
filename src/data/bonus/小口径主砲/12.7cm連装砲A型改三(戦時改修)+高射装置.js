/**
 * 装备额外属性收益 - 12.7cm連装砲A型改三(戦時改修)+高射装置
 *
 * @module
 */

const { group_DD_Tokugata } = require('../../ship-classes');

module.exports = [
    {
        equipment: 295,
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 2,
            aa: 2,
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [295, 'SurfaceRadar'],
        equipments: {
            hasID: [295],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 2,
        },
    },

    // + 对空電探
    {
        list: [295, 'AARadar'],
        equipments: {
            hasID: [295],
            hasAARadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            aa: 6,
        },
    },
];
