/**
 * @module
 * 装备额外属性收益
 * 99. **九九式艦爆(江草隊)**
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B9%9D%E5%BC%8F%E8%89%A6%E7%88%86%28%E6%B1%9F%E8%8D%89%E9%9A%8A%29

const {
    Souryuu, Hiryuu
} = require('../../ship-series')

module.exports = [

    {
        equipment: 99,
        ship: {
            isID: Souryuu,
        },
        bonusCount: {
            1: {
                fire: 4,
            },
        }
    },

    {
        equipment: 99,
        ship: {
            isID: Hiryuu,
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        }
    },

]
