const camelCase = require('camelcase')
const vars = require('../variables')

let results = {}

const getDB = (dbname) => {
    if (typeof results[dbname] !== 'undefined')
        return vars.db[results[dbname]]

    if (typeof vars.db[dbname] !== 'undefined') {
        results[dbname] = dbname
        return vars.db[dbname]
    }

    let camel = camelCase(dbname)
    if (typeof vars.db[camel] !== 'undefined') {
        results[dbname] = camel
        return vars.db[camel]
    }

    if (getDBAlt(dbname, 'equipment', 'item'))
        return vars.db[results[dbname]]
    else if (getDBAlt(dbname, 'item', 'equipment'))
        return vars.db[results[dbname]]
    else {
        dbname = camel
        if (getDBAlt(dbname, 'equipment', 'item'))
            return vars.db[results[dbname]]
        else if (getDBAlt(dbname, 'item', 'equipment'))
            return vars.db[results[dbname]]
    }

    return undefined
}

const getDBAlt = (dbname, dbnameReplaceSearch, dbnameReplaceTo) => {
    if (!dbname.includes(dbnameReplaceSearch)) return undefined
    const replaced = dbname.replace(dbnameReplaceSearch, dbnameReplaceTo)
    let result
    if (typeof vars.db[replaced] !== 'undefined') {
        results[dbname] = replaced
        return vars.db[replaced]
    }
    return undefined
}

module.exports = getDB