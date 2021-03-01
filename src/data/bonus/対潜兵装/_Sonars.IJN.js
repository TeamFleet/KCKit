/**
 * @module
 * 装备额外属性收益
 *
 *  46. 九三式水中聴音機
 *      https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%89%E5%BC%8F%E6%B0%B4%E4%B8%AD%E8%81%B4%E9%9F%B3%E6%A9%9F
 *
 *  47. 三式水中探信儀
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E6%B0%B4%E4%B8%AD%E6%8E%A2%E4%BF%A1%E5%84%80
 *
 * 149. 四式水中聴音機
 *      https://wikiwiki.jp/kancolle/%E5%9B%9B%E5%BC%8F%E6%B0%B4%E4%B8%AD%E8%81%B4%E9%9F%B3%E6%A9%9F
 *
 * 132. 零式水中聴音機
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E6%B0%B4%E4%B8%AD%E8%81%B4%E9%9F%B3%E6%A9%9F
 *
 */

const { CT_Katori } = require('../../ship-classes');

// ============================================================================

const list = [];

[46, 47, 149].forEach((eid) => {
    list.push({
        equipment: eid,
        ship: {
            isClass: [CT_Katori],
        },
        bonus: {
            asw: 2,
            evasion: 3,
        },
    });
});

module.exports = list;
