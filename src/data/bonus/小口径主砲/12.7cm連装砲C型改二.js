/**
 * 装备额外属性收益 - 12.7cm連装砲C型改二
 * 
 * @module
 */

const {
    DD_KagerouClass2ndRemodel,
} = require('../ships')

module.exports = [

    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 1,
            },
            2: {
                fire: 3,
            }
        }
    },

    // ------------------------------------------------------------------------

]
