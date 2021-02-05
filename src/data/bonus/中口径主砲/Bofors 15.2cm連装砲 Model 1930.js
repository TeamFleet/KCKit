/**
 * 装备额外属性收益 - Bofors 15.2cm連装砲 Model 1930
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/Bofors15.2cm%E9%80%A3%E8%A3%85%E7%A0%B2%20Model1930

const {
    CL_Kuma,
    CL_KumaRevised,
    CL_Nagara,
    CL_Sendai,
    CL_Agano,
    CL_AganoRevised,
    CLT_Kuma,
    CL_Gotland,
    CLV_Gotland,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 303,
        ship: {
            isClass: [
                CL_Kuma,
                CL_KumaRevised,
                CL_Nagara,
                CL_Sendai,
                CL_Agano,
                CL_AganoRevised,
                CLT_Kuma,
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },

    {
        equipment: 303,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 1,
        },
    },

    // ------------------------------------------------------------------------
];
