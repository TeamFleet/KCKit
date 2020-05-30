/**
 * @module
 * 装备额外属性收益
 *
 * 315. SG レーダー(初期型)
 *      https://wikiwiki.jp/kancolle/SG%20%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29
 * 278. SK レーダー
 *      https://wikiwiki.jp/kancolle/SK%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC
 * 279. SK+SG レーダー
 *      https://wikiwiki.jp/kancolle/SK%EF%BC%8BSG%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC
 *
 */

const {
    group_Navy_USN,
    group_DD_Navy_USN,

    group_BB_Navy_RN,
    group_CV_Navy_RN,

    group_CL_Navy_RAN,
} = require('../../ship-classes');
const { 沖波改二 } = require('../../ship-ids');

const group_Navy_USN_excludes_DD = group_Navy_USN.filter(
    (classId) => !group_DD_Navy_USN.includes(classId)
);

// ============================================================================

const SGレーダー_初期型 = [
    {
        equipment: 315,
        ship: {
            isClass: group_DD_Navy_USN,
        },
        bonus: {
            fire: 3,
            evasion: 3,
            los: 4,
            range: '1',
        },
    },
    {
        equipment: 315,
        ship: {
            isClass: [...group_Navy_USN_excludes_DD],
        },
        bonus: {
            fire: 2,
            evasion: 3,
            los: 4,
        },
    },
    {
        equipment: 315,
        ship: {
            isID: [沖波改二],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 2,
                evasion: 3,
            },
        },
    },
];

// ============================================================================

const SKレーダー = [
    {
        equipment: 278,
        ship: {
            isClass: [...group_Navy_USN_excludes_DD],
        },
        bonus: {
            aa: 1,
            los: 1,
            evasion: 3,
        },
    },
    {
        equipment: 278,
        ship: {
            isClass: [...group_BB_Navy_RN, ...group_CV_Navy_RN],
        },
        bonus: {
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 278,
        ship: {
            isClass: [...group_CL_Navy_RAN],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    },
];

// ============================================================================

const SK_SG_レーダー = [
    {
        equipment: 279,
        ship: {
            isClass: [...group_Navy_USN_excludes_DD],
        },
        bonus: {
            fire: 2,
            aa: 2,
            los: 2,
            evasion: 3,
        },
    },
    {
        equipment: 279,
        ship: {
            isClass: [...group_BB_Navy_RN, ...group_CV_Navy_RN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            los: 1,
            evasion: 2,
        },
    },
    {
        equipment: 279,
        ship: {
            isClass: [...group_CL_Navy_RAN],
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 1,
        },
    },
];

module.exports = [...SGレーダー_初期型, ...SKレーダー, ...SK_SG_レーダー];
