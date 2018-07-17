/**
 * 装备额外属性收益 - 二式艦上偵察機
 * 
 * @module
 */

const {
    BB_IseClass2ndRemodel,
} = require('../../ships')

module.exports = [

    // @ 伊勢型 改二
    {
        equipment: 61,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
            armor: 1,
            evasion: 2,
            range: '1',
        }
    },

    // ------------------------------------------------------------------------

]
