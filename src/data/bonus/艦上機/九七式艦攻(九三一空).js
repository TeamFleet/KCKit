/**
 * 装备额外属性收益 - 九七式艦攻(九三一空)
 * [82] 九七式艦攻(九三一空)
 * [302] 九七式艦攻(九三一空/熟練)
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E4%B9%9D%E4%B8%89%E4%B8%80%E7%A9%BA%29
// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E4%B9%9D%E4%B8%89%E4%B8%80%E7%A9%BA%EF%BC%8F%E7%86%9F%E7%B7%B4%29

const {
    大鷹,
    大鷹改,
    大鷹改二,

    雲鷹,
    雲鷹改,
    雲鷹改二,

    神鷹,
    神鷹改,
    神鷹改二,
} = require('../../ship-ids');

const bonusTaiyou = {
    ship: {
        isID: [
            大鷹,
            大鷹改,
            大鷹改二,

            雲鷹,
            雲鷹改,
            雲鷹改二,

            神鷹,
            神鷹改,
            神鷹改二,
        ],
    },
    bonus: {
        asw: 1,
        evasion: 1,
    },
};

module.exports = [
    // 九七式艦攻(九三一空)
    {
        equipment: 82,
        ...bonusTaiyou,
    },

    // 九七式艦攻(九三一空/熟練)
    {
        equipment: 302,
        ...bonusTaiyou,
    },

    // ------------------------------------------------------------------------
];
