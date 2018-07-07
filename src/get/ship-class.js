module.exports = shipClass => {
    if (typeof shipClass === 'object' && shipClass.id) {
        return shipClass
    } else if (!isNaN(shipClass)) {
        return KC.db.ship_classes[parseInt(shipClass)]
    } else {
        return undefined
    }
}
