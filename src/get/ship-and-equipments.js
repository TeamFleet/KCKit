const getShip = require('./ship')
const getEquipment = require('./equipment')

const maxSlotsPlusExtra = 5

module.exports = (ship, equipments = []) => {
    ship = getShip(ship)
    return {
        ship: ship,
        equipments: [...Array(maxSlotsPlusExtra)].map(
            (_, index) => {
                if (!ship) return undefined
                if (ship.slot.length <= index && index !== 4) return undefined
                return getEquipment(equipments[index]) || undefined
            }
        ),
        // equipments: equipments.map(equipment => getEquipment(equipment))
    }
}