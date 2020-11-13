/**
 * 装备额外属性收益 - 12.7cm連装砲C型改二
 *
 * @module
 */

const { DD_KagerouClass2ndRemodelExcludeAkigumo } = require('../../ships');
const { 丹陽 } = require('../../ship-ids');

const conditionSpecials = [
    145, // 時雨改二
    228, // 雪風改
    丹陽,
    557, // 磯風丁改
];
const condition1excludes = DD_KagerouClass2ndRemodelExcludeAkigumo.concat(
    conditionSpecials
);

module.exports = [
    {
        equipment: 266,
        ship: {
            isClass: [
                19, // 白露型
                20, // 朝潮型
                21, // 陽炎型
            ],
            isNotID: condition1excludes,
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 266,
        ship: {
            isID: conditionSpecials,
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },

    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodelExcludeAkigumo.filter(
                (shipId) => shipId !== 丹陽
            ),
        },
        bonusCount: {
            1: {
                fire: 2,
            },
            2: {
                fire: 5,
            },
            3: {
                fire: 6,
            },
        },
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [266, 'SurfaceRadar'],
        equipments: {
            hasID: [266],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [
                19, // 白露型
                20, // 朝潮型
            ],
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 1,
        },
    },

    // + 对水上電探
    {
        list: [266, 'SurfaceRadar'],
        equipments: {
            hasID: [266],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [
                21, // 陽炎型
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 1,
        },
    },
];
