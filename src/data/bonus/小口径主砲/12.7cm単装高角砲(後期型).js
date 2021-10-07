/**
 * @module
 * 装备额外属性收益
 *
 * 229. 12.7cm単装高角砲(後期型)
 *      https://wikiwiki.jp/kancolle/12.7cm%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%28%E5%BE%8C%E6%9C%9F%E5%9E%8B%29
 *
 */

require('../../../../typedef');

/**
 * @module
 * 装备额外属性收益
 * 229. **12.7cm単装高角砲(後期型)**
 */

const { CL_NagaraClass2ndRemodel } = require('../../ships');

const {
    由良,
    由良改,
    由良改二,

    鬼怒,
    鬼怒改,
    鬼怒改二,

    那珂,
    那珂改,
    那珂改二,

    夕張改二,
    夕張改二特,
    夕張改二丁,
} = require('../../ship-ids');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    // @ 海防艦
    {
        equipment: 229,
        ship: {
            isID: [夕張改二, 夕張改二特, 夕張改二丁],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },

    // @ 海防艦
    {
        equipment: 229,
        ship: {
            isType: [31],
        },
        bonusImprove: {
            7: {
                fire: 1,
                aa: 1,
            },
        },
    },

    // @ 神風型 / 睦月型
    {
        equipment: 229,
        ship: {
            isClass: [84, 12],
        },
        bonusImprove: {
            7: {
                fire: 1,
                aa: 1,
            },
        },
    },

    {
        equipment: 229,
        ship: {
            isID: [鬼怒, 那珂],
        },
        bonusImprove: {
            7: {
                fire: 2,
            },
        },
    },

    {
        equipment: 229,
        ship: {
            isID: [由良, 鬼怒改, 那珂改],
        },
        bonusImprove: {
            7: {
                fire: 2,
                aa: 1,
            },
        },
    },

    {
        equipment: 229,
        ship: {
            isID: [由良改, 鬼怒改二, 那珂改二],
        },
        bonusImprove: {
            7: {
                fire: 2,
                aa: 2,
            },
        },
    },

    // @ 由良改二
    {
        equipment: 229,
        ship: {
            isID: [由良改二],
        },
        bonusImprove: {
            7: {
                fire: 2,
                aa: 3,
            },
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [229, 'SurfaceRadar'],
        equipments: {
            hasID: [229],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: [夕張改二, 夕張改二特, 夕張改二丁],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
    {
        list: [229, 'AARadar'],
        equipments: {
            hasID: [229],
            hasAARadar: true,
        },
        ship: {
            isID: [夕張改二, 夕張改二特, 夕張改二丁],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },

    // + 对水上電探
    // @ 海防艦
    {
        list: [
            {
                id: 229,
                star: 7,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true,
            },
        ],
        ship: {
            isType: [31],
        },
        bonus: {
            fire: 1,
            evasion: 4,
        },
    },

    // + 对水上電探
    // @ 神風型 / 睦月型
    {
        list: [
            {
                id: 229,
                star: 7,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true,
            },
        ],
        ship: {
            isClass: [84, 12],
        },
        bonus: {
            fire: 2,
            evasion: 3,
        },
    },

    // + 对水上電探
    // @ 長良型 改二
    {
        list: [
            {
                id: 229,
                star: 7,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 7,
            },
            {
                isSurfaceRadar: true,
            },
        ],
        ship: {
            isID: CL_NagaraClass2ndRemodel,
        },
        bonus: {
            fire: 3,
            evasion: 2,
        },
    },
];
