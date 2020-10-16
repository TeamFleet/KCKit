const { 秋雲改二, 沖波改二 } = require('../../ship-ids');

const DD_AARadar = [
    // + 对空電探
    {
        list: ['AARadar'],
        equipments: {
            hasAARadar: true,
        },
        ship: {
            isID: [秋雲改二, 沖波改二],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
        },
    },
];

module.exports = [...DD_AARadar];
