/**
 * 装备额外属性收益 - 12cm単装砲改二
 * 
 * @module
 */

module.exports = [

    {
        equipment: 293,
        ship: {
            isClass: [
                92, // 占守型
                94, // 択捉型
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        }
    },

    {
        equipment: 293,
        ship: {
            isClass: [
                84, // 神風型
                12, // 睦月型
            ],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 3,
        }
    },

    // ------------------------------------------------------------------------

]
