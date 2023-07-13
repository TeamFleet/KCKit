/**
 * @module
 * 装备额外属性收益
 *
 * 505. 25mm対空機銃増備
 *      https://wikiwiki.jp/kancolle/25mm%E5%AF%BE%E7%A9%BA%E6%A9%9F%E9%8A%83%E5%A2%97%E5%82%99
 *
 */

require('../../../../typedef');

const {
    矢矧改二乙,

    時雨改三,

    白露改二,
    雪風改二,

    潮改二,
    Верный,
    初霜改二,
    霞改二,
    霞改二乙,
    磯風乙改,
    浜風乙改,
    朝霜改二,

    村雨改二,
    夕立改二,
    丹陽,
} = require('../../ship-ids');
const {
    Destroyers,
    Escorts,
    LightCruisers,
    HeavyCruisers,
    AviationCruisers,
} = require('../../../types/ships');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 505,
        ship: {
            isID: [時雨改三],
        },
        bonus: {
            fire: 3,
            aa: 5,
            evasion: 6,
        },
    },
    {
        equipment: 505,
        ship: {
            isID: [白露改二, 雪風改二],
        },
        bonus: {
            fire: 2,
            aa: 4,
            evasion: 5,
        },
    },
    {
        equipment: 505,
        ship: {
            isID: [
                潮改二,
                Верный,
                初霜改二,
                霞改二,
                霞改二乙,
                磯風乙改,
                浜風乙改,
                朝霜改二,
            ],
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 3,
        },
    },
    {
        equipment: 505,
        ship: {
            isID: [村雨改二, 夕立改二, 丹陽],
        },
        bonus: {
            fire: 1,
            aa: 4,
            evasion: 4,
        },
    },
    {
        equipment: 505,
        ship: {
            isID: [矢矧改二乙],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 5,
        },
    },

    {
        equipment: 505,
        ship: {
            isType: Destroyers,
            isNotID: [
                時雨改三,

                白露改二,
                雪風改二,

                潮改二,
                Верный,
                初霜改二,
                霞改二,
                霞改二乙,
                磯風乙改,
                浜風乙改,
                朝霜改二,

                村雨改二,
                夕立改二,
                丹陽,
            ],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2,
        },
    },
    {
        equipment: 505,
        ship: {
            isType: Escorts,
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 505,
        ship: {
            isType: LightCruisers,
            isNotID: [矢矧改二乙],
        },
        bonus: {
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 505,
        ship: {
            isType: [...HeavyCruisers, ...AviationCruisers],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    },
];
