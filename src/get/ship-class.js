module.exports = shipClass => {
    if (typeof shipClass === 'object' && shipClass.id) {
        return shipClass
    } else if (!isNaN(shipClass)) {
        return require('./db')('ship-classes')[parseInt(shipClass)]
    } else {
        return undefined
    }
}