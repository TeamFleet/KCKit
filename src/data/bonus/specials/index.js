const { 時雨改三, 天津風改二, 秋雲改二, 沖波改二 } = require('../../ship-ids');

const DD_AARadar = [
    // + 对空電探
    {
        list: ['AARadar'],
        equipments: {
            hasAARadar: true,
        },
        ship: {
            isID: [時雨改三, 天津風改二, 秋雲改二, 沖波改二],
        },
        bonus: {
            fire: 1,
            aa: 2,
            evasion: 3,
        },
    },
];

module.exports = [
    ...DD_AARadar,
    ...require('./ships-MogamiSuper'),
    ...require('./class-AganoRevised'),
    ...require('./class-Tokugata'),
];
