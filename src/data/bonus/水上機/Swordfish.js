/**
 * @module
 * 装备额外属性收益
 *
 * 367. Swordfish(水上機型)
 *      https://wikiwiki.jp/kancolle/Swordfish%28%E6%B0%B4%E4%B8%8A%E6%A9%9F%E5%9E%8B%29
 * 368. Swordfish Mk.III改(水上機型)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.III%E6%94%B9%28%E6%B0%B4%E4%B8%8A%E6%A9%9F%E5%9E%8B%29
 * 369. Swordfish Mk.III改(水上機型/熟練)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.III%E6%94%B9%28%E6%B0%B4%E4%B8%8A%E6%A9%9F%E5%9E%8B%EF%BC%8F%E7%86%9F%E7%B7%B4%29
 * 370. Swordfish Mk.II改(水偵型)
 *      https://wikiwiki.jp/kancolle/Swordfish%20Mk.II%E6%94%B9%28%E6%B0%B4%E5%81%B5%E5%9E%8B%29
 *
 */

const {
    BB_QueenElizabeth,
    BB_Nelson,
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
            los: 1,
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
            los: 1,
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
            los: 1,
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
            los: 3,
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
            los: 2,
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
            los: 2,
            evasion: 1,
        },
    },

    // ========================================================================
    //
    // Swordfish Mk.III改(水上機型/熟練)
    //
    // ========================================================================
    {
        equipment: 369,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 5,
            asw: 4,
            los: 3,
            evasion: 4,
        },
    },
    {
        equipment: 369,
        ship: {
            isClass: [AV_CommandantTeste],
        },
        bonus: {
            fire: 3,
            asw: 3,
            los: 3,
            evasion: 2,
        },
    },
    {
        equipment: 369,
        ship: {
            isClass: [AV_Mizuho, AO_Kamoi, AV_Kamoi],
        },
        bonus: {
            fire: 2,
            asw: 2,
            los: 2,
            evasion: 1,
        },
    },

    // ========================================================================
    //
    // Swordfish Mk.II改(水偵型)
    //
    // ========================================================================
    {
        equipment: 370,
        ship: {
            isClass: [CL_Gotland, CLV_Gotland],
        },
        bonus: {
            fire: 1,
            asw: 3,
            los: 2,
            evasion: 1,
        },
    },
    {
        equipment: 370,
        ship: {
            isClass: [AV_CommandantTeste],
        },
        bonus: {
            fire: 1,
            asw: 3,
            los: 1,
            evasion: 1,
        },
    },
    {
        equipment: 370,
        ship: {
            isClass: [AV_Mizuho, AO_Kamoi, AV_Kamoi],
        },
        bonus: {
            fire: 1,
            asw: 2,
            los: 1,
            evasion: 1,
        },
    },
    {
        equipment: 370,
        ship: {
            isClass: [BB_QueenElizabeth],
        },
        bonus: {
            fire: 6,
            asw: 3,
            los: 3,
            evasion: 3,
        },
    },
    {
        equipment: 370,
        ship: {
            isClass: [BB_Nelson],
        },
        bonus: {
            fire: 2,
            asw: 3,
            los: 2,
            evasion: 2,
        },
    },
];
