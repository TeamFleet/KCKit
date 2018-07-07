/**
 * 装备额外属性收益 - 61cm四連装(酸素)魚雷後期型
 * 
 * @module
 */

const {
    DD_ShiratsuyuClass2ndRemodel,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
} = require('../ships')

const DD2nd_Shiratsuyu_Asashio_Yuugumo = DD_ShiratsuyuClass2ndRemodel.concat(
    DD_AsashioClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
)

module.exports = [

    // @ 陽炎型 改二
    {
        equipment: 286,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            5: {
                torpedo: 3,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 3,
                evasion: 1,
            }
        }
    },

    // @ 白露型 改二 / 朝潮型 改二 / 夕雲型 改二
    {
        equipment: 286,
        ship: {
            isID: DD2nd_Shiratsuyu_Asashio_Yuugumo
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1,
            }
        }
    },

    // ------------------------------------------------------------------------

]
