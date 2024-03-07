/**
 * @module
 * 装备额外属性收益
 *
 * 119. 14cm連装砲
 *      https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 * 310. 14cm連装砲改
 *      https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
 *
 * 518. 14cm連装砲改二
 *      https://wikiwiki.jp/kancolle/14cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const {
    CL_Yuubari,
    CL_Yuubari2,
    CT_Katori,
    AV_Nisshin,
    Aux_AV_CTeste,
} = require('../../ship-classes');
const {
    三隈改二特,

    夕張改二,
    夕張改二特,
    夕張改二丁,
} = require('../../ship-ids');

// ============================================================================

const 連装砲 = [
    {
        equipment: 119,
        ship: {
            isClass: [CL_Yuubari, CL_Yuubari2, CT_Katori],
        },
        bonus: {
            fire: 1,
        },
    },

    {
        equipment: 119,
        ship: {
            isClass: [AV_Nisshin],
        },
        bonus: {
            fire: 2,
            torpedo: 1,
        },
    },
];

// ============================================================================

const 連装砲改 = [
    {
        equipment: 310,
        ship: {
            isClass: [CL_Yuubari],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 310,
        ship: {
            isClass: [CL_Yuubari2],
        },
        bonusImprove: {
            0: {
                fire: 4,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
            7: {
                fire: 5,
                torpedo: 1,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
            10: {
                fire: 7,
                torpedo: 1,
                aa: 1,
                evasion: 2,
                asw: 1,
            },
        },
    },

    {
        equipment: 310,
        ship: {
            isClass: [CT_Katori],
        },
        bonusImprove: {
            0: {
                fire: 2,
                evasion: 1,
            },
            10: {
                fire: 4,
                evasion: 3,
            },
        },
    },

    {
        equipment: 310,
        ship: {
            isClass: [AV_Nisshin],
        },
        bonusImprove: {
            0: {
                fire: 3,
                torpedo: 2,
                aa: 1,
                evasion: 1,
            },
            10: {
                fire: 4,
                torpedo: 3,
                aa: 1,
                evasion: 1,
            },
        },
    },
];

// ============================================================================

const 連装砲改二 = [
    {
        equipment: 518,
        ship: {
            isID: [夕張改二],
        },
        bonusImprove: {
            0: {
                fire: 6,
                aa: 3,
                asw: 2,
                evasion: 3,
            },
            7: {
                fire: 7,
                torpedo: 1,
                aa: 3,
                asw: 2,
                evasion: 3,
            },
            10: {
                fire: 9,
                torpedo: 1,
                aa: 3,
                asw: 2,
                evasion: 3,
            },
        },
    },
    {
        equipment: 518,
        ship: {
            isID: [夕張改二特],
        },
        bonusImprove: {
            0: {
                fire: 6,
                aa: 2,
                asw: 2,
                evasion: 3,
            },
            7: {
                fire: 7,
                torpedo: 1,
                aa: 2,
                asw: 2,
                evasion: 3,
            },
            10: {
                fire: 9,
                torpedo: 1,
                aa: 2,
                asw: 2,
                evasion: 3,
            },
        },
    },
    {
        equipment: 518,
        ship: {
            isID: [夕張改二丁],
        },
        bonusImprove: {
            0: {
                fire: 6,
                aa: 3,
                asw: 4,
                evasion: 3,
            },
            7: {
                fire: 7,
                torpedo: 1,
                aa: 3,
                asw: 4,
                evasion: 3,
            },
            10: {
                fire: 9,
                torpedo: 1,
                aa: 3,
                asw: 4,
                evasion: 3,
            },
        },
    },

    {
        equipment: 518,
        ship: {
            isClass: [CT_Katori],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 1,
                asw: 1,
                evasion: 2,
            },
            10: {
                fire: 5,
                aa: 1,
                asw: 1,
                evasion: 4,
            },
        },
    },

    {
        equipment: 518,
        ship: {
            isClass: [AV_Nisshin],
        },
        bonusImprove: {
            0: {
                fire: 4,
                torpedo: 3,
                aa: 1,
                evasion: 2,
            },
            10: {
                fire: 5,
                torpedo: 4,
                aa: 1,
                evasion: 2,
            },
        },
    },

    {
        equipment: 518,
        ship: {
            isClass: [Aux_AV_CTeste],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            evasion: 1,
        },
    },
    {
        equipment: 518,
        ship: {
            isID: [三隈改二特],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

module.exports = [
    ...連装砲,
    ...連装砲改,
    ...連装砲改二,

    {
        list: ['MediumCaliber', 'SurfaceRadar'],
        equipments: {
            hasOneOf: [310, 518].map((eid) => ({
                isID: eid,
            })),
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CL_Yuubari2],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 2,
        },
    },
];
