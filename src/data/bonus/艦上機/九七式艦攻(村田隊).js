/**
 * @module
 * 装备额外属性收益
 * 143. **九七式艦攻(村田隊)**
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E5%8F%8B%E6%B0%B8%E9%9A%8A%29

const { Shoukaku, Zuikaku } = require('../../ship-series');

module.exports = [
    {
        equipment: 143,
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
        equipment: 143,
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
        equipment: 143,
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
        equipment: 143,
        ship: {
            isID: Shoukaku
        },
        bonusCount: {
            1: {
                fire: 2
            }
        }
    },

    {
        equipment: 143,
        ship: {
            isID: Zuikaku
        },
        bonusCount: {
            1: {
                fire: 1
            }
        }
    }
];
