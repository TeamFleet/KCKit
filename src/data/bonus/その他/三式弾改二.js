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
    伊勢,
    伊勢改,
    日向,
    日向改,
    長門改二,
    陸奥改二,
    大和,
    大和改,
    武蔵,
    武蔵改,
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
const { BB_Kongou, BB_Kongou2 } = require('../../ship-classes');
const {
    Battleships,
    HeavyCruisers,
    AviationCruisers,
} = require('../../../types/ships');

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
                fire: 4,
                aa: 5,
                hit: 1,
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
                fire: 3,
                aa: 5,
                evasion: 2,
                hit: 1,
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
                fire: 2,
                aa: 3,
                hit: 1,
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
                fire: 2,
                aa: 4,
                evasion: 3,
                hit: 1,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [伊勢, 伊勢改, 日向, 日向改],
        },
        bonusCount: {
            1: {
                fire: 1,
                aa: 2,
                evasion: 2,
                hit: 1,
            },
        },
    },

    // ========================================================================

    {
        equipment: 483,
        ship: {
            isType: [...Battleships],
        },
        bonusImprove: {
            maxCount: 1,
            2: {
                aa: 1,
            },
            4: {
                fire: 1,
                aa: 1,
            },
            7: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
            8: {
                fire: 1,
                aa: 2,
                evasion: 1,
            },
            9: {
                fire: 2,
                aa: 2,
                evasion: 1,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isType: [...HeavyCruisers, ...AviationCruisers],
        },
        bonusImprove: {
            maxCount: 1,
            2: {
                aa: 1,
            },
            4: {
                fire: 1,
                aa: 1,
            },
            6: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
            8: {
                fire: 1,
                aa: 1,
                evasion: 1,
                hit: 1,
            },
            10: {
                fire: 2,
                aa: 1,
                evasion: 1,
                hit: 1,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isClass: [BB_Kongou, BB_Kongou2],
        },
        bonusImprove: {
            maxCount: 1,
            6: {
                hit: 1,
            },
            10: {
                hit: 2,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [...BB_IseClass2ndRemodel],
        },
        bonusImprove: {
            maxCount: 1,
            1: {
                hit: 1,
            },
            3: {
                hit: 2,
            },
            5: {
                evasion: 1,
                hit: 2,
            },
            6: {
                evasion: 1,
                hit: 3,
            },
            10: {
                evasion: 2,
                hit: 3,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [伊勢, 伊勢改, 日向, 日向改],
        },
        bonusImprove: {
            maxCount: 1,
            5: {
                evasion: 1,
            },
            6: {
                evasion: 1,
                hit: 1,
            },
            10: {
                evasion: 2,
                hit: 1,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [...BB_YamatoClass2ndRemodel],
        },
        bonusImprove: {
            maxCount: 1,
            5: {
                hit: 1,
            },
            6: {
                hit: 2,
            },
            10: {
                evasion: 1,
                hit: 2,
            },
        },
    },
    {
        equipment: 483,
        ship: {
            isID: [大和, 大和改, 武蔵, 武蔵改],
        },
        bonusImprove: {
            maxCount: 1,
            6: {
                hit: 1,
            },
            10: {
                evasion: 1,
                hit: 1,
            },
        },
    },
];
