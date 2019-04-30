/**
 * @module
 * 装备额外属性收益
 * 94. **天山一二型(友永隊)**
 */

// https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%E4%B8%80%E4%BA%8C%E5%9E%8B%28%E5%8F%8B%E6%B0%B8%E9%9A%8A%29

const {
    Souryuu, Hiryuu
} = require('../../ship-series')

module.exports = [

    {
        equipment: 94,
        ship: {
            isID: Souryuu,
        },
        bonusCount: {
            1: {
                fire: 3,
            },
        }
    },

    {
        equipment: 94,
        ship: {
            isID: Hiryuu,
        },
        bonusCount: {
            1: {
                fire: 7,
            },
        }
    },

]
