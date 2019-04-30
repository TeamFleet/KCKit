/**
 * @module
 * 装备额外属性收益
 * 93. **九七式艦攻(友永隊)**
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E5%8F%8B%E6%B0%B8%E9%9A%8A%29

const {
    Souryuu, Hiryuu
} = require('../../ship-series')

module.exports = [

    {
        equipment: 93,
        ship: {
            isID: Souryuu,
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        }
    },

    {
        equipment: 93,
        ship: {
            isID: Hiryuu,
        },
        bonusCount: {
            1: {
                fire: 3,
            },
        }
    },

]
