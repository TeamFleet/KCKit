/**
 * @module
 * 装备额外属性收益
 * 342. **流星改(一航戦)**
 * 343. **流星改(一航戦/熟練)**
 */

const { CV_ShoukakuClass2ndRemodel } = require('../../ships');

module.exports = [
    // ========================================================================
    // 流星改(一航戦)
    // https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9%28%E4%B8%80%E8%88%AA%E6%88%A6%29
    // ========================================================================
    {
        equipment: 342,
        ship: {
            isID: [
                277, // 赤城改
                278, // 加賀改
                ...CV_ShoukakuClass2ndRemodel
            ]
        },
        bonus: {
            fire: 1
        }
    },
    {
        equipment: 342,
        ship: {
            isID: [
                594 // 赤城改二
            ]
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1
        }
    },
    {
        equipment: 342,
        ship: {
            isID: [
                599 // 赤城改二戊
            ]
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 2
        }
    },

    // ========================================================================
    // 流星改(一航戦/熟練)
    // https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9%28%E4%B8%80%E8%88%AA%E6%88%A6%EF%BC%8F%E7%86%9F%E7%B7%B4%29
    // ========================================================================
    {
        equipment: 343,
        ship: {
            isID: [...CV_ShoukakuClass2ndRemodel]
        },
        bonus: {
            fire: 1
        }
    },
    {
        equipment: 343,
        ship: {
            isID: [
                277, // 赤城改
                278 // 加賀改
            ]
        },
        bonus: {
            fire: 2
        }
    },
    {
        equipment: 343,
        ship: {
            isID: [
                594 // 赤城改二
            ]
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 1
        }
    },
    {
        equipment: 343,
        ship: {
            isID: [
                599 // 赤城改二戊
            ]
        },
        bonus: {
            fire: 5,
            aa: 3,
            evasion: 3
        }
    }
];
