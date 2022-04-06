/**
 * @module
 * 装备额外属性收益 特型全艦
 */

require('../../../../typedef');

const { group_DD_Tokugata } = require('../../ship-classes');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const bonuses = [];

[
    295, // 12.7cm連装砲A型改三(戦時改修)+高射装置
    455, // 試製 長12.7cm連装砲A型改四
].forEach((equipmentID) => {
    // + 61cm三連装(酸素)魚雷
    bonuses.push({
        list: [equipmentID, 125],
        equipments: [{ isID: equipmentID }, { isID: 125 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        },
    });

    // + 61cm三連装(酸素)魚雷 x2
    bonuses.push({
        list: [equipmentID, 125, 125],
        equipments: [{ isID: equipmentID }, { isID: 125 }, { isID: 125 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        },
    });

    // + 61cm三連装(酸素)魚雷後期型
    bonuses.push({
        list: [equipmentID, 285],
        equipments: [{ isID: equipmentID }, { isID: 285 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 4,
        },
    });

    // + 61cm三連装(酸素)魚雷後期型 x2
    bonuses.push({
        list: [equipmentID, 285, 285],
        equipments: [{ isID: equipmentID }, { isID: 285 }, { isID: 285 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
        },
    });

    // + 61cm三連装(酸素)魚雷 + 61cm三連装(酸素)魚雷後期型
    bonuses.push({
        list: [equipmentID, 125, 285],
        equipments: [{ isID: equipmentID }, { isID: 125 }, { isID: 285 }],
        ship: {
            isClass: group_DD_Tokugata,
        },
        bonus: {
            torpedo: -1,
        },
    });
});

module.exports = bonuses;
