/**
 * @module
 * 装备额外属性收益
 *
 * 139. 15.2cm連装砲改
 *      https://wikiwiki.jp/kancolle/15.2cm%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
 *
 */

const { CL_AganoRevised } = require('../../ship-classes');

module.exports = [
    {
        equipment: 139,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },
];
