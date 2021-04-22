/**
 * @module
 * 装备额外属性收益
 *
 * 372. 天山一二型甲
 *      https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%E4%B8%80%E4%BA%8C%E5%9E%8B%E7%94%B2
 *
 */

const {
    龍鳳,
    龍鳳改,
    龍鳳改二,
    龍鳳改二戊,

    祥鳳,
    祥鳳改,

    瑞鳳,
    瑞鳳改,
    瑞鳳改二,
    瑞鳳改二乙,

    千歳航,
    千歳航改,
    千歳航改二,

    千代田航,
    千代田航改,
    千代田航改二,
} = require('../../ship-ids');
const {
    Shoukaku,
    Zuikaku,
    Taihou,

    Hiyou,
    Junyou,
} = require('../../ship-series');

module.exports = [
    {
        equipment: 372,
        ship: {
            isID: [...Shoukaku, ...Zuikaku, ...Taihou],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
        },
    },
    {
        equipment: 372,
        ship: {
            isID: [
                ...Hiyou,
                ...Junyou,
                千歳航,
                千歳航改,
                千歳航改二,
                千代田航,
                千代田航改,
                千代田航改二,
            ],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 372,
        ship: {
            isID: [祥鳳, 祥鳳改, 瑞鳳, 瑞鳳改, 龍鳳],
        },
        bonus: {
            asw: 1,
        },
    },
    {
        equipment: 372,
        ship: {
            isID: [瑞鳳改二, 瑞鳳改二乙, 龍鳳改, 龍鳳改二, 龍鳳改二戊],
        },
        bonus: {
            fire: 1,
            asw: 1,
        },
    },
];
