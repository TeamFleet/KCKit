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

const getShip = require ('../src/get/ship')


describe('Getting functions/utilities', () => {
    describe('get ship...', () => {
        it(`should getShip(1) be instanceof Ship (ship.id = 1)`, function () {
            expect(getShip(1) instanceof require('../src/class/ship.js')).toBe(true);
            expect(getShip(1).id).toBe(1);
        });
        it(`should getShip("111") be instanceof Ship (ship.id = 111)`, function () {
            expect(getShip("111") instanceof require('../src/class/ship.js')).toBe(true);
            expect(getShip("111").id).toBe(111);
        });
        it(`should getShip(db.ships[285]) be instanceof Ship (ship.id = 285)`, function () {
            expect(getShip(db.ships[285]) instanceof require('../src/class/ship.js')).toBe(true);
            expect(getShip(db.ships[285]).id).toBe(285);
        });
    });
})
