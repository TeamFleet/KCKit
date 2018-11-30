/**
 * 装备额外属性收益 - 12.7cm連装砲A型改二
 * 
 * @module
 */

const { group_DD_Tokugata } = require('../../ship-classes')

module.exports = [

    {
        equipment: 294,
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [
            294,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [294],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 3,
            torpedo: 1,
            evasion: 2,
        }
    },

    // + 61cm三連装(酸素)魚雷
    {
        list: [
            294,
            125,
        ],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 125,
            }
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        }
    },

    // + 61cm三連装(酸素)魚雷 x2
    // @ 吹雪型
    {
        list: [
            294,
            125,
            125,
        ],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 125,
            },
            {
                isID: 125,
            }
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        }
    },

    // + 61cm三連装(酸素)魚雷後期型
    {
        list: [
            294,
            285,
        ],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 285,
            }
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 4,
        }
    },

    // + 61cm三連装(酸素)魚雷後期型 x2
    // @ 吹雪型
    {
        list: [
            294,
            285,
            285,
        ],
        equipments: [
            {
                isID: 294,
            },
            {
                isID: 285,
            },
            {
                isID: 285,
            }
        ],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        }
    },

]
