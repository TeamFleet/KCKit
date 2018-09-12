/**
 * 装备额外属性收益 - Ju87C改二(KMX搭載機)
 * 
 * @module
 */

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
