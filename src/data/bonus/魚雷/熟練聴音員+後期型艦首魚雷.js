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

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const _4門 = [
    {
        equipment: 461,
        ship: {
            isID: [...I201, ...I203],
        },
        bonus: {
            torpedo: 3,
            evasion: 3,
        },
    },
    {
        equipment: 461,
        ship: {
            isID: [...I13, ...I14, ...I47],
        },
        bonus: {
            torpedo: 2,
            evasion: 2,
        },
    },
    {
        equipment: 461,
        ship: {
            isID: [...I400, ...I401],
        },
        bonus: {
            torpedo: 1,
            evasion: 4,
        },
    },
];

// ============================================================================

module.exports = [..._4門];
