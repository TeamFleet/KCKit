/**
 * @module
 * 装备额外属性收益
 *
 *  90. 20.3cm(2号)連装砲
 *      https://wikiwiki.jp/kancolle/20.3cm%282%E5%8F%B7%29%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

const {
    CA_Furutaka,
    CA_Aoba,
    group_CAV_Navy_IJN,
    group_CA_Navy_IJN,
} = require('../../ship-classes');
const { CAV_MogamiClassSuperRemodel } = require('../../ships');

module.exports = [
    {
        equipment: 90,
        ship: {
            isID: [
                416, // 古鷹改二
                417, // 加古改二
                295, // 衣笠改
                ...CAV_MogamiClassSuperRemodel,
            ],
        },
        bonus: {
            fire: 2,
        },
    },

    {
        equipment: 90,
        ship: {
            isID: [
                264, // 青葉改
            ],
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },

    {
        equipment: 90,
        ship: {
            isID: [
                142, // 衣笠改二
            ],
        },
        bonus: {
            fire: 3,
            evasion: 1,
        },
    },

    {
        equipment: 90,
        ship: {
            isClass: [...group_CA_Navy_IJN, ...group_CAV_Navy_IJN],
            isNotID: [
                416, // 古鷹改二
                417, // 加古改二
                264, // 青葉改
                295, // 衣笠改
                142, // 衣笠改二
                ...CAV_MogamiClassSuperRemodel,
            ],
        },
        bonus: {
            fire: 1,
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [90, 'SurfaceRadar'],
        equipments: {
            hasID: [90],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CA_Furutaka, CA_Aoba],
        },
        bonus: {
            fire: 3,
            torpedo: 2,
            evasion: 2,
        },
    },

    {
        list: [90, 'AARadar'],
        equipments: {
            hasID: [90],
            hasAARadar: true,
        },
        ship: {
            isID: [
                264, // 青葉改
            ],
        },
        bonus: {
            aa: 5,
            evasion: 2,
        },
    },
];
