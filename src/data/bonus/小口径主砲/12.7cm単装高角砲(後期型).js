/**
 * 装备额外属性收益 - 12.7cm単装高角砲(後期型)
 * 
 * @module
 */

const {
    CL_NagaraClass2ndRemodel,
} = require('../ships')

module.exports = [

    // @ 占守型 / 択捉型 / 日振型
    // @ 神風型
    {
        equipment: 229,
        ship: {
            isClass: [92, 94, 108, 84],
        },
        bonusImprove: {
            10: {
                fire: 1,
                aa: 1,
            }
        }
    },

    // @ 睦月型
    {
        equipment: 229,
        ship: {
            isClass: [12],
        },
        bonusImprove: {
            10: {
                fire: 2,
                aa: 3,
            }
        }
    },

    // @ 長良型 改二
    {
        equipment: 229,
        ship: {
            isID: CL_NagaraClass2ndRemodel,
        },
        bonusImprove: {
            10: {
                fire: 2,
                aa: 3,
            }
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 占守型 / 択捉型 / 日振型
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
                improvement: 10,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isClass: [92, 94, 108],
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
                improvement: 10,
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
                improvement: 10,
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
