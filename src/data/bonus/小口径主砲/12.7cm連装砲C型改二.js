/**
 * @module
 * 装备额外属性收益
 *
 * 266. 12.7cm連装砲C型改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2C%E5%9E%8B%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const { DD_KagerouClass2ndRemodelExcludeAkigumo } = require('../../ships');
const {
    時雨改二,
    時雨改三,
    丹陽,
    雪風改二,
    磯風乙改,
} = require('../../ship-ids');
const {
    DD_Shiratsuyu,
    DD_ShiratsuyuRevised,
    DD_Kagerou,
    DD_KagerouROCN,
    DD_Kagerou2,
} = require('../../ship-classes');

const conditionSpecials = [
    時雨改二,
    228, // 雪風改
    丹陽,
    磯風乙改,
];
const conditionSpecials2 = [時雨改三];
const condition1excludes = DD_KagerouClass2ndRemodelExcludeAkigumo.concat(
    conditionSpecials,
    conditionSpecials2
);

module.exports = [
    {
        equipment: 266,
        ship: {
            isClass: [
                DD_Shiratsuyu,
                DD_ShiratsuyuRevised,
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
    {
        equipment: 266,
        ship: {
            isID: conditionSpecials2,
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 1,
        },
    },

    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodelExcludeAkigumo.filter(
                (shipId) => ![丹陽, 雪風改二].includes(shipId)
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

    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: [雪風改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 1,
            },
            2: {
                fire: 5,
                evasion: 2,
            },
            3: {
                fire: 6,
                evasion: 3,
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
                DD_Shiratsuyu,
                DD_ShiratsuyuRevised,
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
                DD_Kagerou,
                DD_KagerouROCN,
                DD_Kagerou2, // 陽炎型
            ],
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 1,
        },
    },
];
