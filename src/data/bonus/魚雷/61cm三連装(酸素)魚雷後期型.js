/**
 * 装备额外属性收益 - 61cm三連装(酸素)魚雷後期型
 * 
 * @module
 */

const {
    DD_FubukiClass2ndRemodel,
    DD_AyanamiClass2ndRemodel,
    DD_AkatsukiClass2ndRemodel,
    DD_HatsuharuClass2ndRemodel,
} = require('../ships')

const condition1ships = DD_FubukiClass2ndRemodel.concat(
    DD_AyanamiClass2ndRemodel,
    DD_AkatsukiClass2ndRemodel,
    DD_HatsuharuClass2ndRemodel,
)

module.exports = [
    
    // @ 特型駆逐艦 改二 / 初春型 改二
    {
        equipment: 285,
        ship: {
            isID: condition1ships
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
