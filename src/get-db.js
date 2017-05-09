const camelCase = require('camelcase')
const vars = require('./variables')

let results = {}

module.exports = (dbname) => {
    if(typeof vars.db[dbname] !== 'undefined'){
        results[dbname] = dbname
        return vars.db[dbname]
    }

    let camel = camelCase(dbname)
    if(typeof vars.db[camel] !== 'undefined'){
        results[dbname] = camel
        return vars.db[camel]
    }

    return {}
}