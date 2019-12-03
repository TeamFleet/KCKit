/**
 * @module
 * 装备额外属性收益
 *
 *  54. 彩雲
 *      https://wikiwiki.jp/kancolle/%E5%BD%A9%E9%9B%B2
 *
 */

const { Carriers } = require('../../../types/ships');

module.exports = [
    {
        equipment: 54,
        ship: {
            isType: Carriers
        },
        bonusImprove: {
            2: {
                los: 1
            }
        }
    }
];
