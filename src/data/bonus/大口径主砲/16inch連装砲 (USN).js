/**
 * @module
 * 装备额外属性收益
 * 330. **16inch Mk.I連装砲**
 * 331. **16inch Mk.V連装砲**
 * 332. **16inch Mk.VIII連装砲改**
 */

// https://wikiwiki.jp/kancolle/16inch%20Mk.I%E9%80%A3%E8%A3%85%E7%A0%B2
// https://wikiwiki.jp/kancolle/16inch%20Mk.V%E9%80%A3%E8%A3%85%E7%A0%B2
// https://wikiwiki.jp/kancolle/16inch%20Mk.VIII%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9

const {
    BB_NagatoClassRemodel, BB_NagatoClass2ndRemodel,
    BB_NelsonClassRemodel
} = require('../../ships')

const equipments = [
    330, 331, 332
]
const bonuses = [
    {
        ship: {
            isID: BB_NagatoClassRemodel
        },
        bonus: {
            fire: 1,
        }
    },
    {
        ship: {
            isID: [
                ...BB_NagatoClass2ndRemodel,
                ...BB_NelsonClassRemodel
            ]
        },
        bonus: {
            fire: 2,
        }
    }
]

// module.exports = equipments.flatMap(equipment => bonuses.map(bonus => ({
//     equipment,
//     ...bonus
// })))
const results = []
equipments.forEach(equipment => {
    bonuses.forEach(bonus => {
        results.push({
            equipment,
            ...bonus
        })
    })
})
module.exports = results
