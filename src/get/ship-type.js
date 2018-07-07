module.exports = shipType => {
    if (typeof shipType === 'object' && shipType.id) {
        return shipType
    } else if (!isNaN(shipType)) {
        return KC.db.ship_types[parseInt(shipType)]
    } else {
        return undefined
    }
}
