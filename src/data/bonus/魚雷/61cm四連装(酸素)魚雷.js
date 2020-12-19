/**
 * 装备额外属性收益 - 61cm四連装(酸素)魚雷
 *
 * @module
 */

const { DD_KagerouClass2ndRemodel } = require('../../ships');
const { 竹, 竹改 } = require('../../ship-ids');

module.exports = [
    // @ 陽炎型 改二
    {
        equipment: 15,
        ship: {
            isID: DD_KagerouClass2ndRemodel,
        },
        bonusCount: {
            1: {
                torpedo: 2,
            },
            2: {
                torpedo: 4,
            },
        },
    },

    {
        equipment: 15,
        ship: {
            isID: [竹, 竹改],
        },
        bonusCount: {
            1: {
                torpedo: 5,
                evasion: 1,
            },
        },
    },

    // ------------------------------------------------------------------------
];
