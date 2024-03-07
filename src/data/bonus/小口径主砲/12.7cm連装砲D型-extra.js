/**
 * @module
 * 装备额外属性收益
 *
 * 267. 12.7cm連装砲D型改二
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%BA%8C
 *
 * 366. 12.7cm連装砲D型改三
 *      https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2D%E5%9E%8B%E6%94%B9%E4%B8%89
 *
 */

require('../../../../typedef');

const { DD_Yuugumo } = require('../../ship-classes');
const { 時雨改三, 秋雲改二 } = require('../../ship-ids');
const equipmentTypes = require('../../../types/equipments');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        list: ['SmallCaliber', 517],
        equipments: {
            hasOneOf: [267, 366].map((eid) => ({
                isID: eid,
                star: 3,
            })),
            hasID: [
                517, // 逆探(E27)＋22号対水上電探改四(後期調整型)
            ],
        },
        ship: {
            isClass: [DD_Yuugumo],
        },
        bonus: {
            fire: 2,
            hit: 2,
        },
    },
    {
        list: ['SmallCaliber', 74],
        equipments: {
            hasOneOf: [267, 366].map((eid) => ({
                isID: eid,
            })),
            hasID: [
                74, // 探照灯
            ],
        },
        ship: {
            isID: [時雨改三, 秋雲改二],
        },
        bonus: {
            fire: 3,
            evasion: -3,
        },
    },
    {
        list: ['SmallCaliber', 'SurfaceShipPersonnel'],
        equipments: {
            hasOneOf: [267, 366].map((eid) => ({
                isID: eid,
            })),
            hasType: equipmentTypes.SurfaceShipPersonnels,
        },
        ship: {
            isID: [時雨改三, 秋雲改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 3,
        },
    },
];
