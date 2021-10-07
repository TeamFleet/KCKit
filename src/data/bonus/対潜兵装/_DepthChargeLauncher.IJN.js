/**
 * @module
 * 装备额外属性收益
 *
 *  44. 九四式爆雷投射機
 *      https://wikiwiki.jp/kancolle/%E4%B9%9D%E5%9B%9B%E5%BC%8F%E7%88%86%E9%9B%B7%E6%8A%95%E5%B0%84%E6%A9%9F
 *
 *  45. 三式爆雷投射機
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E7%88%86%E9%9B%B7%E6%8A%95%E5%B0%84%E6%A9%9F
 *
 * 287. 三式爆雷投射機 集中配備
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E7%88%86%E9%9B%B7%E6%8A%95%E5%B0%84%E6%A9%9F%20%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99
 *
 * 288. 試製15cm9連装対潜噴進砲
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD15cm9%E9%80%A3%E8%A3%85%E5%AF%BE%E6%BD%9C%E5%99%B4%E9%80%B2%E7%A0%B2
 *
 */

require('../../../../typedef');

const { CT_Katori } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        list: ['DepthCharge'],
        equipments: {
            hasOneOf: [44, 45, 287, 288].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [CT_Katori],
        },
        bonus: {
            asw: 3,
            evasion: 2,
        },
        passEquippableCheck: true,
    },
];
