/**
 * @module
 * 装备额外属性收益
 *
 * 437. 試製 陣風
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD%20%E9%99%A3%E9%A2%A8
 *
 */

require('../../../../typedef');

require('../../ship-classes');
const {
    伊勢改二,
    日向改二,

    加賀改二護,
    蒼龍改二,
    飛龍改二,

    鳳翔改,
    龍鳳改二戊,
    龍鳳改二,
    鈴谷航改二,
    熊野航改二,
} = require('../../ship-ids');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 437,
        ship: {
            isID: [鳳翔改],
        },
        bonus: {
            fire: 3,
            aa: 3,
            evasion: 4,
        },
    },
    {
        equipment: 437,
        ship: {
            isID: [蒼龍改二, 飛龍改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 3,
        },
    },
    {
        equipment: 437,
        ship: {
            isID: [加賀改二護, 鈴谷航改二, 熊野航改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        },
    },
    {
        equipment: 437,
        ship: {
            isID: [伊勢改二, 日向改二, 龍鳳改二戊, 龍鳳改二],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2,
        },
    },
];
