/**
 * @module
 * 装备额外属性收益
 *
 * 483. 三式弾改二
 *      https://wikiwiki.jp/kancolle/%E4%B8%89%E5%BC%8F%E5%BC%BE%E6%94%B9%E4%BA%8C
 *
 */

require('../../../../typedef');

const {
    長門改二,
    陸奥改二,
    金剛,
    金剛改,
    金剛改二,
    金剛改二丙,
    比叡,
    比叡改,
    比叡改二,
    比叡改二丙,
    榛名,
    榛名改,
    榛名改二,
    榛名改二乙,
    榛名改二丙,
    霧島,
    霧島改,
    霧島改二,
} = require('../../ship-ids');
const {
    BB_YamatoClass2ndRemodel,
    BB_IseClass2ndRemodel,
    BB_FusouClass2ndRemodel,
    // BB_KongouClass2ndRemodel,
} = require('../../ships');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 483,
        ship: {
            isID: [金剛改二丙],
        },
        bonusCount: {
            1: {
                fire: 5,
                aa: 6,
                evasion: 1,
                hit: 1,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [比叡改二丙],
        },
        bonusCount: {
            1: {
                fire: 4,
                aa: 5,
                evasion: 2,
                hit: 1,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [榛名改二乙],
        },
        bonusCount: {
            1: {
                fire: 4,
                aa: 8,
                evasion: 3,
                hit: 1,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [榛名改二丙],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 5,
                evasion: 2,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [金剛改二, 霧島改二],
        },
        bonusCount: {
            1: {
                fire: 3,
                aa: 3,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [比叡改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [榛名改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 3,
                evasion: 2,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [金剛, 金剛改, 比叡, 比叡改, 榛名, 榛名改, 霧島, 霧島改],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 1,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
                evasion: 2,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [長門改二, ...BB_FusouClass2ndRemodel],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 2,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [陸奥改二],
        },
        bonusCount: {
            1: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
        },
    },

    {
        equipment: 483,
        ship: {
            isID: [...BB_IseClass2ndRemodel],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 2,
                evasion: 1,
            },
        },
    },

    // ========================================================================

    {
        list: [
            {
                id: 483,
                star: 2,
            },
        ],
        equipments: [
            {
                isID: 483,
                improvement: 2,
            },
        ],
        ship: {
            canEquip: [10],
        },
        bonus: {
            aa: 1,
        },
    },
];
