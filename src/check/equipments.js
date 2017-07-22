const getEquipment = require('../get/equipment')

/**
 * 检查装备列表是否满足给定条件
 * 
 * @param {(number[]|Equipment[])} equipments 要判断的装备列表
 * @param {any} [conditions={}] 条件
 */
const check = (equipments, conditions = {}) => {
    if (!Array.isArray(equipments))
        return check([equipments], conditions)

    return true

    // ship = getShip(ship)
    // if (typeof ship === 'undefined') return false

    // for (let key in conditions) {
    //     if (!checkCondition[key.toLowerCase()](ship, conditions[key]))
    //         return false
    // }

    // return true
}
module.exports = check