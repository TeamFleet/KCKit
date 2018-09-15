/**
 * 装备额外属性收益 - 12cm単装砲改二
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/12cm%E5%8D%98%E8%A3%85%E7%A0%B2%E6%94%B9%E4%BA%8C

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

    // + 对水上電探
    {
        list: [
            293,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [293],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [
                92, // 占守型
                94, // 択捉型
            ],
        },
        bonus: {
            fire: 2,
            evasion: 3,
            asw: 1,
        }
    },

    // + 对水上電探
    {
        list: [
            293,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [293],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [
                84, // 神風型
                12, // 睦月型
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 1,
            evasion: 3,
        }
    },

    // + 53cm連装魚雷
    {
        list: [
            293,
            174,
        ],
        equipments: [
            {
                isID: 293,
            },
            {
                isID: 174,
            },
        ],
        ship: {
            isClass: [
                84, // 神風型
                12, // 睦月型
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 4,
        }
    },

    // + 53cm連装魚雷 + 53cm連装魚雷
    {
        list: [
            293,
            174,
            174,
        ],
        equipments: [
            {
                isID: 293,
            },
            {
                isID: 174,
            },
            {
                isID: 174,
            }
        ],
        ship: {
            isClass: [
                84, // 神風型
                12, // 睦月型
            ],
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        }
    },
]
