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
        describe('bonus...', () => {
            it('陽炎改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    566, 267
                )).toEqual({
                    fire: 2,
                    evasion: 1,
                })
            })
            it('陽炎改二 || 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    566, [267, 267]
                )).toEqual({
                    fire: 3,
                    evasion: 2,
                })
            })
            it('陽炎改二 || 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    566, [267, 267, 267]
                )).toEqual({
                    fire: 4,
                    evasion: 3,
                })
            })
            it('陽炎改二 || 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二 + 22号対水上電探改四', () => {
                expect(calculate.bonus(
                    566, [267, 267, 88]
                )).toEqual({
                    fire: 3,
                    evasion: 2,
                })
            })
            it('長波改 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    304, 267
                )).toEqual({
                    fire: 2,
                    evasion: 1,
                })
            })
            it('長波改二 || 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    543, 267
                )).toEqual({
                    fire: 3,
                    evasion: 1,
                })
            })
            it('長波改二 || 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二', () => {
                expect(calculate.bonus(
                    543, [267, 267, 267]
                )).toEqual({
                    fire: 9,
                    evasion: 3,
                })
            })
            it('長波改二 || 12.7cm連装砲D型改二 + 12.7cm連装砲D型改二 + 22号対水上電探改四', () => {
                expect(calculate.bonus(
                    543, [267, 267, 88]
                )).toEqual({
                    fire: 9,
                    torpedo: 4,
                    evasion: 5,
                })
            })
            it('不知火改二 || 61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(
                    567, [15]
                )).toEqual({
                    torpedo: 2,
                })
            })
            it('不知火改二 || 61cm四連装(酸素)魚雷 + 61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(
                    567, [15, 15]
                )).toEqual({
                    torpedo: 4,
                })
            })
            it('不知火改二 || 61cm四連装(酸素)魚雷 + 61cm四連装(酸素)魚雷 + 61cm四連装(酸素)魚雷', () => {
                expect(calculate.bonus(
                    567, [15, 15, 15]
                )).toEqual({
                    torpedo: 4,
                })
            })
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型 + 61cm四連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(
                    567, [286, 286]
                )).toEqual({
                    torpedo: 4,
                    evasion: 2,
                })
            })
            it('不知火改二 || 61cm四連装(酸素)魚雷後期型(MAX) + 61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(calculate.bonus(
                    567, [286, 286], [10, 5]
                )).toEqual({
                    fire: 1,
                    torpedo: 6,
                    evasion: 2,
                })
            })
            it('不知火改二 || 12.7cm連装砲D型改二 + 61cm四連装(酸素)魚雷後期型(MAX) + 61cm四連装(酸素)魚雷後期型(⭐+5)', () => {
                expect(calculate.bonus(
                    567, [267, 286, 286], [0, 10, 5]
                )).toEqual({
                    fire: 3,
                    torpedo: 6,
                    evasion: 3,
                })
            })
            it('木曽改二 || 北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(
                    146, [268]
                )).toEqual({
                    armor: 2,
                    evasion: 7,
                })
            })
            it('木曽改二 || 北方迷彩(＋北方装備) + 北方迷彩(＋北方装備) + 北方迷彩(＋北方装備)', () => {
                expect(calculate.bonus(
                    146, [268, 268, 268]
                )).toEqual({
                    armor: 2,
                    evasion: 7,
                })
            })
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐MAX + 12.7cm単装高角砲(後期型)⭐MAX + FuMO25 レーダー', () => {
                expect(calculate.bonus(
                    488,
                    [229, 229, 124],
                    [10, 10],
                )).toEqual({
                    fire: 7,
                    aa: 6,
                    evasion: 2,
                })
            })
            it('由良改二 || 12.7cm単装高角砲(後期型)⭐5 + FuMO25 レーダー', () => {
                expect(calculate.bonus(
                    488,
                    [229, 124],
                    [5],
                )).toEqual({})
            })
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX', () => {
                expect(calculate.bonus(
                    376,
                    [229],
                    [10],
                )).toEqual({
                    fire: 1,
                    aa: 1,
                })
            })
            it('占守改 || 12.7cm単装高角砲(後期型)⭐MAX + 22号対水上電探', () => {
                expect(calculate.bonus(
                    376,
                    [229, 28],
                    [10],
                )).toEqual({
                    fire: 2,
                    aa: 1,
                    evasion: 4,
                })
            })
            it('伊勢改二 || 二式艦上偵察機 + 二式艦上偵察機', () => {
                expect(calculate.bonus(
                    553,
                    [61, 61],
                )).toEqual({
                    fire: 6,
                    armor: 2,
                    evasion: 4,
                    range: 1,
                })
            })
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型', () => {
                expect(calculate.bonus(
                    420,
                    [285],
                )).toEqual({
                    torpedo: 2,
                    evasion: 1,
                })
            })
            it('叢雲改二 || 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [285],
                    [10],
                )).toEqual({
                    fire: 1,
                    torpedo: 2,
                    evasion: 1,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二', () => {
                expect(calculate.bonus(
                    420,
                    [294],
                )).toEqual({
                    fire: 1,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 33号対水上電探', () => {
                expect(calculate.bonus(
                    420,
                    [294, 29],
                )).toEqual({
                    fire: 4,
                    torpedo: 1,
                    evasion: 2,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 61cm三連装(酸素)魚雷', () => {
                expect(calculate.bonus(
                    420,
                    [294, 125],
                )).toEqual({
                    fire: 2,
                    torpedo: 3,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [294, 285],
                    [0, 10],
                )).toEqual({
                    fire: 3,
                    torpedo: 5,
                    evasion: 1,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 61cm三連装(酸素)魚雷 + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [294, 125, 285],
                    [0, 0, 10],
                )).toEqual({
                    fire: 3,
                    torpedo: 7,
                    evasion: 1,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 61cm三連装(酸素)魚雷後期型 + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [294, 285, 285],
                    [0, 0, 10],
                )).toEqual({
                    fire: 3,
                    torpedo: 9,
                    evasion: 2,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 61cm三連装(酸素)魚雷後期型⭐MAX + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [294, 285, 285],
                    [0, 10, 10],
                )).toEqual({
                    fire: 4,
                    torpedo: 9,
                    evasion: 2,
                })
            })
            it('叢雲改二 || 12.7cm連装砲A型改二 + 33号対水上電探 + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [294, 29, 285],
                    [0, 0, 10],
                )).toEqual({
                    fire: 6,
                    torpedo: 6,
                    evasion: 3,
                })
            })
            it('初春改二 || 12.7cm連装砲A型改三(戦時改修)+高射装置 + 13号対空電探改 + 61cm三連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    420,
                    [295, 106, 285],
                    [0, 0, 10],
                )).toEqual({
                    fire: 4,
                    torpedo: 6,
                    aa: 8,
                    evasion: 1,
                })
            })
            it('夕立改二 || 12.7cm連装砲B型改四(戦時改修)+高射装置 + 13号対空電探改 + 61cm四連装(酸素)魚雷後期型⭐MAX', () => {
                expect(calculate.bonus(
                    144,
                    [296, 106, 286],
                    [0, 0, 10],
                )).toEqual({
                    fire: 4,
                    torpedo: 6,
                    aa: 6,
                    evasion: 2,
                })
            })
            it('pass stat', () => {
                expect(calculate.bonus(
                    146, [268, 268, 268], 'fire'
                )).toEqual(0)
                expect(calculate.bonus(
                    146, [268, 268, 268], 'armor'
                )).toEqual(2)
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
