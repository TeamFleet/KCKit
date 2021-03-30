require('../../../../typedef');

const { CAV_MogamiClassSuperRemodel } = require('../../ships');
const {
    ReconSeaplanes_零式水上観測機,
    ReconSeaplanes_零式水上偵察機11型乙,
    SeaplaneBombers_IJN_Low,
    SeaplaneBombers_IJN_High,
} = require('../../equipments');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        list: ['ReconSeaplane'],
        equipments: {
            hasSeaplaneRecons: true,
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        list: ['ReconSeaplane'],
        equipments: {
            hasOneOf: [...ReconSeaplanes_零式水上観測機].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
    {
        list: ['ReconSeaplane'],
        equipments: {
            hasOneOf: [...ReconSeaplanes_零式水上偵察機11型乙].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            torpedo: 1,
            evasion: 1,
        },
        passEquippableCheck: true,
    },

    // ========================================================================

    ...[...SeaplaneBombers_IJN_Low].map((eid) => ({
        equipment: eid,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            aa: 1,
            evasion: 1,
        },
    })),
    ...[...SeaplaneBombers_IJN_High].map((eid) => ({
        equipment: eid,
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
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
            hasSeaplaneBombersNoFighters: true,
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 1,
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
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            fire: 2,
        },
        passEquippableCheck: true,
    },

    // ========================================================================

    {
        list: ['SeaplaneFighter'],
        equipments: {
            hasOneOf: [
                165, // 二式水戦改
                216, // 二式水戦改(熟練)
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isID: [...CAV_MogamiClassSuperRemodel],
        },
        bonus: {
            aa: 2,
            evasion: 2,
        },
    },
];
