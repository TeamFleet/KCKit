/**
 * 装备额外属性收益 - 12.7cm連装砲A型改二
 * 
 * @module
 */

const {
    DD_FubukiClass2ndRemodel,
} = require('../ships')

module.exports = [

    // @ 吹雪型 改二
    {
        equipment: 294,
        ship: {
            isID: DD_FubukiClass2ndRemodel
        },
        bonus: {
            fire: 1,
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    // @ 吹雪型 改二
    {
        list: [
            294,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [294],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_FubukiClass2ndRemodel
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 2,
        }
    },

]
