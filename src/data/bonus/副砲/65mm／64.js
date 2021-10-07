/**
 * @module
 * 装备额外属性收益
 *
 * 430. 65mm/64 単装速射砲改
 *      https://wikiwiki.jp/kancolle/65mm%EF%BC%8F64%20%E5%8D%98%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%E6%94%B9
 *
 */

require('../../../../typedef');

const {
    BB_ConteDiCavour,

    group_BB_Navy_RM,
    group_CV_Navy_RM,
    group_CA_Navy_RM,
    group_CL_Navy_RM,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 430,
        ship: {
            isClass: [BB_ConteDiCavour],
        },
        bonus: {
            aa: 3,
            evasion: 2,
        },
    },
    {
        equipment: 430,
        ship: {
            isClass: [
                ...group_BB_Navy_RM,
                ...group_CV_Navy_RM,
                ...group_CA_Navy_RM,
                ...group_CL_Navy_RM,
            ].filter((cid) => cid !== BB_ConteDiCavour),
        },
        bonus: {
            aa: 2,
            evasion: 1,
        },
    },
];
