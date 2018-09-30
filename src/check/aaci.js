// const getShip = require('../get/ship')
// const getEquipment = require('../get/equipment')

const checkShip = require('./ship')
const checkEquipments = require('./equipments')

const dataAACI = require('../data/aaci')

/**
 * 检查舰娘和装备是否满足给定条件。如果提供了 AACI 类型，则返回是否满足该类型的条件；如果没有提供，则返回满足条件的 AACI ID
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 要判断的装备列表
 * @param {(number|number[])} aaciID 要判断的 AACI 类型
 */
module.exports = (ship, equipments, aaciID) => {
    if (typeof ship === 'undefined') return false

    const hasEquipments = Array.isArray(equipments)
    const _checkEquipments = (conditions) => {
        if (!hasEquipments) return true
        return checkEquipments(equipments, conditions)
    }
    
    const check = id => {
        if (Array.isArray(dataAACI[id].conditions)) {
            return dataAACI[id].conditions.some(condition => (
                checkSingleCondition(condition)
            ))
        }
        return checkSingleCondition(dataAACI[id])
    }
    const checkSingleCondition = condition => (
        checkShip(ship, condition.ship) &&
        _checkEquipments(condition.equipments)
    )

    if (typeof aaciID === 'undefined') {
        // if (ship == 478)
        //     console.log(
        //         ship,
        //         equipments,
        //         result.map(d => d.id)
        //     )
        // console.log('\r\n\r\n\r\n')

        return Object.keys(dataAACI)
            .filter(check)
            .map(id => dataAACI[id])
            .sort((a, b) => {
                if (a.fixed !== b.fixed)
                    return b.fixed - a.fixed
                if (a.modifier !== b.modifier)
                    return b.modifier - a.modifier
                return b.id - a.id
            })
    } else if (typeof aaciID === 'number') {
        return (check(aaciID))
    } else if (Array.isArray(aaciID)) {
        return aaciID.every(check)
    }
}
