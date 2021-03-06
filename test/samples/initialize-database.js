const path = require('path');
const fs = require('fs');
const camelCase = require('camelcase');
const parseRaw = require('../../src/parse-raw');

module.exports = async (
    dbnames,
    dbpath = path.resolve(
        __dirname,
        '../../node_modules/whocallsthefleet-database/db'
    )
) =>
    await new Promise(async (resolve /*, reject*/) => {
        const db = {};
        const raw = {};

        for (const dbname of dbnames) {
            const type = camelCase(dbname);
            raw[type] = await new Promise((resolve, reject) => {
                fs.readFile(
                    path.resolve(dbpath, `${dbname}.nedb`),
                    'utf-8',
                    (err, data) => {
                        if (err) reject(err);
                        else resolve(data);
                    }
                );
            });
        }

        parseRaw(raw, db);

        resolve(db);
    });
