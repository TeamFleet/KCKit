/**
 * @module
 * 装备额外属性收益
 *
 *  49. 25mm単装機銃
 *      https://wikiwiki.jp/kancolle/25mm%E5%8D%98%E8%A3%85%E6%A9%9F%E9%8A%83
 *
 *  39. 25mm連装機銃
 *      https://wikiwiki.jp/kancolle/25mm%E9%80%A3%E8%A3%85%E6%A9%9F%E9%8A%83
 *
 *  40. 25mm三連装機銃
 *      https://wikiwiki.jp/kancolle/25mm%E4%B8%89%E9%80%A3%E8%A3%85%E6%A9%9F%E9%8A%83
 *
 * 131. 25mm三連装機銃 集中配備
 *      https://wikiwiki.jp/kancolle/25mm%E4%B8%89%E9%80%A3%E8%A3%85%E6%A9%9F%E9%8A%83%20%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99
 *
 */

const { CL_AganoRevised, CT_Katori } = require('../../ship-classes');

// ============================================================================

const list = [];

[49, 39, 40, 131].forEach((eid) => {
    list.push({
        equipment: eid,
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            aa: 2,
            evasion: 1,
        },
    });
    list.push({
        equipment: eid,
        ship: {
            isClass: [CT_Katori],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2,
        },
    });
});

module.exports = list;
