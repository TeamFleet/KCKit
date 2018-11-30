/**
 * 装备额外属性收益 - S9 Osprey
 * 
 * @module
 */

const {
    CL_Kuma, CL_Nagara, CL_Sendai, CL_Agano, CLT_Kuma,
    CL_Gotland, CLV_Gotland,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 304,
        ship: {
            isClass: [
                CL_Kuma,
                CL_Nagara,
                CL_Sendai,
                CL_Agano,
                CLT_Kuma
            ],
        },
        bonus: {
            fire: 1,
            evasion: 1,
            asw: 1,
        }
    },

    {
        equipment: 304,
        ship: {
            isClass: [
                CL_Gotland,
                CLV_Gotland,
            ],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            asw: 2,
        }
    },

    // ------------------------------------------------------------------------

]
