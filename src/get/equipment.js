module.exports = equipment => {
    if (typeof equipment === 'object' && equipment.id) {
        return equipment
    } else if (!isNaN(equipment)) {
        return require('./db')('items')[parseInt(equipment)]
    } else {
        return undefined
    }
}