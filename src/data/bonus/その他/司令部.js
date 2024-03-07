/**
 * @module
 * 装备额外属性收益
 *
 * 413. 精鋭水雷戦隊 司令部
 *      https://wikiwiki.jp/kancolle/%E7%B2%BE%E9%8B%AD%E6%B0%B4%E9%9B%B7%E6%88%A6%E9%9A%8A%20%E5%8F%B8%E4%BB%A4%E9%83%A8
 *
 */

require('../../../../typedef');

const {
    神通,
    神通改,
    神通改二,

    初霜改二,
    霰改二,
    長波改二,
} = require('../../ship-ids');
const {
    CL_Tenryuu,
    CLT_Kuma,
    CL_Kuma,
    CL_KumaRevised,
    CL_Nagara,
    CL_Yuubari,
    CL_Yuubari2,
    CL_Ooyodo,
    CT_Katori,

    DD_Shiratsuyu,
    DD_ShiratsuyuRevised,
    DD_Kagerou,
    DD_KagerouROCN,
    DD_Kagerou2,
    DD_Yuugumo,
    DD_Akizuki,
} = require('../../ship-classes');
const {
    Yura,
    Sendai,
    Naka,
    Agano,
    Noshiro,
    Yahagi,
    Sakawa,

    Teruzuki,
} = require('../../ship-series');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 精鋭水雷戦隊 = [
    // CLs
    {
        equipment: 413,
        ship: {
            isID: [神通改二],
        },
        bonus: {
            fire: 8,
            torpedo: 5,
            evasion: 4,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [...Sendai, 神通, 神通改],
        },
        bonus: {
            fire: 6,
            torpedo: 5,
            evasion: 4,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [...Yura, ...Naka, ...Noshiro, ...Yahagi],
        },
        bonus: {
            fire: 5,
            torpedo: 4,
            aa: 1,
            evasion: 5,
        },
    },
    {
        equipment: 413,
        ship: {
            isClass: [CLT_Kuma, CL_Kuma, CL_KumaRevised, CL_Nagara, CL_Ooyodo],
            isNotID: [...Yura],
        },
        bonus: {
            fire: 5,
            torpedo: 4,
            evasion: 4,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [...Agano, ...Sakawa],
        },
        bonus: {
            fire: 5,
            torpedo: 4,
            evasion: 4,
        },
    },
    {
        equipment: 413,
        ship: {
            isClass: [CL_Tenryuu, CL_Yuubari, CL_Yuubari2],
        },
        bonus: {
            fire: 4,
            torpedo: 3,
            aa: 2,
            evasion: 3,
        },
    },
    {
        equipment: 413,
        ship: {
            isClass: [CT_Katori],
        },
        bonus: {
            fire: 4,
            torpedo: 2,
            evasion: 2,
        },
    },

    // DDs
    {
        equipment: 413,
        ship: {
            isID: [長波改二],
        },
        bonus: {
            fire: 6,
            torpedo: 6,
            evasion: 8,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [...Teruzuki],
        },
        bonus: {
            fire: 5,
            torpedo: 6,
            evasion: 7,
        },
    },
    {
        equipment: 413,
        ship: {
            isClass: [DD_Yuugumo, DD_Akizuki],
            isNotID: [長波改二, ...Teruzuki],
        },
        bonus: {
            fire: 4,
            torpedo: 5,
            evasion: 7,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [初霜改二],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            aa: 1,
            evasion: 5,
        },
    },
    {
        equipment: 413,
        ship: {
            isClass: [
                DD_Shiratsuyu,
                DD_ShiratsuyuRevised,
                DD_Kagerou,
                DD_KagerouROCN,
                DD_Kagerou2,
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            evasion: 4,
        },
    },
    {
        equipment: 413,
        ship: {
            isID: [霰改二],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            evasion: 4,
        },
    },
];

// ============================================================================

module.exports = [...精鋭水雷戦隊];
