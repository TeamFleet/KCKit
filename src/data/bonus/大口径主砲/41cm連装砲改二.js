/**
 * @module
 * 装备额外属性收益
 *
 * 318. 41cm連装砲改二
 *      https://wikiwiki.jp/kancolle/41cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%E4%BA%8C
 *
 */

const {
    BB_NagatoClass2ndRemodel,
    BB_IseClassRemodel,
    BB_IseClassRemodelAll,
    BB_FusouClass2ndRemodel,
} = require('../../ships');

module.exports = [
    {
        equipment: 318,
        ship: {
            isID: BB_FusouClass2ndRemodel,
        },
        bonus: {
            fire: 1,
        },
    },

    {
        equipment: 318,
        ship: {
            isID: BB_IseClassRemodel,
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        },
    },

    {
        equipment: 318,
        ship: {
            isID: [
                553, // 伊勢改二
            ],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
            hit: 3,
        },
    },

    {
        equipment: 318,
        ship: {
            isID: [
                554, // 日向改二
            ],
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 2,
            hit: 3,
        },
    },

    {
        equipment: 318,
        ship: {
            isID: BB_NagatoClass2ndRemodel,
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 1,
            hit: 2,
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [
            318,
            290, // 41cm三連装砲改二
        ],
        equipments: {
            hasID: [318, 290],
        },
        ship: {
            isID: [
                554, // 日向改二
            ],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            armor: 1,
            hit: 1,
        },
    },
    {
        list: [
            318,
            290, // 41cm三連装砲改二
        ],
        equipments: {
            hasID: [318, 290],
        },
        ship: {
            isID: [
                553, // 伊勢改二
                ...BB_IseClassRemodel,
            ],
        },
        bonus: {
            evasion: 2,
            armor: 1,
        },
    },
    {
        list: [
            318,
            290, // 41cm三連装砲改二
        ],
        equipments: {
            hasID: [318, 290],
        },
        ship: {
            isID: BB_NagatoClass2ndRemodel,
        },
        bonus: {
            fire: 2,
            evasion: 2,
            armor: 1,
            hit: 1,
        },
    },

    {
        list: [318, 'AARadar'],
        equipments: {
            hasID: [318],
            hasAARadar: true,
        },
        ship: {
            isID: BB_IseClassRemodelAll,
        },
        bonus: {
            aa: 2,
            evasion: 3,
            hit: 1,
        },
    },
];
