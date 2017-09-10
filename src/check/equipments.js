const getEquipment = require('../get/equipment')
const checkEquipment = require('./equipment')

const checkListStatic = [
    'id',
    'name',
    'nameof',
    'type'
]

/**
 * 检查装备列表是否满足给定条件
 * 
 * @param {(number[]|Equipment[])} equipments 要判断的装备列表
 * @param {any} [conditions={}] 条件，需满足所有条件
 */
const check = (equipments, conditions = {}) => {
    if (!Array.isArray(equipments))
        return check([equipments], conditions)

    // 需满足所有条件
    for (let key in conditions) {
        if (conditions[key] === false) {
            // 条件：不存在
            if (!equipments.every(
                equipment => checkEquipment(equipment, {
                    [key.replace(/^has/, 'is')]: conditions[key]
                })
            ))
                return false
        } else if (conditions[key] === true) {
            // 条件：存在
            if (!equipments.some(
                equipment => checkEquipment(equipment, {
                    [key.replace(/^has/, 'is')]: conditions[key]
                })
            ))
                return false
        } else if (key.substr(0, 3) === 'has' && checkListStatic.includes(key.substr(3).toLowerCase())) {
            // 条件：checkListStatic 中的项目
            if (Array.isArray(conditions[key])) {
                if (!conditions[key].every(value => equipments.some(
                    equipment => checkEquipment(equipment, {
                        [key.replace(/^has/, 'is')]: value
                    })
                )))
                    return false
            } else {
                if (!equipments.some(
                    equipment => checkEquipment(equipment, {
                        [key.replace(/^has/, 'is')]: conditions[key]
                    })
                ))
                    return false
            }
        } else if (key.substr(0, 3) === 'has' && typeof conditions[key] === 'object' && !Array.isArray(conditions[key])) {
            // 条件合集
            const thisCondition = Object.assign({}, conditions[key])
            const count = typeof thisCondition.count === 'undefined' ? 1 : thisCondition.count
            delete thisCondition.count
            const filtered = equipments.filter(
                equipment => checkEquipment(equipment, {
                    [key.replace(/^has/, 'is')]: thisCondition
                })
            )
            return filtered.length >= count
        } else if (key.substr(0, 3) === 'has' && !isNaN(conditions[key])) {
            // 条件：有至少 N 个
            const filtered = equipments.filter(
                equipment => checkEquipment(equipment, {
                    [key.replace(/^has/, 'is')]: true
                })
            )
            return filtered.length >= conditions[key]
        } else if (key.substr(0, 3) === 'has' && Array.isArray(conditions[key])) {
            // 条件：有至少 value[0] 个至多 value[1] 个
            const filtered = equipments.filter(
                equipment => checkEquipment(equipment, {
                    [key.replace(/^has/, 'is')]: true
                })
            )
            return filtered.length >= conditions[key][0] && filtered.length <= conditions[key][1]
        }
    }

    return true
}
module.exports = check