const getShipAndEquipments = require('../../get/ship-and-equipments')

/**
 * 计算舰娘航速
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {(number|Equipment[])} [equipments] 装备列表
 * @return {number} 航速ID
 */
module.exports = (
    ship,
    equipments = []
    // equipmentStars = [],
    // equipmentRanks = []
) => {
    ({ ship, equipments } = getShipAndEquipments(ship, equipments))
}
