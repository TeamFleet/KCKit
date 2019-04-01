module.exports = Object.assign(
    require('./src/variables'),

    {
        // Functions
        get: require('./src/get'),
        data: require('./src/data'),
        check: require('./src/check'),
        calculate: require('./src/calculate'),

        // Statics
        // types: require('./src/types'),

        // Classes
        // Base: require('./src/class/base'),
        // Ship: require('./src/class/ship'),
        // Equipment: require('./src/class/equipment'),
        // Entity: require('./src/class/entity'),
        // Consumable: require('./src/class/consumable'),

        // Formulas
        // formula: require('./src/formula/'),

        // Helper functions
        // register: require('./src/register'),
        parseRaw: require('./src/parse-raw')
    }
)
