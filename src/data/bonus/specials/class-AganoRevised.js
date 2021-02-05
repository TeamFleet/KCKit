const { CL_AganoRevised } = require('../../ship-classes');

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
];
