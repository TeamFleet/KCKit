/**
 * @module
 * 装备额外属性收益
 * 19. **九六式艦戦**
 * 228. **九六式艦戦改**
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E6%9D%91%E7%94%B0%E9%9A%8A%29

const { CV_Houshou, CV_Kagasumaru, CV_Taiyou_SP, CV_Taiyou } = require('../../ship-classes')

module.exports = [
    // ========================================================================
    // 九六式艦戦
    // https://wikiwiki.jp/kancolle/%E4%B9%9D%E5%85%AD%E5%BC%8F%E8%89%A6%E6%88%A6
    // ========================================================================
    {
        equipment: 19,
        ship: {
            isType: [
                9
            ],
            isNotClass: [CV_Houshou, CV_Kagasumaru, CV_Taiyou_SP, CV_Taiyou]
        },
        bonus: {
            aa: 1,
            evasion: 1,
        }
    },

    {
        equipment: 19,
        ship: {
            isClass: [CV_Houshou]
        },
        bonus: {
            fire: 1,
            aa: 1,
            asw: 1,
            evasion: 2,
        }
    },

    {
        equipment: 19,
        ship: {
            isClass: [CV_Kagasumaru, CV_Taiyou_SP, CV_Taiyou]
        },
        bonus: {
            fire: 1,
            aa: 1,
            asw: 2,
            evasion: 1,
        }
    },

    // ========================================================================
    // 九六式艦戦改
    // https://wikiwiki.jp/kancolle/%E4%B9%9D%E5%85%AD%E5%BC%8F%E8%89%A6%E6%88%A6%E6%94%B9
    // ========================================================================
    {
        equipment: 228,
        ship: {
            isType: [
                9
            ],
            isNotClass: [CV_Houshou, CV_Kagasumaru, CV_Taiyou_SP, CV_Taiyou]
        },
        bonus: {
            aa: 1,
            asw: 2,
            evasion: 1,
        }
    },

    {
        equipment: 228,
        ship: {
            isClass: [CV_Houshou]
        },
        bonus: {
            fire: 1,
            aa: 3,
            asw: 2,
            evasion: 3,
        }
    },

    {
        equipment: 228,
        ship: {
            isClass: [CV_Kagasumaru, CV_Taiyou_SP, CV_Taiyou]
        },
        bonus: {
            fire: 1,
            aa: 2,
            asw: 4,
            evasion: 2,
        }
    },
];
