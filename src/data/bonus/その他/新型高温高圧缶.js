/**
 * @module
 * 装备额外属性收益
 *
 *  87. 新型高温高圧缶
 *      https://wikiwiki.jp/kancolle/%E6%96%B0%E5%9E%8B%E9%AB%98%E6%B8%A9%E9%AB%98%E5%9C%A7%E7%BC%B6
 *
 */

require('../../../../typedef');

const { DD_Yuugumo, DD_Akizuki, DD_Matsu } = require('../../ship-classes');
const {
    金剛改二丙,
    比叡改二丙,
    榛名改二乙,
    榛名改二丙,

    時雨改三,
    天津風改,
    天津風改二,
    島風改,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 87,
        ship: {
            isID: [金剛改二丙, 比叡改二丙, 榛名改二乙, 榛名改二丙],
        },
        bonusImprove: {
            0: {
                torpedo: 1,
                evasion: 2,
            },
            6: {
                torpedo: 1,
                evasion: 3,
            },
            8: {
                torpedo: 2,
                evasion: 3,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 3,
            },
        },
    },

    {
        equipment: 87,
        ship: {
            isID: [天津風改二],
        },
        bonusImprove: {
            0: {
                fire: 1,
                torpedo: 1,
                evasion: 1,
                hit: 1,
            },
            7: {
                fire: 1,
                torpedo: 1,
                aa: 1,
                evasion: 2,
                hit: 1,
            },
            8: {
                fire: 1,
                torpedo: 2,
                aa: 1,
                evasion: 2,
                hit: 1,
            },
            10: {
                fire: 2,
                torpedo: 2,
                aa: 2,
                evasion: 2,
                hit: 2,
            },
        },
    },

    {
        equipment: 87,
        ship: {
            isID: [時雨改三, 天津風改, 島風改],
        },
        bonusImprove: {
            7: {
                torpedo: 1,
                evasion: 1,
            },
            8: {
                fire: 1,
                torpedo: 1,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 1,
                evasion: 2,
                hit: 1,
            },
        },
    },

    {
        equipment: 87,
        ship: {
            isClass: [DD_Yuugumo, DD_Akizuki, DD_Matsu],
        },
        bonusImprove: {
            7: {
                evasion: 1,
            },
            8: {
                torpedo: 1,
                evasion: 1,
            },
            10: {
                torpedo: 1,
                evasion: 2,
                hit: 1,
            },
        },
    },
];
