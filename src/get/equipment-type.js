module.exports = equipmentType => {
    if (typeof equipmentType === 'object' && equipmentType.id) {
        return equipmentType
    } else if (!isNaN(equipmentType)) {
        const requireDB = require('./db')
        const dbEquipmentTypes = requireDB('item-types') || requireDB('equipment-types')
        return dbEquipmentTypes[parseInt(equipmentType)]
    } else {
        return undefined
    }
}