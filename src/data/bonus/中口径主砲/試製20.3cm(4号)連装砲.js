/**
 * @module
 * 装备额外属性收益
 *
 * 520. 試製20.3cm(4号)連装砲
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD20.3cm%284%E5%8F%B7%29%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const {
    CAV_Tone,
    CA_Furutaka,
    CA_Aoba,
    CA_Myoukou,
    CA_Takao,
    CA_Tone,
} = require('../../ship-classes');
const {
    妙高改二,
    高雄改,

    最上,
    最上改,
    最上改二,
    最上改二特,
    三隈,
    三隈改,
    三隈改二,
    三隈改二特,

    鈴谷改二,
    熊野改二,
} = require('../../ship-ids');
const { CAV_MogamiClassSuperRemodel } = require('../../ships');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // Super Mogami Base ======================================================
    {
        equipment: 520,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonusImprove: {
            7: {
                fire: 1,
            },
            10: {
                fire: 1,
                hit: 1,
            },
        },
    },

    // Base ===================================================================
    {
        equipment: 520,
        ship: {
            isClass: [CA_Furutaka, CA_Aoba],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 520,
        ship: {
            isClass: [CA_Myoukou, CA_Takao],
            isNotID: [妙高改二, 高雄改],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    // Mess ===================================================================
    {
        equipment: 520,
        ship: {
            isClass: [CA_Tone, CAV_Tone],
        },
        bonusCount: {
            1: {
                fire: 3,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 8,
                evasion: 2,
                hit: 2,
            },
            3: {
                fire: 13,
                evasion: 3,
                hit: 3,
            },
            4: {
                fire: 17,
                evasion: 4,
                hit: 4,
            },
        },
    },
    {
        equipment: 520,
        ship: {
            isID: [妙高改二, 高雄改, 最上, 最上改, 三隈, 三隈改],
        },
        bonusCount: {
            1: {
                fire: 3,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 8,
                evasion: 2,
                hit: 2,
            },
            3: {
                fire: 13,
                evasion: 3,
                hit: 3,
            },
            4: {
                fire: 17,
                evasion: 4,
                hit: 4,
            },
        },
    },
    {
        equipment: 520,
        ship: {
            isID: [最上改二, 最上改二特, 鈴谷改二, 熊野改二],
        },
        bonusCount: {
            1: {
                fire: 4,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 10,
                evasion: 2,
                hit: 2,
            },
            3: {
                fire: 16,
                evasion: 3,
                hit: 3,
            },
            4: {
                fire: 20,
                evasion: 4,
                hit: 4,
            },
        },
    },
    {
        equipment: 520,
        ship: {
            isID: [三隈改二],
        },
        bonusCount: {
            1: {
                fire: 5,
                evasion: 1,
                hit: 2,
            },
            2: {
                fire: 12,
                evasion: 2,
                hit: 4,
            },
            3: {
                fire: 19,
                evasion: 3,
                hit: 6,
            },
            4: {
                fire: 24,
                evasion: 4,
                hit: 8,
            },
        },
    },
    {
        equipment: 520,
        ship: {
            isID: [三隈改二特],
        },
        bonusCount: {
            1: {
                fire: 5,
                aa: 1,
                evasion: 1,
                hit: 3,
            },
            2: {
                fire: 12,
                aa: 2,
                evasion: 2,
                hit: 6,
            },
            3: {
                fire: 19,
                aa: 3,
                evasion: 3,
                hit: 9,
            },
            4: {
                fire: 24,
                aa: 4,
                evasion: 4,
                hit: 12,
            },
        },
    },

    // Sets ===================================================================

    {
        list: [520, 'SurfaceRadar'],
        equipments: {
            hasID: [520],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 4,
            torpedo: 2,
            evasion: 3,
            hit: 3,
        },
    },
    {
        list: [520, 'SurfaceRadar'],
        equipments: {
            hasID: [520],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CA_Furutaka, CA_Aoba],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            evasion: 1,
        },
    },
    {
        list: [520, 'SurfaceRadar'],
        equipments: {
            hasID: [520],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CA_Myoukou, CA_Takao, CA_Tone, CAV_Tone],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 1,
            hit: 2,
        },
    },
    {
        list: [520, 'SurfaceRadar'],
        equipments: {
            hasID: [520],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [最上, 最上改, 三隈, 三隈改],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 1,
            hit: 2,
        },
    },

    {
        list: [
            520,
            30, // 21号対空電探
        ],
        equipments: [
            {
                isID: 520,
            },
            {
                isID: 30,
            },
        ],
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 2,
            hit: 1,
        },
    },
    {
        list: [
            520,
            410, // 21号対空電探改二
        ],
        equipments: [
            {
                isID: 520,
            },
            {
                isID: 410,
            },
        ],
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 3,
            aa: 6,
            evasion: 4,
            hit: 2,
        },
    },
];
