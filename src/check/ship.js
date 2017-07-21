const getShip = require('../get/ship')

/**
 * 检查舰娘是否满足给定条件
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {any} [conditions={}] 条件
 * @param {(number|number[])} [conditions.isID] 判断舰娘ID是否精确匹配或匹配其中一项
 * @param {(string|string[])} [conditions.isName] 判断舰娘名是否精确匹配或匹配其中一项
 * @param {(number|number[])} [conditions.isType] 判断舰娘是否属于给定舰种或匹配其中一项
 * @param {(number|number[])} [conditions.isClass] 判断舰娘是否属于给定舰级或匹配其中一项
 * @param {boolean} [conditions.isBattleship]
 * @param {boolean} [conditions.isBB]
 * @param {boolean} [conditions.isCarrier]
 * @param {boolean} [conditions.isCV]
 * @param {boolean} [conditions.isSubmarine]
 * @param {boolean} [conditions.isSS]
 * @param {number|[min,max]} [conditions.isSlot] 判断舰娘的可配置栏位精确有 number 个，或 min ~ max 个
 * @param {number} [conditions.isSlotMin] 判断舰娘的可配置栏位至少有 number 个
 * @param {number} [conditions.isSlotMax] 判断舰娘的可配置栏位最多有 number 个
 */
module.exports = (ship, conditions = {}) => {
    ship = getShip(ship)
    if (typeof ship === 'undefined') return false

    for (let key in conditions) {
        if (!checkCondition[key.toLowerCase()](ship, conditions[key]))
            return false
    }

    return true
}

const ArrayOrItem = (arg, func) => {
    if (Array.isArray(arg))
        return arg.some(func)
    return func(arg)
}

const checkCondition = {
    // isID
    isid: (ship, id) => ArrayOrItem(id, id => {
        if (isNaN(id)) return false
        return parseInt(id) === ship.id
    }),

    // isName
    isname: (ship, name) => ArrayOrItem(name, name => {
        for (let key in ship.name) {
            if (key === 'suffix') continue
            if (ship.name[key].toLowerCase() === name) return true
        }
        return false
    }),

    // isClass
    isclass: (ship, Class) => ArrayOrItem(Class, Class => {
        if (isNaN(Class)) return false
        return parseInt(Class) === ship.class
    }),

    // isType
    istype: (ship, type) => ArrayOrItem(type, type => {
        if (isNaN(type)) return false
        return parseInt(type) === ship.type
    }),
    isbattleship: function (ship, isTrue) {
        return (this.istype(ship, [8, 6, 20, 7, 18]) === isTrue)
    },
    isbb: function (ship, isTrue) {
        return this.isbattleship(ship, isTrue)
    },
    iscarrier: function (ship, isTrue) {
        return (this.istype(ship, [11, 10, 9, 30, 32]) === isTrue)
    },
    iscv: function (ship, isTrue) {
        return this.iscarrier(ship, isTrue)
    },
    issubmarine: function (ship, isTrue) {
        return (this.istype(ship, [14, 13]) === isTrue)
    },
    isss: function (ship, isTrue) {
        return this.issubmarine(ship, isTrue)
    },

    // isSlot
    isslot: (ship, num) => {
        if (!Array.isArray(ship.slot)) return false
        if (Array.isArray(num)) {
            if (isNaN(num[0]) && !isNaN(num[1]))
                return ship.slot.length <= parseInt(num[1])
            else if (!isNaN(num[0]) && isNaN(num[1]))
                return ship.slot.length >= parseInt(num[0])
            else if (!isNaN(num[0]) && !isNaN(num[1]))
                return ship.slot.length >= parseInt(num[0]) && ship.slot.length <= parseInt(num[1])
            else
                return false
        } else
            return !isNaN(num) && parseInt(num) === ship.slot.length
    },
    isslotmin: function (ship, min) {
        return this.isslot(ship, [min, undefined])
    },
    isslotmax: function (ship, max) {
        return this.isslot(ship, [undefined, max])
    },
}