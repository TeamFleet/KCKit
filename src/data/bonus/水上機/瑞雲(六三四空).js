/**
 * 装备额外属性收益 - 瑞雲(六三四空)
 * 
 * @module
 */

const {
    BB_IseClass2ndRemodel,
    BB_IseClassRemodel_PLUS_FusouClass2ndRemodel,
} = require('../../ships')

module.exports = [

    // @ 伊勢型 改 / 扶桑型 改二
    {
        equipment: 79,
        ship: {
            isID: BB_IseClassRemodel_PLUS_FusouClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },

    // @ 伊勢型 改二
    {
        equipment: 79,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
        }
    },

    // ------------------------------------------------------------------------

]
