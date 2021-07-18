/**
 * @module
 * 装备额外属性收益
 *
 * 422. FR-1 Fireball
 *      https://wikiwiki.jp/kancolle/FR-1%20Fireball
 *
 */

require('../../../../typedef');
const {
    CV_Essex,
    CV_Casablanca,
    CV_ArkRoyal,
    group_CV_Navy_USN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 422,
        ship: {
            isClass: [CV_Casablanca],
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 3,
        },
    },
    {
        equipment: 422,
        ship: {
            isClass: [CV_Essex],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 422,
        ship: {
            isClass: [...group_CV_Navy_USN, CV_ArkRoyal].filter(
                (cid) => ![CV_Casablanca, CV_Essex].includes(cid)
            ),
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
];
