module.exports = shipType => {
    if (typeof shipType === 'object' && shipType.id) {
        return shipType
    } else if (!isNaN(shipType)) {
        return require('./db')('ship-types')[parseInt(shipType)]
    } else {
        return undefined
    }
}