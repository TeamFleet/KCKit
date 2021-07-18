/**
 * @module
 * 装备额外属性收益
 *
 * 277. FM-2
 *      https://wikiwiki.jp/kancolle/FM-2
 *
 */

require('../../../../typedef');
const {
    CV_Casablanca,
    CV_ArkRoyal,
    group_CV_Navy_USN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 277,
        ship: {
            isClass: [CV_Casablanca],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 277,
        ship: {
            isClass: [...group_CV_Navy_USN, CV_ArkRoyal].filter(
                (cid) => cid !== CV_Casablanca
            ),
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
];
