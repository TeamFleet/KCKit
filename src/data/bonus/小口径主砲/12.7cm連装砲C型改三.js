/**
 * @module
 * 装备额外属性收益
 *
 * 470. 12.7cm連装砲C型改三
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2C%E5%9E%8B%E6%94%B9%E4%B8%89
 *
 */

require('../../../../typedef');

const { DD_KagerouClass2ndRemodel } = require('../../ships');
const {
    DD_Shiratsuyu,
    DD_ShiratsuyuRevised,
    DD_Asashio,
    DD_Kagerou,
    DD_KagerouROCN,
    DD_Kagerou2,
} = require('../../ship-classes');
const {
    時雨,
    時雨改,
    時雨改二,
    時雨改三,
    雪風,
    雪風改,
    丹陽,
    雪風改二,
    磯風乙改,
    秋雲改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 改修ボーナス = [
    {
        equipment: 470,
        ship: {
            isID: [
                時雨改二,
                時雨改三,
                ...DD_KagerouClass2ndRemodel.filter(
                    (shipId) => shipId !== 秋雲改二
                ),
            ],
        },
        bonusImprove: {
            5: {
                hit: 1,
            },
            8: {
                fire: 1,
                hit: 1,
            },
            10: {
                fire: 1,
                hit: 2,
            },
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 単体ボーナス = [
    {
        equipment: 470,
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonusCount: {
            1: {
                fire: 3,
                evasion: 2,
                hit: 2,
            },
            2: {
                fire: 7,
                evasion: 4,
                hit: 2,
            },
            3: {
                fire: 9,
                evasion: 6,
                hit: 2,
            },
        },
    },
    {
        equipment: 470,
        ship: {
            isID: [時雨改三],
        },
        bonusCount: {
            1: { fire: 5, evasion: 4, hit: 5 },
            2: {
                fire: 11,
                evasion: 8,
                hit: 8,
            },
            3: {
                fire: 15,
                evasion: 12,
                hit: 11,
            },
        },
    },
    {
        equipment: 470,
        ship: {
            isID: [時雨改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 2,
                hit: 2,
            },
            2: {
                fire: 5,
                evasion: 4,
                hit: 2,
            },
            3: {
                fire: 6,
                evasion: 6,
                hit: 2,
            },
        },
    },
    {
        equipment: 470,
        ship: {
            isID: DD_KagerouClass2ndRemodel.filter(
                (shipId) => ![丹陽, 雪風改二, 秋雲改二].includes(shipId)
            ),
        },
        bonusCount: {
            1: {
                fire: 3,
                hit: 2,
            },
            2: {
                fire: 7,
                hit: 2,
            },
            3: {
                fire: 9,
                hit: 2,
            },
        },
    },
    {
        equipment: 470,
        ship: {
            isID: [雪風, 雪風改, 磯風乙改],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
    {
        equipment: 470,
        ship: {
            isID: [時雨, 時雨改],
        },
        bonus: {
            fire: 1,
            evasion: 2,
        },
    },
    {
        equipment: 470,
        ship: {
            isClass: [DD_Kagerou],
            isNotID: [
                雪風,
                雪風改,
                丹陽,
                雪風改二,
                磯風乙改,
                ...DD_KagerouClass2ndRemodel.filter(
                    (shipId) => ![雪風改二, 秋雲改二].includes(shipId)
                ),
            ],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 470,
        ship: {
            isClass: [DD_Shiratsuyu, DD_ShiratsuyuRevised, DD_Asashio],
            isNotID: [時雨, 時雨改, 時雨改二, 時雨改三],
        },
        bonus: {
            fire: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 相互シナジーボーナス = [
    {
        list: [470, 'SurfaceRadar'],
        equipments: {
            hasID: [470],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Kagerou, DD_KagerouROCN, DD_Kagerou2],
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 1,
            hit: 3,
        },
    },
    {
        list: [470, 'SurfaceRadar'],
        equipments: {
            hasID: [470],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Shiratsuyu, DD_ShiratsuyuRevised, DD_Asashio],
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 1,
            hit: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [...改修ボーナス, ...単体ボーナス, ...相互シナジーボーナス];
