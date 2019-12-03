/**
 * @module
 * 装备额外属性收益
 *
 * 151. 試製景雲(艦偵型)
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD%E6%99%AF%E9%9B%B2%28%E8%89%A6%E5%81%B5%E5%9E%8B%29
 *
 */

module.exports = [
    {
        equipment: 151,
        ship: {
            isType: [
                11 // 装甲空母
            ]
        },
        bonusImprove: {
            2: {
                los: 1
            },
            4: {
                fire: 1,
                los: 1
            },
            6: {
                fire: 1,
                los: 2
            },
            10: {
                fire: 2,
                los: 3
            }
        }
    }
];
