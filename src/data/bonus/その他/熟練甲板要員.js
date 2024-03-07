/**
 * @module
 * 装备额外属性收益
 *
 * 478. 熟練甲板要員＋航空整備員
 *      https://wikiwiki.jp/kancolle/%E7%86%9F%E7%B7%B4%E7%94%B2%E6%9D%BF%E8%A6%81%E5%93%A1%EF%BC%8B%E8%88%AA%E7%A9%BA%E6%95%B4%E5%82%99%E5%93%A1
 *
 */

require('../../../../typedef');
const { Carriers } = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 熟練甲板要員_航空整備員 = [
    {
        equipment: 478,
        ship: {
            isType: Carriers,
        },
        bonusImprove: {
            maxCount: 1,
            1: {
                fire: 1,
            },
            2: {
                fire: 1,
                hit: 1,
            },
            3: {
                fire: 1,
                evasion: 1,
                hit: 1,
            },
            4: {
                fire: 1,
                bomb: 1,
                evasion: 1,
                hit: 1,
            },
            5: {
                fire: 1,
                torpedo: 1,
                bomb: 1,
                evasion: 1,
                hit: 1,
            },
            6: {
                fire: 1,
                torpedo: 1,
                bomb: 1,
                aa: 1,
                evasion: 1,
                hit: 1,
            },
            7: {
                fire: 2,
                torpedo: 1,
                bomb: 1,
                aa: 1,
                evasion: 1,
                hit: 1,
            },
            8: {
                fire: 2,
                torpedo: 1,
                bomb: 1,
                aa: 1,
                evasion: 1,
                hit: 2,
            },
            9: {
                fire: 2,
                torpedo: 1,
                bomb: 1,
                aa: 1,
                evasion: 2,
                hit: 2,
            },
            10: {
                fire: 3,
                torpedo: 1,
                bomb: 1,
                aa: 1,
                evasion: 2,
                hit: 2,
            },
        },
    },
];

// ============================================================================

module.exports = [...熟練甲板要員_航空整備員];
