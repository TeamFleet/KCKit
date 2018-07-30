/**
 * 装备额外属性收益 - 16inch Mk.I三連装砲 (Series)
 * [298] 16inch Mk.I三連装砲
 * [299] 16inch Mk.I三連装砲＋AFCT改
 * [300] 16inch Mk.I三連装砲改＋FCR type284
 * 
 * @module
 */

const bonusWarspiteKai = {
    ship: {
        isID: [364]
    },
    bonus: {
        fire: 2,
        armor: 1,
        evasion: -2,
    }
}
const bonusKongouKaiNi = {
    ship: {
        isID: [149]
    },
    bonus: {
        fire: 1,
        armor: 1,
        evasion: -3,
    }
}

module.exports = [

    // @ Warspite改
    {
        equipment: 298,
        ...bonusWarspiteKai
    },
    {
        equipment: 299,
        ...bonusWarspiteKai
    },
    {
        equipment: 300,
        ...bonusWarspiteKai
    },

    // @ 金剛改二
    {
        equipment: 298,
        ...bonusKongouKaiNi
    },
    {
        equipment: 299,
        ...bonusKongouKaiNi
    },
    {
        equipment: 300,
        ...bonusKongouKaiNi
    },

    // ------------------------------------------------------------------------

]
