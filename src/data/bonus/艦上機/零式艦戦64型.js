/**
 * @module
 * 装备额外属性收益
 *
 * 447. 零式艦戦64型(複座KMX搭載機)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A664%E5%9E%8B%28%E8%A4%87%E5%BA%A7KMX%E6%90%AD%E8%BC%89%E6%A9%9F%29
 *
 * 486. 零式艦戦64型(制空戦闘機仕様)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A664%E5%9E%8B%28%E5%88%B6%E7%A9%BA%E6%88%A6%E9%97%98%E6%A9%9F%E4%BB%95%E6%A7%98%29
 *
 * 487. 零式艦戦64型(熟練爆戦)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A664%E5%9E%8B%28%E7%86%9F%E7%B7%B4%E7%88%86%E6%88%A6%29
 *
 */

require('../../../../typedef');

const transformBonusToImprove = require('../../../utils/transform-bonus-to-improve');

const {
    鳳翔改,
    鳳翔改二,
    鳳翔改二戦,
    龍鳳改二戊,
    龍鳳改二,
    大鷹改,
    大鷹改二,
    雲鷹改二,
    神鷹改,
    神鷹改二,

    伊勢改二,
    日向改二,
    山汐丸改,
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
            isID: [大鷹改, 大鷹改二, 神鷹改, 神鷹改二],
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
            isID: [鳳翔改, 龍鳳改二戊, 龍鳳改二],
        },
        bonus: {
            fire: 1,
            asw: 2,
            evasion: 1,
        },
    },
    {
        equipment: 447,
        ship: {
            canEquip: [20],
            isNotID: [
                鳳翔改,
                鳳翔改二,
                鳳翔改二戦,
                龍鳳改二戊,
                龍鳳改二,
                雲鷹改二,
                大鷹改,
                大鷹改二,
                神鷹改,
                神鷹改二,
            ],
        },
        bonus: {},
    },
];
transformBonusToImprove(複座KMX搭載機, {
    4: {
        fire: 1,
        aa: 1,
    },
    6: {
        fire: 1,
        aa: 1,
        asw: 1,
    },
    8: {
        fire: 1,
        aa: 1,
        asw: 1,
        evasion: 1,
    },
    10: {
        fire: 1,
        aa: 1,
        asw: 2,
        evasion: 1,
    },
});

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 制空戦闘機仕様 = [
    {
        equipment: 486,
        ship: {
            isID: [鳳翔改二, 鳳翔改二戦],
        },
        bonus: {
            fire: 4,
            aa: 4,
            evasion: 3,
            hit: 2,
        },
    },
    {
        equipment: 486,
        ship: {
            isID: [龍鳳改二戊, 龍鳳改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
            hit: 1,
        },
    },
    {
        equipment: 486,
        ship: {
            canEquip: [18],
            isNotID: [鳳翔改二, 鳳翔改二戦, 龍鳳改二戊, 龍鳳改二],
        },
        bonus: {},
    },
];
transformBonusToImprove(制空戦闘機仕様, {
    6: { evasion: 1, hit: 1 },
    8: { aa: 1, evasion: 2, hit: 1 },
    10: { fire: 1, aa: 1, evasion: 2, hit: 1 },
});

// ============================================================================

/** @type {Array<EquipmentBonus>} */
const 熟練爆戦 = [
    {
        equipment: 487,
        ship: {
            isID: [鳳翔改二, 鳳翔改二戦],
        },
        bonusImprove: {
            0: {
                fire: 5,
                aa: 3,
                evasion: 2,
                hit: 4,
            },
            6: {
                fire: 6,
                aa: 3,
                evasion: 2,
                hit: 4,
            },
            10: {
                fire: 7,
                aa: 4,
                evasion: 3,
                hit: 6,
            },
        },
    },
    {
        equipment: 487,
        ship: {
            isID: [龍鳳改二戊, 龍鳳改二],
        },
        bonusImprove: {
            0: {
                fire: 3,
                aa: 1,
                evasion: 1,
                hit: 2,
            },
            6: {
                fire: 4,
                aa: 1,
                evasion: 2,
                hit: 2,
            },
            10: {
                fire: 5,
                aa: 2,
                evasion: 2,
                hit: 4,
            },
        },
    },
    {
        equipment: 487,
        ship: {
            isID: [伊勢改二, 日向改二, 山汐丸改],
        },
        bonusImprove: {
            6: {
                fire: 1,
                evasion: 1,
            },
            10: {
                fire: 2,
                aa: 1,
                evasion: 1,
                hit: 2,
            },
        },
    },
];

// ============================================================================

module.exports = [...複座KMX搭載機, ...制空戦闘機仕様, ...熟練爆戦];
