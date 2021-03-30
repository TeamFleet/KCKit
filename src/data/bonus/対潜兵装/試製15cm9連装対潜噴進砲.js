/**
 * @module
 * 装备额外属性收益
 *
 * 288. 試製15cm9連装対潜噴進砲
 *      https://wikiwiki.jp/kancolle/%E8%A9%A6%E8%A3%BD15cm9%E9%80%A3%E8%A3%85%E5%AF%BE%E6%BD%9C%E5%99%B4%E9%80%B2%E7%A0%B2
 *
 */

const {
    能代改二,
    由良改二,
    那珂改二,
    五十鈴改二,
    夕張改二丁,
    雪風改二,
} = require('../../ship-ids');

// ============================================================================

module.exports = [
    {
        equipment: 288,
        ship: {
            isID: [夕張改二丁],
        },
        bonus: {
            fire: 1,
            asw: 3,
            evasion: 5,
        },
    },
    {
        equipment: 288,
        ship: {
            isID: [能代改二],
        },
        bonus: {
            asw: 4,
            evasion: 1,
        },
    },
    {
        equipment: 288,
        ship: {
            isID: [五十鈴改二, 由良改二, 那珂改二, 雪風改二],
        },
        bonus: {
            asw: 2,
            evasion: 1,
        },
    },
];
