const getShipAndEquipments = require('../get/ship-and-equipments')
const checkShip = require('../check/ship')
const checkEquipments = require('../check/equipments')
const bonus = require('../data/bonus')

/**
 * Calculate stat bonus for specified ship with equipment(s)
 */
const calculateBonus = (
    ship,
    equipments = [],
    equipmentStars = [],
    equipmentRanks = [],
    stat,
) => {
    if (typeof equipmentStars === 'string')
        return calculateBonus(ship, equipments, undefined, undefined, equipmentStars);

    ({
        ship, equipments, equipmentStars, equipmentRanks
    } = getShipAndEquipments(ship, equipments, equipmentStars, equipmentRanks))

    const result = {}
    const conditions = bonus.filter(bonus => checkShip(ship, bonus.ship))
    const addResult = (bonus = {}) => {
        for (let stat in bonus) {
            if (typeof result[stat] === 'undefined')
                result[stat] = bonus[stat]
            else
                result[stat] += bonus[stat]
        }
    }

    // condition: single equipment
    conditions
        .filter(bonus => (
            typeof bonus.equipment === 'number' &&
            equipments.some(equipment => (
                equipment && equipment.id &&
                equipment.id == bonus.equipment
            ))
        ))
        .forEach(bonus => {
            let thisBonus = {}

            if (typeof bonus.bonusImprove === 'object') {
                const starsDesc = Object
                    .keys(bonus.bonusImprove)
                    .sort((a, b) => parseInt(b) - parseInt(a))
                equipments.forEach((equipment, index) => {
                    if (equipment && equipment.id &&
                        equipment.id == bonus.equipment
                    ) {
                        starsDesc.some(star => {
                            if (equipmentStars[index] >= star) {
                                for (let stat in bonus.bonusImprove[star]) {
                                    if (typeof thisBonus[stat] === 'undefined')
                                        thisBonus[stat] = bonus.bonusImprove[star][stat]
                                    else
                                        thisBonus[stat] += bonus.bonusImprove[star][stat]
                                }
                                return true
                            }
                            return false
                        })
                    }
                })
            } else {
                let thisCount = 0

                // count for equipment
                equipments.forEach(equipment => {
                    if (equipment && equipment.id &&
                        equipment.id == bonus.equipment
                    ) {
                        thisCount++
                    }
                })

                if (typeof bonus.bonusCount === 'object') {
                    Object
                        .keys(bonus.bonusCount)
                        .sort((a, b) => parseInt(b) - parseInt(a))
                        .some(count => {
                            if (thisCount >= count) {
                                thisBonus = { ...bonus.bonusCount[count] }
                                return true
                            }
                            return false
                        })
                } else if (typeof bonus.bonus === 'object') {
                    thisBonus = { ...bonus.bonus }
                    // add for count
                    for (let stat in thisBonus)
                        thisBonus[stat] = thisBonus[stat] * thisCount
                }
            }

            addResult(thisBonus)
        })

    // condition: equipment-set
    conditions
        .filter(bonus => (
            typeof bonus.equipments === 'object' &&
            checkEquipments(equipments, bonus.equipments)
        ))
        .forEach(bonus => {
            addResult(bonus.bonus)
        })

    if (typeof stat === 'string')
        return result[stat] || 0

    return result
}

module.exports = calculateBonus