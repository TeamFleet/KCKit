/**
 * 装备额外属性收益 - 5inch単装砲 Mk.30改+GFCS Mk.37
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/5inch%E5%8D%98%E8%A3%85%E7%A0%B2%20Mk.30%E6%94%B9%EF%BC%8BGFCS%20Mk.37

module.exports = [

    // @ 駆逐艦
    {
        equipment: 308,
        ship: {
            isType: [
                1, 19
            ],
        },
        bonus: {
            fire: 1,
        }
    },

    {
        equipment: 308,
        ship: {
            isClass: [
                112, // John C.Butler型
            ],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------
]
