module.exports = ship => {
    if (typeof ship === 'object' && ship.id) {
        return ship
    } else if (!isNaN(ship)) {
        return KC.db.ships[parseInt(ship)]
    } else {
        return undefined
    }
}
