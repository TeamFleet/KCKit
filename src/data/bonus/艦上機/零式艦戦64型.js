/**
 * @module
 * 装备额外属性收益
 *
 * 447. 零式艦戦64型(複座KMX搭載機)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A664%E5%9E%8B%28%E8%A4%87%E5%BA%A7KMX%E6%90%AD%E8%BC%89%E6%A9%9F%29
 *
 */

require('../../../../typedef');

const {
    鳳翔改,
    鳳翔改二,
    鳳翔改二戦,
    龍鳳改二,
    大鷹改二,
    雲鷹改二,
    神鷹改二,
} = require('../../ship-ids');

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 複座KMX搭載機 = [
    {
        equipment: 447,
        ship: {
            isID: [鳳翔改二, 鳳翔改二戦],
        },
        bonus: {
            fire: 2,
            asw: 3,
            aa: 1,
            evasion: 2,
        },
    },
    {
        equipment: 447,
        ship: {
            isID: [雲鷹改二],
        },
        bonus: {
            fire: 2,
            asw: 2,
            evasion: 3,
        },
    },
    {
        equipment: 447,
        ship: {
            isID: [大鷹改二, 神鷹改二],
        },
        bonus: {
            fire: 1,
            asw: 1,
            evasion: 2,
        },
    },
    {
        equipment: 447,
        ship: {
            isID: [鳳翔改, 龍鳳改二],
        },
        bonus: {
            fire: 1,
            asw: 2,
            evasion: 1,
        },
    },
];

// ============================================================================

module.exports = [...複座KMX搭載機];
