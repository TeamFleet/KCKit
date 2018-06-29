/**
 * 装备额外属性收益 - 彗星二二型(六三四空/熟練)
 * 
 * @module
 */

const {
    BB_IseClass2ndRemodel,
} = require('../ships')

module.exports = [

    // @ 伊勢型 改二
    {
        equipment: 292,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 8,
            aa: 1,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------

]
