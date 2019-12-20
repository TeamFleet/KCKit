/**
 * 装备额外属性收益
 * 308. **5inch単装砲 Mk.30改+GFCS Mk.37**
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/5inch%E5%8D%98%E8%A3%85%E7%A0%B2%20Mk.30%E6%94%B9%EF%BC%8BGFCS%20Mk.37

const { group_DD_Navy_USN, group_CL_Navy_USN } = require('../../ship-classes');

module.exports = [
    // @ 海防艦
    {
        equipment: 308,
        ship: {
            isType: [31]
        },
        bonus: {
            aa: 1,
            evasion: 1
        }
    },

    // @ 駆逐艦
    {
        equipment: 308,
        ship: {
            isType: [1, 19],
            isNotClass: group_DD_Navy_USN
        },
        bonus: {
            fire: 1
        }
    },

    {
        equipment: 308,
        ship: {
            isClass: group_CL_Navy_USN
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1
        }
    },

    {
        equipment: 308,
        ship: {
            isClass: group_DD_Navy_USN
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1
        }
    }

    // ------------------------------------------------------------------------
];
