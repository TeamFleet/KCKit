/**
 * @module
 * 装备额外属性收益
 *
 * 421. SB2C-5
 *      https://wikiwiki.jp/kancolle/SB2C-5
 *
 */

require('../../../../typedef');
const {
    CVB_Lexington,
    CV_Lexington,
    CV_Essex,
    CV_Yorktown,
    CV_Casablanca,
    group_CV_Navy_RN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 421,
        ship: {
            isClass: CV_Essex,
        },
        bonusImprove: {
            0: {
                fire: 3,
            },
            5: {
                fire: 4,
            },
        },
    },
    {
        equipment: 421,
        ship: {
            isClass: [CVB_Lexington, CV_Lexington, CV_Yorktown],
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            5: {
                fire: 3,
            },
        },
    },
    {
        equipment: 421,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            5: {
                fire: 2,
            },
        },
    },
    {
        equipment: 421,
        ship: {
            isClass: [CV_Casablanca],
        },
        bonusImprove: {
            0: {
                armor: -2,
                evasion: -1,
            },
            5: {
                fire: 1,
                armor: -2,
                evasion: -1,
            },
        },
    },
    {
        equipment: 421,
        ship: {
            isType: [9],
            isNotClass: [CV_Casablanca],
        },
        bonus: {
            fire: -2,
            armor: -2,
            evasion: -1,
        },
    },
];
