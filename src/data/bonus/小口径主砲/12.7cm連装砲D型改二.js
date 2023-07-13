/**
 * @module
 * 装备额外属性收益
 *
 * 267. 12.7cm連装砲D型改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const {
    DD_KagerouClass2ndRemodelExcludeAkigumo,
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
    DD_ShimakazeRemodel,
} = require('../../ships');
const { DD_Kagerou, DD_KagerouROCN } = require('../../ship-classes');
const { 時雨改三, 丹陽, 秋雲改二, 高波改二 } = require('../../ship-ids');

const DD_YuugumoClass2ndRemodel_exclude_HighTier =
    DD_YuugumoClass2ndRemodel.filter((shipId) => shipId !== 高波改二);

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ 陽炎型
    {
        equipment: 267,
        ship: {
            isClass: [DD_Kagerou, DD_KagerouROCN],
            isNotID: DD_KagerouClass2ndRemodel.filter(
                (shipId) => shipId !== 丹陽
            ),
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },

    // @ 夕雲型 / 島風型
    {
        equipment: 267,
        ship: {
            isClass: [22, 24],
            isNotID: DD_YuugumoClass2ndRemodel,
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    // @ 陽炎型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_KagerouClass2ndRemodelExcludeAkigumo.filter(
                (shipId) => shipId !== 丹陽
            ),
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 1,
            },
            2: {
                fire: 3,
                evasion: 2,
            },
            3: {
                fire: 4,
                evasion: 3,
            },
        },
    },

    // @ 夕雲型 改二
    {
        equipment: 267,
        ship: {
            isID: [秋雲改二, ...DD_YuugumoClass2ndRemodel_exclude_HighTier],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
    },

    {
        equipment: 267,
        ship: {
            isID: [高波改二],
        },
        bonus: {
            fire: 4,
            evasion: 1,
        },
    },

    {
        equipment: 267,
        ship: {
            isID: [時雨改三],
        },
        bonus: {
            fire: 2,
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 島風改
    {
        list: [267, 'SurfaceRadar'],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_ShimakazeRemodel,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2,
        },
    },

    // + 对水上電探
    // @ 夕雲型
    {
        list: [267, 'SurfaceRadar'],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [22],
            isNotID: DD_YuugumoClass2ndRemodel,
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 1,
        },
    },

    // + 对水上電探
    // @ 夕雲型 改二
    {
        list: [267, 'SurfaceRadar'],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [秋雲改二, ...DD_YuugumoClass2ndRemodel],
        },
        bonus: {
            fire: 3,
            torpedo: 6,
            evasion: 3,
        },
    },

    // + 探照灯
    // @ 秋雲改二
    {
        list: [267, 74],
        equipments: [
            {
                isID: 267,
            },
            {
                isID: 74,
            },
        ],
        ship: {
            isID: 秋雲改二,
        },
        bonus: {
            fire: 3,
            evasion: -3,
        },
    },

    // + 熟練見張員
    // @ 秋雲改二
    {
        list: [267, 'SurfaceShipPersonnel'],
        equipments: [
            {
                isID: 267,
            },
            {
                isSurfaceShipPersonnel: true,
            },
        ],
        ship: {
            isID: 秋雲改二,
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 3,
        },
    },
];
