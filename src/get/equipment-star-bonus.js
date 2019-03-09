const getEquipment = require('./equipment')
const getBonusType = require('./equipment-star-bonus-type')

/**
 * 获取装备改修收益值
 * @param {(Equipment|Number)} equipment 装备
 * @param {String} bonusType 收益属性
 * @param {Number} star 改修星数
 * @returns {Number} 收益数值 (保留小数的原始数值，未做额外处理)
 */
module.exports = (equipment, bonusType, star) => {

    const thisEquipment = getEquipment(equipment)

    let bonusValue = getBonusType(thisEquipment, bonusType)
    let bonusCalculateType = 'sqrt'

    if (Array.isArray(bonusValue)) {
        bonusCalculateType = bonusValue[0]
        bonusValue = bonusValue[1]
    }

    switch (bonusCalculateType) {
        case 'sqrt': {
            return bonusValue * Math.sqrt(star)
        }
        case 'multiplication':
        case 'multiple': {
            return bonusValue * star
        }
    }

}
