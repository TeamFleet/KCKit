/**
 * 装备额外属性收益 - 16inch Mk.I三連装砲 (Series)
 * [298] 16inch Mk.I三連装砲
 * [299] 16inch Mk.I三連装砲＋AFCT改
 * [300] 16inch Mk.I三連装砲改＋FCR type284
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/16inch%20Mk.I%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
// https://wikiwiki.jp/kancolle/16inch%20Mk.I%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%EF%BC%8BAFCT%E6%94%B9
// https://wikiwiki.jp/kancolle/16inch%20Mk.I%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%EF%BC%8BFCR%20type284

const {
    BB_QueenElizabeth,
    BB_Nelson,
} = require('../../ship-classes')

const bonusNelson = {
    ship: {
        isClass: [BB_Nelson]
    },
    bonus: {
        fire: 2,
        armor: 1,
    }
}
const bonusWarspite = {
    ship: {
        isClass: [BB_QueenElizabeth]
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

const result = [];
[
    298, 299, 300,
].forEach(equipmentId => {
    result.push({
        equipment: equipmentId,
        ...bonusKongouKaiNi
    })
    result.push({
        equipment: equipmentId,
        ...bonusWarspite
    })
    result.push({
        equipment: equipmentId,
        ...bonusNelson
    })
})

module.exports = result
