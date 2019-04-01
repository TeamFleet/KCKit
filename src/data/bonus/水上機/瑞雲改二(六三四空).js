/**
 * @module
 * 装备额外属性收益
 * 322. **瑞雲改二(六三四空)**
 */

// https://wikiwiki.jp/kancolle/%E7%91%9E%E9%9B%B2%E6%94%B9%E4%BA%8C%28%E5%85%AD%E4%B8%89%E5%9B%9B%E7%A9%BA%29

const {
    BB_IseClass2ndRemodel,
} = require('../../ships')

module.exports = [

    {
        equipment: 322,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 5,
            aa: 2,
            asw: 1,
            evasion: 2
        }
    },

    // ------------------------------------------------------------------------

]
