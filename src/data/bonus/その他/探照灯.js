/**
 * 装备额外属性收益 - 探照灯
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/%E6%8E%A2%E7%85%A7%E7%81%AF

module.exports = [

    {
        equipment: 74,
        ship: {
            isID: [
                132 , // 秋雲
                301 , // 秋雲改
            ],
        },
        bonus: {
            fire: 1,
        }
    },

    {
        equipment: 74,
        ship: {
            isID: [
                20 , // 雪風
                228 , // 雪風改
            ],
        },
        bonus: {
            aa: 1,
        }
    },

    {
        equipment: 74,
        ship: {
            isID: [
                86 , // 比叡
                210 , // 比叡改
                150 , // 比叡改二
                85 , // 霧島
                212 , // 霧島改
                152 , // 霧島改二
                69 , // 鳥海
                272 , // 鳥海改
                427 , // 鳥海改二
                34 , // 暁
                234 , // 暁改
                437 , // 暁改二
            ],
        },
        bonus: {
            fire: 2,
            evasion: -1,
        }
    },

    {
        equipment: 74,
        ship: {
            isID: [
                55 , // 神通
                223 , // 神通改
                159 , // 神通改二
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 2,
            evasion: -1,
        }
    },

]
