/**
 * @module
 * 装备额外属性收益
 * 104. **35.6cm連装砲(ダズル迷彩)**
 */

module.exports = [
    
    // @ 比叡改二 / 霧島改二
    {
        equipment: 104,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1,
        }
    },
    
    {
        equipment: 104,
        ship: {
            isID: [
                149, // 金剛改二
                591, // 金剛改二丙
            ]
        },
        bonus: {
            fire: 2,
        }
    },
    
    // @ 榛名改二
    {
        equipment: 104,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------
    
]
