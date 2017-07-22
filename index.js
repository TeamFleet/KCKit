module.exports = {
    vars: require('./src/variables'),
    data: require('./src/data'),

    // Classes
    Ship: require('./src/class/ship'),
    Equipment: require('./src/class/equipment'),
    Entity: require('./src/class/entity'),
    Consumable: require('./src/class/consumable'),

    // Formulas
    formula: require('./src/formula/'),

    // Helper functions
    register: require('./src/register'),
    parseRaw: require('./src/parse-raw')
}