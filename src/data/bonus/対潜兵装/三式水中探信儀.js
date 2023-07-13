/**
 * @module
 * 装备额外属性收益
 *
 *  47. 三式水中探信儀
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%B0%B4%E4%B8%AD%E6%8E%A2%E4%BF%A1%E5%84%80
 *
 * 438. 三式水中探信儀改
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%B0%B4%E4%B8%AD%E6%8E%A2%E4%BF%A1%E5%84%80%E6%94%B9
 *
 */

require('../../../../typedef');

const { DD_KagerouROCN, group_DD_Navy_IJN } = require('../../ship-classes');
const {
    Kamikaze,
    Harukaze,
    Ushio,
    Ikazuchi,
    Shigure,
    Yamakaze,
    Yamagumo,
    Isokaze,
    Hamakaze,
    Maikaze,
    Kishinami,
    Asashimo,
} = require('../../ships');
const {
    Umikaze,
    Kawakaze,
    Suzukaze,

    Ishigaki,

    Mikura,
} = require('../../ship-series');
const {
    五十鈴改二,

    由良改二,

    那珂改二,

    神風改,
    春風改,

    時雨改二,
    時雨改三,
    山風改二,
    山風改二丁,

    朝霜改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三式水中探信儀 = [
    {
        equipment: 47,
        ship: {
            isID: [
                ...Ushio,
                ...Ikazuchi,
                ...Yamagumo,
                ...Isokaze,
                ...Hamakaze,
                ...Kishinami,
            ],
        },
        bonus: {
            evasion: 2,
            asw: 2,
        },
    },

    {
        equipment: 47,
        ship: {
            isID: [
                ...Kamikaze,
                ...Harukaze,
                ...Shigure,
                ...Yamakaze,
                ...Maikaze,
                ...Asashimo,
            ],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            asw: 3,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 三式水中探信儀改 = [
    {
        equipment: 438,
        ship: {
            isID: [...Kamikaze, ...Harukaze, ...Shigure, ...Yamakaze],
        },
        bonusCount: {
            1: {
                fire: 1,
                asw: 5,
                evasion: 4,
            },
            2: {
                fire: 2,
                asw: 8,
                evasion: 6,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [...Maikaze],
        },
        bonusCount: {
            1: {
                fire: 1,
                asw: 5,
                evasion: 3,
            },
            2: {
                fire: 2,
                asw: 8,
                evasion: 5,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [...Asashimo],
        },
        bonusCount: {
            1: {
                fire: 1,
                asw: 4,
                evasion: 3,
            },
            2: {
                fire: 2,
                asw: 7,
                evasion: 5,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [...Ushio, ...Ikazuchi, ...Yamagumo, ...Isokaze, ...Hamakaze],
        },
        bonusCount: {
            1: {
                asw: 4,
                evasion: 3,
            },
            2: {
                asw: 6,
                evasion: 5,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [...Kishinami],
        },
        bonusCount: {
            1: {
                asw: 3,
                evasion: 3,
            },
            2: {
                asw: 5,
                evasion: 5,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [...Umikaze, ...Kawakaze, ...Suzukaze],
        },
        bonusCount: {
            1: {
                asw: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isClass: [...group_DD_Navy_IJN, DD_KagerouROCN],
            isNotID: [
                ...Kamikaze,
                ...Harukaze,
                ...Shigure,
                ...Yamakaze,
                ...Maikaze,
                ...Asashimo,
                ...Ushio,
                ...Ikazuchi,
                ...Yamagumo,
                ...Isokaze,
                ...Hamakaze,
                ...Kishinami,
                ...Umikaze,
                ...Kawakaze,
                ...Suzukaze,
            ],
        },
        bonusCount: {
            1: {
                asw: 1,
                evasion: 1,
            },
        },
    },
    {
        equipment: 438,
        ship: {
            isID: [五十鈴改二, 由良改二, 那珂改二, ...Ishigaki, ...Mikura],
        },
        bonusCount: {
            1: {
                asw: 1,
                evasion: 1,
            },
        },
    },
];
// Special improvement bonuses
[
    [
        4,
        {
            asw: 1,
        },
    ],
    [
        6,
        {
            evasion: 1,
        },
    ],
    [
        8,
        {
            asw: 1,
        },
    ],
    [
        10,
        {
            evasion: 1,
        },
    ],
].forEach(([star, bonus]) => {
    三式水中探信儀改.push({
        list: [
            {
                id: 438,
                star,
            },
        ],
        equipments: [
            {
                isID: 438,
                improvement: star,
            },
        ],
        ship: {
            isID: [
                神風改,
                春風改,
                時雨改二,
                時雨改三,
                山風改二,
                山風改二丁,
                朝霜改二,
            ],
        },
        bonus,
    });
});

// ============================================================================

module.exports = [...三式水中探信儀, ...三式水中探信儀改];
