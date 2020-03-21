/**
 * @module
 * 装备额外属性收益
 *
 * 366. 12.7cm連装砲D型改三
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%B8%89
 *
 */

const {
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
    DD_ShimakazeRemodel
} = require('../../ships');

module.exports = [
    // @ 陽炎型
    {
        equipment: 366,
        ship: {
            isClass: [21],
            isNotID: DD_KagerouClass2ndRemodel
        },
        bonus: {
            fire: 1,
            evasion: 1
        }
    },

    // @ 陽炎型 改二
    {
        equipment: 366,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1
        }
    },

    {
        equipment: 366,
        ship: {
            isID: [
                50 // 島風
            ]
        },
        bonus: {
            fire: 2,
            evasion: 1
        }
    },

    {
        equipment: 366,
        ship: {
            isID: DD_ShimakazeRemodel
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 1
        }
    },

    // @ 夕雲型
    {
        equipment: 366,
        ship: {
            isClass: [22],
            isNotID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 2,
            evasion: 1
        }
    },

    // @ 夕雲型 改二
    {
        equipment: 366,
        ship: {
            isID: DD_YuugumoClass2ndRemodel,
            isNotID: [
                569 // 沖波改二
            ]
        },
        bonus: {
            fire: 3,
            aa: 3,
            evasion: 1
        }
    },

    {
        equipment: 366,
        ship: {
            isID: [
                569 // 沖波改二
            ]
        },
        bonus: {
            fire: 4,
            aa: 5,
            evasion: 1
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [366, 'SurfaceRadar'],
        equipments: {
            hasID: [366],
            hasSurfaceRadar: true
        },
        ship: {
            isID: [...DD_YuugumoClass2ndRemodel, ...DD_ShimakazeRemodel]
        },
        bonus: {
            fire: 2,
            torpedo: 4,
            evasion: 2
        }
    },

    // + 对水上電探
    {
        list: [366, 'AARadar'],
        equipments: {
            hasID: [366],
            hasAARadar: true
        },
        ship: {
            isID: [...DD_YuugumoClass2ndRemodel, ...DD_ShimakazeRemodel]
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 2
        }
    }
];
