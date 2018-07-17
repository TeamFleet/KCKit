/**
 * 装备额外属性收益 - 41cm三連装砲改二
 * 
 * @module
 */

const {
    BB_IseClassRemodel, BB_IseClass2ndRemodel, BB_IseClassRemodelAll,
    BB_FusouClass2ndRemodel,
} = require('../../ships')

module.exports = [

    // @ 扶桑型 改二
    {
        equipment: 290,
        ship: {
            isID: BB_FusouClass2ndRemodel
        },
        bonus: {
            fire: 1,
        }
    },

    // @ 伊勢型 改
    {
        equipment: 290,
        ship: {
            isID: BB_IseClassRemodel
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        }
    },

    // @ 伊勢型 改二
    {
        equipment: 290,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------

    // + 对空電探
    // @ 伊勢型 改+
    {
        list: [
            290,
            'AARadar',
        ],
        equipments: {
            hasID: [290],
            hasAARadar: true,
        },
        ship: {
            isID: BB_IseClassRemodelAll
        },
        bonus: {
            aa: 2,
            evasion: 3,
        }
    },

]
