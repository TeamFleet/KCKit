require('../../../../typedef');

const { CL_AganoRevised } = require('../../ship-classes');
const { 能代改二, 矢矧改二, 矢矧改二乙 } = require('../../ship-ids');

const {
    SeaplaneBombers_IJN_Low,
    SeaplaneBombers_IJN_High,
} = require('../../equipments');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        list: ['Autogyro'],
        equipments: {
            hasAutogyro: true,
        },
        ship: {
            isID: [能代改二],
        },
        bonus: {
            asw: 4,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
    {
        list: ['Autogyro'],
        equipments: {
            hasAutogyro: true,
        },
        ship: {
            isID: [矢矧改二, 矢矧改二乙],
        },
        bonus: {
            asw: 3,
            evasion: 1,
        },
        passEquippableCheck: true,
    },

    // ========================================================================

    {
        list: ['ReconSeaplane'],
        equipments: {
            hasSeaplaneRecons: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 2,
            asw: 3,
            evasion: 1,
        },
    },

    // ========================================================================

    ...[...SeaplaneBombers_IJN_Low].map((eid) => ({
        equipment: eid,
        ship: {
            isID: [矢矧改二, 矢矧改二乙],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    })),
    ...[...SeaplaneBombers_IJN_High].map((eid) => ({
        equipment: eid,
        ship: {
            isID: [矢矧改二, 矢矧改二乙],
        },
        bonus: {
            fire: 3,
            aa: 1,
            evasion: 2,
        },
    })),
    {
        list: ['SeaplaneBomber'],
        equipments: {
            hasSeaplaneBomber: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 1,
            asw: 1,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
    {
        list: ['SeaplaneBomber'],
        equipments: {
            hasOneOf: [...SeaplaneBombers_IJN_Low].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [能代改二],
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
    {
        list: ['SeaplaneBomber'],
        equipments: {
            hasOneOf: [...SeaplaneBombers_IJN_Low].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [矢矧改二, 矢矧改二乙],
        },
        bonus: {
            fire: 2,
        },
        passEquippableCheck: true,
    },
    {
        list: ['SeaplaneBomber'],
        equipments: {
            hasOneOf: [...SeaplaneBombers_IJN_High].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [能代改二],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
    // {
    //     list: ['SeaplaneBomber'],
    //     equipments: {
    //         hasOneOf: [...SeaplaneBombers_IJN_High].map((eid) => ({
    //             isID: eid,
    //         })),
    //     },
    //     ship: {
    //         isID: [矢矧改二, 矢矧改二乙],
    //     },
    //     bonus: {
    //         fire: 3,
    //         aa: 1,
    //         evasion: 2,
    //     },
    //     passEquippableCheck: true,
    // },
];
