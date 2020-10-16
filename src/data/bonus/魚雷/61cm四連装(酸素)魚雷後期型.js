/**
 * @module
 * 装备额外属性收益
 * 286. **61cm四連装(酸素)魚雷後期型**
 */

// https://wikiwiki.jp/kancolle/61cm%E5%9B%9B%E9%80%A3%E8%A3%85%28%E9%85%B8%E7%B4%A0%29%E9%AD%9A%E9%9B%B7%E5%BE%8C%E6%9C%9F%E5%9E%8B

const {
    DD_ShiratsuyuClass2ndRemodel,
    DD_AsashioClass2ndRemodel,
    DD_KagerouClass2ndRemodel,
    DD_YuugumoClass2ndRemodel,
} = require('../../ships');

const DD2nd_Shiratsuyu_Asashio_Yuugumo = DD_ShiratsuyuClass2ndRemodel.concat(
    DD_AsashioClass2ndRemodel,
    DD_YuugumoClass2ndRemodel
);

module.exports = [
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
        },
    },

    // ------------------------------------------------------------------------
];
