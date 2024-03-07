// const path = require('path')
// const fs = require('fs')
const camelCase = require('camelcase');
const dbnames = require('./samples/dbnames');
const get = require('../src/get');
const kckit = require('../');

let db;

const initializeDatabase = () =>
    new Promise(async (resolve) => {
        db = await require('./samples/initialize-database')(dbnames);
        resolve();
    });

beforeAll(() => initializeDatabase());

describe('Base functions/utilities', () => {
    describe('Parsing raw database files...', () => {
        describe('Checking basics...', () => {
            for (const dbname of dbnames) {
                const type = camelCase(dbname);
                it(`should db.${type} be object`, () => {
                    expect('object').toBe(typeof db[type]);
                });
            }
        });

        describe('Registering...', function () {
            it(`should be success without error`, () => {
                require('../src/register.js')({ db });
            });
        });

        describe('Vars...', function () {
            it(`vars.exslotEquipmentTypes should be Array`, () => {
                // console.log(kckit.exslotEquipmentTypes)
                expect(Array.isArray(kckit.exSlotEquipmentTypes)).toBe(true);
            });
            it(`vars.exslotOtherEquipments should be Array`, () => {
                // console.log(kckit.exslotOtherEquipments)
                expect(Array.isArray(kckit.exSlotOtherEquipments)).toBe(true);
            });
        });

        describe('Data type...', function () {
            it(`should db.ships[200] be instanceof Ship`, function () {
                expect(true).toBe(
                    db.ships[200] instanceof require('../src/class/ship.js'),
                );
            });
            it(`should db.items[1] be instanceof Equipment`, function () {
                expect(
                    db.items[1] instanceof require('../src/class/equipment'),
                ).toBe(true);
            });
            it(`should db.itemTypes[1] be instanceof BaseClass`, function () {
                expect(
                    db.itemTypes[1] instanceof require('../src/class/base'),
                ).toBe(true);
            });
            it(`should db.entities[1] be instanceof Entity`, function () {
                expect(true).toBe(
                    db.entities[1] instanceof require('../src/class/entity.js'),
                );
            });
            it(`should db.exillustTypes[1] be instanceof ExillustType`, function () {
                expect(
                    db.exillustTypes[1] instanceof
                        require('../src/class/exillust-type.js'),
                ).toBe(true);
            });
        });
    });

    describe('Class methods', () => {
        describe('Ship', function () {
            it(`should Ship.prototype.getName() works`, () => {
                expect(db.ships[420].getName('・', 'ja_jp')).toBe('叢雲・改二');
                expect(db.ships[178].getName('')).toBe('Bismarck drei');
            });
            it(`should Ship.prototype.getNameNoSuffix() works`, () => {
                expect(db.ships[177].getNameNoSuffix('zh_cn')).toBe('欧根亲王');
                expect(db.ships[417].getNameNoSuffix('en_us')).toBe('Kako');
            });
            it(`should db.ships[468].getSuffix() be 改二丁`, function () {
                expect('改二丁').toBe(db.ships[468].getSuffix());
            });
            it(`should 隼鷹・改二 db.ships[408].getType("en_us") be Light Aircraft Carrier`, function () {
                expect('Light Aircraft Carrier').toBe(
                    db.ships[408].getType('en_us'),
                );
            });
            it(`should 亲潮・改 db.ships[362].getClass("en_us") be Kagerou`, function () {
                expect('Kagerou').toBe(db.ships[362].getClass('en_us'));
            });
            it(`should 亲潮・改 db.ships[362]._class be 陽炎`, function () {
                expect('陽炎').toBe(db.ships[362]._class);
            });
            it(`should 千代田・航改二 db.ships[297]._series be length of 6`, function () {
                expect(6).toBe(db.ships[297]._series.length);
            });
            it(`should 赤城・改 db.ships[277].getPic("0") be 277/0.png`, function () {
                expect('277/0.png').toBe(db.ships[277].getPic('0'));
            });
            it(`should 赤城・改 db.ships[277].getPic("0-1", ".webp") be 277/0-1.webp`, function () {
                expect('277/0-1.webp').toBe(
                    db.ships[277].getPic('0-1', '.webp'),
                );
            });
            it(`should 赤城・改 db.ships[277].getPic("8") be 83/8.png`, function () {
                expect('83/8.png').toBe(db.ships[277].getPic('8'));
            });
            it(`should 択捉・改 db.ships[383].getPic("0") be 383/0.png?20170714`, function () {
                expect(db.ships[383].getPic('0')).toBe('383/0.png?20170714');
            });
            it(`should 長門・改 db.ships[275]._speedRule be low-2`, function () {
                expect('low-2').toBe(db.ships[275]._speedRule);
            });
            it(`should 長門・改二 db.ships[541]._speedRule be low-1`, function () {
                expect('low-1').toBe(db.ships[541]._speedRule);
            });
            // it(`should Гангут・два db.ships[513].getAttribute('los', 99) be undefined`, function () {
            //     expect(undefined).toBe(db.ships[513].getAttribute('los', 99));
            // });
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
            it(`should Bismarck・drei db.ships[178].getStat('hp', 150) be 99`, function () {
                expect(99).toBe(db.ships[178].getStat('hp', 150));
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
            it(`should 大鹰・改二 db.ships[529].getStat('night') be 39`, function () {
                expect(39).toBe(db.ships[529].getStat('night'));
            });
            it(`should 翔鶴・改二甲 db.ships[466]._cv be 野水 伊織`, function () {
                expect('野水 伊織').toBe(db.ships[466]._cv);
            });
            // it(`should 択捉 db.ships[524]._illustrator be undefined`, function () {
            //     expect(undefined).toBe(db.ships[524]._illustrator);
            // });
            it(`should 明石 db.ships[182]._minLv be 1`, function () {
                expect(1).toBe(db.ships[182]._minLv);
            });
            it(`should 鈴谷・改 db.ships[129]._minLv be 35`, function () {
                expect(35).toBe(db.ships[129]._minLv);
            });
            it(`should Ship.prototype.isType(majorType) works`, () => {
                /* 鈴谷・航改二 */ expect(db.ships[508].isType('carrier')).toBe(
                    true,
                );
                /* 鈴谷・航改二 */ expect(db.ships[508].isType('bb')).toBe(
                    false,
                );
                /* Bismarck・drei */ expect(db.ships[178].isType('bb')).toBe(
                    true,
                );
                /* 秋津洲・改 */ expect(db.ships[450].isType('av')).toBe(true);
                /* Prinz Eugen・改 */ expect(db.ships[177].isType('ca')).toBe(
                    true,
                );
                /* Ташкент・改 */ expect(db.ships[395].isType('dd')).toBe(true);
            });
            it(`should Гангут・два db.ships[513]._speed be 低速`, function () {
                expect('低速').toBe(db.ships[513]._speed);
            });
            it(`should Гангут・два db.ships[513].getSpeed('en_us') be Slow`, function () {
                expect('Slow').toBe(db.ships[513].getSpeed('en_us'));
            });
            it(`should Гангут・два db.ships[513].getSpeed(false) be 5`, function () {
                expect(5).toBe(db.ships[513].getSpeed(false));
            });
            it(`should Гангут・два db.ships[513]._range be 长`, function () {
                expect('长').toBe(db.ships[513]._range);
            });
            it(`should Гангут・два db.ships[513].getRange('en_us') be Long`, function () {
                expect('Long').toBe(db.ships[513].getRange('en_us'));
            });
            it(`should Гангут・два db.ships[513].getRange(false) be 3`, function () {
                expect(3).toBe(db.ships[513].getRange(false));
            });
            it(`should 鈴谷・航改二 db.ships[508]._navy be ijn`, function () {
                expect('ijn').toBe(db.ships[508]._navy);
            });
            it(`should Гангут・два db.ships[513]._navy be vmf`, function () {
                expect('vmf').toBe(db.ships[513]._navy);
            });
            it(`should Гангут・два db.ships[513]._navy be vmf`, function () {
                expect('vmf').toBe(db.ships[513]._navy);
            });
            it(`should Верный db.ships[147]._navyName be Soviet Navy`, function () {
                expect('Soviet Navy').toBe(db.ships[147]._navyName);
            });
            it(`should Гангут・два db.ships[513].getNavyName('zh_cn') be 苏联海军`, function () {
                expect('苏联海军').toBe(db.ships[513].getNavyName('zh_cn'));
            });
            it(`should 春風 db.ships[473].getNo() be 273`, function () {
                expect(273).toBe(db.ships[473].getNo());
            });
            it(`should 春風・改 db.ships[363].getNo() be 273`, function () {
                expect(273).toBe(db.ships[363].getNo());
            });
            it(`should 比叡 db.ships[86].hasExtraIllust() be false`, function () {
                expect(false).toBe(db.ships[86].hasExtraIllust());
            });
            it(`should 金剛・改二 db.ships[149].hasExtraIllust() be typeof Ship`, function () {
                expect(
                    db.ships[149].hasExtraIllust() instanceof
                        require('../src/class/ship.js'),
                ).toBe(true);
            });
            it(`should 金剛・改二 db.ships[149].hasExtraIllust() be Ship 149`, function () {
                expect(db.ships[149].hasExtraIllust().id).toBe(149);
            });
            it(`should 赤城・改 db.ships[277].hasExtraIllust() be Ship 83`, function () {
                expect(db.ships[277].hasExtraIllust().id).toBe(83);
            });
            it(`should Ship.prototype._extraIllust works`, () => {
                expect(db.ships[77]._extraIllust).toBe(undefined);
                expect(db.ships[321]._extraIllust.length).toBe(8);
            });
            it(`should 大淀・改 db.ships[321]._equipmentTypes be an Array of 28`, function () {
                expect(db.ships[321]._equipmentTypes.length).toBe(29);
            });
            it(`should 大淀・改 db.ships[321].canEquip(1) be true`, function () {
                expect(db.ships[321].canEquip(1)).toBe(true);
            });
            it(`should 大淀・改 db.ships[321].canEquip([1, 2]) be true`, function () {
                expect(db.ships[321].canEquip([1, 2])).toBe(true);
            });
            it(`should 大淀・改 db.ships[321].canEquip(5) be false`, function () {
                expect(db.ships[321].canEquip(5)).toBe(false);
            });
            it(`should 大淀・改 db.ships[321].canEquip([1, 5]) be false`, function () {
                expect(db.ships[321].canEquip([1, 5])).toBe(false);
            });
            it(`should 大淀・改 db.ships[321].canEquip('Sonar') be true`, function () {
                expect(db.ships[321].canEquip('Sonar')).toBe(true);
            });
            it(`should 大淀・改 db.ships[321].canEquip('Sonars') be true`, function () {
                expect(db.ships[321].canEquip('Sonars')).toBe(true);
            });
            it(`should 大淀・改 db.ships[321].canEquip('DiveBombers') be false`, function () {
                expect(db.ships[321].canEquip('DiveBombers')).toBe(false);
            });
            it(`should 大淀・改 db.ships[321].canEquip('DiveBombers') be false`, function () {
                expect(db.ships[321].canEquip('DiveBombers')).toBe(false);
            });
            it(`should 大淀・改 db.ships[321].canEquip(['Sonar','Torpedo']) be true`, function () {
                expect(db.ships[321].canEquip(['Sonar', 'Torpedo'])).toBe(true);
            });
            it(`should 大淀・改 db.ships[321].canEquip(['Sonar','DiveBombers']) be false`, function () {
                expect(db.ships[321].canEquip(['Sonar', 'DiveBombers'])).toBe(
                    false,
                );
            });
            it(`should 大淀・改 db.ships[321].canEquip(['Sonars','DiveBombers']) be false`, function () {
                expect(db.ships[321].canEquip(['Sonars', 'DiveBombers'])).toBe(
                    false,
                );
            });
            it(`should Warspite・改 db.ships[364].canEquip('SuperCaliber') be false`, function () {
                expect(db.ships[364].canEquip('SuperCaliber')).toBe(false);
            });
            it(`should 大和・改 db.ships[136].canEquip('Sonar') be false`, function () {
                expect(db.ships[136].canEquip('Sonar')).toBe(false);
            });
            it(`should 大和・改 db.ships[136].canEquip('LargeSonar') be true`, function () {
                expect(db.ships[136].canEquip('LargeSonar')).toBe(true);
            });
            it(`should 大和・改 db.ships[136].canEquip('Sonars') be true`, function () {
                expect(db.ships[136].canEquip('Sonars')).toBe(true);
            });
            it(`should 大和・改 db.ships[136].canEquip(['Sonars','SuperCaliber']) be true`, function () {
                expect(db.ships[136].canEquip(['Sonars', 'SuperCaliber'])).toBe(
                    true,
                );
            });
            it(`should 路易吉·托雷利・改 db.ships[605].canEquip(['MidgetSubmarine']) be false`, function () {
                expect(db.ships[605].canEquip(['MidgetSubmarine'])).toBe(false);
            });
            describe(`should Ship.prototype.canEquip() works`, () => {
                it(`伊勢・改二 | ✔ 大口径主砲`, () => {
                    expect(db.ships[553].canEquip('LargeCaliber')).toEqual(
                        true,
                    );
                });
                it(`伊勢・改二 (Slot #1) | ✔ 大口径主砲`, () => {
                    expect(db.ships[553].canEquip('LargeCaliber', 0)).toEqual(
                        true,
                    );
                });
                it(`伊勢・改二 (Slot #2) | ✔ 中口径主砲 | ✔ 大口径主砲`, () => {
                    expect(
                        db.ships[553].canEquip(
                            ['MediumCaliber', 'LargeCaliber'],
                            1,
                        ),
                    ).toEqual(true);
                });
                it(`伊勢・改二 (Slot #3) | ❌ 中口径主砲 | ❌ 大口径主砲`, () => {
                    expect(
                        db.ships[553].canEquip(
                            ['MediumCaliber', 'LargeCaliber'],
                            2,
                        ),
                    ).toEqual(false);
                });
                it(`伊勢・改二 (Slot #4) | ❌ 中口径主砲 | ❌ 大口径主砲`, () => {
                    expect(
                        db.ships[553].canEquip(
                            ['MediumCaliber', 'LargeCaliber'],
                            3,
                        ),
                    ).toEqual(false);
                });
                it(`伊勢・改二 (Slot #5) | ❌ 中口径主砲 | ❌ 大口径主砲`, () => {
                    expect(
                        db.ships[553].canEquip(
                            ['MediumCaliber', 'LargeCaliber'],
                            5,
                        ),
                    ).toEqual(false);
                });
                it(`伊勢・改二 (All slots) | ✔ 中口径主砲 | ✔ 大口径主砲`, () => {
                    expect(
                        db.ships[553].canEquip(
                            ['MediumCaliber', 'LargeCaliber'],
                            true,
                        ),
                    ).toEqual(true);
                });
                it(`能代・改二 (All slots) | ✔ 中口径主砲 | ✔ 鱼雷`, () => {
                    expect(
                        db.ships[662].canEquip(
                            ['MediumCaliber', 'Torpedo'],
                            true,
                        ),
                    ).toEqual(true);
                });
                it(`能代・改二 (Slot #4) | ✔ 小口径主砲 | ✔ 中口径主砲 | ❌ 鱼雷`, () => {
                    expect(
                        db.ships[662].canEquip(
                            ['MediumCaliber', 'SmallCaliber'],
                            3,
                        ),
                    ).toEqual(true);
                    expect(db.ships[662].canEquip('Torpedo', 3)).toEqual(false);
                });
            });

            it(`should 大和・改 db.ships[136].getExSlotEquipmentTypes() be kckit.exslotEquipmentTypes`, function () {
                expect(db.ships[136].getExSlotEquipmentTypes()).toEqual(
                    kckit.exSlotEquipmentTypes,
                );
            });
            it(`should 大和・改 db.ships[136].getExSlotOtherEquipments() be kckit.exslotEquipmentTypes`, function () {
                expect(db.ships[136].getExSlotOtherEquipments()).toEqual(
                    kckit.exSlotOtherEquipments.concat([71, 275, 483, 35, 317]),
                );
            });
            it(`should 熊野・改二 db.ships[504].getExSlotOtherEquipments() not be kckit.exslotEquipmentTypes`, function () {
                expect(db.ships[504].getExSlotOtherEquipments()).not.toEqual(
                    kckit.exSlotOtherEquipments,
                );
            });
            describe(`should Ship.prototype.getEquipmentTypes() works`, () => {
                it(`まるゆ・改 | ✔ 特殊潜航艇`, () => {
                    expect(
                        db.ships[402].getEquipmentTypes().includes(14),
                    ).toEqual(true);
                });
                it(`Luigi Torelli・改 | ❌ 特殊潜航艇`, () => {
                    expect(
                        db.ships[605].getEquipmentTypes().includes(14),
                    ).toEqual(false);
                });
                it(`UIT-25 | ❌ 特殊潜航艇 | ✔ 対空機銃`, () => {
                    const arr = db.ships[539].getEquipmentTypes();
                    expect(!arr.includes(14) && arr.includes(29)).toEqual(true);
                });
                it(`伊勢・改二 | ✔ 大口径主砲`, () => {
                    expect(
                        db.ships[553].getEquipmentTypes().includes(5),
                    ).toEqual(true);
                });
                it(`伊勢・改二 (Slot #1) | ✔ 大口径主砲`, () => {
                    expect(
                        db.ships[553].getEquipmentTypes(0).includes(5),
                    ).toEqual(true);
                });
                it(`伊勢・改二 (Slot #3) | ❌ 大口径主砲`, () => {
                    expect(
                        db.ships[553].getEquipmentTypes(2).includes(5),
                    ).toEqual(false);
                });
                it(`伊勢・改二 (All slots) | ✔ 大口径主砲`, () => {
                    expect(
                        db.ships[553].getEquipmentTypes(true).includes(5),
                    ).toEqual(true);
                });
                it(`夕張改二 | ✔ 中口径主砲`, () => {
                    expect(
                        db.ships[622].getEquipmentTypes().includes(4),
                    ).toEqual(true);
                    expect(
                        db.ships[622].getEquipmentTypes().includes(64),
                    ).toEqual(true);
                });
                it(`夕張改二 (Slot #4 & #5) | ❌ 中口径主砲`, () => {
                    expect(
                        db.ships[622].getEquipmentTypes(3).includes(4),
                    ).toEqual(false);
                    expect(
                        db.ships[622].getEquipmentTypes(3).includes(64),
                    ).toEqual(false);
                    expect(
                        db.ships[622].getEquipmentTypes(5).includes(4),
                    ).toEqual(false);
                    expect(
                        db.ships[622].getEquipmentTypes(5).includes(64),
                    ).toEqual(false);
                });
                it(`夕張改二 (Slot #4) | ✔ 機関部強化`, () => {
                    expect(
                        db.ships[622].getEquipmentTypes(3).includes(32),
                    ).toEqual(true);
                });
                it(`夕張改二 (Slot #5) | ❌ 機関部強化`, () => {
                    expect(
                        db.ships[622].getEquipmentTypes(5).includes(32),
                    ).toEqual(false);
                });
                it(`タカオ | ❌ 対空機銃`, () => {
                    expect(
                        db.ships[9182].getEquipmentTypes().includes(29),
                    ).toEqual(false);
                });
            });
            it(`should Ship.prototype.getCapability() works`, () => {
                expect(typeof db.ships[1].getCapability()).toEqual('object');
                expect(
                    db.ships[487].getCapability('count_as_landing_craft'),
                ).toEqual(1);
                expect(
                    db.ships[487].getCapability(
                        'count_as_night_operation_aviation_personnel',
                    ),
                ).toEqual(false);
                /* 武蔵・改二 */ expect(
                    db.ships[546].getCapability('anti_air_rocket_barrage'),
                ).toEqual(false);
                /* 扶桑・改二 */ expect(
                    db.ships[411].getCapability('anti_air_rocket_barrage'),
                ).toEqual(true);
                /* 伊勢・改 */ expect(
                    db.ships[82].getCapability('anti_air_rocket_barrage'),
                ).toEqual('high');
            });
            it(`should Ship.prototype.getStatExtraMax() works`, () => {
                /* 長門 */ expect(db.ships[80].getStatExtraMax('hp')).toEqual(
                    2,
                );
                /* 長門・改二 */ expect(
                    db.ships[541].getStatExtraMax('hp', 99),
                ).toEqual(2);
                /* 長門・改二 */ expect(
                    db.ships[541].getStatExtraMax('hp', 100),
                ).toEqual(0);
                /* 長門・改二 */ expect(
                    db.ships[541].getStatExtraMax('asw'),
                ).toEqual(false);
                /* 長門・改二 */ expect(
                    db.ships[541].getStatExtraMax('aa'),
                ).toEqual(false);
                /* U-511改 */ expect(
                    db.ships[334].getStatExtraMax('hp', 99),
                ).toEqual(2);
                /* U-511改 */ expect(
                    db.ships[334].getStatExtraMax('hp', 100),
                ).toEqual(1);
                /* 阿武隈・改二 */ expect(
                    db.ships[200].getStatExtraMax('asw'),
                ).toEqual(9);
                /* 大淀・改 (基础对潜0，但为CL，可提升) */ expect(
                    db.ships[321].getStatExtraMax('asw'),
                ).toEqual(9);
                /* 龍鳳・改 (CVL，无基础对潜，不可提升) */ expect(
                    db.ships[318].getStatExtraMax('asw'),
                ).toEqual(false);
                /* 春日丸 (CVL，无基础对潜，不可提升) */ expect(
                    db.ships[521].getStatExtraMax('asw'),
                ).toEqual(false);
                /* 大鹰・改二 (CVL，但有基础对潜，可提升) */ expect(
                    db.ships[529].getStatExtraMax('asw'),
                ).toEqual(9);
            });
            describe(`should Ship.prototype.getBonuses() works`, () => {
                it(`大鳳改 - N bonuses`, () => {
                    expect(db.ships[156].getBonuses().length).toEqual(18);
                });
                it(`榛名改二 - N bonuses`, () => {
                    expect(db.ships[151].getBonuses().length).toEqual(37);
                });
            });
            describe(`should Ship.prototype.getAACI() works`, () => {
                it(`should be Array`, () => {
                    expect(Array.isArray(db.ships[182].getAACI())).toEqual(
                        true,
                    );
                    expect(Array.isArray(db.ships[400].getAACI())).toEqual(
                        true,
                    );
                });
                it(`伊8・改 - no bonuses`, () => {
                    expect(db.ships[400].getAACI()).toEqual([]);
                });
                it(`伊504`, () => {
                    expect(db.ships[530].getAACI().map((o) => o.id)).toEqual([
                        23,
                    ]);
                });
                it(`Nelson・改`, () => {
                    expect(db.ships[576].getAACI().map((o) => o.id)).toEqual([
                        4, 5, 6, 8, 7, 12, 32, 32, 32, 9,
                    ]);
                });
                it(`Ark Royal・改`, () => {
                    expect(db.ships[393].getAACI().map((o) => o.id)).toEqual([
                        5, 8, 7, 12, 32, 32, 9,
                    ]);
                });
            });
            describe(`should Ship.prototype.getSpecialAttacks() works`, () => {
                it(`should be Array`, () => {
                    expect(
                        Array.isArray(db.ships[182].getSpecialAttacks()),
                    ).toEqual(true);
                    expect(
                        Array.isArray(db.ships[576].getSpecialAttacks()),
                    ).toEqual(true);
                });
                it(`伊8改 - no special attacks`, () => {
                    expect(db.ships[400].getSpecialAttacks().length).toEqual(0);
                });
                it(`Nelson改 - 1 special attack`, () => {
                    expect(db.ships[576].getSpecialAttacks().length).toEqual(1);
                });
                it(`長門改二 - 1 special attack`, () => {
                    expect(db.ships[541].getSpecialAttacks().length).toEqual(1);
                });
            });
            it(`should Ship.prototype.canEquipThis() works`, () => {
                // Richelieu改 ✅ 46cm三連装砲改
                expect(db.ships[392].canEquipThis(276)).toEqual(true);
                // Richelieu改 ✅ Laté 298B
                expect(db.ships[392].canEquipThis(194)).toEqual(true);
                // Richelieu改 ✅ 46cm三連装砲改 + Laté 298B
                expect(db.ships[392].canEquipThis([276, 194])).toEqual(true);
                // Richelieu改 ❌ 46cm三連装砲改 + Laté 298B + 51cm連装砲
                expect(db.ships[392].canEquipThis([276, 194, 281])).toEqual(
                    false,
                );
                // Richelieu ✅ 46cm三連装砲改
                expect(db.ships[492].canEquipThis(276)).toEqual(true);
                // Richelieu ❌ Laté 298B
                expect(db.ships[492].canEquipThis(194)).toEqual(false);
                // Richelieu ❌ 46cm三連装砲改 + Laté 298B
                expect(db.ships[492].canEquipThis([276, 194])).toEqual(false);
                // 秋月改 ✅ 42号対空電探改二
                expect(db.ships[492].canEquipThis([330, 411])).toEqual(true);
            });
            it(`should Ship.prototype.getSubType() works`, () => {
                // 加賀改二
                expect(db.ships[698].getSubType()).toEqual(undefined);
                // 加賀改二戊
                expect(db.ships[610].getSubType()).toEqual('NightCarrier');
                // 加賀改二護
                expect(db.ships[646].getSubType()).toEqual('ModernizedCarrier');
                // 加賀改二
                expect(db.ships[698].getSubType()).toEqual(undefined);
                // 瑞鳳改二
                expect(db.ships[555]._subType).toEqual(undefined);
                // 瑞鳳改二乙
                expect(db.ships[560]._subType).toEqual('EscortCarrier');
                // 鈴谷改二
                expect(db.ships[503]._subType).toEqual(undefined);
                // 鈴谷航改二
                expect(db.ships[508]._subType).toEqual('AssultCarrier');
                // 最上改二
                expect(db.ships[501]._subType).toEqual(undefined);
                // 最上改二特
                expect(db.ships[506]._subType).toEqual(
                    'SpecialRevisedAviationCruiser',
                );
                // 矢矧改二
                expect(db.ships[663]._subType).toEqual(undefined);
                // 矢矧改二特
                expect(db.ships[668]._subType).toEqual(
                    'HeavyRevisedLightCruiser',
                );
                // Gambier Bay Mk.II
                expect(db.ships[707]._subType).toEqual('SpecialRevisedCarrier');
            });
        });

        describe('Equipment...', function () {
            it(`should db.items[1]._icon be 1`, function () {
                expect(db.items[1]._icon).toBe(1);
            });
            it(`should [224] 爆装一式戦 隼III型改(55戦隊) icon ID be 44`, function () {
                expect(db.items[224]._icon).toBe(44);
            });
            it(`should db.items[1].getType('ja_jp') be 小口径主砲`, function () {
                expect(db.items[1].getType('ja_jp')).toBe('小口径主砲');
            });
            it(`should db.items[1].getType('zh_cn') be 小口径主炮`, function () {
                expect(db.items[1].getType('zh_cn')).toBe('小口径主炮');
            });
            it(`should db.items[1].isEquipableExSlot() be false`, function () {
                expect(db.items[1].isEquipableExSlot()).toBe(false);
            });
            it(`should db.items[37].isEquipableExSlot() be false`, function () {
                // 7.7mm机枪
                expect(db.items[37].isEquipableExSlot()).toBe(true);
            });
            it(`should db.items[33].isEquipableExSlot() be false`, function () {
                // 改良型舰船涡轮机
                expect(db.items[33].isEquipableExSlot()).toBe(true);
            });
            it(`should [253] Spitfire Mk.IX(熟練) isRankUpgradable() be true`, function () {
                expect(db.items[253].isRankUpgradable()).toBe(true);
            });
            it(`should [244] Swordfish Mk.III(熟練) rankupgradable be true`, function () {
                expect(db.items[244].rankupgradable).toBe(true);
            });
            it(`should [70] 三式指揮連絡機(対潜) isRankUpgradable() be true`, function () {
                expect(db.items[70].isRankUpgradable()).toBe(true);
            });
            it(`should [69] カ号観測機 rankupgradable be true`, function () {
                expect(db.items[69].rankupgradable).toBe(true);
            });
            it(`should [147] 120mm連装砲 is MainGun`, function () {
                expect(db.items[147].isType('MainGun')).toBe(true);
            });
            it(`should [147] 120mm連装砲 is not LargeCaliber`, function () {
                expect(db.items[147].isType('LargeCaliber')).toBe(false);
            });
            it(`should [163] Ro.43水偵 is Aircraft`, function () {
                expect(db.items[163].isType('Aircraft')).toBe(true);
            });
            it(`should [175] 雷電 is Aircraft`, function () {
                expect(db.items[175].isType('Aircraft')).toBe(true);
            });
            it(`should [142] 15m二重測距儀+21号電探改二 is not Aircraft`, function () {
                expect(db.items[142].isType('Aircraft')).toBe(false);
            });
            it(`should [222] 一式戦 隼III型甲 is Interceptor`, function () {
                expect(db.items[222].isType('Interceptor')).toBe(true);
            });
            it(`should [187] 銀河 is not Interceptor`, function () {
                expect(db.items[187].isType('Interceptor')).toBe(false);
            });
            it(`should [140] 96式150cm探照灯 TP be 0`, function () {
                expect(db.items[140].getTP()).toBe(0);
            });
            it(`should [68] 大発動艇 TP be 8`, function () {
                expect(db.items[68].getTP()).toBe(8);
            });
            it(`should [268] 北方迷彩(+北方装備) ARMOR be 2`, function () {
                expect(db.items[268].getStat('armor')).toBe(2);
            });
            it(`should [268] 北方迷彩(+北方装備) _KJGAA_ (wrone stat type) be undefined`, function () {
                expect(db.items[268].getStat('_KJGAA_')).toBe(undefined);
            });
            // it(`should [268] 北方迷彩(+北方装備) ARMOR for [547] 多摩改二 be 4`, function () {
            //     expect(db.items[268].getStat('armor', 547)).toBe(4);
            //     expect(db.items[268].getStat('armor', '547')).toBe(4);
            //     expect(db.items[268].getStat('armor', db.ships[547])).toBe(4);
            // });
            // it(`should [267] 12.7cm連装砲D型改二 FIRE be 3`, function () {
            //     expect(db.items[267].getStat('fire')).toBe(3);
            //     expect(db.items[267].getStat('fire', 547)).toBe(3);
            //     expect(db.items[267].getStat('fire', '547')).toBe(3);
            //     expect(db.items[267].getStat('fire', db.ships[547])).toBe(3);
            // });
            // it(`should [267] 12.7cm連装砲D型改二 FIRE for 島風型、夕雲型 be 5`, function () {
            //     expect(db.items[267].getStat('fire', 50)).toBe(5);
            //     expect(db.items[267].getStat('fire', 424)).toBe(5);
            //     expect(db.items[267].getStat('fire', 344)).toBe(5);
            // });
            // it(`should [267] 12.7cm連装砲D型改二 FIRE for 陽炎型 be 4`, function () {
            //     expect(db.items[267].getStat('fire', 18)).toBe(4);
            //     expect(db.items[267].getStat('fire', 294)).toBe(4);
            // });
            // it(`should [267] 12.7cm連装砲D型改二 EVASION for 島風型、夕雲型、陽炎型 be 2`, function () {
            //     expect(db.items[267].getStat('evasion', 229)).toBe(2);
            //     expect(db.items[267].getStat('evasion', 424)).toBe(2);
            //     expect(db.items[267].getStat('evasion', 344)).toBe(2);
            // });
            // it(`should [267] 12.7cm連装砲D型改二 FIRE for [543] 長波改二`, function () {
            //     expect(db.items[267].getStat('fire', 543)).toBe(6);
            // });
            describe(`should Equipment.prototype.getBonuses() works`, () => {
                it(`12cm単装砲 - No bonuses`, () => {
                    expect(db.items[1].getBonuses()).toEqual([]);
                });
                it(`12.7cm単装高角砲(後期型) - 7 bonuses`, () => {
                    expect(db.items[229].getBonuses().length).toEqual(12);
                });
                it(`12.7cm連装砲D型改二 - 13 bonuses`, () => {
                    expect(db.items[267].getBonuses().length).toEqual(11);
                });
                it(`61cm三連装(酸素)魚雷後期型 - 7 bonuses`, () => {
                    expect(db.items[285].getBonuses().length).toEqual(15);
                });
                it(`33号対水上電探 - N bonuses`, () => {
                    expect(db.items[29].getBonuses().length).toEqual(65);
                });
                it(`15m二重測距儀+21号電探改二 - 12 bonuses`, () => {
                    expect(db.items[142].getBonuses().length).toEqual(15);
                });
                it(`41cm三连装炮改二`, () => {
                    expect(db.items[290].getBonuses().length).toEqual(8);
                });
                it(`瑞雲`, () => {
                    expect(db.items[26].getBonuses().length).toEqual(7);
                });
            });
        });

        describe('EquipmentType...', function () {
            it(`should db.itemTypes[1].getName("ja_jp") be 小口径主砲`, function () {
                expect(db.itemTypes[1].getName('ja_jp')).toBe('小口径主砲');
            });
        });

        describe('Entity...', function () {});

        describe('Consumable...', function () {});

        describe('ExillustType...', function () {
            it(`should db.exillustTypes[1].getName("ja_jp") be 新春`, function () {
                expect(db.exillustTypes[1].getName('ja_jp')).toBe('新春');
            });
            it(`should db.exillustTypes[1].getName("zh_cn") be 新年`, function () {
                expect(db.exillustTypes[1].getName('zh_cn')).toBe('新年');
            });
            it(`should db.exillustTypes[1].getTime("ja_jp") be 1月初旬`, function () {
                expect(db.exillustTypes[1].getTime('ja_jp')).toBe('1月初旬');
            });
            it(`should db.exillustTypes[1].getTime("en_us") be Early January`, function () {
                expect(db.exillustTypes[1].getTime('en_us')).toBe(
                    'Early January',
                );
            });
        });
    });

    describe('Change locale...', () => {
        describe('Changing to en_us...', () => {
            it(`should be success without error`, () => {
                require('../src/register.js')({
                    locale: 'en_us',
                });
            });
            it(`should 隼鷹・改二 db.ships[408].getType() be Light Aircraft Carrier`, function () {
                expect('Light Aircraft Carrier').toBe(db.ships[408].getType());
            });
            it(`should Гангут・два db.ships[513]._speed be Slow`, function () {
                expect('Slow').toBe(db.ships[513]._speed);
            });
            it(`should Гангут・два db.ships[513]._navyName be Soviet Navy`, function () {
                expect('Soviet Navy').toBe(db.ships[513]._navyName);
            });
        });
        describe('Changing to zh_cn...', () => {
            it(`should be success without error`, () => {
                require('../src/register.js')({
                    locale: 'zh_cn',
                });
            });
            it(`should 隼鷹・改二 db.ships[408].getType() be 轻型航母`, function () {
                expect('轻型航母').toBe(db.ships[408].getType());
            });
            it(`should Гангут・два db.ships[513]._speed be 低速`, function () {
                expect('低速').toBe(db.ships[513]._speed);
            });
            it(`should Гангут・два db.ships[513]._navyName be 苏联海军`, function () {
                expect('苏联海军').toBe(db.ships[513]._navyName);
            });
        });
    });
});

describe('Getting functions/utilities', () => {
    describe('should getShipAndEquipments() works', () => {
        it('Normal condition', () => {
            expect(
                get.shipAndEquipments(131, [87, undefined, undefined, 33, 87])
                    .ship.id,
            ).toBe(131);
            expect(
                get.shipAndEquipments(131, [87, undefined, undefined, 33, 87])
                    .equipments.length,
            ).toBe(5);
            expect(
                get.shipAndEquipments(131, [87, undefined, undefined, 33, 87])
                    .equipments[3].id,
            ).toBe(33);
            expect(
                get.shipAndEquipments(
                    131,
                    [87, undefined, undefined, 33, 87],
                    [11],
                ).equipmentStars[0],
            ).toBe(10);
            expect(
                get.shipAndEquipments(
                    131,
                    [87, undefined, undefined, 33, 87],
                    [0, 1],
                ).equipmentStars[1],
            ).toBe(undefined);
            expect(
                get.shipAndEquipments(
                    131,
                    [87, undefined, undefined, 33, 87],
                    [],
                    [11],
                ).equipmentRanks[0],
            ).toBe(7);
            expect(
                get.shipAndEquipments(
                    131,
                    [87, undefined, undefined, 33, 87],
                    [],
                    [0, 1],
                ).equipmentRanks[1],
            ).toBe(undefined);
        });
        it('If ship has less slots, the missing slot should be empty', () => {
            expect(
                get.shipAndEquipments(383, [87, undefined, undefined, 33, 87])
                    .equipments[3],
            ).toBe(undefined);
        });
    });
});
