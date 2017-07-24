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
    describe('speed...', () => {
        it('type: low-1', () => {
            // 大和 改
            expect(calculate.speed(136, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(5);
            expect(calculate.speed(136, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(136, [
                34, 34, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(136, [
                34, 34, 34, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(136, [
                34, 34, 34, 34,
                33
            ])).toBe(10);
            expect(calculate.speed(136, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(136, [
                34, undefined, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(136, [
                34, 34, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(136, [
                34, 34, 34, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(136, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(136, [
                34, undefined, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(136, [
                34, 34, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(136, [
                undefined, 87, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(136, [
                34, 87, 87, 87,
                33
            ])).toBe(20);
        })
        it('type: low-2', () => {
            // 扶桑 改二
            expect(calculate.speed(411, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(5);
            expect(calculate.speed(411, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(411, [
                34, 34, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(411, [
                34, 34, 34, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                34, 34, 34, 34,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(411, [
                34, undefined, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(411, [
                34, 34, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                34, 34, 34, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                34, undefined, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                34, 34, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                undefined, 87, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(411, [
                34, 87, 87, 87,
                33
            ])).toBe(15);
        })
        it('type: low-3', () => {
            // 明石 改
            expect(calculate.speed(187, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(5);
            expect(calculate.speed(187, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, 34, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, 34, 34,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, undefined, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, undefined, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, 34, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, undefined, 87, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 34, 87, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                undefined, 87, 87, 87,
                33
            ])).toBe(10);
            expect(calculate.speed(187, [
                34, 87, 87, 87,
                33
            ])).toBe(10);
        })
        it('type: high-1', () => {
            // 翔鹤 改二甲
            expect(calculate.speed(466, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(466, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(466, [
                34, 34, undefined, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 34, 34, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 34, 34, 34,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, undefined, undefined, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 34, undefined, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 34, 34, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, undefined, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 34, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                undefined, 87, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(466, [
                34, 87, 87, 87,
                33
            ])).toBe(20);
        })
        it('type: high-2', () => {
            // 苍龙 改二
            expect(calculate.speed(197, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(197, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(197, [
                34, 34, undefined, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 34, 34, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 34, 34, 34,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(197, [
                34, undefined, undefined, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 34, undefined, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 34, 34, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, undefined, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 34, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                undefined, 87, 87, 87,
                33
            ])).toBe(20);
            expect(calculate.speed(197, [
                34, 87, 87, 87,
                33
            ])).toBe(20);
        })
        it('type: high-3', () => {
            // 秋月 改
            expect(calculate.speed(330, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(330, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(330, [
                34, 34, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(330, [
                34, 34, 34, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(330, [
                undefined, undefined, 87, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(330, [
                34, undefined, 87, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(330, [
                34, 34, 87, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(330, [
                undefined, 87, 87, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(330, [
                34, 87, 87, undefined,
                33
            ])).toBe(20);
            expect(calculate.speed(330, [
                87, 87, 87, undefined,
                33
            ])).toBe(20);
        })
        it('type: high-4', () => {
            // 加贺 改
            expect(calculate.speed(278, [
                undefined, undefined, undefined, undefined,
                33
            ])).toBe(10);
            expect(calculate.speed(278, [
                34, undefined, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, undefined, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, 34, undefined,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, 34, 34,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                undefined, undefined, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, undefined, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, undefined, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, 34, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                undefined, undefined, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, undefined, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 34, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                undefined, 87, 87, 87,
                33
            ])).toBe(15);
            expect(calculate.speed(278, [
                34, 87, 87, 87,
                33
            ])).toBe(15);
        })
    })
})