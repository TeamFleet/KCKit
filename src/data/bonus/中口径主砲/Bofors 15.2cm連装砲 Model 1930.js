/**
 * 装备额外属性收益 - Bofors 15.2cm連装砲 Model 1930
 * 
 * @module
 */

const { CL_Kuma, CL_Nagara, CL_Sendai, CL_Agano, CLT_Kuma } = require('../../ship-classes')

module.exports = [

    {
        equipment: 303,
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
            aa: 1,
        }
    },

    // ------------------------------------------------------------------------

]
