/**
 * @module
 * 装备额外属性收益
 * 18. **流星**
 * 52. **流星改**
 */

// https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F
// https://wikiwiki.jp/kancolle/%E6%B5%81%E6%98%9F%E6%94%B9

const equipments = [18, 52];
const result = [];

equipments.forEach(equipment => {
    result.push({
        equipment,
        ship: {
            isID: [
                277, // 赤城改
                278, // 加賀改
                156 // 大鳳改
            ]
        },
        bonus: {
            fire: 1
        }
    });
    result.push({
        equipment,
        ship: {
            isID: [
                594 // 赤城改二
            ]
        },
        bonus: {
            fire: 1,
            evasion: 1
        }
    });
    result.push({
        equipment,
        ship: {
            isID: [
                599 // 赤城改二戊
            ]
        },
        bonus: {
            fire: 2,
            evasion: 1
        }
    });
});

module.exports = result;
