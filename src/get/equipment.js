module.exports = equipment => {
    if (typeof equipment === 'object' && equipment.id) {
        return equipment
    } else if (!isNaN(equipment)) {
        const requireDB = require('./db')
        const dbEquipments = requireDB('items') || requireDB('equipments')
        return dbEquipments[parseInt(equipment)]
    } else {
        return undefined
    }
}