/**
 * @module
 * 装备额外属性收益
 * 335. **烈風改(試製艦載型)**
 */

const { CV_AkagiClass2ndRemodel } = require('../../ships');

module.exports = [
    // ========================================================================
    // 烈風改(試製艦載型)
    // https://wikiwiki.jp/kancolle/%E7%83%88%E9%A2%A8%E6%94%B9%28%E8%A9%A6%E8%A3%BD%E8%89%A6%E8%BC%89%E5%9E%8B%29
    // ========================================================================
    {
        equipment: 335,
        ship: {
            isID: [
                277, // 赤城改
                278 // 加賀改
            ]
        },
        bonus: {
            aa: 1,
            evasion: 1
        }
    },
    {
        equipment: 335,
        ship: {
            isID: [...CV_AkagiClass2ndRemodel]
        },
        bonus: {
            aa: 2,
            evasion: 1
        }
    }
];
