/**
 * @module
 * 装备额外属性收益
 *
 * 407. 15.2cm連装砲改二
 *      https://wikiwiki.jp/kancolle/15.2cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

const { CL_AganoRevised } = require('../../ship-classes');

module.exports = [
    {
        equipment: 407,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 4,
            aa: 2,
            evasion: 1,
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [407, 'SurfaceRadar'],
        equipments: {
            hasID: [407],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            evasion: 2,
        },
    },

    {
        list: [407, 'AARadar'],
        equipments: {
            hasID: [407],
            hasAARadar: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            aa: 2,
            evasion: 3,
        },
    },
];
