/**
 * 装备额外属性收益 - 12.7cm連装砲D型改二
 * 
 * @module
 */

const {
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
    DD_ShimakazeRemodel,
} = require('../../ships')

module.exports = [
    
    // @ 陽炎型
    {
        equipment: 267,
        ship: {
            isClass: [21],
            isNotID: DD_KagerouClass2ndRemodel,
        },
        bonus: {
            fire: 1,
            evasion: 1,
        }
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
        }
    },
    
    // @ 陽炎型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_KagerouClass2ndRemodel
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
        }
    },
    
    // @ 夕雲型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 3,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 島風改
    {
        list: [
            267,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_ShimakazeRemodel
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2,
        }
    },

    // + 对水上電探
    // @ 夕雲型
    {
        list: [
            267,
            'SurfaceRadar',
        ],
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
        }
    },

    // + 对水上電探
    // @ 夕雲型 改二
    {
        list: [
            267,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 3,
            torpedo: 4,
            evasion: 3,
        }
    },

]
