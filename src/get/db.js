const camelCase = require('camelcase')

const results = {}

const getDB = (dbname, db = require('../variables').db) => {
    if (typeof results[dbname] !== 'undefined')
        return db[results[dbname]]

    if (typeof db[dbname] !== 'undefined') {
        results[dbname] = dbname
        return db[dbname]
    }

    let camel = camelCase(dbname)
    if (typeof db[camel] !== 'undefined') {
        results[dbname] = camel
        return db[camel]
    }

    if (getDBAlt(dbname, 'equipment', 'item', db))
        return db[results[dbname]]
    else if (getDBAlt(dbname, 'item', 'equipment', db))
        return db[results[dbname]]
    else {
        dbname = camel
        if (getDBAlt(dbname, 'equipment', 'item', db))
            return db[results[dbname]]
        else if (getDBAlt(dbname, 'item', 'equipment', db))
            return db[results[dbname]]
    }

    return {}
}

const getDBAlt = (dbname, dbnameReplaceSearch, dbnameReplaceTo, db = require('../variables').db) => {
    if (!dbname.includes(dbnameReplaceSearch)) return undefined
    const replaced = dbname.replace(dbnameReplaceSearch, dbnameReplaceTo)
    // let result
    if (typeof db[replaced] !== 'undefined') {
        results[dbname] = replaced
        return db[replaced]
    }
    return undefined
}

module.exports = getDB
