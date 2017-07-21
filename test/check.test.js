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

const check = require('../src/check')


describe('Checking functions/utilities', () => {
    describe('Checking for ship...', () => {
        it(`should condition isID be working`, function () {
            expect(check.ship(1, { isID: 1 })).toBe(true);
            expect(check.ship(1, { isID: 2 })).toBe(false);
            expect(check.ship(1, { isID: [1, 2] })).toBe(true);
            expect(check.ship(db.ships[1], { isID: 1 })).toBe(true);
            expect(check.ship(db.ships[1], { isID: 2 })).toBe(false);
            expect(check.ship(db.ships[1], { isID: [1, 2] })).toBe(true);
        });
        it(`should condition isName be working`, function () {
            expect(check.ship(1, { isName: 'mutsuki' })).toBe(true);
            expect(check.ship(1, { isName: '睦月' })).toBe(true);
            expect(check.ship(1, { isName: 'むつき' })).toBe(true);
            expect(check.ship(1, { isName: 'satsuki' })).toBe(false);
            expect(check.ship(1, { isName: ['mutsuki', 'satsuki'] })).toBe(true);
            expect(check.ship(db.ships[1], { isName: 'mutsuki' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: '睦月' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: 'むつき' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: 'satsuki' })).toBe(false);
            expect(check.ship(db.ships[1], { isName: ['mutsuki', 'satsuki'] })).toBe(true);
        });
        it(`should condition isType (and other similar method) be working`, function () {
            expect(check.ship(1, { isType: 1 })).toBe(true);
            expect(check.ship(1, { isType: 2 })).toBe(false);
            expect(check.ship(1, { isType: [1, 2] })).toBe(true);
            expect(check.ship(db.ships[1], { isType: 1 })).toBe(true);
            expect(check.ship(db.ships[1], { isType: 2 })).toBe(false);
            expect(check.ship(db.ships[1], { isType: [1, 2] })).toBe(true);

            expect(check.ship(1, { isBattleship: true })).toBe(false);
            expect(check.ship(1, { isBattleship: false })).toBe(true);
            expect(check.ship(1, { isBB: true })).toBe(false);
            expect(check.ship(1, { isBB: false })).toBe(true);
            expect(check.ship(86, { isBattleship: true })).toBe(true);
            expect(check.ship(86, { isBattleship: false })).toBe(false);
            expect(check.ship(86, { isBB: true })).toBe(true);
            expect(check.ship(86, { isBB: false })).toBe(false);

            expect(check.ship(1, { isCarrier: true })).toBe(false);
            expect(check.ship(1, { isCarrier: false })).toBe(true);
            expect(check.ship(1, { isCV: true })).toBe(false);
            expect(check.ship(1, { isCV: false })).toBe(true);
            expect(check.ship(404, { isCarrier: true })).toBe(true);
            expect(check.ship(404, { isCarrier: false })).toBe(false);
            expect(check.ship(404, { isCV: true })).toBe(true);
            expect(check.ship(404, { isCV: false })).toBe(false);

            expect(check.ship(1, { isSubmarine: true })).toBe(false);
            expect(check.ship(1, { isSubmarine: false })).toBe(true);
            expect(check.ship(1, { isSS: true })).toBe(false);
            expect(check.ship(1, { isSS: false })).toBe(true);
            expect(check.ship(163, { isSubmarine: true })).toBe(true);
            expect(check.ship(163, { isSubmarine: false })).toBe(false);
            expect(check.ship(163, { isSS: true })).toBe(true);
            expect(check.ship(163, { isSS: false })).toBe(false);
        });
        it(`should condition isClass be working`, function () {
            expect(check.ship(1, { isClass: 12 })).toBe(true);
            expect(check.ship(1, { isClass: 1 })).toBe(false);
            expect(check.ship(1, { isClass: [12, 1] })).toBe(true);
            expect(check.ship(db.ships[1], { isClass: 12 })).toBe(true);
            expect(check.ship(db.ships[1], { isClass: 1 })).toBe(false);
            expect(check.ship(db.ships[1], { isClass: [12, 1] })).toBe(true);
        });
        it(`should condition isSlot (and other similar method) be working`, function () {
            expect(check.ship(1, { isSlot: 2 })).toBe(true);
            expect(check.ship(1, { isSlot: 1 })).toBe(false);
            expect(check.ship(1, { isSlot: [2, 2] })).toBe(true);
            expect(check.ship(1, { isSlot: [1, 3] })).toBe(true);
            expect(check.ship(1, { isSlot: [3, 4] })).toBe(false);
            expect(check.ship(1, { isSlotMin: 1 })).toBe(true);
            expect(check.ship(1, { isSlotMin: 2 })).toBe(true);
            expect(check.ship(1, { isSlotMin: 3 })).toBe(false);
            expect(check.ship(1, { isSlotMax: 1 })).toBe(false);
            expect(check.ship(1, { isSlotMax: 2 })).toBe(true);
            expect(check.ship(1, { isSlotMax: 3 })).toBe(true);
        })
    });
})