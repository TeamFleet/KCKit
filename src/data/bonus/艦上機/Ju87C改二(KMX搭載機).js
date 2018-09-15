/**
 * 装备额外属性收益 - Ju87C改二(KMX搭載機)
 * [305] Ju87C改二(KMX搭載機)
 * [306] Ju87C改二(KMX搭載機/熟練)
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/Ju87C%E6%94%B9%E4%BA%8C%28KMX%E6%90%AD%E8%BC%89%E6%A9%9F%29
// https://wikiwiki.jp/kancolle/Ju87C%E6%94%B9%E4%BA%8C%28KMX%E6%90%AD%E8%BC%89%E6%A9%9F%EF%BC%8F%E7%86%9F%E7%B7%B4%29

const bonusGrafZeppelinAquila = {
    ship: {
        isID: [
            353, // Graf Zeppelin改
            365, // Aquila改
        ]
    },
    bonus: {
        fire: 1,
        evasion: 1,
    }
}
const bonusGambierBay = {
    ship: {
        isID: [
            396, // Gambier Bay改
        ]
    },
    bonus: {
        evasion: 1,
    }
}
const bonusTaiyou = {
    ship: {
        isID: [
            380, // 大鷹改
            529, // 大鷹改二
        ]
    },
    bonus: {
        asw: 1,
        evasion: 1,
    }
}
const bonusShinyou = {
    ship: {
        isID: [
            381, // 神鷹改
            536, // 神鷹改二
        ]
    },
    bonus: {
        asw: 3,
        evasion: 2,
    }
}

module.exports = [

    // Ju87C改二(KMX搭載機)
    {
        equipment: 305,
        ...bonusGrafZeppelinAquila
    },
    {
        equipment: 305,
        ...bonusGambierBay
    },
    {
        equipment: 305,
        ...bonusTaiyou
    },
    {
        equipment: 305,
        ...bonusShinyou
    },

    // Ju87C改二(KMX搭載機/熟練)
    {
        equipment: 306,
        ...bonusGrafZeppelinAquila
    },
    {
        equipment: 306,
        ...bonusGambierBay
    },
    {
        equipment: 306,
        ...bonusTaiyou
    },
    {
        equipment: 306,
        ...bonusShinyou
    },

    // ------------------------------------------------------------------------

]
