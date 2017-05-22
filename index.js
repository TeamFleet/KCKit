module.exports = {
    register: require('./src/register'),

    vars: require('./src/variables'),

    // Classes
    Ship: require('./src/class/ship'),
    Equipment: require('./src/class/equipment'),
    Entity: require('./src/class/entity'),
    Consumable: require('./src/class/consumable'),

    // Formulas
    formula: require('./src/formula/')
}