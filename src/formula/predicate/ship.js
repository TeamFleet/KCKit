/**
 * 
 * 
 * @param {(number|Ship)} ship 要判断的舰娘
 * @param {any} [condition={}] 
 * @param {(number|number[])} [condition.isType] 判断舰娘是否属于给定类型
 * @param {boolean} [condition.isBattleship]
 * @param {boolean} [condition.isBB]
 * @param {boolean} [condition.isCarrier]
 * @param {boolean} [condition.isCV]
 * @param {boolean} [condition.isSubmarine]
 * @param {boolean} [condition.isSS]
 * @param {(number|number[])} [condition.isID] 判断舰娘ID是否精确匹配
 * @param {(string|string[])} [condition.isName] 判断舰娘名是否精确匹配
 * @param {number} [condition.slotAtLeast] 判断舰娘的可配置栏位至少有 number 个
 * @param {number} [condition.slotIs] 判断舰娘的可配置栏位精确有 number 个
 * @param {number} [condition.slotAtMost] 判断舰娘的可配置栏位最多有 number 个
 */
export default (ship, condition = {}) => {
    
}