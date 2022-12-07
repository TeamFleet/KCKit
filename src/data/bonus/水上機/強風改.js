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

const { CAV_MogamiClassSuperRemodel } = require('../../ships');
const {
    三隈改,

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
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 強風改二 = [
    {
        equipment: 485,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
            aa: 5,
            evasion: 3,
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
    {
        list: [
            {
                id: 485,
                star: 3,
            },
        ],
        equipments: [
            {
                isID: 485,
                improvement: 3,
            },
        ],
        ship: {
            canEquip: [51],
        },
        bonus: {
            fire: 1,
        },
    },
];

// ============================================================================

module.exports = [...強風改, ...強風改二];
