/**
 * @module
 * 装备额外属性收益
 *
 * 129. 熟練見張員
 *      https://wikiwiki.jp/kancolle/%E7%86%9F%E7%B7%B4%E8%A6%8B%E5%BC%B5%E5%93%A1
 *
 */

const {
    group_CAV_Navy_IJN,
    group_CA_Navy_IJN,
    group_CL_S_Navy_IJN,
    group_DD_Navy_IJN,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 129,
        ship: {
            isClass: [...group_CAV_Navy_IJN, ...group_CA_Navy_IJN],
        },
        bonus: {
            fire: 1,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 129,
        ship: {
            isClass: [...group_CL_S_Navy_IJN],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 129,
        ship: {
            isClass: [...group_DD_Navy_IJN],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            asw: 2,
            los: 1,
            evasion: 2,
        },
    },
];
