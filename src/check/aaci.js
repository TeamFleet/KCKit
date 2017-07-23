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


    const hasEquipments = Array.isArray(equipments) && equipments.length
    const _checkEquipments = (conditions) => {
        if (!hasEquipments) return true
        return checkEquipments(equipments, conditions)
    }
    const check = id => checkShip(ship, dataAACI[id].ship) && _checkEquipments(dataAACI[id].equipments)

    if (typeof aaciID === 'undefined') {
        let result = []

        for (let id in dataAACI) {
            if (check(id))
                result.push(dataAACI[id])
        }

        return result.sort((a, b) => {
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