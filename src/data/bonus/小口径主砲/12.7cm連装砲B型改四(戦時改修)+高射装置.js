/**
 * @module
 * 装备额外属性收益
 * 296. **12.7cm連装砲B型改四(戦時改修)+高射装置**
 */

// https://wikiwiki.jp/kancolle/12.7cm%E9%80%A3%E8%A3%85%E7%A0%B2B%E5%9E%8B%E6%94%B9%E5%9B%9B%28%E6%88%A6%E6%99%82%E6%94%B9%E4%BF%AE%29%EF%BC%8B%E9%AB%98%E5%B0%84%E8%A3%85%E7%BD%AE

const { DD_ShiratsuyuClass2ndRemodel } = require('../../ships');
const {
    DD_Ayanami,
    DD_Akatsuki,
    DD_Hatsuharu,
    DD_Shiratsuyu
} = require('../../ship-classes');

// const classesAyanamiAkatsuki = [DD_Ayanami, DD_Akatsuki]
const classesAyanamiAkatsukiShiratsuyu = [
    DD_Ayanami,
    DD_Akatsuki,
    DD_Shiratsuyu
];
const classesAyanamiAkatsukiHatsuharu = [DD_Ayanami, DD_Akatsuki, DD_Hatsuharu];

module.exports = [
    // 綾波型 / 暁型 / 白露型
    {
        equipment: 296,
        ship: {
            isClass: classesAyanamiAkatsukiShiratsuyu,
            isNotID: DD_ShiratsuyuClass2ndRemodel
        },
        bonus: {
            fire: 1
        }
    },

    // 初春型
    {
        equipment: 296,
        ship: {
            isClass: [DD_Hatsuharu]
        },
        bonus: {
            fire: 1,
            evasion: 1
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                497 // 白露改二
            ]
        },
        bonus: {
            fire: 2,
            evasion: 2
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                145 // 時雨改二
            ]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                498 // 村雨改二
            ]
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                144 // 夕立改二
            ]
        },
        bonus: {
            fire: 2,
            torpedo: 1,
            evasion: 1
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                587, // 海風改二
                469 // 江風改二
            ]
        },
        bonus: {
            fire: 1,
            evasion: 2
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [296, 'SurfaceRadar'],
        equipments: {
            hasID: [296],
            hasSurfaceRadar: true
        },
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            evasion: 2
        }
    },
    {
        list: [296, 'SurfaceRadar'],
        equipments: {
            hasID: [296],
            hasSurfaceRadar: true
        },
        ship: {
            isClass: [DD_Shiratsuyu]
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2
        }
    },

    // + 对空電探
    {
        list: [296, 'AARadar'],
        equipments: {
            hasID: [296],
            hasAARadar: true
        },
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu
        },
        bonus: {
            aa: 5
        }
    },
    {
        list: [296, 'AARadar'],
        equipments: {
            hasID: [296],
            hasAARadar: true
        },
        ship: {
            isClass: [DD_Shiratsuyu]
        },
        bonus: {
            aa: 6
        }
    },

    // + 61cm三連装(酸素)魚雷後期型
    {
        list: [296, 285],
        equipments: [
            {
                isID: 296
            },
            {
                isID: 285
            }
        ],
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu
        },
        bonus: {
            fire: 1,
            torpedo: 3
        }
    },

    // + 61cm四連装(酸素)魚雷後期型
    {
        list: [296, 286],
        equipments: [
            {
                isID: 296
            },
            {
                isID: 286
            }
        ],
        ship: {
            isClass: [DD_Shiratsuyu]
        },
        bonus: {
            fire: 1,
            torpedo: 3
        }
    }
];
