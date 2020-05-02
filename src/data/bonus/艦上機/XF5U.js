/**
 * @module
 * 装备额外属性收益
 *
 * 375. XF5U
 *      https://wikiwiki.jp/kancolle/XF5U
 *
 */

const { CV_Kaga, group_CV_Navy_USN } = require('../../ship-classes');

module.exports = [
    {
        equipment: 375,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 3,
            aa: 3,
            asw: 3,
            evasion: 3,
        },
    },
    {
        equipment: 375,
        ship: {
            isClass: [CV_Kaga],
        },
        bonus: {
            fire: 1,
            aa: 1,
            asw: 1,
            evasion: 1,
        },
    },
];
