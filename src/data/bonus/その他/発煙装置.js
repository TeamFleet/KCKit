/**
 * @module
 * 装备额外属性收益
 *
 * 500. 発煙装置(煙幕)
 *      https://wikiwiki.jp/kancolle/%E7%99%BA%E7%85%99%E8%A3%85%E7%BD%AE%28%E7%85%99%E5%B9%95%29
 *
 * 501. 発煙装置改(煙幕)
 *      https://wikiwiki.jp/kancolle/%E7%99%BA%E7%85%99%E8%A3%85%E7%BD%AE%E6%94%B9%28%E7%85%99%E5%B9%95%29
 *
 */

require('../../../../typedef');

const { 深雪改二 } = require('../../ship-ids');
const {
    Aoba,
    Haguro,
    Atago,
    Sendai,
    Kamikaze,
    Harukaze,
    Fubuki,
    Uranami,
    Shikinami,
    Amagiri,
    Inazuma,
    Hatsushimo,
    Kasumi,
    Hamanami,
    'Samuel B.Roberts': SBR,
    Johnston,
} = require('../../ship-series');

// ============================================================================

// /** @type {Array<EquipmentBonus>} */
// const 発煙装置 = [];

// ============================================================================

// /** @type {Array<EquipmentBonus>} */
// const 発煙装置改 = [];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const list = [];
[500, 501].forEach((eid) => {
    list.push({
        equipment: eid,
        ship: {
            isID: [深雪改二],
        },
        bonus: {
            evasion: 4,
        },
    });
    list.push({
        equipment: eid,
        ship: {
            isID: [
                ...Aoba,
                ...Sendai,
                ...Kamikaze,
                ...Harukaze,
                ...Uranami,
                ...Shikinami,
                ...SBR,
                ...Johnston,
            ],
        },
        bonus: {
            evasion: 3,
        },
    });
    list.push({
        equipment: eid,
        ship: {
            isID: [
                ...Haguro,
                ...Atago,
                ...Fubuki,
                ...Amagiri,
                ...Inazuma,
                ...Hatsushimo,
                ...Kasumi,
                ...Hamanami,
            ],
        },
        bonus: {
            evasion: 2,
        },
    });
});

// ============================================================================
module.exports = list;
