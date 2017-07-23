const getEquipment = require('../get/equipment')
const equipmentTypes = require('../types/equipments')
const { ArrayOrItem, ArrayOrItemAll } = require('./helpers')

/**
 * 检查装备是否满足给定条件
 * 
 * @param {(number|Equipment)} equipment 要判断的装备
 * @param {any} [conditions={}] 条件，需满足所有条件
 * @param {(number|number[])} [conditions.isID] 判断装备ID是否精确匹配或匹配其中一项
 * @param {(number|number[])} [conditions.isNotID] 判断装备ID是否不匹配
 * @param {(string|string[])} [conditions.isName] 判断装备名是否精确匹配或匹配其中一项
 * @param {(string|string[])} [conditions.isNotName] 判断装备名是否不匹配
 * @param {(string|string[])} [conditions.isNameOf] 判断装备名片段是否匹配或匹配其中一项
 * @param {(string|string[])} [conditions.isNotNameOf] 判断装备名片段是否不匹配
 * @param {(number|number[])} [conditions.isType] 判断装备是否属于给定舰种或匹配其中一项
 * @param {(number|number[])} [conditions.isNotType] 判断装备是否不属于给定舰种
 */
module.exports = (equipment, conditions = {}) => {
    equipment = getEquipment(equipment)
    if (typeof equipment === 'undefined') return false

    // 需满足所有条件
    for (let key in conditions) {
        if (checkCondition[key.toLowerCase()]) {
            // checkCondition 中存在该条件，直接运行
            if (!checkCondition[key.toLowerCase()](equipment, conditions[key]))
                return false
        } else if (key.substr(0, 2) === 'is') {
            // 以 is 为开头，通常为检查装备类型
            let typeName = key.substr(2)
            if (typeName === 'HAMountAAFD') {
                typeName = 'HAMountsAAFD'
            } else if (typeName + 's' in equipmentTypes) {
                typeName = typeName + 's'
            } else if (typeName in equipmentTypes) {
                typeName = typeName
            } else {
                return false
            }
            if (!checkCondition[
                conditions[key] === true ? 'istype' : 'isnottype'
            ](equipment, equipmentTypes[typeName]))
                return false
        }
    }

    return true
}

const checkCondition = {
    // isID
    isid: (equipment, id) => ArrayOrItem(id, id => {
        if (isNaN(id)) return false
        return parseInt(id) === equipment.id
    }),
    isnotid: (equipment, id) => ArrayOrItemAll(id, id => {
        if (isNaN(id)) return false
        return parseInt(id) !== equipment.id
    }),

    // isName
    isname: (equipment, name) => ArrayOrItem(name, name => {
        for (let key in equipment.name) {
            if (key === 'suffix') continue
            if (equipment.name[key] === name) return true
        }
        return false
    }),
    isnotname: (equipment, name) => ArrayOrItemAll(name, name => {
        for (let key in equipment.name) {
            if (key === 'suffix') continue
            if (equipment.name[key] === name) return false
        }
        return true
    }),

    // isNameOf
    isnameof: (equipment, name) => ArrayOrItem(name, name => {
        for (let key in equipment.name) {
            if (key === 'suffix') continue
            if (equipment.name[key].includes(name)) return true
        }
        return false
    }),
    isnotnameof: (equipment, name) => ArrayOrItemAll(name, name => {
        for (let key in equipment.name) {
            if (key === 'suffix') continue
            if (equipment.name[key].includes(name)) return false
        }
        return true
    }),

    // isType
    istype: (equipment, type) => ArrayOrItem(type, type => {
        if (isNaN(type)) return false
        return parseInt(type) === equipment.type
    }),
    isnottype: (equipment, type) => ArrayOrItemAll(type, type => {
        if (isNaN(type)) return false
        return parseInt(type) !== equipment.type
    }),
    isaaradar: function (equipment, isTrue) {
        return ((
            this.istype(equipment, equipmentTypes.Radars)
            && !isNaN(equipment.stat.aa)
            && equipment.stat.aa > 0
        ) === isTrue)
    },
}