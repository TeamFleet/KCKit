/**
 * 装备额外属性收益 - Ju87C改二(KMX搭載機)
 * [305] Ju87C改二(KMX搭載機)
 * [306] Ju87C改二(KMX搭載機/熟練)
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/Ju87C%E6%94%B9%E4%BA%8C%28KMX%E6%90%AD%E8%BC%89%E6%A9%9F%29
// https://wikiwiki.jp/kancolle/Ju87C%E6%94%B9%E4%BA%8C%28KMX%E6%90%AD%E8%BC%89%E6%A9%9F%EF%BC%8F%E7%86%9F%E7%B7%B4%29

const { group_CV_Navy_RM, group_CV_Navy_KM } = require('../../ship-classes');
const {
    大鷹,
    大鷹改,
    大鷹改二,

    雲鷹,
    雲鷹改,
    雲鷹改二,

    神鷹,
    神鷹改,
    神鷹改二,
} = require('../../ship-ids');

const bonusGrafZeppelinAquila = {
    ship: {
        isClass: [...group_CV_Navy_RM, ...group_CV_Navy_KM],
    },
    bonus: {
        fire: 1,
        evasion: 1,
    },
};
const bonusTaiyou = {
    ship: {
        isID: [大鷹, 大鷹改, 大鷹改二, 雲鷹, 雲鷹改, 雲鷹改二],
    },
    bonus: {
        asw: 1,
        evasion: 1,
    },
};
const bonusShinyou = {
    ship: {
        isID: [神鷹, 神鷹改, 神鷹改二],
    },
    bonus: {
        asw: 3,
        evasion: 2,
    },
};

module.exports = [
    // Ju87C改二(KMX搭載機)
    {
        equipment: 305,
        ...bonusGrafZeppelinAquila,
    },
    {
        equipment: 305,
        ...bonusTaiyou,
    },
    {
        equipment: 305,
        ...bonusShinyou,
    },

    // Ju87C改二(KMX搭載機/熟練)
    {
        equipment: 306,
        ...bonusGrafZeppelinAquila,
    },
    {
        equipment: 306,
        ...bonusTaiyou,
    },
    {
        equipment: 306,
        ...bonusShinyou,
    },

    // ------------------------------------------------------------------------
];
