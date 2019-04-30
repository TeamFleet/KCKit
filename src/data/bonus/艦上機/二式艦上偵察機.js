
/**
 * 装备额外属性收益
 * 61. **二式艦上偵察機**
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/%E4%BA%8C%E5%BC%8F%E8%89%A6%E4%B8%8A%E5%81%B5%E5%AF%9F%E6%A9%9F

const { Carriers } = require('../../../types/ships')

module.exports = [

    {
        equipment: 61,
        ship: {
            isID: [553] // 伊勢改二
        },
        bonusImprove: {
            0: {
                fire: 3,
                evasion: 2,
                armor: 1,
                range: '1',
            },
            2: {
                fire: 3,
                evasion: 2,
                armor: 1,
                los: 1,
                range: '1',
            },
            4: {
                fire: 4,
                evasion: 2,
                armor: 1,
                los: 1,
                range: '1',
            },
            6: {
                fire: 4,
                evasion: 2,
                armor: 1,
                los: 2,
                range: '1',
            },
            10: {
                fire: 5,
                evasion: 2,
                armor: 1,
                los: 3,
                range: '1',
            },
        }
    },

    {
        equipment: 61,
        ship: {
            isID: [554] // 日向改二
        },
        bonusImprove: {
            0: {
                fire: 3,
                evasion: 3,
                armor: 3,
                range: '1',
            },
            2: {
                fire: 3,
                evasion: 3,
                armor: 3,
                los: 1,
                range: '1',
            },
            4: {
                fire: 4,
                evasion: 3,
                armor: 3,
                los: 1,
                range: '1',
            },
            6: {
                fire: 4,
                evasion: 3,
                armor: 3,
                los: 2,
                range: '1',
            },
            10: {
                fire: 5,
                evasion: 3,
                armor: 3,
                los: 3,
                range: '1',
            },
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
            4: {
                fire: 1,
                los: 1,
            },
            76: {
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
            4: {
                fire: 2,
                los: 2,
            },
            6: {
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
            0: {
                range: '1',
            },
            1: {
                fire: 3,
                los: 3,
                range: '1',
            },
            2: {
                fire: 3,
                los: 4,
                range: '1',
            },
            4: {
                fire: 4,
                los: 4,
                range: '1',
            },
            6: {
                fire: 4,
                los: 5,
                range: '1',
            },
            8: {
                fire: 5,
                los: 6,
                range: '1',
            },
            10: {
                fire: 6,
                los: 7,
                range: '1',
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
            0: {
                range: '1',
            },
            1: {
                fire: 2,
                los: 2,
                range: '1',
            },
            2: {
                fire: 2,
                los: 3,
                range: '1',
            },
            4: {
                fire: 3,
                los: 3,
                range: '1',
            },
            6: {
                fire: 3,
                los: 4,
                range: '1',
            },
            10: {
                fire: 4,
                los: 5,
                range: '1',
            }
        }
    },

    // ------------------------------------------------------------------------

]
