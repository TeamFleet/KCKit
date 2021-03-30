/**
 * @module
 * 装备额外属性收益
 *
 * 122. 10cm連装高角砲+高射装置
 *      https://wikiwiki.jp/kancolle/10cm%E9%AB%98%E8%A7%92%E7%A0%B2%EF%BC%8B%E9%AB%98%E5%B0%84%E8%A3%85%E7%BD%AE
 *
 */

require('../../../../typedef');
const { 雪風改二 } = require('../../ship-ids');
const { DD_Akizuki } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 122,
        ship: {
            isClass: [DD_Akizuki],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 1,
        },
    },
    {
        equipment: 122,
        ship: {
            isID: [雪風改二],
        },
        bonusImprove: {
            4: {
                fire: 5,
                aa: 3,
                evasion: 2,
            },
        },
    },

    // ========================================================================

    {
        list: [122, 'SurfaceRadar'],
        listStar: [4, undefined],
        equipments: {
            has: {
                id: 122,
                star: 4,
            },
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            fire: 4,
            evasion: 3,
        },
    },
    {
        list: [122, 'AARadar'],
        listStar: [4, undefined],
        equipments: {
            has: {
                id: 122,
                star: 4,
            },
            hasAARadar: true,
        },
        ship: {
            isID: [雪風改二],
        },
        bonus: {
            aa: 4,
            evasion: 3,
        },
    },
];
