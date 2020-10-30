/**
 * @module
 * 装备额外属性收益
 *
 * 392. 九九式艦爆二二型(熟練)
 *      https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B9%9D%E5%BC%8F%E8%89%A6%E7%88%86%E4%BA%8C%E4%BA%8C%E5%9E%8B%28%E7%86%9F%E7%B7%B4%29
 *
 */

const {
    翔鶴改,

    瑞鶴改,

    龍鳳,
    龍鳳改,

    祥鳳改,

    瑞鳳,
    瑞鳳改,
    瑞鳳改二,
    瑞鳳改二乙,

    飛鷹改,

    隼鷹改二,
} = require('../../ship-ids');

const 九九式艦爆二二型_熟練 = [
    {
        equipment: 392,
        ship: {
            isID: [飛鷹改, 隼鷹改二],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },
    {
        equipment: 392,
        ship: {
            isID: [龍鳳, 瑞鳳],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },
    {
        equipment: 392,
        ship: {
            isID: [翔鶴改, 瑞鶴改, 龍鳳改, 祥鳳改, 瑞鳳改],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
    {
        equipment: 392,
        ship: {
            isID: [瑞鳳改二, 瑞鳳改二乙],
        },
        bonus: {
            fire: 3,
            evasion: 2,
        },
    },
];

module.exports = [...九九式艦爆二二型_熟練];
