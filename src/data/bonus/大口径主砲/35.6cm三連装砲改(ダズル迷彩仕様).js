/**
 * @module
 * 装备额外属性收益
 * 289. **35.6cm三連装砲改(ダズル迷彩仕様)**
 */

// https://wikiwiki.jp/kancolle/35.6cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%E6%94%B9%28%E3%83%80%E3%82%BA%E3%83%AB%E8%BF%B7%E5%BD%A9%E4%BB%95%E6%A7%98%29

const { 榛名改二 } = require('../../ship-ids');
// const { BB_KongouClass2ndRemodel } = require('../../ships');

module.exports = [
    // 金剛改二丙 ※補正なし
    // 比叡改二丙 ※補正なし

    {
        equipment: 289,
        ship: {
            isID: [
                149, // 金剛改二
            ],
        },
        bonus: {
            fire: 2,
            aa: 1,
        },
    },

    // @ 比叡改二 / 霧島改二
    {
        equipment: 289,
        ship: {
            isID: [150, 152],
        },
        bonus: {
            fire: 1,
        },
    },

    // @ 榛名改二
    {
        equipment: 289,
        ship: {
            isID: [榛名改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        },
    },

    // ------------------------------------------------------------------------

    // @ 金剛型 改二
    {
        list: [289, 'SurfaceRadar'],
        equipments: {
            hasID: [289],
            hasSurfaceRadar: true,
        },
        ship: {
            // isID: [...BB_KongouClass2ndRemodel],
            isID: [
                149, // 金剛改二
                榛名改二,
            ],
        },
        bonus: {
            fire: 2,
            evasion: 2,
        },
    },
];
