/**
 * 装备额外属性收益 - 12.7cm単装高角砲(後期型)
 * 
 * @module
 */

const {
    CL_NagaraClass2ndRemodel,
} = require('../../ships')

module.exports = [

    // @ 海防艦
    {
        equipment: 229,
        ship: {
            isType: [31],
        },
        bonusImprove: {
            7: {
                fire: 1,
                aa: 1,
            }
        }
    },

    // @ 神風型 / 睦月型
    {
        equipment: 229,
        ship: {
            isClass: [84, 12],
        },
        bonusImprove: {
            7: {
                fire: 1,
                aa: 1,
            }
        }
    },

    // @ 鬼怒改二
    {
        equipment: 229,
        ship: {
            isID: [487],
        },
        bonusImprove: {
            7: {
                fire: 2,
                aa: 2,
            }
        }
    },

    // @ 由良改二
    {
        equipment: 229,
        ship: {
            isID: [488],
        },
        bonusImprove: {
            7: {
                fire: 2,
                aa: 3,
            }
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 海防艦
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isType: [31],
        },
        bonus: {
            fire: 1,
            evasion: 4,
        }
    },

    // + 对水上電探
    // @ 神風型 / 睦月型
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isClass: [84, 12],
        },
        bonus: {
            fire: 2,
            evasion: 3,
        }
    },

    // + 对水上電探
    // @ 長良型 改二
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isID: CL_NagaraClass2ndRemodel,
        },
        bonus: {
            fire: 3,
            evasion: 2,
        }
    },

]
