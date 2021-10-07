/**
 * @module
 * 装备额外属性收益
 *
 * 136. プリエーゼ式水中防御隔壁
 *      https://wikiwiki.jp/kancolle/%E3%83%97%E3%83%AA%E3%82%A8%E3%83%BC%E3%82%BC%E5%BC%8F%E6%B0%B4%E4%B8%AD%E9%98%B2%E5%BE%A1%E9%9A%94%E5%A3%81
 *
 */

require('../../../../typedef');

const { group_BB_Navy_RM, group_CV_Navy_RM } = require('../../ship-classes');
const {
    'Conte di Cavour nuovo': Conte_di_Cavour_nuovo,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const bonuses = [
    {
        equipment: 136,
        ship: {
            isID: [Conte_di_Cavour_nuovo],
        },
        bonusCount: {
            1: {
                armor: 3,
                evasion: 2,
            },
        },
    },
    {
        equipment: 136,
        ship: {
            isClass: [...group_BB_Navy_RM, ...group_CV_Navy_RM],
            isNotID: [Conte_di_Cavour_nuovo],
        },
        bonusCount: {
            1: {
                armor: 2,
                evasion: 1,
            },
        },
    },
];

[
    [
        3,
        {
            armor: 1,
        },
    ],
    [
        6,
        {
            armor: 1,
        },
    ],
    [
        10,
        {
            armor: 1,
        },
    ],
].forEach(([star, bonus]) => {
    bonuses.push({
        list: [
            {
                id: 136,
                star,
            },
        ],
        equipments: [
            {
                isID: 136,
                improvement: star,
            },
        ],
        ship: {
            isClass: [...group_BB_Navy_RM, ...group_CV_Navy_RM],
            isNotID: [Conte_di_Cavour_nuovo],
        },
        bonus,
    });
});

/** @type {Array<EquipmentBonus>} */
module.exports = bonuses;
