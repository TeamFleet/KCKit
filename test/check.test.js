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
            expect(check.ship(1, { isID: [2, 3] })).toBe(false);
            expect(check.ship(db.ships[1], { isID: 1 })).toBe(true);
            expect(check.ship(db.ships[1], { isID: 2 })).toBe(false);
            expect(check.ship(db.ships[1], { isID: [1, 2] })).toBe(true);
            expect(check.ship(db.ships[1], { isID: [2, 3] })).toBe(false);
        });
        it(`should condition isNotID be working`, function () {
            expect(check.ship(1, { isNotID: 1 })).toBe(false);
            expect(check.ship(1, { isNotID: 2 })).toBe(true);
            expect(check.ship(1, { isNotID: [1, 2] })).toBe(false);
            expect(check.ship(1, { isNotID: [2, 3] })).toBe(true);
            expect(check.ship(db.ships[1], { isNotID: 1 })).toBe(false);
            expect(check.ship(db.ships[1], { isNotID: 2 })).toBe(true);
            expect(check.ship(db.ships[1], { isNotID: [1, 2] })).toBe(false);
            expect(check.ship(db.ships[1], { isNotID: [2, 3] })).toBe(true);
        });
        it(`should condition isName be working`, function () {
            expect(check.ship(1, { isName: 'mutsuki' })).toBe(true);
            expect(check.ship(1, { isName: '睦月' })).toBe(true);
            expect(check.ship(1, { isName: 'むつき' })).toBe(true);
            expect(check.ship(1, { isName: 'satsuki' })).toBe(false);
            expect(check.ship(1, { isName: ['mutsuki', 'satsuki'] })).toBe(true);
            expect(check.ship(1, { isName: ['satsuki', 'yayoi'] })).toBe(false);
            expect(check.ship(db.ships[1], { isName: 'mutsuki' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: '睦月' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: 'むつき' })).toBe(true);
            expect(check.ship(db.ships[1], { isName: 'satsuki' })).toBe(false);
            expect(check.ship(db.ships[1], { isName: ['mutsuki', 'satsuki'] })).toBe(true);
            expect(check.ship(db.ships[1], { isName: ['satsuki', 'yayoi'] })).toBe(false);
        });
        it(`should condition isNotName be working`, function () {
            expect(check.ship(1, { isNotName: 'mutsuki' })).toBe(false);
            expect(check.ship(1, { isNotName: '睦月' })).toBe(false);
            expect(check.ship(1, { isNotName: 'むつき' })).toBe(false);
            expect(check.ship(1, { isNotName: 'satsuki' })).toBe(true);
            expect(check.ship(1, { isNotName: ['mutsuki', 'satsuki'] })).toBe(false);
            expect(check.ship(1, { isNotName: ['satsuki', 'yayoi'] })).toBe(true);
            expect(check.ship(db.ships[1], { isNotName: 'mutsuki' })).toBe(false);
            expect(check.ship(db.ships[1], { isNotName: '睦月' })).toBe(false);
            expect(check.ship(db.ships[1], { isNotName: 'むつき' })).toBe(false);
            expect(check.ship(db.ships[1], { isNotName: 'satsuki' })).toBe(true);
            expect(check.ship(db.ships[1], { isNotName: ['mutsuki', 'satsuki'] })).toBe(false);
            expect(check.ship(db.ships[1], { isNotName: ['satsuki', 'yayoi'] })).toBe(true);
        });
        it(`should condition isType (and other similar method) be working`, function () {
            expect(check.ship(1, { isType: 1 })).toBe(true);
            expect(check.ship(1, { isType: 2 })).toBe(false);
            expect(check.ship(1, { isType: [1, 2] })).toBe(true);
            expect(check.ship(1, { isType: [2, 3] })).toBe(false);
            expect(check.ship(db.ships[1], { isType: 1 })).toBe(true);
            expect(check.ship(db.ships[1], { isType: 2 })).toBe(false);
            expect(check.ship(db.ships[1], { isType: [1, 2] })).toBe(true);
            expect(check.ship(db.ships[1], { isType: [2, 3] })).toBe(false);

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
        it(`should condition isNotType (and other similar method) be working`, function () {
            expect(check.ship(1, { isNotType: 1 })).toBe(false);
            expect(check.ship(1, { isNotType: 2 })).toBe(true);
            expect(check.ship(1, { isNotType: [1, 2] })).toBe(false);
            expect(check.ship(1, { isNotType: [2, 3] })).toBe(true);
            expect(check.ship(db.ships[1], { isNotType: 1 })).toBe(false);
            expect(check.ship(db.ships[1], { isNotType: 2 })).toBe(true);
            expect(check.ship(db.ships[1], { isNotType: [1, 2] })).toBe(false);
            expect(check.ship(db.ships[1], { isNotType: [2, 3] })).toBe(true);
        });
        it(`should condition isClass be working`, function () {
            expect(check.ship(1, { isClass: 12 })).toBe(true);
            expect(check.ship(1, { isClass: 1 })).toBe(false);
            expect(check.ship(1, { isClass: [12, 1] })).toBe(true);
            expect(check.ship(1, { isClass: [1, 2] })).toBe(false);
            expect(check.ship(db.ships[1], { isClass: 12 })).toBe(true);
            expect(check.ship(db.ships[1], { isClass: 1 })).toBe(false);
            expect(check.ship(db.ships[1], { isClass: [12, 1] })).toBe(true);
            expect(check.ship(db.ships[1], { isClass: [1, 2] })).toBe(false);
        });
        it(`should condition isNotClass be working`, function () {
            expect(check.ship(1, { isNotClass: 12 })).toBe(false);
            expect(check.ship(1, { isNotClass: 1 })).toBe(true);
            expect(check.ship(1, { isNotClass: [12, 1] })).toBe(false);
            expect(check.ship(1, { isNotClass: [1, 2] })).toBe(true);
            expect(check.ship(db.ships[1], { isNotClass: 12 })).toBe(false);
            expect(check.ship(db.ships[1], { isNotClass: 1 })).toBe(true);
            expect(check.ship(db.ships[1], { isNotClass: [12, 1] })).toBe(false);
            expect(check.ship(db.ships[1], { isNotClass: [1, 2] })).toBe(true);
        });
        it(`should condition hasSlot (and other similar method) be working`, function () {
            expect(check.ship(1, { hasSlot: 2 })).toBe(true);
            expect(check.ship(1, { hasSlot: 1 })).toBe(false);
            expect(check.ship(1, { hasSlot: [2, 2] })).toBe(true);
            expect(check.ship(1, { hasSlot: [1, 3] })).toBe(true);
            expect(check.ship(1, { hasSlot: [3, 4] })).toBe(false);
            expect(check.ship(1, { hasSlotMin: 1 })).toBe(true);
            expect(check.ship(1, { hasSlotMin: 2 })).toBe(true);
            expect(check.ship(1, { hasSlotMin: 3 })).toBe(false);
            expect(check.ship(1, { hasSlotMax: 1 })).toBe(false);
            expect(check.ship(1, { hasSlotMax: 2 })).toBe(true);
            expect(check.ship(1, { hasSlotMax: 3 })).toBe(true);
        })
        it(`should multiple conditions be working`, function () {
            expect(check.ship(78, {
                isBB: true,
                hasSlotMax: 3
            })).toBe(true);
            expect(check.ship(78, {
                isBB: true,
                hasSlotMin: 4
            })).toBe(false);
        })
    });
    describe('Checking for equipment...', () => {
        it(`should condition isID be working`, function () {
            expect(check.equipment(1, { isID: 1 })).toBe(true);
            expect(check.equipment(1, { isID: 2 })).toBe(false);
            expect(check.equipment(1, { isID: [1, 2] })).toBe(true);
            expect(check.equipment(1, { isID: [2, 3] })).toBe(false);
            expect(check.equipment(db.items[1], { isID: 1 })).toBe(true);
            expect(check.equipment(db.items[1], { isID: 2 })).toBe(false);
            expect(check.equipment(db.items[1], { isID: [1, 2] })).toBe(true);
            expect(check.equipment(db.items[1], { isID: [2, 3] })).toBe(false);
        });
        it(`should condition isNotID be working`, function () {
            expect(check.equipment(1, { isNotID: 1 })).toBe(false);
            expect(check.equipment(1, { isNotID: 2 })).toBe(true);
            expect(check.equipment(1, { isNotID: [1, 2] })).toBe(false);
            expect(check.equipment(1, { isNotID: [2, 3] })).toBe(true);
            expect(check.equipment(db.items[1], { isNotID: 1 })).toBe(false);
            expect(check.equipment(db.items[1], { isNotID: 2 })).toBe(true);
            expect(check.equipment(db.items[1], { isNotID: [1, 2] })).toBe(false);
            expect(check.equipment(db.items[1], { isNotID: [2, 3] })).toBe(true);
        });
        it(`should condition isName be working`, function () {
            expect(check.equipment(1, { isName: '12cm単装砲' })).toBe(true);
            expect(check.equipment(1, { isName: '12cm单装炮' })).toBe(true);
            expect(check.equipment(1, { isName: '12cm连装砲' })).toBe(false);
            expect(check.equipment(1, { isName: ['11cm単装砲', '12cm単装砲'] })).toBe(true);
            expect(check.equipment(1, { isName: ['12cm连装砲', '13cm连装砲'] })).toBe(false);
            expect(check.equipment(db.items[1], { isName: '12cm単装砲' })).toBe(true);
            expect(check.equipment(db.items[1], { isName: '12cm单装炮' })).toBe(true);
            expect(check.equipment(db.items[1], { isName: '12cm连装砲' })).toBe(false);
            expect(check.equipment(db.items[1], { isName: ['11cm単装砲', '12cm単装砲'] })).toBe(true);
            expect(check.equipment(db.items[1], { isName: ['12cm连装砲', '13cm连装砲'] })).toBe(false);
        });
        it(`should condition isNotName be working`, function () {
            expect(check.equipment(1, { isNotName: '12cm単装砲' })).toBe(false);
            expect(check.equipment(1, { isNotName: '12cm单装炮' })).toBe(false);
            expect(check.equipment(1, { isNotName: '12cm连装砲' })).toBe(true);
            expect(check.equipment(1, { isNotName: ['11cm単装砲', '12cm単装砲'] })).toBe(false);
            expect(check.equipment(1, { isNotName: ['12cm连装砲', '13cm连装砲'] })).toBe(true);
            expect(check.equipment(db.items[1], { isNotName: '12cm単装砲' })).toBe(false);
            expect(check.equipment(db.items[1], { isNotName: '12cm单装炮' })).toBe(false);
            expect(check.equipment(db.items[1], { isNotName: '12cm连装砲' })).toBe(true);
            expect(check.equipment(db.items[1], { isNotName: ['11cm単装砲', '12cm単装砲'] })).toBe(false);
            expect(check.equipment(db.items[1], { isNotName: ['12cm连装砲', '13cm连装砲'] })).toBe(true);
        });
        it(`should condition isNameOf be working`, function () {
            expect(check.equipment(1, { isNameOf: '12cm' })).toBe(true);
            expect(check.equipment(1, { isNameOf: '12cm连装砲' })).toBe(false);
            expect(check.equipment(1, { isNameOf: ['11cm', '12cm'] })).toBe(true);
            expect(check.equipment(1, { isNameOf: ['11cm', '13cm'] })).toBe(false);
        });
        it(`should condition isType (and other similar method) be working`, function () {
            expect(check.equipment(1, { isType: 1 })).toBe(true);
            expect(check.equipment(1, { isType: 2 })).toBe(false);
            expect(check.equipment(1, { isType: [1, 2] })).toBe(true);
            expect(check.equipment(1, { isType: [2, 3] })).toBe(false);
            expect(check.equipment(db.items[1], { isType: 1 })).toBe(true);
            expect(check.equipment(db.items[1], { isType: 2 })).toBe(false);
            expect(check.equipment(db.items[1], { isType: [1, 2] })).toBe(true);
            expect(check.equipment(db.items[1], { isType: [2, 3] })).toBe(false);

            expect(check.equipment(1, { isSmallCaliber: true })).toBe(true);
            expect(check.equipment(1, { isSmallCaliber: false })).toBe(false);
            expect(check.equipment(1, { isSmallCalibers: true })).toBe(true);
            expect(check.equipment(1, { isSmallCalibers: false })).toBe(false);
            expect(check.equipment(1, { isSmallCaliberHA: true })).toBe(false);
            expect(check.equipment(1, { isSmallCaliberHA: false })).toBe(true);
            expect(check.equipment(1, { isLargeCalibers: true })).toBe(false);
            expect(check.equipment(1, { isLargeCalibers: false })).toBe(true);

            expect(check.equipment(122, { isHAMountAAFD: true })).toBe(true);
            expect(check.equipment(122, { isHAMountAAFD: false })).toBe(false);

            expect(check.equipment(124, { isAARadar: true })).toBe(true);
            expect(check.equipment(124, { isAARadar: false })).toBe(false);
            expect(check.equipment(141, { isAARadar: true })).toBe(false);
            expect(check.equipment(141, { isAARadar: false })).toBe(true);

            // 21号対空電探改
            expect(check.equipment(89, { isAARadar: true })).toBe(true)
            expect(check.equipment(89, { isSurfaceRadar: true })).toBe(true)

            // FuMO25 レーダー
            expect(check.equipment(124, { isAARadar: true })).toBe(true)
            expect(check.equipment(124, { isSurfaceRadar: true })).toBe(true)

            // SK&SG レーダー
            expect(check.equipment(279, { isAARadar: true })).toBe(true)
            expect(check.equipment(279, { isSurfaceRadar: true })).toBe(true)

            // 15m二重測距儀+21号電探改二
            expect(check.equipment(142, { isAARadar: true })).toBe(true)
            expect(check.equipment(142, { isSurfaceRadar: true })).toBe(true)
        });
        it(`should condition isNotType (and other similar method) be working`, function () {
            expect(check.equipment(1, { isNotType: 1 })).toBe(false);
            expect(check.equipment(1, { isNotType: 2 })).toBe(true);
            expect(check.equipment(1, { isNotType: [1, 2] })).toBe(false);
            expect(check.equipment(1, { isNotType: [2, 3] })).toBe(true);
            expect(check.equipment(db.items[1], { isNotType: 1 })).toBe(false);
            expect(check.equipment(db.items[1], { isNotType: 2 })).toBe(true);
            expect(check.equipment(db.items[1], { isNotType: [1, 2] })).toBe(false);
            expect(check.equipment(db.items[1], { isNotType: [2, 3] })).toBe(true);
        });
        it(`should multiple conditions be working`, function () {
            expect(check.equipment(51, {
                isAAGun: false,
                isAAGunCD: false
            })).toBe(false);
            expect(check.equipment(51, {
                isAAGun: true,
                isAAGunCD: false
            })).toBe(true);
            expect(check.equipment(131, {
                isAAGun: true,
                isAAGunCD: false
            })).toBe(false);
            expect(check.equipment(124, {
                isRadar: true,
                isAARadar: true
            })).toBe(true);
            expect(check.equipment(124, {
                isRadar: true,
                isAARadar: false
            })).toBe(false);
            expect(check.equipment(141, {
                isRadar: true,
                isAARadar: true
            })).toBe(false);
            expect(check.equipment(141, {
                isRadar: true,
                isAARadar: false
            })).toBe(true);
        })
    })
    describe('Checking for equipment list...', () => {
        it(`should condition hasID be working`, function () {
            expect(check.equipments([1, 2], { hasID: 1 })).toBe(true);
            expect(check.equipments([1, 2, 3], { hasID: [1, 2] })).toBe(true);
            expect(check.equipments([1, 2], { hasID: 11 })).toBe(false);
            expect(check.equipments([1, 2, 3], { hasID: [11, 12] })).toBe(false);
            expect(check.equipments([1, 2, 3], { hasID: [1, 111] })).toBe(false);
            expect(check.equipments([1, 1, 2, 3], { hasID: [1, 111] })).toBe(false);
        });
        it(`should condition hasNameOf be working`, function () {
            expect(check.equipments([1, 83], { hasNameOf: '九三一空' })).toBe(true);
            expect(check.equipments([1, 83], { hasNameOf: ['12cm', '九三一空'] })).toBe(true);
            expect(check.equipments([1, 83], { hasNameOf: '11cm' })).toBe(false);
            expect(check.equipments([1, 2, 83], { hasNameOf: ['11cm', '六〇一空'] })).toBe(false);
            expect(check.equipments([1, 2, 83], { hasNameOf: ['12cm', '11cm', '六〇一空'] })).toBe(false);
            expect(check.equipments([1, 1, 2, 83], { hasNameOf: ['12cm', '11cm', '六〇一空'] })).toBe(false);
        });
        it(`should type conditions be working`, function () {
            expect(check.equipments([50, 51], { hasAAGun: true })).toBe(true);
            expect(check.equipments([50, 51], { hasAAGun: true, hasAAGunCD: false })).toBe(true);
            expect(check.equipments([50, 51], { hasAAGun: false })).toBe(false);
            expect(check.equipments([51, 51], { hasAAGun: 1 })).toBe(true);
            expect(check.equipments([51, 51], { hasAAGun: 2 })).toBe(true);
            expect(check.equipments([51, 51], { hasAAGun: 3 })).toBe(false);
            expect(check.equipments([51, 51], { hasAAGun: [2, 3] })).toBe(true);
            expect(check.equipments([51, 51], { hasAAGun: [1, 3] })).toBe(true);
            expect(check.equipments([51, 51], { hasAAGun: [3, 4] })).toBe(false);
            expect(check.equipments([71, 131, 1], {
                hasHAMountAAFD: false,
                hasHAMount: true,
                hasAAGunCD: true
            })).toBe(true);
            expect(check.equipments([51, 131, 1], {
                hasHAMountAAFD: false,
                hasHAMount: true,
                hasAAGunCD: true
            })).toBe(false);
            expect(check.equipments([122, 106], {
                hasHAMount: 2
            })).toBe(false);
            expect(check.equipments([244, 188], {
                hasTorpedoBomber: {
                    hasStat: {
                        asw: 7
                    }
                }
            })).toBe(true);
            expect(check.equipments([188], {
                hasTorpedoBomber: {
                    hasStat: {
                        asw: 7
                    }
                }
            })).toBe(false);
        });
    })
    describe('Checking for AACI...', () => {
        describe(`Get AACI ids for ship only`, () => {
            it(`Result should be Array`, function () {
                expect(Array.isArray(check.aaci(1))).toBe(true);
            })
            it(`Check samples`, function () {
                expect(check.aaci(405).map(obj => obj.id)).toEqual([8, 7, 12, 9]);
                expect(check.aaci(428).map(obj => obj.id)).toEqual([10, 11, 5, 8, 7, 12, 9]);
                expect(check.aaci(136).map(obj => obj.id)).toEqual([4, 5, 6, 8, 7, 12, 9]);
                /* 秋月・改 */ expect(check.aaci(330).map(obj => obj.id)).toEqual([1, 2, 3]);
                expect(check.aaci(141).map(obj => obj.id)).toEqual([5, 14, 8, 7, 15, 12, 9]);
                expect(check.aaci(470).map(obj => obj.id)).toEqual([5, 16, 8, 7, 12, 9, 17]);
                expect(check.aaci(418).map(obj => obj.id)).toEqual([5, 8, 7, 12, 9, 18]);
                expect(check.aaci(487).map(obj => obj.id)).toEqual([19, 5, 8, 7, 20, 12, 9]);
                expect(check.aaci(488).map(obj => obj.id)).toEqual([21, 5, 8, 7, 12, 9]);
                expect(check.aaci(557).map(obj => obj.id)).toEqual([29, 5, 8, 7, 12, 9]);
            })
        });
        describe(`Check AACI id for ship only`, () => {
            it(`Result should be Boolean`, function () {
                expect(typeof check.aaci(1, undefined, 1)).toBe('boolean');
            })
            it(`Check samples`, function () {
                expect(check.aaci(405, undefined, 8)).toBe(true);
                expect(check.aaci(488, undefined, 1)).toBe(false);
                expect(check.aaci(488, undefined, 21)).toBe(true);
                expect(check.aaci(488, undefined, [21, 1])).toBe(false);
                expect(check.aaci(488, undefined, [21, 5])).toBe(true);
                expect(check.aaci(488, undefined, [21, 5, 8, 7, 12, 9])).toBe(true);
            })
        });
        describe(`Get AACI ids for ship and equipment list`, () => {
            it(`Result should be Array`, function () {
                expect(Array.isArray(check.aaci(428, [130, 124]))).toBe(true);
            })
            describe(`Check samples`, () => {
                it(`全ての水上艦：特殊機銃 + 素対空3+の対空機銃 + 対空電探`, function () {
                    // 吹雪・改二
                    expect(check.aaci(426, [173, 38, 27]).map(obj => obj.id)).toEqual([12]);
                    expect(check.aaci(426, [85, 38, 27]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(426, [173, 37, 27]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(426, [173, 131, 27]).map(obj => obj.id)).toEqual([12]);
                    expect(check.aaci(426, [173, 38, 28]).map(obj => obj.id)).toEqual([]);
                    // 伊13・改
                    expect(check.aaci(374, [173, 38, 27]).map(obj => obj.id)).toEqual([]);
                })
                it(`UIT-25 / 伊504`, function () {
                    expect(check.aaci(539, [38]).map(obj => obj.id)).toEqual([23]);
                    expect(check.aaci(539, [85]).map(obj => obj.id)).toEqual([23]);
                    expect(check.aaci(539, [37]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(539, [131]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(530, [38]).map(obj => obj.id)).toEqual([23]);
                    expect(check.aaci(530, [85]).map(obj => obj.id)).toEqual([23]);
                    expect(check.aaci(530, [37]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(530, [131]).map(obj => obj.id)).toEqual([]);
                })
                it(`龍田・改二`, function () {
                    expect(check.aaci(478, [48, 38]).map(obj => obj.id)).toEqual([24]);
                    expect(check.aaci(478, [122, 38]).map(obj => obj.id)).toEqual([24]);
                    expect(check.aaci(478, [48, 85]).map(obj => obj.id)).toEqual([24]);
                    expect(check.aaci(478, [122, 85]).map(obj => obj.id)).toEqual([24]);
                    expect(check.aaci(478, [48, 37]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(478, [122, 37]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(478, [48, 131]).map(obj => obj.id)).toEqual([]);
                    expect(check.aaci(478, [122, 131]).map(obj => obj.id)).toEqual([]);
                })
                it(`伊勢・改 / 日向・改`, function () {
                    // 12cm30連装噴進砲改二 + 13号対空電探 + 三式弾
                    expect(check.aaci(82, [274, 27, 35]).map(obj => obj.id)).toEqual([25, 28]);
                    // 12cm30連装噴進砲改二 + 13号対空電探
                    expect(check.aaci(82, [274, 27]).map(obj => obj.id)).toEqual([28]);
                })
                it(`鬼怒・改二`, function () {
                    // Bofors 40mm四連装機関砲
                    expect(check.aaci(487, [173]).map(obj => obj.id)).toEqual([20]);
                    // Bofors 40mm四連装機関砲 + 10cm連装高角砲
                    expect(check.aaci(487, [173, 3]).map(obj => obj.id)).toEqual([19, 20]);
                    // Bofors 40mm四連装機関砲 + 10cm連装高角砲+高射装置
                    expect(check.aaci(487, [173, 122]).map(obj => obj.id)).toEqual([20]);
                })
                it(`磯風・改二`, function () {
                    // 10cm連装高角砲
                    expect(check.aaci(557, [3]).map(obj => obj.id)).toEqual([]);
                    // 10cm連装高角砲 + 13号対空電探
                    expect(check.aaci(557, [3, 27]).map(obj => obj.id)).toEqual([29]);
                    // 10cm連装高角砲+高射装置 + 13号対空電探
                    expect(check.aaci(557, [122, 27]).map(obj => obj.id)).toEqual([29, 8]);
                })
                it(`Warspite・改`, function () {
                    // 20連装7inch UP Rocket Launchers + QF 2ポンド8連装ポンポン砲
                    expect(check.aaci(364, [301, 191]).map(obj => obj.id)).toEqual([32]);
                })
                it(`Other samples`, function () {
                    expect(check.aaci(428, [130, 130, 124]).map(obj => obj.id)).toEqual([5, 8]);
                    expect(check.aaci(330, [122, 122, 106]).map(obj => obj.id)).toEqual([1, 2, 3]);
                })
            })
        })
        describe(`Check AACI id for ship and equipment list`, () => {
            it(`Check samples`, function () {
                expect(check.aaci(428, [130, 130, 124], 5)).toBe(true);
                expect(check.aaci(428, [130, 130, 124], [5, 8])).toBe(true);
                expect(check.aaci(428, [130, 130, 124], 6)).toBe(false);
                expect(check.aaci(428, [130, 130, 124], [6, 7])).toBe(false);
            })
        })
    })
    describe('Checking for OASW...', () => {
        describe(`Get OASW table for ship only`, () => {
            it(`Result should be Array or boolean`, function () {
                expect(Array.isArray(check.oasw(529))).toBe(true);
                expect(check.oasw(141)).toBe(true);
                expect(check.oasw(1)).toBe(false);
                expect(check.oasw(77)).toBe(false);
            })
            it(`Check samples`, function () {
                expect(check.oasw(526)[0].minLv).toBe(undefined);
                expect(check.oasw(434)[0].minLv).toBe(87);
                expect(check.oasw(321)[0].minLv).toBe(132);
                expect(check.oasw(380).length).toBe(2);
                expect(check.oasw(141)).toBe(true);
            })
        });
        describe(`Check OASW capability for ship and equipment list`, () => {
            describe(`Check samples`, () => {
                it(`零式水中聴音機`, function () {
                    // Gambier Bay・改
                    expect(check.oasw(396, [132, 244, 244])).toEqual(true);
                })
            })
        })
    })
    describe('Checking for OTS...', () => {
        describe(`Get OTS table for ship only`, () => {
            it(`Result should be Array or boolean`, function () {
                expect(check.ots(400)).toBe(true);
                expect(Array.isArray(check.ots(119))).toBe(true);
                expect(Array.isArray(check.ots(488))).toBe(true);
                expect(check.ots(434)).toBe(false);
            })
            it(`Check samples`, function () {
                expect(check.ots(400)).toBe(true);
                expect(check.ots(431).length).toBe(2);
                expect(check.ots(488).length).toBe(1);
            })
        });
        describe(`Check OTS capability for ship and equipment list`, () => {
            it(`Check samples`, function () {
                expect(check.ots(Object.assign(db.ships[400], {
                    level: 10
                }), [])).toBe(true);
                expect(check.ots(Object.assign(db.ships[400], {
                    level: 1
                }), [])).toBe(false);
                expect(check.ots(Object.assign(db.ships[400], {
                    level: 1
                }), [41])).toBe(true);
                expect(check.ots(488, [41])).toBe(true);
            })
        })
    })
})
