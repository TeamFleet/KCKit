/**
 * 装备额外属性收益 - 瑞雲(六三四空/熟練)
 * 
 * @module
 */

const {
    BB_IseClassRemodel, BB_IseClass2ndRemodel,
    BB_FusouClass2ndRemodel,
} = require('../../ships')

module.exports = [
    
    // @ 扶桑型 改二
    {
        equipment: 237,
        ship: {
            isID: BB_FusouClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    
    // @ 伊勢型 改
    {
        equipment: 237,
        ship: {
            isID: BB_IseClassRemodel
        },
        bonus: {
            fire: 3,
        }
    },
    
    // @ 伊勢型 改二
    {
        equipment: 237,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 4,
        }
    },

    // ------------------------------------------------------------------------

]
