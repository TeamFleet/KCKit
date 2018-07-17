/**
 * 装备额外属性收益 - 北方迷彩(＋北方装備)
 * 
 * @module
 */

const {
    CL_KumaClassRemodelAll,
} = require('../../ships')

module.exports = [

    // @ 球磨型 改
    {
        equipment: 268,
        ship: {
            isID: CL_KumaClassRemodelAll
        },
        bonusCount: {
            1: {
                armor: 2,
                evasion: 7,
            }
        }
    },

    // ------------------------------------------------------------------------

]
