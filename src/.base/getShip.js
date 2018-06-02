; (function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory()
    }
})('__getShip', function () {
    return ship => {
        if (typeof ship === 'object' && ship.id) {
            return ship
        } else if (!isNaN(ship)) {
            return _g.data.ships[parseInt(ship)]
        } else {
            return undefined
        }
    }
})
