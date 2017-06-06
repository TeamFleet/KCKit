module.exports = {
    register: require('./src/register'),
    vars: require('./src/variables'),
    parseRaw: require('./src/parse-raw.js'),

    // Classes
    Ship: require('./src/class/ship'),
    Equipment: require('./src/class/equipment'),
    Entity: require('./src/class/entity'),
    Consumable: require('./src/class/consumable'),

    // Formulas
    formula: require('./src/formula/')
}