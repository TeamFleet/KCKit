/**
 * @typedef {"NightCarrier"|"ModernizedCarrier"|"EscortCarrier"|"AssultCarrier"|"RevisedAviationCruiser"|'SpecialAviationCruiser'} ShipSubType
 */

// ============================================================================

/**
 * 装备属性加成数据
 * @typedef {Object} EquipmentBonus *
 *
 * @property {ShipCheckCondition} ship 舰娘的条件
 * @property {boolean} [passEquippableCheck=false] 是否无视装备类型的检查
 *
 * @property {EquipmentBonusValues} [bonus] 满足条件时的加成值
 * @property {Object.<number, EquipmentBonusValues>} [bonusCount] 当为“单体”时不同装备数量的收益
 * @property {Object.<number, EquipmentBonusValues>} [bonusImprove] 当为“单体”时不同改修星级的收益
 * @property {number} [bonusImprove.maxCount] 当为“单体”时不同改修星级的收益
 *
 * @property {number} [equipment] 当为“单体”时的装备 ID
 *
 * @property {EquipmentsCheckCondition|Array<EquipmentsCheckCondition>} [equipments] 当为“套装”时的条件
 * @property {Array<string|number>} [list] 当为“套装”时的 UI 表现方式
 *      - `number` - 装备ID
 *      - `/[0-9]+_/` - 装备ID + 系列
 *      - `TYPE[ID1,ID2,ID3,...]` - 显示为 TYPE，装备ID 选一
 *      -  不满足上述条件的 `string` - 类型特征值
 *
 */
/**
 * 加成值
 * - 数字值示可叠加，字符串值表示仅单次
 * @typedef {Object} EquipmentBonusValues
 * @property {number|string} [fire] 火力
 * @property {number|string} [torpedo] 雷装
 * @property {number|string} [aa] 对空
 * @property {number|string} [asw] 对潜
 * @property {number|string} [bomb] 爆装
 * @property {number|string} [hit] 命中 / [截击机|陆军战斗机] 对爆
 * @property {number|string} [armor] 装甲
 * @property {number|string} [evasion] 回避 / [截击机|陆军战斗机] 迎击
 * @property {number|string} [los] 索敌
 * @property {number|string} [range] 射程
 * @property {number|string} [distance] [飞行器] 作战半径
 */

// ============================================================================

/**
 * 检查舰娘的条件
 * @typedef {Object} ShipCheckCondition
 * @property {number|Array<number>} [isID] 检查是否是该 ID
 *      - 如果是数组，满足其中一项即算满足条件
 * @property {number|Array<number>} [isClass] 检查是否是该舰级 (Class)
 *      - 如果是数组，满足其中一项即算满足条件
 * @property {number|Array<number>} [isType] 检查是否是该舰种 (Type)
 *      - 如果是数组，满足其中一项即算满足条件
 */

/**
 * 检查装备的条件
 * @typedef {Object} EquipmentCheckCondition
 * @property {number|Array<number>} [isID] 检查是否是该 ID
 *      - 如果是数组，满足其中一项即算满足条件
 */

/**
 * 检查装备组的条件
 * @typedef {Object} EquipmentsCheckCondition
 * @property {Array<EquipmentCheckCondition>} [hasOneOf] 检查是否满足其中一个条件
 * @property {number|Array<number>} [hasID] 检查是否有该 ID 的装备
 *      - 如果是数组，满足其中一项即算满足条件
 */
