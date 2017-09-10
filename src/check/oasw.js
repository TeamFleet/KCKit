const getShip = require('../get/ship')
// const getEquipment = require('../get/equipment')

const checkShip = require('./ship')
const checkEquipments = require('./equipments')

const equipmentTypes = require('../types/equipments')

const dataOASW = require('../data/oasw')
const { maxShipLv } = require('../variables')

const equipmentStatASW = {
    bestSonar: 12,
    bestLargeSonar: 11,
    "九七式艦攻(九三一空)": 7,
    "天山(九三一空)": 8,
    "Swordfish Mk.III(熟練)": 10
}

/**
 * 检查舰娘和装备是否满足给定条件
 * 如果只提供了舰娘，则返回该舰可执行 OASW 的条件列表，按需要的对潜属性顺序排列。
 * 如果该舰不可执行 OASW 则返回 false。
 * 特例：如果直接满足了其中一个条件，则返回 true
 * 如果也提供了装备列表，则返回是否可执行 OASW (true / false)
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 要判断的装备列表
 */
module.exports = (ship, equipments) => {
    ship = getShip(ship)
    if (typeof ship === 'undefined') return false

    let meetRequirement = false

    const hasEquipments = Array.isArray(equipments)
    // const _checkEquipments = (conditions) => {
    //     if (!hasEquipments) return true
    //     return checkEquipments(equipments, conditions)
    // }
    // const check = id => checkShip(ship, dataAACI[id].ship) && _checkEquipments(dataAACI[id].equipments)
    const check = OASW => {
        if (meetRequirement) return

        // let requireSonar = false
        // let require九三一空 = false
        let minLv

        if (!checkShip(ship, OASW.ship))
            return false
        if (hasEquipments && !checkEquipments(equipments, OASW.equipments))
            return false
        if (!hasEquipments
            && ((OASW.ship && OASW.ship.minLevel && ship._minLv >= OASW.ship.minLevel)
                || !OASW.ship
                || !OASW.ship.minLevel
            )
            && !OASW.equipments
            && !OASW.shipWithEquipments
        ) {
            meetRequirement = true
            return true
        }
        if (hasEquipments && OASW.shipWithEquipments) {

        }
        if (!hasEquipments && OASW.equipments) {
            for (let key in OASW.equipments) {
                /*if (key === 'hasNameOf' && OASW.equipments === '九三一空') {
                    require九三一空 = true
                } else */if (key.substr(0, 3) === 'has') {
                    // 以 has 为开头，通常为检查装备类型
                    // 如果该舰不能装备该类型，则不能执行该类 OASW
                    let typeName = key.substr(3)
                    let types
                    // if (typeName === 'Sonar' || typeName === 'Sonars')
                    //     requireSonar = true
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
                    if (typeof base === 'undefined' || base === false || base < 0) return false
                    const max = ship.stat[stat + '_max']
                    if (typeof max !== 'undefined') {
                        if (!max || max <= 0) return false
                        if (stat === 'asw') {
                            if (ship.canEquip(equipmentTypes.Sonar))
                                value -= equipmentStatASW.bestSonar * slots
                            else if (ship.canEquip(equipmentTypes.LargeSonar))
                                value -= equipmentStatASW.bestLargeSonar * slots
                            else if (ship.canEquip(equipmentTypes.TorpedoBomber))
                                value -= (
                                    equipmentStatASW["Swordfish Mk.III(熟練)"]
                                    + equipmentStatASW["天山(九三一空)"]
                                    + equipmentStatASW["九七式艦攻(九三一空)"] * (slots - 2)
                                )
                            const thisMinLv = Math.ceil((value - base) * 99 / (max - base))
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
    if (meetRequirement) return true
    if (Array.isArray(result) && result.length)
        return result.sort((a, b) => {
            if (a.shipWithEquipments && a.shipWithEquipments.hasStat && a.shipWithEquipments.hasStat.asw
                && b.shipWithEquipments && b.shipWithEquipments.hasStat && b.shipWithEquipments.hasStat.asw)
                return a.shipWithEquipments.hasStat.asw - b.shipWithEquipments.hasStat.asw
            if (a.shipWithEquipments && a.shipWithEquipments.hasStat && a.shipWithEquipments.hasStat.asw
                && (!b.shipWithEquipments || !b.shipWithEquipments.hasStat || !b.shipWithEquipments.hasStat.asw))
                return 1
            if ((!a.shipWithEquipments || !a.shipWithEquipments.hasStat || !a.shipWithEquipments.hasStat.asw)
                && b.shipWithEquipments && b.shipWithEquipments.hasStat && b.shipWithEquipments.hasStat.asw)
                return -1
            return 1
        })

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