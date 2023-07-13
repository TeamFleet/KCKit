/**
 * @module
 * 装备额外属性收益
 *
 * 289. 35.6cm三連装砲改(ダズル迷彩仕様)
 *      https://wikiwiki.jp/kancolle/35.6cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%28%E3%83%80%E3%82%BA%E3%83%AB%E8%BF%B7%E5%BD%A9%E4%BB%95%E6%A7%98%29
 *
 */

require('../../../../typedef');

const {
    金剛改二,
    金剛改二丙,
    比叡改二,
    比叡改二丙,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    霧島改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 289,
        ship: {
            isID: [金剛改二, 金剛改二丙],
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },

    {
        equipment: 289,
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        },
    },

    {
        equipment: 289,
        ship: {
            isID: [比叡改二, 比叡改二丙, 霧島改二],
        },
        bonus: { fire: 1 },
    },

    // ========================================================================

    {
        equipment: 289,
        ship: {
            isID: [金剛改二, 金剛改二丙],
        },
        bonusImprove: {
            4: {
                aa: 1,
            },
            6: {
                aa: 1,
                evasion: 1,
            },
            8: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
            10: {
                fire: 1,
                aa: 1,
                evasion: 2,
            },
        },
    },

    {
        equipment: 289,
        ship: {
            isID: [榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonusImprove: {
            1: {
                evasion: 1,
            },
            3: {
                aa: 1,
                evasion: 1,
            },
            5: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
            7: {
                fire: 1,
                aa: 1,
                evasion: 2,
            },
            8: {
                fire: 1,
                aa: 2,
                evasion: 2,
            },
            9: {
                fire: 2,
                aa: 2,
                evasion: 2,
            },
            10: {
                fire: 2,
                aa: 2,
                evasion: 3,
            },
        },
    },

    {
        equipment: 289,
        ship: {
            isID: [比叡改二, 比叡改二丙, 霧島改二],
        },
        bonusImprove: {
            7: {
                aa: 1,
            },
            9: {
                fire: 1,
                aa: 1,
            },
            10: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
        },
    },

    // ========================================================================

    {
        list: [289, 'SurfaceRadar'],
        equipments: {
            hasID: [289],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [金剛改二, 金剛改二丙, 榛名改二, 榛名改二乙, 榛名改二丙],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
];
