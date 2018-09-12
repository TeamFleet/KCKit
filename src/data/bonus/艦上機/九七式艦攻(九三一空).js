/**
 * 装备额外属性收益 - 九七式艦攻(九三一空)
 * 
 * @module
 */

const bonusTaiyou = {
    ship: {
        isID: [
            380, // 大鷹改
            529, // 大鷹改二
            381, // 神鷹改
            536, // 神鷹改二
        ]
    },
    bonus: {
        asw: 1,
        evasion: 1,
    }
}

module.exports = [

    // 九七式艦攻(九三一空)
    {
        equipment: 82,
        ...bonusTaiyou
    },

    // 九七式艦攻(九三一空/熟練)
    {
        equipment: 302,
        ...bonusTaiyou
    },

    // ------------------------------------------------------------------------

]
