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

const calculate = require('../src/calculate')


describe('Calculating functions/utilities', () => {
    describe('general', () => {
        describe('tp...', () => {
            it('case 1', () => {
                expect(calculate.tp({
                    shipType: {
                        1: 1
                    }
                })).toBe(5)
                expect(calculate.tp({
                    shipType: {
                        '1': 1
                    }
                })).toBe(5)
            })
            it('case 2', () => {
                expect(calculate.tp({
                    shipType: {
                        1: 2
                    },
                    equipmentType: {
                        LandingCraft: 3
                    }
                })).toBe(34)
            })
            it('case 3', () => {
                expect(calculate.tp({
                    shipType: {
                        1: 2,
                        15: 1,
                    },
                    equipmentType: {
                        LandingCraft: 3,
                        48: 1
                    }
                })).toBe(47)
            })
        })
    })
    describe('ship', () => {
        describe('speed...', () => {
            it('type: low-1', () => {
                // 大和 改
                expect(calculate.ship.speed(136, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(5);
                expect(calculate.ship.speed(136, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(136, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(136, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(136, [
                    34, 34, 34, 34,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(136, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(136, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(136, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(136, [
                    34, 34, 34, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(136, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(136, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(136, [
                    34, 34, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(136, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(136, [
                    34, 87, 87, 87,
                    33
                ])).toBe(20);
            })
            it('type: low-2', () => {
                // 扶桑 改二
                expect(calculate.ship.speed(411, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(5);
                expect(calculate.ship.speed(411, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(411, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(411, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    34, 34, 34, 34,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(411, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(411, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    34, 34, 34, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    34, 34, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(411, [
                    34, 87, 87, 87,
                    33
                ])).toBe(15);
            })
            it('type: low-3', () => {
                // 明石 改
                expect(calculate.ship.speed(187, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(5);
                expect(calculate.ship.speed(187, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, 34, 34,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, 34, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 34, 87, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(187, [
                    34, 87, 87, 87,
                    33
                ])).toBe(10);
            })
            it('type: low-4', () => {
                // Samuel B.Roberts
                expect(calculate.ship.speed(561, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                // Samuel B.Roberts 改
                expect(calculate.ship.speed(681, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(681, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(681, [
                    87, 87, 87, undefined,
                    33
                ])).toBe(10);
            })
            it('type: high-1', () => {
                // 翔鹤 改二甲
                expect(calculate.ship.speed(466, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(466, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(466, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 34, 34, 34,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 34, 34, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 34, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(466, [
                    34, 87, 87, 87,
                    33
                ])).toBe(20);
            })
            it('type: high-2', () => {
                // 苍龙 改二
                expect(calculate.ship.speed(197, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(197, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(197, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 34, 34, 34,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(197, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 34, 34, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 34, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(197, [
                    34, 87, 87, 87,
                    33
                ])).toBe(20);
            })
            it('type: high-3', () => {
                // 秋月 改
                expect(calculate.ship.speed(330, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(330, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(330, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(330, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(330, [
                    undefined, undefined, 87, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(330, [
                    34, undefined, 87, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(330, [
                    34, 34, 87, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(330, [
                    undefined, 87, 87, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(330, [
                    34, 87, 87, undefined,
                    33
                ])).toBe(20);
                expect(calculate.ship.speed(330, [
                    87, 87, 87, undefined,
                    33
                ])).toBe(20);
            })
            it('type: high-4', () => {
                // 加贺 改
                expect(calculate.ship.speed(278, [
                    undefined, undefined, undefined, undefined,
                    33
                ])).toBe(10);
                expect(calculate.ship.speed(278, [
                    34, undefined, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, undefined, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, 34, undefined,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, 34, 34,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    undefined, undefined, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, undefined, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, undefined, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, 34, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    undefined, undefined, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, undefined, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 34, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    undefined, 87, 87, 87,
                    33
                ])).toBe(15);
                expect(calculate.ship.speed(278, [
                    34, 87, 87, 87,
                    33
                ])).toBe(15);
            })
        })
        describe('level for oasw...', () => {
            describe('check samples...', () => {
                it('最上 改', () => {
                    expect(
                        calculate.ship.levelOASW(73, [])
                    ).toBe(false)
                })
                it('古鷹 改二', () => {
                    expect(
                        calculate.ship.levelOASW(416, [])
                    ).toBe(false)
                })
                it('五十鈴 改二', () => {
                    expect(
                        calculate.ship.levelOASW(141, [])
                    ).toBe(true)
                })
                it('朝潮 改二', () => {
                    expect(
                        calculate.ship.levelOASW(463, [])
                    ).toBe(false)
                })
                it('朝潮 改二 + 四式水中聴音機', () => {
                    expect(
                        calculate.ship.levelOASW(463, [149])
                    ).toBe(false)
                })
                it('朝潮 改二 + 四式水中聴音機 x3', () => {
                    expect(
                        calculate.ship.levelOASW(463, [149, 149, 149])
                    ).toBe(114)
                })
                it('朝潮 改二丁', () => {
                    expect(
                        calculate.ship.levelOASW(468, [])
                    ).toBe(false)
                })
                it('朝潮 改二丁 + 12.7cm連装高角砲(後期型)', () => {
                    expect(
                        calculate.ship.levelOASW(468, [91])
                    ).toBe(false)
                })
                it('朝潮 改二丁 + 四式水中聴音機', () => {
                    expect(
                        calculate.ship.levelOASW(468, [149])
                    ).toBe(97)
                })
                it('大鷹 改二', () => {
                    expect(
                        calculate.ship.levelOASW(529, [])
                    ).toBe(false)
                })
                it('大鷹 改二 + 四式水中聴音機', () => {
                    expect(
                        calculate.ship.levelOASW(529, [149])
                    ).toBe(92)
                })
                it('大鷹 改二 + 天山一二型(村田隊)', () => {
                    expect(
                        calculate.ship.levelOASW(529, [144])
                    ).toBe(85)
                })
                it('大鷹 改二 + 彗星(江草隊)', () => {
                    expect(
                        calculate.ship.levelOASW(529, [100])
                    ).toBe(85)
                })
                it('大鷹 改二 + 四式水中聴音機 + 天山一二型(村田隊)', () => {
                    expect(
                        calculate.ship.levelOASW(529, [149, 144])
                    ).toBe(85)
                })
                it('大鷹 改', () => {
                    expect(
                        calculate.ship.levelOASW(526, [])
                    ).toBe(false)
                })
                it('大鷹 改 + 天山一二型(村田隊) x4', () => {
                    expect(
                        calculate.ship.levelOASW(526, [144, 144, 144, 144])
                    ).toBe(false)
                })
                it('大鷹 改 + 彗星(江草隊) x4', () => {
                    expect(
                        calculate.ship.levelOASW(526, [100, 100, 100, 100])
                    ).toBe(false)
                })
                it('大鷹 改 + 天山(九三一空)', () => {
                    expect(
                        calculate.ship.levelOASW(526, [83])
                    ).toBe(91)
                })
                it('大鷹 改 + Swordfish Mk.III(熟練)', () => {
                    expect(
                        calculate.ship.levelOASW(526, [244])
                    ).toBe(83)
                })
                it('占守 改', () => {
                    expect(
                        calculate.ship.levelOASW(376, [])
                    ).toBe(95)
                })
                it('占守 改 + 四式水中聴音機', () => {
                    expect(
                        calculate.ship.levelOASW(376, [149])
                    ).toBe(40)
                })
            })
        })
    })
})