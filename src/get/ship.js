module.exports = ship => {
    if (typeof ship === 'object' && ship.id) {
        return ship
    } else if (!isNaN(ship)) {
        return require('./db')('ships')[parseInt(ship)]
    } else {
        return undefined
    }
}