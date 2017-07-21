const path = require('path')
const fs = require('fs')
const camelCase = require('camelcase')
const dbnames = require('./samples/dbnames')
let db
beforeAll(() => new Promise(async resolve => {
    db = await require('./samples/initialize-database')(dbnames)
    resolve()
}).then(() => {
    require('../src/register.js')({ db })
}))

const check = require ('../src/check')


describe('Checking functions/utilities', () => {
    describe('Checking for ship...', () => {
        it(`should db.entities[1] be instanceof Entity`, function () {
            expect(true).toBe(db.entities[1] instanceof require('../src/class/entity.js'));
        });
    });
})