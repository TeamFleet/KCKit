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

const SP_秋雲改二 = [
    {
        list: [366, 267, 74],
        equipments: [
            {
                isID: 366, // 12.7cm連装砲D型改三
            },
            {
                isID: 267, // 12.7cm連装砲D型改二
            },
            {
                isID: 74, // 探照灯
            },
        ],
        ship: {
            isID: 秋雲改二,
        },
        bonus: {
            fire: -3,
            evasion: 3,
        },
    },
    {
        list: [366, 267, 'SurfaceShipPersonnel'],
        equipments: [
            {
                isID: 366, // 12.7cm連装砲D型改三
            },
            {
                isID: 267, // 12.7cm連装砲D型改二
            },
            {
                isSurfaceShipPersonnel: true,
            },
        ],
        ship: {
            isID: 秋雲改二,
        },
        bonus: {
            fire: -2,
            aa: -2,
            evasion: -3,
        },
    },
];

module.exports = [
    ...DD_AARadar,
    ...SP_秋雲改二,
    ...require('./class-AganoRevised'),
    ...require('./ships-MogamiSuper'),
];
