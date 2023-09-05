/**
 * @module
 * 装备额外属性收益
 *
 * 362. 5inch連装両用砲(集中配備)
 *      https://wikiwiki.jp/kancolle/5inch%E9%80%A3%E8%A3%85%E4%B8%A1%E7%94%A8%E7%A0%B2%28%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99%29
 *
 * 363. GFCS Mk.37＋5inch連装両用砲(集中配備)
 *      https://wikiwiki.jp/kancolle/GFCS%20Mk.37%EF%BC%8B5inch%E9%80%A3%E8%A3%85%E4%B8%A1%E7%94%A8%E7%A0%B2%28%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99%29
 *
 */

const {
    group_BB_exclude_BC_Navy_USN,

    CA_Northampton,
    CA_NewOrleans,

    CL_Tenryuu,
    CL_Kuma,
    CL_KumaRevised,
    CLT_Kuma,
    CL_Nagara,
    CL_Sendai,
    CL_Agano,
    CL_AganoRevised,
    CL_Yuubari,
    CL_Yuubari2,
    CL_Ooyodo,
    CL_Gotland,
    CLV_Gotland,
    CL_DeRuyter,
    CL_Atlanta,

    CT_Katori,
} = require('../../ship-classes');

const bonuses = [
    {
        ship: {
            isClass: [CL_Atlanta],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 2,
        },
    },
    {
        ship: {
            isClass: [
                ...group_BB_exclude_BC_Navy_USN,
                CA_Northampton,
                CA_NewOrleans,
            ],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    },
    {
        ship: {
            isClass: [CL_Agano, CL_AganoRevised, CL_Ooyodo, CL_DeRuyter],
        },
        bonus: {
            aa: -1,
            evasion: -2,
        },
    },
    {
        ship: {
            isClass: [CLV_Gotland, CL_Gotland, CT_Katori],
        },
        bonus: {
            fire: -2,
            aa: -1,
            evasion: -4,
        },
    },
    {
        ship: {
            isClass: [CL_Kuma, CL_KumaRevised, CLT_Kuma, CL_Nagara, CL_Sendai],
        },
        bonus: {
            fire: -3,
            aa: -2,
            evasion: -6,
        },
    },
    {
        ship: {
            isClass: [CL_Tenryuu, CL_Yuubari, CL_Yuubari2],
        },
        bonus: {
            fire: -3,
            aa: -3,
            evasion: -8,
        },
    },
];

const result = [];
[362, 363].forEach((equipment) => {
    bonuses.forEach((bonus) => {
        result.push({
            equipment,
            ...bonus,
        });
    });
});
module.exports = result;
