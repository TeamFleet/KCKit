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

const { CL_AganoRevised } = require('../../ship-classes');

// ============================================================================

module.exports = [49, 39, 40, 131].map((eid) => ({
    equipment: eid,
    ship: {
        isClass: [CL_AganoRevised],
    },
    bonus: {
        aa: 2,
        evasion: 1,
    },
}));
