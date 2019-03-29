/**
 * @module
 * 装备额外属性收益
 * 319. **彗星一二型(六三四空/三号爆弾搭載機)**
 */

// https://wikiwiki.jp/kancolle/%E5%BD%97%E6%98%9F%E4%B8%80%E4%BA%8C%E5%9E%8B%28%E5%85%AD%E4%B8%89%E5%9B%9B%E7%A9%BA%EF%BC%8F%E4%B8%89%E5%8F%B7%E7%88%86%E5%BC%BE%E6%90%AD%E8%BC%89%E6%A9%9F%29

const {
    BB_IseClass2ndRemodel,
} = require('../../ships')

module.exports = [

    {
        equipment: 319,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 7,
            aa: 3,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------

]
