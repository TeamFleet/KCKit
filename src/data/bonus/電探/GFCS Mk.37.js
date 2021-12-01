/**
 * @module
 * 装备额外属性收益
 *
 * 307. GFCS Mk.37
 *      https://wikiwiki.jp/kancolle/GFCS%20Mk.37
 *
 */

require('../../../../typedef');

const { group_Navy_USN, group_SS_Navy_USN } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ US Navy
    {
        equipment: 307,
        ship: {
            isClass: group_Navy_USN.filter(
                (cid) => !group_SS_Navy_USN.includes(cid)
            ),
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },

    // ------------------------------------------------------------------------
];
