require('../../../../typedef');

const { CL_AganoRevised } = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        list: ['Autogyro'],
        equipments: {
            hasAutogyro: true,
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            asw: 4,
            evasion: 1,
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },

    {
        list: ['ReconSeaplane'],
        equipments: {
            hasReconSeaplane: true,
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
            hasOneOf: [
                26, // 瑞雲
                207, // 瑞雲(六三一空)
                79, // 瑞雲(六三四空)
                80, // 瑞雲12型
                81, // 瑞雲12型(六三四空)
                62, // 試製晴嵐
                208, // 晴嵐(六三一空)
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [CL_AganoRevised],
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
            hasOneOf: [
                237, // 瑞雲(六三四空／熟練)
                322, // 瑞雲改二(六三四空)
                323, // 瑞雲改二(六三四空／熟練)
            ].map((eid) => ({
                isID: eid,
            })),
        },
        ship: {
            isClass: [CL_AganoRevised],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
        passEquippableCheck: true,
    },
];
