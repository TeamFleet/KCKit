/**
 * @module
 * 装备额外属性收益
 *
 * 411. 42号対空電探改二
 *      https://wikiwiki.jp/kancolle/42%E5%8F%B7%E5%AF%BE%E7%A9%BA%E9%9B%BB%E6%8E%A2%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const {
    伊勢改二,
    日向改二,
    扶桑改二,
    山城改二,
    長門改二,
    陸奥改二,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
} = require('../../ship-ids');
const {
    AviationCruisers,
    HeavyCruisers,
    TrainingCruisers,
    LightCruisersNoCT,
    Destroyers,
} = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 411,
        ship: {
            isID: [榛名改二乙],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 4,
            },
            1: {
                fire: 4,
                aa: 6,
                evasion: 3,
            },
            4: {
                fire: 5,
                aa: 7,
                evasion: 3,
            },
        },
    },
    {
        equipment: 411,
        ship: {
            isID: [扶桑改二, 山城改二, 榛名改二, 榛名改二丙],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 4,
            },
            4: {
                fire: 4,
                aa: 5,
            },
            10: {
                fire: 5,
                aa: 6,
            },
        },
    },
    {
        equipment: 411,
        ship: {
            isID: [伊勢改二, 日向改二, 長門改二, 陸奥改二],
        },
        bonusImprove: {
            0: {
                fire: 2,
                aa: 2,
            },
            4: {
                fire: 3,
                aa: 3,
            },
            10: {
                fire: 4,
                aa: 4,
            },
        },
    },

    {
        equipment: 411,
        ship: {
            isType: [...AviationCruisers, ...HeavyCruisers],
        },
        bonus: {
            evasion: -5,
        },
    },

    {
        equipment: 411,
        ship: {
            isType: [...TrainingCruisers],
        },
        bonus: {
            evasion: -6,
        },
    },

    {
        equipment: 411,
        ship: {
            isType: [...LightCruisersNoCT],
        },
        bonus: {
            evasion: -7,
        },
    },

    {
        equipment: 411,
        ship: {
            isType: [...Destroyers],
        },
        bonus: {
            evasion: -9,
        },
    },
];
