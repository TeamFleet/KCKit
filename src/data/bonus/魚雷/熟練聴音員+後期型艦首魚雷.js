/**
 * @module
 * 装备额外属性收益
 *
 * 461. 熟練聴音員＋後期型艦首魚雷(4門)
 *      https://wikiwiki.jp/kancolle/%E7%86%9F%E7%B7%B4%E8%81%B4%E9%9F%B3%E5%93%A1%EF%BC%8B%E5%BE%8C%E6%9C%9F%E5%9E%8B%E8%89%A6%E9%A6%96%E9%AD%9A%E9%9B%B7%284%E9%96%80%29
 *
 * 214. 熟練聴音員+後期型艦首魚雷(6門)
 *      https://wikiwiki.jp/kancolle/%E7%86%9F%E7%B7%B4%E8%81%B4%E9%9F%B3%E5%93%A1%EF%BC%8B%E5%BE%8C%E6%9C%9F%E5%9E%8B%E8%89%A6%E9%A6%96%E9%AD%9A%E9%9B%B7%286%E9%96%80%29
 *
 */

require('../../../../typedef');

const { I201, I203, I13, I14, I47, I400, I401 } = require('../../ship-series');
const { Submarines } = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _4門 = [
    {
        equipment: 461,
        ship: {
            isID: [...I201, ...I203],
        },
        bonusImprove: {
            0: {
                torpedo: 3,
                evasion: 3,
            },
            3: {
                torpedo: 4,
                evasion: 3,
            },
            4: {
                torpedo: 5,
                evasion: 4,
            },
            6: {
                torpedo: 6,
                evasion: 4,
                hit: 1,
            },
            8: {
                torpedo: 7,
                evasion: 4,
                hit: 1,
            },
            10: {
                torpedo: 7,
                evasion: 4,
                hit: 2,
            },
            maxCount: 1,
        },
    },
    {
        equipment: 461,
        ship: {
            isID: [...I13, ...I14, ...I47],
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 2,
            },
            4: {
                torpedo: 3,
                evasion: 3,
            },
            6: {
                torpedo: 4,
                evasion: 3,
            },
            8: {
                torpedo: 5,
                evasion: 3,
            },
            10: {
                torpedo: 5,
                evasion: 3,
                hit: 1,
            },
            maxCount: 1,
        },
    },
    {
        equipment: 461,
        ship: {
            isID: [...I400, ...I401],
        },
        bonusImprove: {
            0: {
                torpedo: 1,
                evasion: 4,
            },
            4: {
                torpedo: 2,
                evasion: 4,
            },
            6: {
                torpedo: 3,
                evasion: 4,
            },
            8: {
                torpedo: 4,
                evasion: 4,
            },
            10: {
                torpedo: 4,
                evasion: 4,
                hit: 1,
            },
            maxCount: 1,
        },
    },

    // 相互シナジーボーナス

    {
        list: [
            {
                id: 461,
                star: 4,
            },
            {
                id: 458, // 後期型電探＆逆探＋シュノーケル装備
                star: 2,
            },
        ],
        ship: {
            isType: [...Submarines],
        },
        equipments: [
            {
                isID: 461,
                improvement: 4,
            },
            {
                isID: 458,
                improvement: 2,
            },
        ],
        bonus: {
            torpedo: 7,
            hit: 5,
        },
    },
];

// ============================================================================

module.exports = [..._4門];
