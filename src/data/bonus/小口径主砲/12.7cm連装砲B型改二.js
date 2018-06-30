/**
 * 装备额外属性收益 - 12.7cm連装砲A型改二
 * 
 * @module
 */

const {
    DD_AyanamiClassRemodelAll,
    DD_AkatsukiClassRemodelAll,
    DD_HatsuharuClassRemodelAll,
} = require('../ships')

module.exports = [

    {
        equipment: 63,
        ship: {
            isID: [
                242, // 白露改
                498, // 村雨改二
            ]
        },
        bonus: {
            evasion: 1,
        }
    },

    {
        equipment: 63,
        ship: {
            isID: [
                145, // 時雨改二
            ]
        },
        bonus: {
            fire: 1,
        }
    },

    {
        equipment: 63,
        ship: {
            isID: [
                144, // 夕立改二
            ]
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            aa: 1,
            evasion: 2,
        }
    },

    {
        equipment: 63,
        ship: {
            isID: [
                469, // 江風改二
            ]
        },
        bonus: {
            evasion: 2,
        }
    },

    // 綾波型改 / 暁型改 / 初春型改
    {
        equipment: 63,
        ship: {
            isID: DD_AyanamiClassRemodelAll
                .concat(DD_AkatsukiClassRemodelAll)
                .concat(DD_HatsuharuClassRemodelAll)
        },
        bonus: {
            aa: 1,
        }
    },

    // ------------------------------------------------------------------------

]
