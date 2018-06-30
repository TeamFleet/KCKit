/**
 * 装备额外属性收益 - 12cm単装砲改二
 * 
 * @module
 */

module.exports = [

    // @ 海防艦
    {
        equipment: 293,
        ship: {
            isType: [31],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        }
    },

    // @ 神風型 / 睦月型
    {
        equipment: 293,
        ship: {
            isClass: [84, 12],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 3,
        }
    },

    // ------------------------------------------------------------------------

]
