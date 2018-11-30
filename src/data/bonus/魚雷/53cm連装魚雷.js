/**
 * 装备额外属性收益 - 53cm連装魚雷
 * 
 * @module
 */

const {
    DD_Kamikaze,
} = require('../../ship-classes')

module.exports = [
    
    {
        equipment: 174,
        ship: {
            isClass: [DD_Kamikaze]
        },
        bonus: {
            torpedo: 1,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------

]
