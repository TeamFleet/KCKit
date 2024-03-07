/**
 * @module
 * 装备额外属性收益
 *
 * 217. 強風改
 *      https://wikiwiki.jp/kancolle/%E5%BC%B7%E9%A2%A8%E6%94%B9
 *
 * 485. 強風改二
 *      https://wikiwiki.jp/kancolle/%E5%BC%B7%E9%A2%A8%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const transformBonusToImprove = require('../../../utils/transform-bonus-to-improve');

const {
    最上改二,
    最上改二特,
    三隈改,
    三隈改二,
    三隈改二特,

    鈴谷改,
    鈴谷改二,

    熊野改,
    熊野改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 強風改 = [
    {
        equipment: 217,
        ship: {
            isID: [最上改二, 最上改二特],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
        },
    },
    {
        equipment: 217,
        ship: {
            isID: [三隈改二, 三隈改二特],
        },
        bonus: {
            fire: 1,
            aa: 4,
            evasion: 2,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 強風改二 = [
    {
        equipment: 485,
        ship: {
            isID: [最上改二, 最上改二特],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
            hit: 1,
        },
    },
    {
        equipment: 485,
        ship: {
            isID: [三隈改二, 三隈改二特],
        },
        bonus: {
            fire: 1,
            aa: 4,
            evasion: 3,
            hit: 1,
        },
    },
    {
        equipment: 485,
        ship: {
            isID: [三隈改, 鈴谷改, 鈴谷改二, 熊野改, 熊野改二],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 2,
        },
    },
];
transformBonusToImprove(強風改二, {
    3: { fire: 1 },
    5: { fire: 1, aa: 1 },
    7: { fire: 1, aa: 1, evasion: 1 },
    10: { fire: 1, aa: 1, evasion: 1, hit: 1 },
});

// ============================================================================

module.exports = [...強風改, ...強風改二];
