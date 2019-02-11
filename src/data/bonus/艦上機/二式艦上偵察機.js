
/**
 * 装备额外属性收益
 * 61. **二式艦上偵察機**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/%E4%BA%8C%E5%BC%8F%E8%89%A6%E4%B8%8A%E5%81%B5%E5%AF%9F%E6%A9%9F

const {
    BB_IseClass2ndRemodel,
} = require('../../ships')
const { Carriers } = require('../../../types/ships')

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

    // @ CV
    {
        equipment: 61,
        ship: {
            isType: Carriers,
            isNotID: [
                560, // 瑞鳳改二乙
                508, // 鈴谷航改二
                509, // 熊野航改二
                197, // 蒼龍改二
                196, // 飛龍改二
            ]
        },
        bonusImprove: {
            2: {
                los: 1,
            },
            7: {
                fire: 1,
                los: 2,
            },
            10: {
                fire: 2,
                los: 3,
            }
        }
    },
    {
        equipment: 61,
        ship: {
            isID: [
                560, // 瑞鳳改二乙
                508, // 鈴谷航改二
                509, // 熊野航改二
            ]
        },
        bonusImprove: {
            1: {
                fire: 1,
                los: 1,
            },
            2: {
                fire: 1,
                los: 2,
            },
            7: {
                fire: 2,
                los: 3,
            },
            10: {
                fire: 3,
                los: 4,
            }
        }
    },
    {
        equipment: 61,
        ship: {
            isID: [
                197, // 蒼龍改二
            ]
        },
        bonusImprove: {
            1: {
                fire: 3,
                los: 3,
            },
            2: {
                fire: 3,
                los: 4,
            },
            6: {
                fire: 4,
                los: 5,
            },
            9: {
                fire: 5,
                los: 6,
            },
            10: {
                fire: 6,
                los: 7,
            }
        }
    },
    {
        equipment: 61,
        ship: {
            isID: [
                196, // 飛龍改二
            ]
        },
        bonusImprove: {
            1: {
                fire: 2,
                los: 2,
            },
            2: {
                fire: 2,
                los: 3,
            },
            7: {
                fire: 3,
                los: 4,
            },
            10: {
                fire: 4,
                los: 5,
            }
        }
    },

    // ------------------------------------------------------------------------

]
