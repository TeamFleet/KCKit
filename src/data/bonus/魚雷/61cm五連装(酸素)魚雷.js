/**
 * 装备额外属性收益 - 61cm五連装(酸素)魚雷
 * 
 * @module
 */

const {
    CLT_Kuma,
    DD_Shimakaze,
    DD_Akizuki,
} = require('../../ship-classes')

module.exports = [

    {
        equipment: 58,
        ship: {
            isClass: [
                CLT_Kuma,
                DD_Shimakaze,
                DD_Akizuki,
            ],
        },
        bonus: {
            torpedo: 1,
        }
    },

    // ------------------------------------------------------------------------

]
