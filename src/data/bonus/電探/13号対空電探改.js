/**
 * @module
 * 装备额外属性收益
 *
 * 106. 13号対空電探改
 *      https://wikiwiki.jp/kancolle/13%E5%8F%B7%E5%AF%BE%E7%A9%BA%E9%9B%BB%E6%8E%A2%E6%94%B9
 *
 * 450. 13号対空電探改(後期型)
 *      https://wikiwiki.jp/kancolle/13%E5%8F%B7%E5%AF%BE%E7%A9%BA%E9%9B%BB%E6%8E%A2%E6%94%B9%28%E5%BE%8C%E6%9C%9F%E5%9E%8B%29
 *
 */

require('../../../../typedef');

const {
    Yahagi,
    Ooyodo,
    Kashima,

    // Ushio,
    Hibiki,
    // Hatsushimo,
    // Shigure,
    Kasumi,
    Yukikaze,
    Isokaze,
    Hamakaze,
    Asashimo,
    Suzutsuki,
} = require('../../ships');
const { DD_Matsu } = require('../../ship-classes');
const {
    長門改二,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    矢矧改二,
    矢矧改二乙,
    初霜改二,
    時雨改二,
    時雨改三,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const BaseBonuses = [];
[106, 450].forEach((equipmentID) => {
    BaseBonuses.push({
        equipment: equipmentID,
        ship: {
            isID: [...Ooyodo, ...Kashima, ...Hibiki],
        },
        bonus: {
            aa: 1,
            evasion: 3,
            armor: 1,
        },
    });

    BaseBonuses.push({
        equipment: equipmentID,
        ship: {
            isID: [
                ...Yahagi,
                ...Kasumi,
                ...Yukikaze,
                ...Isokaze,
                ...Hamakaze,
                ...Asashimo,
                ...Suzutsuki,
            ],
        },
        bonus: {
            aa: 2,
            evasion: 2,
            armor: 1,
        },
    });

    BaseBonuses.push({
        equipment: equipmentID,
        ship: {
            isID: [
                榛名改二,
                榛名改二乙,
                榛名改二丙,
                長門改二,
                407, // 潮改二
                時雨改二,
                時雨改三,
                初霜改二,
            ],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
            armor: 1,
        },
    });
});

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 後期型 = [
    {
        equipment: 450,
        ship: {
            isClass: [DD_Matsu],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
            armor: 1,
        },
    },
    {
        equipment: 450,
        ship: {
            isType: [31], // 海防艦
        },
        bonus: {
            aa: 1,
            evasion: 2,
            armor: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 矢矧改二型 = [
    {
        list: ['AARadar'],
        equipments: {
            hasOneOf: [106, 450].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [矢矧改二乙],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 2,
            armor: 1,
        },
    },
    {
        list: ['AARadar'],
        equipments: {
            hasOneOf: [106, 450].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [矢矧改二],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
            armor: 1,
        },
    },
];

// ============================================================================

module.exports = [...BaseBonuses, ...後期型, ...矢矧改二型];
