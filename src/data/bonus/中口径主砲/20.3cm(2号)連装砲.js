/**
 * 装备额外属性收益 - 20.3cm(2号)連装砲
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/20.3cm%282%E5%8F%B7%29%E9%80%A3%E8%A3%85%E7%A0%B2

module.exports = [

    {
        equipment: 90,
        ship: {
            isID: [
                264, // 青葉改
                416, // 古鷹改二
                417, // 加古改二
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
        }
    },

    {
        equipment: 90,
        ship: {
            isID: [
                142, // 衣笠改二
            ],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        }
    },

    // ------------------------------------------------------------------------

    {
        list: [
            90,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [90],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [
                264, // 青葉改
                142, // 衣笠改二
                416, // 古鷹改二
                417, // 加古改二
            ]
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 2,
        }
    },

    {
        list: [
            90,
            'AARadar',
        ],
        equipments: {
            hasID: [90],
            hasAARadar: true,
        },
        ship: {
            isID: [
                264, // 青葉改
                142, // 衣笠改二
                416, // 古鷹改二
                417, // 加古改二
            ]
        },
        bonus: {
            aa: 5,
            evasion: 2,
        }
    },

]
