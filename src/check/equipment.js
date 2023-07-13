const getEquipment = require('../get/equipment');
const equipmentTypes = require('../types/equipments');
const { ArrayOrItem, ArrayOrItemAll } = require('./helpers');

/**
 * 检查装备是否满足给定条件
 *
 * @param {(number|Equipment)} equipment 要判断的装备
 * @param {Number} [star=0] 改修星级
 * @param {Number} [rank=0] 熟练度级别
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
const check = (equipment, star = 0, rank = 0, conditions = {}) => {
    if (typeof star === 'object') return check(equipment, 0, 0, star);

    if (typeof rank === 'object') return check(equipment, star, 0, rank);

    equipment = getEquipment(equipment);
    if (typeof equipment === 'undefined') return false;

    // 需满足所有条件
    for (const key in conditions) {
        if (typeof conditions[key] === 'undefined') continue;

        const keyLowerCase = key.toLowerCase();

        if (['improve', 'improvement', 'star'].includes(keyLowerCase)) {
            return (parseInt(star || 0) || 0) >= parseInt(conditions[key]);
        }

        if (keyLowerCase === 'is') {
            // checkCondition 中存在该条件，直接运行
            if (
                !checkCondition[keyLowerCase](
                    equipment,
                    star,
                    rank,
                    conditions[key]
                )
            ) {
                return false;
            }
        } else if (
            keyLowerCase === 'isoneof' &&
            Array.isArray(conditions[key])
        ) {
            if (
                !conditions[key].some((condition) =>
                    check(equipment, star, rank, condition)
                )
            )
                return false;
        } else if (checkCondition[keyLowerCase]) {
            // checkCondition 中存在该条件，直接运行
            if (!checkCondition[keyLowerCase](equipment, conditions[key]))
                return false;
        } else if (key.substr(0, 2) === 'is') {
            // 以 is 为开头，通常为检查装备类型
            let typeName = key.substr(2);
            if (typeName === 'HAMountAAFD') {
                typeName = 'HAMountsAAFD';
            } else if (typeName + 's' in equipmentTypes) {
                typeName = typeName + 's';
            } else if (typeName in equipmentTypes) {
                // typeName = typeName
            } else {
                return false;
            }
            // console.log(typeName)
            // 条件是否为Object
            const isConditionObj =
                typeof conditions[key] === 'object' &&
                !Array.isArray(conditions[key]);
            const objConditions =
                conditions[key] && isConditionObj ? conditions[key] : undefined;
            if (
                !checkCondition[
                    conditions[key] === true || isConditionObj
                        ? 'istype'
                        : 'isnottype'
                ](equipment, equipmentTypes[typeName], objConditions)
            )
                return false;
        }
    }

    return true;
};

const checkCondition = {
    /**
     * 满足一个特定条件
     * @param {Equipment} equipment
     * @param {number} star
     * @param {number} rank
     * @param {Object} condition 一个特定的条件，必须全部满足才算满足
     */
    is: function (equipment, star = 0, rank = 0, condition = {}) {
        if (condition.id && equipment.id !== condition.id) return false;
        if (condition.star && star < condition.star) return false;
        // console.log(equipment.id, equipment._name, star, rank, condition);
        return true;
    },

    /**
     * 是特定ID
     */
    isid: (equipment, id) =>
        ArrayOrItem(id, (id) => {
            if (isNaN(id)) return false;
            return parseInt(id) === equipment.id;
        }),
    /**
     * 不是特定ID
     */
    isnotid: (equipment, id) =>
        ArrayOrItemAll(id, (id) => {
            if (isNaN(id)) return false;
            return parseInt(id) !== equipment.id;
        }),

    /**
     * 完全匹配特定名称
     */
    isname: (equipment, name) =>
        ArrayOrItem(
            name,
            (name) => equipment.isName(name)
            // for (let key in equipment.name) {
            //     if (key === 'suffix') continue
            //     if (equipment.name[key] === name) return true
            // }
            // return false
        ),
    /**
     * 不是特定名称
     */
    isnotname: (equipment, name) =>
        ArrayOrItemAll(
            name,
            (name) => !equipment.isName(name)
            // for (let key in equipment.name) {
            //     if (key === 'suffix') continue
            //     if (equipment.name[key] === name) return false
            // }
            // return true
        ),

    /**
     * 名称里包含特定字段
     */
    isnameof: (equipment, name) =>
        ArrayOrItem(
            name,
            (name) => equipment.hasName(name)
            // for (let key in equipment.name) {
            //     if (key === 'suffix') continue
            //     if (equipment.name[key].includes(name)) return true
            // }
            // return false
        ),
    /**
     * 名称里不包含特定字段
     */
    isnotnameof: (equipment, name) =>
        ArrayOrItemAll(
            name,
            (name) => !equipment.hasName(name)
            // for (let key in equipment.name) {
            //     if (key === 'suffix') continue
            //     if (equipment.name[key].includes(name)) return false
            // }
            // return true
        ),

    /**
     * 是特定类型
     * 如果判断条件为Object，也会进入该条件
     */
    istype: (equipment, type, conditions) =>
        ArrayOrItem(type, (type) => {
            if (isNaN(type)) return false;
            if (parseInt(type) !== equipment.type) return false;
            // 条件是Object
            if (typeof conditions === 'object') {
                // 包含属性
                if (conditions.hasStat) {
                    let pass = true;
                    for (const stat in conditions.hasStat) {
                        if (Array.isArray(conditions.hasStat[stat])) {
                            if (
                                equipment.stat[stat] <
                                conditions.hasStat[stat][0]
                            )
                                pass = false;
                            if (
                                equipment.stat[stat] >
                                conditions.hasStat[stat][1]
                            )
                                pass = false;
                        } else if (
                            equipment.stat[stat] < conditions.hasStat[stat]
                        ) {
                            pass = false;
                        }
                    }
                    if (!pass) return false;
                }
            }
            return true;
        }),

    /**
     * 不是特定类型
     */
    isnottype: (equipment, type) =>
        ArrayOrItemAll(type, (type) => {
            if (isNaN(type)) return false;
            return parseInt(type) !== equipment.type;
        }),

    /**
     * 是对空电探/雷达
     */
    isaaradar: function (equipment, isTrue) {
        // console.log(`[${equipment.id}]`, equipment._name)
        return (
            (this.istype(equipment, equipmentTypes.Radars) &&
                !isNaN(equipment.stat.aa) &&
                equipment.stat.aa >= 1) === isTrue
        );
    },

    /**
     * 是对水面电探/雷达
     */
    issurfaceradar: function (equipment, isTrue) {
        // console.log(`[${equipment.id}]`, equipment._name)
        // 目前已知条件：索敌 >= 5
        return (
            (this.istype(equipment, equipmentTypes.Radars) &&
                // && (
                //     (equipment.stat.fire || 0) > 0
                //     || (equipment.stat.aa || 0) < 2
                // )
                !isNaN(equipment.stat.los) &&
                equipment.stat.los >= 5) === isTrue
        );
    },

    /**
     * 是对超级水面电探/雷达
     */
    issupersurfaceradar: function (equipment, isTrue) {
        // console.log(`[${equipment.id}]`, equipment._name)
        // 目前已知条件：命中 >= 8
        return (
            (this.istype(equipment, equipmentTypes.Radars) &&
                // && (
                //     (equipment.stat.fire || 0) > 0
                //     || (equipment.stat.aa || 0) < 2
                // )
                !isNaN(equipment.stat.hit) &&
                equipment.stat.hit >= 8) === isTrue
        );
    },
};

module.exports = check;
