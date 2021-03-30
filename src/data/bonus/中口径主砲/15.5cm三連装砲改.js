/**
 * @module
 * 装备额外属性收益
 *
 * 235. 15.5cm三連装砲改
 *      https://wikiwiki.jp/kancolle/15.5cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
 *
 */

const {
    CAV_Mogami,
    CAV_MogamiRevised,
    CAV_MogamiSuper,
    CA_Mogami,
    CL_Ooyodo,
} = require('../../ship-classes');
const { 大淀, 大淀改 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 235,
        ship: {
            isID: [大淀改],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        },
    },
    {
        equipment: 235,
        ship: {
            isID: [大淀],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },
    {
        equipment: 235,
        ship: {
            isClass: [
                CAV_Mogami,
                CAV_MogamiRevised,
                CAV_MogamiSuper,
                CA_Mogami,
            ],
        },
        bonus: {
            fire: 1,
            aa: 1,
        },
    },

    // ------------------------------------------------------------------------

    {
        list: [235, 'SurfaceRadar'],
        equipments: {
            hasID: [235],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [CL_Ooyodo],
        },
        bonus: {
            fire: 3,
            evasion: 2,
        },
    },

    {
        list: [235, 'AARadar'],
        equipments: {
            hasID: [235],
            hasAARadar: true,
        },
        ship: {
            isClass: [CL_Ooyodo],
        },
        bonus: {
            aa: 3,
            evasion: 3,
        },
    },
];
