module.exports = equipment => {
    if (equipment && typeof equipment === 'object' && equipment.id) {
        return equipment
    } else if (!isNaN(equipment)) {
        const data = KC.db.equipments || KC.db.items || {}
        return data[parseInt(equipment)]
    } else {
        return undefined
    }
}
