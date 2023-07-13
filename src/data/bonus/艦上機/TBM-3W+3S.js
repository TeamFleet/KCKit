/**
 * @module
 * 装备额外属性收益
 *
 * 389. TBM-3W+3S
 *
 *
 */

const { group_CV_Navy_USN } = require('../../ship-classes');
const {
    赤城改二,
    赤城改二戊,
    加賀改二,
    加賀改二戊,
    加賀改二護,
} = require('../../ship-ids');

// ============================================================================

const 単体ボーナス = [
    {
        equipment: 389,
        ship: {
            isID: [赤城改二, 赤城改二戊],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
    {
        equipment: 389,
        ship: {
            isID: [加賀改二, 加賀改二戊],
        },
        bonus: {
            fire: 3,
            evasion: 2,
        },
    },
    {
        equipment: 389,
        ship: {
            isID: 加賀改二護,
        },
        bonus: {
            fire: 4,
            asw: 4,
            evasion: 3,
        },
    },
    {
        equipment: 389,
        ship: {
            isClass: [...group_CV_Navy_USN],
        },
        bonus: {
            fire: 2,
            asw: 3,
            evasion: 1,
        },
    },
];

// ============================================================================

const 相互シナジーボーナス = [
    ...[
        69, // カ号観測機
        324, // オ号観測機改
        325, // オ号観測機改二
    ].map((eid) => ({
        list: [389, eid],
        equipments: [
            {
                isID: 389,
            },
            {
                isID: eid,
            },
        ],
        ship: {
            isID: 加賀改二護,
        },
        bonus: {
            fire: 3,
            asw: 6,
        },
    })),
    ...[
        326, // S-51J
        327, // S-51J改
    ].map((eid) => ({
        list: [389, eid],
        equipments: [
            {
                isID: 389,
            },
            {
                isID: eid,
            },
        ],
        ship: {
            isID: 加賀改二護,
        },
        bonus: {
            fire: 8,
            asw: 10,
        },
    })),
];

// ============================================================================

module.exports = [...単体ボーナス, ...相互シナジーボーナス];
