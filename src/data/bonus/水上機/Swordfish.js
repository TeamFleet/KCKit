/**
 * @module
 * 装备额外属性收益
 *
 * 367. Swordfish(水上機型)
 *      https://wikiwiki.jp/kancolle/Swordfish%28%E6%B0%B4%E4%B8%8A%E6%A9%9F%E5%9E%8B%29
 * 368. Swordfish Mk.III改(水上機型)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.III%E6%94%B9%28%E6%B0%B4%E4%B8%8A%E6%A9%9F%E5%9E%8B%29
 *
 */

const {
    CL_Gotland,
    CLV_Gotland,
    AV_CommandantTeste,
    AV_Mizuho,
    AO_Kamoi,
    AV_Kamoi,
} = require('../../ship-classes');

module.exports = [
    // ========================================================================
    //
    // Swordfish(水上機型)
    //
    // ========================================================================
    {
        equipment: 367,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 2,
            asw: 1,
            evasion: 1,
        },
    },
    {
        equipment: 367,
        ship: {
            isClass: [AV_CommandantTeste],
        },
        bonus: {
            fire: 1,
            asw: 1,
            evasion: 1,
        },
    },
    {
        equipment: 367,
        ship: {
            isClass: [AV_Mizuho, AO_Kamoi, AV_Kamoi],
        },
        bonus: {
            fire: 1,
            evasion: 1,
        },
    },

    // ========================================================================
    //
    // Swordfish Mk.III改(水上機型)
    //
    // ========================================================================
    {
        equipment: 368,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 4,
            asw: 3,
            evasion: 2,
        },
    },
    {
        equipment: 368,
        ship: {
            isClass: [AV_CommandantTeste],
        },
        bonus: {
            fire: 2,
            asw: 3,
            evasion: 1,
        },
    },
    {
        equipment: 368,
        ship: {
            isClass: [AV_Mizuho, AO_Kamoi, AV_Kamoi],
        },
        bonus: {
            fire: 1,
            asw: 2,
            evasion: 1,
        },
    },
];
