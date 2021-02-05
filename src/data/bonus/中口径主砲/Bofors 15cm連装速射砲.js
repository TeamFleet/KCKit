/**
 * @module
 * 装备额外属性收益
 *
 * 360. Bofors 15cm連装速射砲 Mk.9 Model 1938
 *      https://wikiwiki.jp/kancolle/Bofors%2015cm%E9%80%A3%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.9%20Model%201938
 *
 * 361. Bofors 15cm連装速射砲 Mk.9改 + 単装速射砲 Mk.10改 Model 1938
 *      https://wikiwiki.jp/kancolle/Bofors%2015cm%E9%80%A3%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.9%E6%94%B9%EF%BC%8B%E5%8D%98%E8%A3%85%E9%80%9F%E5%B0%84%E7%A0%B2%20Mk.10%E6%94%B9%20Model%201938
 *
 */

const {
    CL_Agano,
    CL_AganoRevised,
    CL_Gotland,
    CLV_Gotland,
    CL_DeRuyter,
} = require('../../ship-classes');

const result = [];
[360, 361].forEach((equipment) => {
    result.push({
        equipment,
        ship: {
            isClass: [CL_Agano, CL_AganoRevised],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    });
    result.push({
        equipment,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    });
    result.push({
        equipment,
        ship: {
            isClass: [CL_DeRuyter],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        },
    });
});
module.exports = result;
