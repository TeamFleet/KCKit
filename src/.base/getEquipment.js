; (function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory()
    }
})('__getEquipment', function () {
    return equipment => {
        if (equipment && typeof equipment === 'object' && equipment.id) {
            return equipment
        } else if (!isNaN(equipment)) {
            return _g.data.items[parseInt(equipment)]
        } else {
            return undefined
        }
    }
})
