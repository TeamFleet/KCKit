/**
 * @module
 * 装备额外属性收益
 * 104. **35.6cm連装砲(ダズル迷彩)**
 */

// https://wikiwiki.jp/kancolle/35.6cm%E9%80%A3%E8%A3%85%E7%A0%B2%28%E3%83%80%E3%82%BA%E3%83%AB%E8%BF%B7%E5%BD%A9%29

module.exports = [
    // 金剛改二丙 ※補正なし
    // 比叡改二丙 ※補正なし

    {
        equipment: 104,
        ship: {
            isID: [
                149, // 金剛改二
            ],
        },
        bonus: {
            fire: 2,
        },
    },

    // @ 比叡改二 / 霧島改二
    {
        equipment: 104,
        ship: {
            isID: [150, 152],
        },
        bonus: {
            fire: 1,
        },
    },

    // @ 榛名改二
    {
        equipment: 104,
        ship: {
            isID: [151],
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        },
    },

    // ------------------------------------------------------------------------
];
