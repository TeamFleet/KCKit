/**
 * @module
 * 装备额外属性收益
 * 18. **流星**
 * 52. **流星改**
 */

// https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F
// https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9

const {
    赤城改,
    赤城改二,
    赤城改二戊,

    加賀改,
    加賀改二,
    加賀改二戊,
    加賀改二護,

    大鳳改,
} = require('../../ship-ids');

const equipments = [
    18, // 流星
    52, // 流星改
];
const result = [];

equipments.forEach((equipment) => {
    result.push({
        equipment,
        ship: {
            isID: [赤城改, 加賀改, 大鳳改],
        },
        bonus: {
            fire: 1,
        },
    });
    result.push({
        equipment,
        ship: {
            isID: [赤城改二, 加賀改二, 加賀改二護],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    });
    result.push({
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

module.exports = result;
