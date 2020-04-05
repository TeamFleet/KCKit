/**
 * @module
 * 装备额外属性收益
 *
 * 371. Fairey Seafox改
 *      https://wikiwiki.jp/kancolle/Fairey%20Seafox%E6%94%B9
 *
 */

const {
    BB_QueenElizabeth,
    BB_Nelson,
    BB_Richelieu,
    CL_Gotland,
    CLV_Gotland,
    AV_CommandantTeste,
    // AV_Mizuho,
    // AO_Kamoi,
    // AV_Kamoi,
} = require('../../ship-classes');

module.exports = [
    {
        equipment: 371,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 4,
            asw: 2,
            los: 6,
            evasion: 3,
        },
    },
    {
        equipment: 371,
        ship: {
            isClass: [AV_CommandantTeste],
        },
        bonus: {
            fire: 2,
            asw: 1,
            los: 4,
            evasion: 2,
        },
    },
    // {
    //     equipment: 371,
    //     ship: {
    //         isClass: [AV_Mizuho, AO_Kamoi, AV_Kamoi],
    //     },
    //     bonus: {
    //         fire: 1,
    //         asw: 2,
    //         los: 1,
    //         evasion: 1,
    //     },
    // },
    {
        equipment: 371,
        ship: {
            isClass: [BB_QueenElizabeth],
        },
        bonus: {
            fire: 3,
            asw: 1,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 371,
        ship: {
            isClass: [BB_Nelson],
        },
        bonus: {
            fire: 6,
            asw: 1,
            los: 5,
            evasion: 1,
        },
    },
    {
        equipment: 371,
        ship: {
            isClass: [BB_Richelieu],
        },
        bonus: {
            fire: 2,
            los: 3,
            evasion: 1,
        },
    },
];
