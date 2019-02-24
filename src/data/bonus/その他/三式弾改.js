/**
 * @module
 * 装备额外属性收益
 * 317. **三式弾改**
 */

// https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E5%BC%BE%E6%94%B9

const {
    BB_NagatoClass2ndRemodel,
} = require('../../ships')

module.exports = [

    {
        equipment: 317,
        ship: {
            isID: [
                78, // 金剛
                209, // 金剛改
                86, // 比叡
                210, // 比叡改
                79, // 榛名
                211, // 榛名改
                85, // 霧島
                212, // 霧島改
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
        }
    },

    {
        equipment: 317,
        ship: {
            isID: [
                149, // 金剛改二
            ],
        },
        bonus: {
            fire: 3,
            aa: 3,
        }
    },

    {
        equipment: 317,
        ship: {
            isID: [
                150, // 比叡改二
            ],
        },
        bonus: {
            fire: 2,
            aa: 2,
        }
    },

    {
        equipment: 317,
        ship: {
            isID: [
                151, // 榛名改二
            ],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        }
    },

    {
        equipment: 317,
        ship: {
            isID: [
                152, // 霧島改二
            ],
        },
        bonus: {
            fire: 3,
            aa: 2,
        }
    },

    {
        equipment: 317,
        ship: {
            isID: BB_NagatoClass2ndRemodel,
        },
        bonus: {
            fire: 1,
            aa: 2,
        }
    },

]
