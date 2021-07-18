/**
 * @module
 * 装备额外属性收益
 *
 * 358. 5inch 単装高角砲群
 *      https://wikiwiki.jp/kancolle/5inch%20%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E7%BE%A4
 *
 */
const {
    CL_Brooklyn,
    group_CA_Navy_USN,
    group_BB_Navy_USN,
    group_CV_Navy_USN,
    group_CL_Navy_USN,
    group_BB_Navy_RN,
    group_CV_Navy_RN,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 358,
        ship: {
            isClass: [...group_CA_Navy_USN, CL_Brooklyn],
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 3,
        },
    },

    {
        equipment: 358,
        ship: {
            isClass: [
                ...group_BB_Navy_USN,
                ...group_CV_Navy_USN,
                ...group_CL_Navy_USN.filter((cid) => cid !== CL_Brooklyn),
                ...group_BB_Navy_RN,
                ...group_CV_Navy_RN,
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },

    // ------------------------------------------------------------------------
];
