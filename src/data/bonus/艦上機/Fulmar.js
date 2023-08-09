/**
 * @module
 * 装备额外属性收益
 *
 * 423. Fulmar(戦闘偵察/熟練)
 *      https://wikiwiki.jp/kancolle/Fulmar%28%E6%88%A6%E9%97%98%E5%81%B5%E5%AF%9F%EF%BC%8F%E7%86%9F%E7%B7%B4%29
 *
 */

require('../../../../typedef');

const { Carriers } = require('../../../types/ships');
const { group_CV_Navy_RN, group_CV_Navy_USN } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 戦闘偵察_熟練 = [
    {
        equipment: 423,
        ship: {
            isClass: [...group_CV_Navy_RN],
        },
        bonus: {
            fire: 4,
            aa: 4,
            los: 4,
            evasion: 4,
        },
    },
    {
        equipment: 423,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            los: 1,
            evasion: 1,
        },
    },
    {
        equipment: 423,
        ship: {
            isType: Carriers.filter((tid) => tid !== 32),
        },
        bonusImprove: {
            maxCount: 1,
            2: {
                los: 1,
            },
            4: {
                fire: 1,
                los: 1,
            },
            6: {
                fire: 1,
                los: 2,
            },
            10: {
                fire: 2,
                los: 3,
            },
        },
    },
];

// ============================================================================

module.exports = [...戦闘偵察_熟練];
