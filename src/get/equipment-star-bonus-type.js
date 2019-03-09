const getEquipment = require('./equipment')
const equipmentStarBonus = require('../data/equipment-star-bonus')
const equipmentTypes = require('../types/equipments')

/**
 * 获取装备改修收益类型对象
 * @param {(Equipment|Number)} equipment 装备
 * @param {[String]} bonusType 收益属性
 * @returns {Number} 收益类型对象。如果提供类型，仅返回该类型的收益
 */
module.exports = (equipment, bonusType) => {

    initEquipmentStarBonusObject()

    const thisEquipment = getEquipment(equipment)
    const result = Object.assign(
        {},
        equipmentStarBonus[thisEquipment.type],
        equipmentStarBonus[`_${thisEquipment.id}`]
    )

    if (bonusType)
        return result[bonusType] || 0
    return result
}

/**
 * 初始化装备属性收益表
 */
const initEquipmentStarBonusObject = () => {

    // 如果 equipmentType 以 _ 开头，如 _123，则代表第 123 号装备，而非装备类型
    if (!equipmentStarBonus.isInit) {
        Object.keys(equipmentStarBonus).forEach(key => {
            if (Array.isArray(equipmentTypes[key])) {
                // 装备类型集合
                equipmentTypes[key].forEach(typeId => {
                    equipmentStarBonus[typeId] = equipmentStarBonus[key]
                })
            } else if (typeof equipmentTypes[key] === 'number') {
                // 单一装备类型
                equipmentStarBonus[equipmentTypes[key]] = equipmentStarBonus[key]
            }
        })
        Object.defineProperty(equipmentStarBonus, 'isInit', {
            value: true
        })
    }

    return equipmentStarBonus
}
