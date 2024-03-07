/**
 * @module
 * 装备额外属性收益
 *
 * 366. 12.7cm連装砲D型改三
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%B8%89
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
const {
    時雨改三,

    丹陽,
    秋雲改二,
    高波改二,
    沖波改二,
    清霜改二,
    清霜改二丁,
} = require('../../ship-ids');

const DD_YuugumoClass2ndRemodel_exclude_HighTier =
    DD_YuugumoClass2ndRemodel.filter(
        (shipId) =>
            ![高波改二, 沖波改二, 清霜改二, 清霜改二丁].includes(shipId),
    );

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ 陽炎型
    {
        equipment: 366,
        ship: {
            isClass: [DD_Kagerou, DD_KagerouROCN],
            isNotID: DD_KagerouClass2ndRemodel.filter(
                (shipId) => shipId !== 丹陽,
            ),
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },

    // @ 陽炎型 改二
    {
        equipment: 366,
        ship: {
            isID: DD_KagerouClass2ndRemodelExcludeAkigumo.filter(
                (shipId) => shipId !== 丹陽,
            ),
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        },
    },

    {
        equipment: 366,
        ship: {
            isID: [
                50, // 島風
            ],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    {
        equipment: 366,
        ship: {
            isID: DD_ShimakazeRemodel,
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 7,
                aa: 5,
                evasion: 1,
                hit: 1,
            },
        },
    },

    {
        equipment: 366,
        ship: {
            isID: [時雨改三],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
                hit: 1,
            },
            2: {
                fire: 7,
                aa: 5,
                hit: 1,
            },
        },
    },

    // @ 夕雲型
    {
        equipment: 366,
        ship: {
            isClass: [22],
            isNotID: DD_YuugumoClass2ndRemodel,
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    // @ 夕雲型 改二
    {
        equipment: 366,
        ship: {
            isID: DD_YuugumoClass2ndRemodel_exclude_HighTier,
        },
        bonusCount: {
            1: {
                fire: 4,
                aa: 3,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 9,
                aa: 5,
                evasion: 2,
                hit: 1,
            },
        },
    },

    {
        equipment: 366,
        ship: {
            isID: [高波改二, 清霜改二, 清霜改二丁],
        },
        bonusCount: {
            1: {
                fire: 5,
                aa: 3,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 11,
                aa: 5,
                evasion: 2,
                hit: 1,
            },
        },
    },

    {
        equipment: 366,
        ship: {
            isID: [秋雲改二, 沖波改二],
        },
        bonusCount: {
            1: {
                fire: 5,
                aa: 5,
                evasion: 1,
                hit: 1,
            },
            2: {
                fire: 10,
                aa: 7,
                evasion: 2,
                hit: 1,
            },
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [366, 'SurfaceRadar'],
        equipments: {
            hasID: [366],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [
                秋雲改二,
                時雨改三,
                ...DD_YuugumoClass2ndRemodel,
                ...DD_ShimakazeRemodel,
            ].filter((sid) => sid !== 清霜改二丁),
        },
        bonus: {
            fire: 2,
            torpedo: 4,
            evasion: 2,
            hit: 2,
        },
    },
    {
        list: [366, 'SurfaceRadar'],
        equipments: {
            hasID: [366],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [清霜改二丁],
        },
        bonus: {
            fire: 3,
            torpedo: 3,
            evasion: 2,
            hit: 2,
        },
    },

    // + 対空電探
    {
        list: [366, 'AARadar'],
        equipments: {
            hasID: [366],
            hasAARadar: true,
        },
        ship: {
            isID: [
                秋雲改二,
                時雨改三,
                ...DD_YuugumoClass2ndRemodel,
                ...DD_ShimakazeRemodel,
            ],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
            hit: 1,
        },
    },
];
