/**
 * @module
 * 装备额外属性收益
 * 330. **16inch Mk.I連装砲**
 * 331. **16inch Mk.V連装砲**
 * 332. **16inch Mk.VIII連装砲改**
 */

const {
    BB_NagatoClassRemodel,
    BB_NagatoClass2ndRemodel,
    BB_NelsonClassRemodel,
} = require('../../ships');
const { Colorado } = require('../../ship-series');

module.exports = [
    // ========================================================================
    // 16inch Mk.I連装砲
    // https://wikiwiki.jp/kancolle/16inch%20Mk.I%E9%80%A3%E8%A3%85%E7%A0%B2
    // ========================================================================
    {
        equipment: 330,
        ship: {
            isID: [...BB_NagatoClassRemodel, ...Colorado],
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 330,
        ship: {
            isID: [...BB_NagatoClass2ndRemodel, ...BB_NelsonClassRemodel],
        },
        bonus: {
            fire: 2,
        },
    },

    // ========================================================================
    // 16inch Mk.V連装砲
    // https://wikiwiki.jp/kancolle/16inch%20Mk.V%E9%80%A3%E8%A3%85%E7%A0%B2
    // ========================================================================
    {
        equipment: 331,
        ship: {
            isID: [...BB_NagatoClassRemodel, 601], // Colorado
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 331,
        ship: {
            isID: [...BB_NagatoClass2ndRemodel, ...BB_NelsonClassRemodel],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 331,
        ship: {
            isID: [1496], // Colorado改
        },
        bonus: {
            fire: 2,
            evasion: 1,
        },
    },

    // ========================================================================
    // 16inch Mk.VIII連装砲改
    // https://wikiwiki.jp/kancolle/16inch%20Mk.VIII%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9
    // ========================================================================
    {
        equipment: 332,
        ship: {
            isID: [...BB_NagatoClassRemodel, 601], // Colorado
        },
        bonus: {
            fire: 1,
        },
    },
    {
        equipment: 332,
        ship: {
            isID: [...BB_NagatoClass2ndRemodel, ...BB_NelsonClassRemodel],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 332,
        ship: {
            isID: [1496], // Colorado改
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },
];
