/**
 * @module
 * 装备额外属性收益
 *
 *  18. 流星
 *      https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F
 *
 *  52. 流星改
 *      https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9
 *
 * 466. 流星改(熟練)
 *      https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9%28%E7%86%9F%E7%B7%B4%29
 *
 */

require('../../../../typedef');

const {
    赤城改,
    赤城改二,
    赤城改二戊,

    加賀改,
    加賀改二,
    加賀改二戊,
    加賀改二護,

    蒼龍改,
    蒼龍改二,

    飛龍改,
    飛龍改二,

    翔鶴改,
    翔鶴改二,
    翔鶴改二甲,

    瑞鶴改,
    瑞鶴改二,
    瑞鶴改二甲,

    大鳳改,
} = require('../../ship-ids');

// ============================================================================

const baseEquipments = [
    18, // 流星
    52, // 流星改
];
/** @type {Array<EquipmentBonus>} */
const baseList = [];
baseEquipments.forEach((equipment) => {
    baseList.push({
        equipment,
        ship: {
            isID: [赤城改, 加賀改, 大鳳改],
        },
        bonus: {
            fire: 1,
        },
    });
    baseList.push({
        equipment,
        ship: {
            isID: [赤城改二, 加賀改二, 加賀改二護],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    });
    baseList.push({
        equipment,
        ship: {
            isID: [赤城改二戊, 加賀改二戊],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    });
});

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 流星改_熟練 = [
    {
        equipment: 466,
        ship: {
            isID: [翔鶴改二, 翔鶴改二甲, 瑞鶴改二, 瑞鶴改二甲],
        },
        bonus: {
            fire: 2,
            evasion: 2,
            hit: 1,
        },
    },
    {
        equipment: 466,
        ship: {
            isID: [
                赤城改二,
                赤城改二戊,
                加賀改二,
                加賀改二戊,
                加賀改二護,
                蒼龍改二,
                飛龍改二,
            ],
        },
        bonus: {
            fire: 1,
            evasion: 1,
            hit: 2,
        },
    },
    {
        equipment: 466,
        ship: {
            isID: [赤城改, 加賀改, 蒼龍改, 飛龍改, 翔鶴改, 瑞鶴改, 大鳳改],
        },
        bonus: {
            fire: 1,
            hit: 1,
        },
    },
];

// ============================================================================

module.exports = [...baseList, ...流星改_熟練];
