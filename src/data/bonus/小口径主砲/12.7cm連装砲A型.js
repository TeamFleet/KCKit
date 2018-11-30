/**
 * 装备额外属性收益 - 12.7cm連装砲A型
 * 
 * @module
 */

const { DD_Fubuki, DD_Ayanami, DD_Akatsuki } = require('../../ship-classes')

module.exports = [

    {
        equipment: 297,
        ship: {
            isClass: [DD_Ayanami, DD_Akatsuki],
        },
        bonus: {
            evasion: 1,
        }
    },

    {
        equipment: 297,
        ship: {
            isClass: [DD_Fubuki],
        },
        bonus: {
            evasion: 2,
        }
    },

]
