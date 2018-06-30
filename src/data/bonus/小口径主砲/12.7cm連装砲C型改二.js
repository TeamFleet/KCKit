/**
 * 装备额外属性收益 - 12.7cm連装砲C型改二
 * 
 * @module
 */

const {
    DD_KagerouClassRemodel,
    DD_KagerouClass2ndRemodel,
    DD_KagerouClassRemodelAll,
} = require('../ships')

module.exports = [

    // @ 白露型
    {
        equipment: 266,
        ship: {
            isClass: [
                19,
            ]
        },
        bonus: {
            fire: 1,
        }
    },

    // @ 陽炎型 改
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClassRemodel
        },
        bonus: {
            fire: 1,
            evasion: 1,
        }
    },

    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 2,
            },
            2: {
                fire: 5,
            },
            3: {
                fire: 6,
            }
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 陽炎型 改 / 陽炎型 改二
    {
        list: [
            266,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [266],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_KagerouClassRemodelAll
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 1,
        }
    },

]
