/**
 * @module
 * 装备额外属性收益
 *
 * 286. 61cm四連装(酸素)魚雷後期型
 *      https://wikiwiki.jp/kancolle/61cm%E5%9B%9B%E9%80%A3%E8%A3%85%28%E9%85%B8%E7%B4%A0%29%E9%AD%9A%E9%9B%B7%E5%BE%8C%E6%9C%9F%E5%9E%8B
 *
 */

require('../../../../typedef');

const {
    DD_ShiratsuyuClass2ndRemodel,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
} = require('../../ships');
const { CL_AganoRevised } = require('../../ship-classes');
const { 竹, 竹改 } = require('../../ship-ids');

const DD2nd_Shiratsuyu_Asashio_Yuugumo = DD_ShiratsuyuClass2ndRemodel.concat(
    DD_AsashioClass2ndRemodel,
    DD_YuugumoClass2ndRemodel
);

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 286,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            torpedo: 2,
        },
    },

    // @ 白露型 改二 / 朝潮型 改二 / 夕雲型 改二
    {
        equipment: 286,
        ship: {
            isID: DD2nd_Shiratsuyu_Asashio_Yuugumo,
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1,
            },
            maxCount: 2,
        },
    },

    // @ 陽炎型 改二
    {
        equipment: 286,
        ship: {
            isID: DD_KagerouClass2ndRemodel,
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            5: {
                torpedo: 3,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 3,
                evasion: 1,
            },
            maxCount: 2,
        },
    },

    {
        equipment: 286,
        ship: {
            isID: [竹, 竹改],
        },
        bonusImprove: {
            0: {
                torpedo: 7,
                evasion: 2,
            },
            7: {
                torpedo: 9,
                evasion: 2,
            },
            10: {
                torpedo: 11,
                evasion: 2,
            },
            maxCount: 1,
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [286, 'SurfaceRadar'],
        equipments: {
            hasID: [286],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            torpedo: 3,
            evasion: 2,
        },
    },
];
