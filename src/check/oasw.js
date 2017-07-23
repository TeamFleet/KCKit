const getShip = require('../get/ship')
// const getEquipment = require('../get/equipment')

const checkShip = require('./ship')
const checkEquipments = require('./equipments')

const equipmentTypes = require('../types/equipments')

const dataOASW = require('../data/oasw')
const { maxShipLv } = require('../variables')

const bestSonarASW = 12
const bestLargeSonarASW = 11

/**
 * 检查舰娘和装备是否满足给定条件
 * 如果只提供了舰娘，则返回该舰可执行 OASW 的条件列表，如果该舰不可执行 OASW 则返回 false
 * 如果也提供了装备列表，则返回是否可执行 OASW (true / false)
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 要判断的装备列表
 */
module.exports = (ship, equipments) => {
    ship = getShip(ship)
    if (typeof ship === 'undefined') return false

    const hasEquipments = Array.isArray(equipments) && equipments.length
    // const _checkEquipments = (conditions) => {
    //     if (!hasEquipments) return true
    //     return checkEquipments(equipments, conditions)
    // }
    // const check = id => checkShip(ship, dataAACI[id].ship) && _checkEquipments(dataAACI[id].equipments)
    const check = OASW => {
        let requireSonar = false
        let minLv

        if (!checkShip(ship, OASW.ship))
            return false
        if (hasEquipments && !checkEquipments(equipments, OASW.equipments))
            return false
        if (hasEquipments && OASW.shipWithEquipments) {

        }
        if (!hasEquipments && OASW.equipments) {
            for (let key in OASW.equipments) {
                if (key.substr(0, 3) === 'has') {
                    // 以 has 为开头，通常为检查装备类型
                    // 如果该舰不能装备该类型，则不能执行该类 OASW
                    let typeName = key.substr(3)
                    let types
                    if (typeName === 'Sonar' || typeName === 'Sonars')
                        requireSonar = true
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
        if (!hasEquipments && OASW.shipWithEquipments) {
            if (OASW.shipWithEquipments.hasStat) {
                const slots = ship.slot.length
                for (let stat in OASW.shipWithEquipments.hasStat) {
                    let value = OASW.shipWithEquipments.hasStat[stat]
                    const base = ship.stat[stat]
                    if (!base || base <= 0) return false
                    const max = ship.stat[stat + '_max']
                    if (typeof max !== 'undefined') {
                        if (!max || max <= 0) return false
                        if (stat === 'asw') {
                            if (ship.canEquip(equipmentTypes.Sonar))
                                value -= bestSonarASW * slots
                            if (ship.canEquip(equipmentTypes.LargeSonar))
                                value -= bestLargeSonarASW * slots
                            const thisMinLv = Math.floor((value - base) * 99 / (max - base))
                            if (thisMinLv > maxShipLv) return false
                            if (minLv) minLv = Math.max(minLv, thisMinLv)
                            else minLv = thisMinLv
                            // minLv = Math.max(thisMinLv, ship._minLv)
                        }
                    } else if (base < value) {
                        return false
                    }
                }
            }
            // lv1 + (lv99 - lv1) * x / 99 = 100
            // x = Math.floor( (100 - y - lv1) * 99 / (lv99 - lv1) )
            // ship.slot.length
        }
        if (minLv && minLv <= ship._minLv) minLv = undefined
        return minLv || true
    }

    if (hasEquipments)
        return dataOASW.some(check)

    const result = []
    dataOASW.forEach(OASW => {
        const r = check(OASW)
        if (r && r !== true)
            result.push(Object.assign({
                minLv: r
            }, OASW))
        else if (r)
            result.push(OASW)
    })
    if (Array.isArray(result) && result.length)
        return result

    return false

    // if (typeof aaciID === 'undefined') {
    //     let result = []

    //     for (let id in dataAACI) {
    //         if (check(id))
    //             result.push(dataAACI[id])
    //     }

    //     return result.sort((a, b) => {
    //         if (a.fixed !== b.fixed)
    //             return b.fixed - a.fixed
    //         if (a.modifier !== b.modifier)
    //             return b.modifier - a.modifier
    //         return b.id - a.id
    //     })
    // } else if (typeof aaciID === 'number') {
    //     return (check(aaciID))
    // } else if (Array.isArray(aaciID)) {
    //     return aaciID.every(check)
    // }
}