/**
 * 装备额外属性收益 - 12.7cm連装砲A型改三(戦時改修)+高射装置
 * 
 * @module
 */

const { DD_Tokugata, DD_Hatsuharu } = require('../../ship-classes')

module.exports = [

    {
        equipment: 295,
        ship: {
            isClass: DD_Tokugata,
        },
        bonus: {
            fire: 2,
            aa: 2,
        }
    },

    {
        equipment: 295,
        ship: {
            isClass: [DD_Hatsuharu],
        },
        bonus: {
            fire: 2,
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [
            295,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [295],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: DD_Tokugata,
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 2,
        }
    },

    // + 对空電探
    {
        list: [
            295,
            'AARadar',
        ],
        equipments: {
            hasID: [295],
            hasAARadar: true,
        },
        ship: {
            isClass: DD_Tokugata,
        },
        bonus: {
            aa: 6,
        }
    },

    // + 61cm三連装(酸素)魚雷後期型
    {
        list: [
            295,
            285,
        ],
        equipments: [
            {
                isID: 295,
            },
            {
                isID: 285,
            }
        ],
        ship: {
            isClass: DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 4,
        }
    },

    // + 61cm三連装(酸素)魚雷後期型 x2
    {
        list: [
            295,
            285,
            285,
        ],
        equipments: [
            {
                isID: 295,
            },
            {
                isID: 285,
            },
            {
                isID: 285,
            }
        ],
        ship: {
            isClass: DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        }
    },

]
