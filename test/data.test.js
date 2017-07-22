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

const data = require('../src/data')


describe('Data modules', () => {
    describe('AACI...', () => {
        it(`should data.aaci[1] be Object`, function () {
            expect(typeof data.aaci[1]).toBe('object');
        });
    });
})
