/**
 * @module
 * 装备额外属性收益
 *
 * 220. 8cm高角砲改+増設機銃
 *      https://wikiwiki.jp/kancolle/8cm%E9%AB%98%E8%A7%92%E7%A0%B2%E6%94%B9%EF%BC%8B%E5%A2%97%E8%A8%AD%E6%A9%9F%E9%8A%83
 *
 */

const { CL_AganoRevised } = require('../../ship-classes');

module.exports = [
    {
        equipment: 220,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        },
    },
];
