const getShipAndEquipments = require('../../get/ship-and-equipments')
const checkOASW = require('../../check/oasw')
const checkEquipments = require('../../check/equipments')
const { maxShipLv } = require('../../variables')

/**
 * 计算舰娘能执行先制反潜的等级
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[]|boolean)} [equipments] 装备列表
 * @return {number|boolean} 等级。如果不能执行，则返回false。如果无条件执行，则返回true
 */

module.exports = (ship, equipments) => {
    ({ ship, equipments } = getShipAndEquipments(ship, equipments))
    const OASWs = checkOASW(ship)

    if (typeof OASWs === 'boolean') return OASWs
    if (Array.isArray(OASWs)) {
        let resultLevel = maxShipLv + 1
        const base = ship.stat.asw
        const max = ship.stat.asw_max
        OASWs.filter(OASW => (
            OASW.shipWithEquipments &&
            OASW.shipWithEquipments.hasStat &&
            OASW.shipWithEquipments.hasStat.asw)
        )
            .forEach(OASW => {
                if (OASW.equipments) {
                    if (!checkEquipments(equipments, OASW.equipments))
                        return
                }
                let value = equipments.reduce((requiredASW, equipment) => {
                    if (equipment)
                        return requiredASW - equipment.stat.asw
                    return requiredASW
                }, OASW.shipWithEquipments.hasStat.asw)

                const thisMinLv = Math.ceil((value - base) * 99 / (max - base))
                resultLevel = Math.min(thisMinLv, resultLevel)
            })

        if (resultLevel > maxShipLv)
            return false
        if (resultLevel < ship._minLv)
            return ship._minLv
        return resultLevel
    } else {
        return false
    }
}
