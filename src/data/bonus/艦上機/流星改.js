/**
 * @module
 * 装备额外属性收益
 * 52. **流星改**
 */

// https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%28%E6%9D%91%E7%94%B0%E9%9A%8A%29

module.exports = [
    {
        equipment: 52,
        ship: {
            isID: [
                277, // 赤城改
                594, // 赤城改二
                599 // 赤城改二戊
            ]
        },
        bonusCount: {
            1: {
                fire: 2
            }
        }
    },

    {
        equipment: 52,
        ship: {
            isID: [278] // 加賀改
        },
        bonusCount: {
            1: {
                fire: 1
            }
        }
    }
];
