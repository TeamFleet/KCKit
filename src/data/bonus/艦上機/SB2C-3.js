/**
 * @module
 * 装备额外属性收益
 *
 * 420. SB2C-3
 *      https://wikiwiki.jp/kancolle/SB2C-3
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
        equipment: 420,
        ship: {
            isClass: CV_Essex,
        },
        bonusImprove: {
            0: {
                fire: 2,
            },
            3: {
                fire: 3,
            },
        },
    },
    {
        equipment: 420,
        ship: {
            isClass: [CVB_Lexington, CV_Lexington, CV_Yorktown],
        },
        bonusImprove: {
            0: {
                fire: 1,
            },
            3: {
                fire: 2,
            },
        },
    },
    {
        equipment: 420,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonusImprove: {
            3: {
                fire: 1,
            },
        },
    },
    {
        equipment: 420,
        ship: {
            isClass: [CV_Casablanca],
        },
        bonusImprove: {
            0: {
                fire: -1,
                armor: -2,
                evasion: -1,
            },
            3: {
                armor: -2,
                evasion: -1,
            },
        },
    },
    {
        equipment: 420,
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
