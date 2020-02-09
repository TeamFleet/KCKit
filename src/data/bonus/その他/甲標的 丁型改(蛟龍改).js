/**
 * @module
 * 装备额外属性收益
 *
 * 364. 甲標的 丁型改(蛟龍改)
 *      https://wikiwiki.jp/kancolle/%E4%B8%80%E5%BC%8F%E5%BE%B9%E7%94%B2%E5%BC%BE%E6%94%B9
 *
 */

module.exports = [
    {
        equipment: 364,
        ship: {
            isID: [
                623 // 夕張改二特
            ]
        },
        bonus: {
            fire: 1,
            torpedo: 4,
            evasion: -2
        }
    },
    {
        equipment: 364,
        ship: {
            isID: [
                119 // 北上改二
            ]
        },
        bonus: {
            torpedo: 2,
            evasion: -2
        }
    },
    {
        equipment: 364,
        ship: {
            isID: [
                118, // 大井改二
                586 // 日進甲
            ]
        },
        bonus: {
            torpedo: 1,
            evasion: -2
        }
    },
    {
        equipment: 364,
        ship: {
            canEquip: [12],
            isType: [13, 14]
        },
        bonus: {
            fire: -1,
            evasion: -7
        }
    },
    {
        equipment: 364,
        ship: {
            isID: [
                146, // 木曽改二
                488, // 由良改二
                200, // 阿武隈改二
                102, // 千歳
                104, // 千歳改
                106, // 千歳甲
                103, // 千代田
                105, // 千代田改
                107, // 千代田甲
                451, // 瑞穂
                348 // 瑞穂改
            ]
        },
        bonus: {
            fire: -1,
            evasion: -7
        }
    }
];
