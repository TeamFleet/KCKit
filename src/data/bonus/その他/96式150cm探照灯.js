/**
 * 装备额外属性收益 - 96式150cm探照灯
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/96%E5%BC%8F150cm%E6%8E%A2%E7%85%A7%E7%81%AF

module.exports = [

    {
        equipment: 140,
        ship: {
            isID: [
                86, // 比叡
                210, // 比叡改
                150, // 比叡改二
                85, // 霧島
                212, // 霧島改
                152, // 霧島改二
            ],
        },
        bonusCount: {
            1: {
                fire: 3,
                evasion: -2,
            }
        }
    },

]
