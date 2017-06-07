const path = require('path')
const fs = require('fs')
const camelCase = require('camelcase')

let db
const dbnames = [
    'ships',
    'ship_types',
    'ship_classes',
    'ship_namesuffix',
    'ship_series',
    'items',
    'item_types',
    'entities',
    'consumables'
]

const initializeDatabase = () => new Promise(async resolve => {
    db = await require('./samples/initialize-database')(dbnames)
    resolve()
})

beforeAll(() => initializeDatabase());


describe('Base functions/utilities', () => {
    describe('Parsing raw database files...', () => {

        describe('Checking basics...', () => {
            for (let dbname of dbnames) {
                const type = camelCase(dbname)
                it(`should db.${type} be object`, () => {
                    expect('object').toBe(typeof db[type]);
                });
            }
        });

        describe('Registering...', function () {
            it(`should be success without error`, () => {
                require('../src/register.js')({ db })
            });
        });

        describe('Checking ship samples...', function () {
            it(`should db.ships[200] be instanceof Ship`, function () {
                expect(true).toBe(db.ships[200] instanceof require('../src/class/ship.js'));
            });
            it(`should db.ships[420].getName("・", "ja_jp") be 叢雲・改二`, function () {
                expect('叢雲・改二').toBe(db.ships[420].getName("・", "ja_jp"));
            });
            it(`should db.ships[177].getNameNoSuffix("zh_cn") be 欧根亲王`, function () {
                expect('欧根亲王').toBe(db.ships[177].getNameNoSuffix("zh_cn"));
            });
            it(`should db.ships[468].getSuffix() be 改二丁`, function () {
                expect('改二丁').toBe(db.ships[468].getSuffix());
            });
            it(`should 隼鷹・改二 db.ships[408].getType("en_us") be Light Aircraft Carrier`, function () {
                expect('Light Aircraft Carrier').toBe(db.ships[408].getType("en_us"));
            });
            it(`should 千代田・航改二 db.ships[297]._series be length of 6`, function () {
                expect(6).toBe(db.ships[297]._series.length);
            });
            it(`should 赤城・改 db.ships[277].getPic("0") be 277/0.png`, function () {
                expect('277/0.png').toBe(db.ships[277].getPic("0"));
            });
            it(`should 赤城・改 db.ships[277].getPic("0-1", ".webp") be 277/0-1.webp`, function () {
                expect('277/0-1.webp').toBe(db.ships[277].getPic("0-1", ".webp"));
            });
            it(`should 赤城・改 db.ships[277].getPic("8") be 83/8.png`, function () {
                expect('83/8.png').toBe(db.ships[277].getPic("8"));
            });
            it(`should 長門・改 db.ships[275]._speedRule be low-2`, function () {
                expect('low-2').toBe(db.ships[275]._speedRule);
            });
            it(`should 長門・改二 db.ships[541]._speedRule be low-1`, function () {
                expect('low-1').toBe(db.ships[541]._speedRule);
            });
            it(`should Гангут・два db.ships[513].getAttribute('evasion', 99) be undefined`, function () {
                expect(undefined).toBe(db.ships[513].getAttribute('evasion', 99));
            });
            it(`should 大和・改 db.ships[136].getAttribute('torpedo') be false`, function () {
                expect(false).toBe(db.ships[136].getAttribute('torpedo'));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw') be 28`, function () {
                expect(28).toBe(db.ships[434].getAttribute('asw'));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw', 99) be 69`, function () {
                expect(69).toBe(db.ships[434].getAttribute('asw', 99));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw', 150) be 90`, function () {
                expect(90).toBe(db.ships[434].getAttribute('asw', 150));
            });
            it(`should Bismarck・drei db.ships[178].getAttribute('hp', 150) be 99`, function () {
                expect(99).toBe(db.ships[178].getAttribute('hp', 150));
            });
            it(`should 鳳翔・改 db.ships[285].getAttribute('asw', 99) be 0`, function () {
                expect(0).toBe(db.ships[285].getAttribute('asw', 99));
            });
            it(`should 大鳳・改 db.ships[156].getAttribute('asw', 99) be false`, function () {
                expect(false).toBe(db.ships[156].getAttribute('asw', 99));
            });
            it(`should 大鹰・改 db.ships[380].getAttribute('night') be false`, function () {
                expect(false).toBe(db.ships[380].getAttribute('night'));
            });
            it(`should 大鹰・改二 db.ships[529].getAttribute('night') be 39`, function () {
                expect(39).toBe(db.ships[529].getAttribute('night'));
            });
            it(`should 翔鶴・改二甲 db.ships[466]._cv be 野水 伊織`, function () {
                expect('野水 伊織').toBe(db.ships[466]._cv);
            });
            it(`should 択捉 db.ships[524]._illustrator be undefined`, function () {
                expect(undefined).toBe(db.ships[524]._illustrator);
            });
            it(`should 明石 db.ships[182]._minLv be 1`, function () {
                expect(1).toBe(db.ships[182]._minLv);
            });
            it(`should 鈴谷・改 db.ships[129]._minLv be 35`, function () {
                expect(35).toBe(db.ships[129]._minLv);
            });
            it(`should 鈴谷・航改二 db.ships[508].isType('carrier') be true`, function () {
                expect(true).toBe(db.ships[508].isType('carrier'));
            });
        });

        describe('Checking equipment samples...', function () {
        })

        describe('Checking entity samples...', function () {
            it(`should db.entities[1] be instanceof Entity`, function () {
                expect(true).toBe(db.entities[1] instanceof require('../src/class/entity.js'));
            });
        })

        describe('Checking consumable samples...', function () {
        })
    });

})