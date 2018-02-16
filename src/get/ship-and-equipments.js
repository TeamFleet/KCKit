const getShip = require('./ship')
const getEquipment = require('./equipment')

const maxSlotsPlusExtra = 5

module.exports = (
    ship,
    equipments = [],
    equipmentStars = [],
    equipmentRanks = [],
) => {
    ship = getShip(ship)
    equipments = [
        ...Array(Math.max(
            maxSlotsPlusExtra,
            ship.slot.length + 1
        ))
    ].map(
        (_, index) => {
            if (!ship) return undefined
            if (ship.slot.length <= index && index < 4) return undefined
            return getEquipment(equipments[index]) || undefined
            // if (!equipment) return undefined
            // if (equipmentStars[index]) equipment.star = equipmentStars[index]
            // if (equipmentRanks[index]) equipment.rank = equipmentRanks[index]
            // return equipment
        }
    )
    return {
        ship,
        equipments,
        equipmentStars: equipments.map(
            (_, index) =>
                typeof equipments[index] === 'object'
                    ? Math.min(10, equipmentStars[index] || 0)
                    : undefined
        ),
        equipmentRanks: equipments.map(
            (_, index) =>
                typeof equipments[index] === 'object'
                    ? Math.min(7, equipmentRanks[index] || 0)
                    : undefined
        ),
    }
}
