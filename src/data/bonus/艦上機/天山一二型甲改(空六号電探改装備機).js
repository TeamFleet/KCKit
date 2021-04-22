/**
 * @module
 * 装备额外属性收益
 *
 * 373. 天山一二型甲改(空六号電探改装備機)
 *      https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%E4%B8%80%E4%BA%8C%E5%9E%8B%E7%94%B2%E6%94%B9%28%E7%A9%BA%E5%85%AD%E5%8F%B7%E9%9B%BB%E6%8E%A2%E6%94%B9%E8%A3%85%E5%82%99%E6%A9%9F%29
 * 374. 天山一二型甲改(熟練/空六号電探改装備機)
 *      https://wikiwiki.jp/kancolle/%E5%A4%A9%E5%B1%B1%E4%B8%80%E4%BA%8C%E5%9E%8B%E7%94%B2%E6%94%B9%28%E7%86%9F%E7%B7%B4%EF%BC%8F%E7%A9%BA%E5%85%AD%E5%8F%B7%E9%9B%BB%E6%8E%A2%E6%94%B9%E8%A3%85%E5%82%99%E6%A9%9F%29
 *
 */

require('../../../../typedef');
const {
    翔鶴改二,
    翔鶴改二甲,

    瑞鶴改二,
    瑞鶴改二甲,

    大鳳改,

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

    飛鷹改,

    隼鷹改二,

    千歳航,
    千歳航改,
    千歳航改二,

    千代田航,
    千代田航改,
    千代田航改二,

    鈴谷航改二,

    熊野航改二,
} = require('../../ship-ids');
const {
    Shoukaku,
    Zuikaku,
    Taihou,

    Hiyou,
    Junyou,
} = require('../../ship-series');

/** @type {Array<EquipmentBonus>} */
const 天山一二型甲改_空六号電探改装備機 = [
    {
        equipment: 373,
        ship: {
            isID: [...Shoukaku],
        },
        bonusCount: {
            1: {
                fire: 2,
                torpedo: 2,
                evasion: 2,
            },
            2: {
                fire: 2,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [...Zuikaku],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 2,
                evasion: 3,
            },
            2: {
                fire: 1,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [...Taihou, 鈴谷航改二, 熊野航改二],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 2,
                evasion: 2,
            },
            2: {
                fire: 1,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [祥鳳, 瑞鳳],
        },
        bonus: {
            torpedo: 1,
            asw: 1,
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [龍鳳, 祥鳳改, 瑞鳳改],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 1,
                asw: 1,
            },
            2: {
                fire: 1,
                asw: 1,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [龍鳳改, 瑞鳳改二, 瑞鳳改二乙],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 1,
                asw: 2,
                evasion: 1,
            },
            2: {
                fire: 1,
                asw: 2,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [龍鳳改二戊],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 3,
                asw: 2,
                evasion: 4,
            },
            2: {
                fire: 1,
                asw: 2,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [龍鳳改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                torpedo: 2,
                asw: 2,
                evasion: 2,
            },
            2: {
                fire: 2,
                asw: 2,
            },
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [千歳航, 千代田航],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [千歳航改, 千代田航改],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
        },
    },
    {
        equipment: 373,
        ship: {
            isID: [...Hiyou, ...Junyou, 千歳航改二, 千代田航改二],
        },
        bonusCount: {
            1: {
                fire: 1,
                torpedo: 1,
                evasion: 1,
            },
            2: {
                fire: 1,
            },
        },
    },
];

/** @type {Array<EquipmentBonus>} */
const 天山一二型甲改_熟練_空六号電探改装備機 = [
    {
        equipment: 374,
        ship: {
            isID: [翔鶴改二, 翔鶴改二甲],
        },
        bonus: {
            fire: 3,
            torpedo: 3,
            evasion: 3,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [瑞鶴改二, 瑞鶴改二甲],
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 4,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [大鳳改],
        },
        bonus: {
            fire: 2,
            torpedo: 3,
            evasion: 2,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [瑞鳳改二, 瑞鳳改二乙, 龍鳳改],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            asw: 3,
            evasion: 2,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [龍鳳改二, 龍鳳改二戊],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            asw: 3,
            evasion: 3,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [鈴谷航改二, 熊野航改二],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            asw: 2,
            evasion: 3,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [千歳航改二, 千代田航改二],
        },
        bonus: {
            fire: 1,
            torpedo: 1,
            asw: 1,
            evasion: 1,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [飛鷹改, 隼鷹改二],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            evasion: 2,
        },
    },
    {
        equipment: 374,
        ship: {
            isID: [祥鳳改],
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            asw: 2,
            evasion: 1,
        },
    },
];

module.exports = [
    ...天山一二型甲改_空六号電探改装備機,
    ...天山一二型甲改_熟練_空六号電探改装備機,
];
