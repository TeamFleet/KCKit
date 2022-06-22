/**
 * @module
 * 装备额外属性收益
 *
 * 358. 5inch 単装高角砲群
 *      https://wikiwiki.jp/kancolle/5inch%20%E5%8D%98%E8%A3%85%E9%AB%98%E8%A7%92%E7%A0%B2%E7%BE%A4
 *
 * 467. 5inch連装砲(副砲配置) 集中配備
 *      https://wikiwiki.jp/kancolle/5inch%E9%80%A3%E8%A3%85%E7%A0%B2%28%E5%89%AF%E7%A0%B2%E9%85%8D%E7%BD%AE%29%E9%9B%86%E4%B8%AD%E9%85%8D%E5%82%99
 *
 */

require('../../../../typedef');

const {
    CL_Brooklyn,

    group_Navy_USN,
    group_CA_Navy_USN,
    group_BB_Navy_USN,
    group_CV_Navy_USN,
    group_CL_Navy_USN,
    group_DD_Navy_USN,
    group_SS_Navy_USN,

    group_BB_Navy_RN,
    group_CV_Navy_RN,
} = require('../../ship-classes');

const group_Navy_USN_excludes_DD_SS = group_Navy_USN.filter(
    (classId) =>
        !group_DD_Navy_USN.includes(classId) &&
        !group_SS_Navy_USN.includes(classId)
);

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 単装高角砲群 = [
    {
        equipment: 358,
        ship: {
            isClass: [...group_CA_Navy_USN, CL_Brooklyn],
        },
        bonus: {
            fire: 2,
            aa: 3,
            evasion: 3,
        },
    },

    {
        equipment: 358,
        ship: {
            isClass: [
                ...group_BB_Navy_USN,
                ...group_CV_Navy_USN,
                ...group_CL_Navy_USN.filter((cid) => cid !== CL_Brooklyn),
                ...group_BB_Navy_RN,
                ...group_CV_Navy_RN,
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 連装砲_副砲配置_集中配備 = [
    {
        equipment: 467,
        ship: {
            isClass: [...group_BB_Navy_USN],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 3,
        },
    },
    {
        list: [467, 'SmallRadar'],
        equipments: {
            hasID: [467],
            hasOneOf: [
                307, // GFCS Mk.37
                315, // SG レーダー(初期型)
                456, // SG レーダー(後期型)
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [...group_Navy_USN_excludes_DD_SS],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
            hit: 2,
        },
    },
    {
        list: [467, 278],
        equipments: [
            {
                isID: 467,
            },
            {
                isID: 278, // SKレーダー
            },
        ],
        ship: {
            isClass: [...group_Navy_USN_excludes_DD_SS],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },
    {
        list: [467, 278],
        equipments: [
            {
                isID: 467,
            },
            {
                isID: 279, // SK＋SGレーダー
            },
        ],
        ship: {
            isClass: [...group_Navy_USN_excludes_DD_SS],
        },
        bonus: {
            fire: 1,
            aa: 3,
            evasion: 3,
            hit: 2,
        },
    },
];

// console.log(連装砲_副砲配置_集中配備);

// ============================================================================

module.exports = [...単装高角砲群, ...連装砲_副砲配置_集中配備];
