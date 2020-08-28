/**
 * @module
 * 装备额外属性收益
 * 143. **九七式艦攻(村田隊)**
 */

// https://wikiwiki.jp/kancolle/%E4%B9%9D%E4%B8%83%E5%BC%8F%E8%89%A6%E6%94%BB%28%E6%9D%91%E7%94%B0%E9%9A%8A%29

const { Shoukaku, Zuikaku } = require('../../ship-series');
const {
    CV_AkagiClassRemodelAll,
    CV_KagaClassRemodelAll,
} = require('../../ships');

module.exports = [
    {
        equipment: 143,
        ship: {
            isID: [157], // 龍驤改二
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },

    {
        equipment: 143,
        ship: {
            isID: [...CV_AkagiClassRemodelAll],
        },
        bonusCount: {
            1: {
                fire: 3,
            },
        },
    },

    {
        equipment: 143,
        ship: {
            isID: [...CV_KagaClassRemodelAll],
        },
        bonusCount: {
            1: {
                fire: 2,
            },
        },
    },

    {
        equipment: 143,
        ship: {
            isID: Shoukaku,
        },
        bonusCount: {
            1: {
                fire: 2,
            },
        },
    },

    {
        equipment: 143,
        ship: {
            isID: Zuikaku,
        },
        bonusCount: {
            1: {
                fire: 1,
            },
        },
    },
];
