module.exports = {
    vars: require('./src/variables'),
    get: require('./src/get'),
    data: require('./src/data'),
    check: require('./src/check'),
    calculate: require('./src/calculate'),

    // Classes
    Base: require('./src/class/base'),
    Ship: require('./src/class/ship'),
    Equipment: require('./src/class/equipment'),
    Entity: require('./src/class/entity'),
    Consumable: require('./src/class/consumable'),

    // Formulas
    // formula: require('./src/formula/'),

    // Helper functions
    register: require('./src/register'),
    parseRaw: require('./src/parse-raw')
}