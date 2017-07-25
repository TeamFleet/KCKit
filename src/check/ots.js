const getShip = require('../get/ship')
// const getEquipment = require('../get/equipment')

const checkShip = require('./ship')
const checkEquipments = require('./equipments')

const equipmentTypes = require('../types/equipments')

const dataOTS = require('../data/ots')

/**
 * 检查舰娘和装备是否满足给定条件
 * 如果只提供了舰娘，则返回该舰可执行 OTS 的条件列表。如果该舰不可执行 OTS 则返回 false。特例：如果直接满足了其中一个条件，则返回 true
 * 如果也提供了装备列表，则返回是否可执行 OTS (true / false)
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 要判断的装备列表
 * @return {(array|boolean)}
 */
module.exports = (ship, equipments) => {
    ship = getShip(ship)
    if (typeof ship === 'undefined') return false

    let meetRequirement = false

    const hasEquipments = Array.isArray(equipments)
    const check = OTS => {
        if (meetRequirement) return
        if (!checkShip(ship, OTS.ship))
            return false
        if (hasEquipments && !checkEquipments(equipments, OTS.equipments))
            return false
        if (!hasEquipments
            && ((OTS.ship && OTS.ship.minLevel && ship._minLv >= OTS.ship.minLevel)
                || !OTS.ship
                || !OTS.ship.minLevel
            )
            && !OTS.equipments
            && !OTS.shipWithEquipments
        ) {
            meetRequirement = true
            return true
        }
        if (!hasEquipments && OTS.equipments) {
            for (let key in OTS.equipments) {
                if (key.substr(0, 3) === 'has') {
                    // 以 has 为开头，通常为检查装备类型
                    // 如果该舰不能装备该类型，则不能执行该类 OTS
                    let typeName = key.substr(3)
                    let types
                    if (typeName === 'HAMountAAFD') {
                        types = equipmentTypes['HAMountsAAFD']
                    } else if (typeName + 's' in equipmentTypes) {
                        types = equipmentTypes[typeName + 's']
                    } else if (typeName in equipmentTypes) {
                        types = equipmentTypes[typeName]
                    }
                    if (Array.isArray(types)) {
                        if (!types.some(type => ship.canEquip(type)))
                            return false
                    } else if (!isNaN(types)) {
                        if (!ship.canEquip(types))
                            return false
                    }
                }
            }
        }
        return true
    }

    if (hasEquipments)
        return dataOTS.some(check)

    const result = dataOTS.filter(check)
    if (meetRequirement) return true
    if (Array.isArray(result) && result.length)
        return result

    return false
}