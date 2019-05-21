/**
 * @module
 * 装备额外属性收益
 * 144. **天山一二型(村田隊)**
 */

// https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%28%E6%9D%91%E7%94%B0%E9%9A%8A%29

module.exports = [
    {
        equipment: 144,
        ship: {
            isID: [157] // 龍驤改二
        },
        bonusCount: {
            1: {
                fire: 1
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [
                277, // 赤城改
                594, // 赤城改二
                599 // 赤城改二戊
            ]
        },
        bonusCount: {
            1: {
                fire: 3
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [278] // 加賀改
        },
        bonusCount: {
            1: {
                fire: 2
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [110, 288] // 翔鶴 / 翔鶴改
        },
        bonusCount: {
            1: {
                fire: 2
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [461, 466] // 翔鶴改二 / 翔鶴改二甲
        },
        bonusCount: {
            1: {
                fire: 4
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [111, 112] // 瑞鶴 / 瑞鶴改
        },
        bonusCount: {
            1: {
                fire: 1
            }
        }
    },

    {
        equipment: 144,
        ship: {
            isID: [462, 467] // 瑞鶴改二 / 瑞鶴改二甲
        },
        bonusCount: {
            1: {
                fire: 2
            }
        }
    }
];
