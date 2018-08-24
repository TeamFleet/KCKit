// const path = require('path')
// const fs = require('fs')
// const camelCase = require('camelcase')
const dbnames = require('./samples/dbnames')
let db
beforeAll(() => new Promise(async resolve => {
    db = await require('./samples/initialize-database')(dbnames)
    resolve()
}).then(() => {
    require('../src/register.js')({ db })
}))

const data = require('../src/data')
const equipmentTypes = require('../src/types/equipments')


describe('Data modules', () => {
    describe('AACI...', () => {
        it(`should data.aaci[1] be Object`, function () {
            expect(typeof data.aaci[1]).toBe('object');
        });
    });
    describe('TP...', () => {
        it(`should data.tp be Object`, function () {
            expect(typeof data.tp).toBe('object');
        });
        it(`should data.tp.shipType be Object`, function () {
            expect(typeof data.tp.shipType).toBe('object');
        });
        it(`should data.tp.shipType[1] be Number`, function () {
            expect(typeof data.tp.shipType[1]).toBe('number');
        });
        it(`should data.tp.equipmentType be Object`, function () {
            expect(typeof data.tp.equipmentType).toBe('object');
        });
        it(`should data.tp.equipmentType[equipmentTypes.LandingCraft] be Number`, function () {
            expect(typeof data.tp.equipmentType[equipmentTypes.LandingCraft]).toBe('number');
        });
    });
})
