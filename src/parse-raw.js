const ClassBase = require('./class/base')
const Ship = require('./class/ship')
const Equipment = require('./class/equipment')
const Entity = require('./class/entity')
const Consumable = require('./class/consumable')
const ExillustType = require('./class/exillust-type')

module.exports = (raw = {}, db = {}) => {
    for (let type in raw) {
        let Class

        switch (type) {
            case 'ships': Class = Ship; break;

            case 'items':
            case 'equipments': Class = Equipment; break;

            case 'entities': Class = Entity; break;

            case 'consumables': Class = Consumable; break;

            case 'exillustTypes':
            case 'exillust_types':
            case 'exillust-types': Class = ExillustType; break;

            default: Class = ClassBase; break;
        }

        raw[type].split(/\r?\n/).forEach(item => {
            if (!item) return
            if (typeof db[type] === 'undefined') db[type] = {}

            const obj = JSON.parse(item)
            const id = typeof obj.id !== 'undefined' ? parseInt(obj.id) : obj._id

            if (Class) {
                db[type][id] = new Class(obj)
            } else {
                db[type][id] = obj
            }
        })
    }

    return db
}