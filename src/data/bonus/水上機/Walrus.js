/**
 * @module
 * 装备额外属性收益
 *
 * 510. Walrus
 *      https://wikiwiki.jp/kancolle/Walrus
 *
 */

require('../../../../typedef');

const {
    BB_Nelson,
    BB_QueenElizabeth,
    group_CL_Navy_RN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 510,
        ship: {
            isClass: [BB_Nelson],
        },
        bonus: {
            fire: 6,
            asw: 3,
            los: 5,
            evasion: 4,
        },
    },
    {
        equipment: 510,
        ship: {
            isClass: [BB_QueenElizabeth, ...group_CL_Navy_RN],
        },
        bonus: {
            fire: 2,
            asw: 3,
            los: 2,
            evasion: 2,
        },
    },
];
