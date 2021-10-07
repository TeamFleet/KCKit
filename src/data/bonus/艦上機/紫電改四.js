/**
 * @module
 * 装备额外属性收益
 *
 * 271. 紫電改四
 *      https://wikiwiki.jp/kancolle/%E7%B4%AB%E9%9B%BB%E6%94%B9%E5%9B%9B
 *
 */

require('../../../../typedef');
const {
    鈴谷航改二,
    熊野航改二,
    龍鳳改二戊,
    龍鳳改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 271,
        ship: {
            isID: [鈴谷航改二, 熊野航改二, 龍鳳改二戊, 龍鳳改二],
        },
        bonusImprove: {
            4: {
                fire: 1,
            },
            6: {
                fire: 1,
                aa: 2,
            },
            8: {
                fire: 1,
                aa: 2,
                evasion: 2,
            },
            10: {
                fire: 2,
                aa: 2,
                evasion: 2,
            },
        },
    },
];
