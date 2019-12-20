/**
 * @module
 * 装备额外属性收益
 *
 * 359. 6inch連装速射砲 Mk.XXI
 *      https://wikiwiki.jp/kancolle/6inch%E9%80%A3%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.XXI
 *
 */

const { CL_Perth, CL_Yuubari } = require('../../ship-classes');

module.exports = [
    {
        equipment: 359,
        ship: {
            isClass: CL_Yuubari
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1
        }
    },
    {
        equipment: 359,
        ship: {
            isClass: CL_Perth
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1
        }
    }
];
