const assert = require('assert');
const path = require('path')
const fs = require('fs')
const camelCase = require('camelcase')

let db = {}
let raw = {}
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

describe('Base functions/utilities', function () {

    describe('Loading raw database files...', function () {

        for (let dbname of dbnames) {
            const type = camelCase(dbname)
            raw[type] = fs.readFileSync(
                path.resolve(__dirname, `./samples/db/${dbname}.nedb`),
                'utf-8'
            )
            it(`raw.${type} should be string`, function () {
                assert.equal('string', typeof raw[type]);
            });
        }
    });

    describe('Parsing raw database files...', function () {
        require('../src/parse-raw.js')(raw, db)

        describe('Checking basics...', function () {
            for (let dbname of dbnames) {
                const type = camelCase(dbname)
                it(`db.${type} should be object`, function () {
                    assert.equal('object', typeof db[type]);
                });
            }
        });

        describe('Registering...', function () {
            it(`should be success without error`, function () {
                require('../src/register.js')({
                    db
                })
            });
        });

        describe('Checking ship samples...', function () {
            it(`should db.ships[200] be instanceof Ship`, function () {
                assert.equal(true, db.ships[200] instanceof require('../src/class/ship.js'));
            });
            it(`should db.ships[420].getName("・", "ja_jp") be 叢雲・改二`, function () {
                assert.equal('叢雲・改二', db.ships[420].getName("・", "ja_jp"));
            });
            it(`should db.ships[177].getNameNoSuffix("zh_cn") be 欧根亲王`, function () {
                assert.equal('欧根亲王', db.ships[177].getNameNoSuffix("zh_cn"));
            });
            it(`should db.ships[468].getSuffix() be 改二丁`, function () {
                assert.equal('改二丁', db.ships[468].getSuffix());
            });
            it(`should 隼鷹・改二 db.ships[408].getType("en_us") be Light Aircraft Carrier`, function () {
                assert.equal('Light Aircraft Carrier', db.ships[408].getType("en_us"));
            });
            it(`should 千代田・航改二 db.ships[297]._series be length of 6`, function () {
                assert.equal(6, db.ships[297]._series.length);
            });
            it(`should 赤城・改 db.ships[277].getPic("0") be 277/0.png`, function () {
                assert.equal('277/0.png', db.ships[277].getPic("0"));
            });
            it(`should 赤城・改 db.ships[277].getPic("0-1", ".webp") be 277/0-1.webp`, function () {
                assert.equal('277/0-1.webp', db.ships[277].getPic("0-1", ".webp"));
            });
            it(`should 赤城・改 db.ships[277].getPic("8") be 83/8.png`, function () {
                assert.equal('83/8.png', db.ships[277].getPic("8"));
            });
            it(`should 長門・改 db.ships[275]._speedRule be low-2`, function () {
                assert.equal('low-2', db.ships[275]._speedRule);
            });
            it(`should 長門・改二 db.ships[541]._speedRule be low-1`, function () {
                assert.equal('low-1', db.ships[541]._speedRule);
            });
            it(`should Гангут・два db.ships[513].getAttribute('evasion', 99) be undefined`, function () {
                assert.equal(undefined, db.ships[513].getAttribute('evasion', 99));
            });
            it(`should 大和・改 db.ships[136].getAttribute('torpedo') be false`, function () {
                assert.equal(false, db.ships[136].getAttribute('torpedo'));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw') be 28`, function () {
                assert.equal(28, db.ships[434].getAttribute('asw'));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw', 99) be 69`, function () {
                assert.equal(69, db.ships[434].getAttribute('asw', 99));
            });
            it(`should 睦月・改二 db.ships[434].getAttribute('asw', 150) be 90`, function () {
                assert.equal(90, db.ships[434].getAttribute('asw', 150));
            });
            it(`should Bismarck・drei db.ships[178].getAttribute('hp', 150) be 99`, function () {
                assert.equal(99, db.ships[178].getAttribute('hp', 150));
            });
            it(`should 翔鶴・改二甲 db.ships[466]._cv be 野水 伊織`, function () {
                assert.equal('野水 伊織', db.ships[466]._cv);
            });
            it(`should 択捉 db.ships[524]._illustrator be undefined`, function () {
                assert.equal(undefined, db.ships[524]._illustrator);
            });
            it(`should 明石 db.ships[182]._minLv be 1`, function () {
                assert.equal(1, db.ships[182]._minLv);
            });
            it(`should 鈴谷・改 db.ships[129]._minLv be 35`, function () {
                assert.equal(35, db.ships[129]._minLv);
            });
            it(`should 鈴谷・航改二 db.ships[508].isType('carrier') be true`, function () {
                assert.equal(true, db.ships[508].isType('carrier'));
            });
        });

        describe('Checking equipment samples...', function () {
        })

        describe('Checking entity samples...', function () {
            it(`should db.entities[1] be instanceof Entity`, function () {
                assert.equal(true, db.entities[1] instanceof require('../src/class/entity.js'));
            });
        })

        describe('Checking consumable samples...', function () {
        })
    });

});