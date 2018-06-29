/**
 * 装备额外属性收益 - 35.6cm三連装砲改(ダズル迷彩仕様)
 * 
 * @module
 */

module.exports = [

    // @ 金剛改二
    {
        equipment: 289,
        ship: {
            isID: [149]
        },
        bonus: {
            fire: 2,
            aa: 1,
        }
    },

    // @ 榛名改二
    {
        equipment: 289,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        }
    },

    // @ 比叡改二 / 霧島改二
    {
        equipment: 289,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1,
        }
    },

    // ------------------------------------------------------------------------

    // @ 金剛型 改二
    {
        list: [
            289,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [289],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [
                149, // 金剛改二
                151, // 榛名改二
            ]
        },
        bonus: {
            fire: 2,
            evasion: 2,
        }
    },

]
