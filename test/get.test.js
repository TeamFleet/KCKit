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

const getShip = require('../src/get/ship')
const getShipType = require('../src/get/ship-type')
const getShipClass = require('../src/get/ship-class')
const getEquipmentStarBonusType = require('../src/get/equipment-star-bonus-type')
const getEquipmentStarBonus = require('../src/get/equipment-star-bonus')

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
    describe('get ship type...', () => {
        it(`should getShipType(1) be instanceof Base (shipType.id = 1)`, function () {
            expect(getShipType(1) instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipType(1).id).toBe(1);
        });
        it(`should getShipType("11") be instanceof Base (shipType.id = 11)`, function () {
            expect(getShipType("11") instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipType("11").id).toBe(11);
        });
        it(`should getShipType(db.shipTypes[1]) be instanceof Base (shipType.id = 1)`, function () {
            expect(getShipType(db.shipTypes[1]) instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipType(db.shipTypes[1]).id).toBe(1);
        });
    });
    describe('get ship class...', () => {
        it(`should getShipClass(1) be instanceof Base (shipClass.id = 1)`, function () {
            expect(getShipClass(1) instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipClass(1).id).toBe(1);
        });
        it(`should getShipClass("11") be instanceof Base (shipClass.id = 11)`, function () {
            expect(getShipClass("11") instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipClass("11").id).toBe(11);
        });
        it(`should getShipClass(db.shipClasses[1]) be instanceof Base (shipClass.id = 1)`, function () {
            expect(getShipClass(db.shipClasses[1]) instanceof require('../src/class/base.js')).toBe(true);
            expect(getShipClass(db.shipClasses[1]).id).toBe(1);
        });
    });
    describe('get equipment star bonus type object...', () => {
        it('should value for type works', () => {
            expect(typeof getEquipmentStarBonusType(1)).toBe('object')
            expect(getEquipmentStarBonusType(75)).toEqual({})
        })
        it('should value for stat works', () => {
            expect(typeof getEquipmentStarBonusType(1, 'shelling')).toBe('number')
            expect(Array.isArray(getEquipmentStarBonusType(10, 'shelling'))).toBe(true)
            expect(typeof getEquipmentStarBonusType(10, 'night')).toBe('number')
            expect(getEquipmentStarBonusType(1, 'fighter')).toBe(0)
        })
    })
    describe('get equipment star bonus...', () => {
        it('should works', () => {
            expect(getEquipmentStarBonus(1, 'shelling', 9)).toBe(3)
            expect(getEquipmentStarBonus(1, 'fighter', 9)).toBe(0)
            expect(getEquipmentStarBonus(10, 'shelling', 10)).toBe(2)
            expect(getEquipmentStarBonus(10, 'night', 9)).toBe(3)
            expect(getEquipmentStarBonus(317, 'shelling', 9)).toBe(3)
        })
    })
})
