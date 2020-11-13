/**
 * @module
 * 装备额外属性收益
 *
 * 366. 12.7cm連装砲D型改三
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%B8%89
 *
 */

const {
    DD_KagerouClass2ndRemodelExcludeAkigumo,
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
    DD_ShimakazeRemodel,
} = require('../../ships');
const { DD_Kagerou, DD_KagerouROCN } = require('../../ship-classes');
const { 丹陽, 秋雲改二 } = require('../../ship-ids');

module.exports = [
    // @ 陽炎型
    {
        equipment: 366,
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

    // @ 陽炎型 改二
    {
        equipment: 366,
        ship: {
            isID: DD_KagerouClass2ndRemodelExcludeAkigumo.filter(
                (shipId) => shipId !== 丹陽
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
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 1,
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
            isID: DD_YuugumoClass2ndRemodel.filter((shipId) => shipId !== 569),
        },
        bonus: {
            fire: 3,
            aa: 3,
            evasion: 1,
        },
    },

    {
        equipment: 366,
        ship: {
            isID: [
                秋雲改二,
                569, // 沖波改二
            ],
        },
        bonus: {
            fire: 4,
            aa: 5,
            evasion: 1,
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
                ...DD_YuugumoClass2ndRemodel,
                ...DD_ShimakazeRemodel,
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 4,
            evasion: 2,
        },
    },

    // + 对水上電探
    {
        list: [366, 'AARadar'],
        equipments: {
            hasID: [366],
            hasAARadar: true,
        },
        ship: {
            isID: [
                秋雲改二,
                ...DD_YuugumoClass2ndRemodel,
                ...DD_ShimakazeRemodel,
            ],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 2,
        },
    },

    // + 探照灯
    // @ 秋雲改二
    {
        list: [366, 74],
        equipments: [
            {
                isID: 366,
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
        list: [366, 129],
        equipments: [
            {
                isID: 366,
            },
            {
                isID: 129,
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
