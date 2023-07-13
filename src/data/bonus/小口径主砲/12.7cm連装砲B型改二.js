/**
 * @module
 * 装备额外属性收益
 * 63. **12.7cm連装砲B型改二**
 */

// https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2B%E5%9E%8B%E6%94%B9%E4%BA%8C

const { DD_Ayanami, DD_Akatsuki, DD_Hatsuharu } = require('../../ship-classes');
const { Shikinami2ndRemodelAll } = require('../../ship-series/dd');
const { 時雨改二, 時雨改三 } = require('../../ship-ids');

// ============================================================================

module.exports = [
    // 綾波型改 / 暁型改 / 初春型改
    {
        equipment: 63,
        ship: {
            isClass: [DD_Ayanami, DD_Akatsuki, DD_Hatsuharu],
            isNotID: Shikinami2ndRemodelAll,
        },
        bonus: {
            aa: 1,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: Shikinami2ndRemodelAll,
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: [
                242, // 白露改
                497, // 白露改二
                498, // 村雨改二
            ],
        },
        bonus: {
            evasion: 1,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: [時雨改二, 時雨改三],
        },
        bonus: {
            fire: 1,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: [
                469, // 江風改二
            ],
        },
        bonus: {
            evasion: 2,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: [
                245, // 夕立改
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        },
    },

    {
        equipment: 63,
        ship: {
            isID: [
                144, // 夕立改二
            ],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            aa: 1,
            evasion: 2,
        },
    },

    // ------------------------------------------------------------------------
];
