const equipmentTypes = require('../types/equipments')
const getShipType = require('../get/ship-type')
const getEquipmentType = require('../get/equipment-type')

/**
 * 计算TP
 * 
 * @param {Object} count
 * @param {Object} [count.shipType = {}] 数量：按舰娘类型
 * @param {Object} [count.equipmentType = {}] 数量：按装备类型
 * @return {number} TP值
 */

module.exports = (count = {}) => {
    const ship =
        count.shipType ||
        count.shipTypes ||
        count.ship ||
        count.ships ||
        {}
    const equipment =
        count.equipmentType ||
        count.equipmentTypes ||
        count.equipment ||
        count.equipments ||
        {}

    let tp = 0

    for (const id in ship) {
        const type = getShipType(id)
        if (type) {
            tp += (type.tp || 0) * ship[id]
        }
    }

    for (const id in equipment) {
        const type = isNaN(id)
            ? (
                equipmentTypes[id]
                    ? getEquipmentType(equipmentTypes[id])
                    : undefined
            )
            : getEquipmentType(id)
        if (type) {
            tp += (type.tp || 0) * equipment[id]
        }
    }

    return tp
}