/**
 * @module
 * 装备额外属性收益
 *
 * 511. 21inch艦首魚雷発射管4門(初期型)
 *      https://wikiwiki.jp/kancolle/21inch%E8%89%A6%E9%A6%96%E9%AD%9A%E9%9B%B7%E7%99%BA%E5%B0%84%E7%AE%A14%E9%96%80%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 *
 * 512. 21inch艦首魚雷発射管4門(後期型)
 *      https://wikiwiki.jp/kancolle/21inch%E8%89%A6%E9%A6%96%E9%AD%9A%E9%9B%B7%E7%99%BA%E5%B0%84%E7%AE%A14%E9%96%80%28%E5%BE%8C%E6%9C%9F%E5%9E%8B%29
 *
 */

require('../../../../typedef');

const {
    SS_Gato,
    SS_Salmon,
    // group_SS_Navy_USN,
} = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */

// ============================================================================

/** @type {Array<EquipmentBonus>} */

// ============================================================================

module.exports = [
    // ...初期型,
    // ...後期型,
    {
        list: ['SubmarineTorpedo'],
        equipments: {
            hasOneOf: [511, 512].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [SS_Salmon],
        },
        bonus: { torpedo: 3, evasion: 4 },
    },
    {
        list: ['SubmarineTorpedo'],
        equipments: {
            hasOneOf: [511, 512].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [SS_Gato],
        },
        bonus: { torpedo: 1, evasion: 2 },
    },
];
