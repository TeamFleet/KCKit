/**
 * 装备额外属性收益 - 12.7cm連装砲B型改四(戦時改修)+高射装置
 * 
 * @module
 */

const {
    DD_ShiratsuyuClass2ndRemodel,
} = require('../../ships')
const {
    DD_Ayanami,
    DD_Akatsuki,
    DD_Hatsuharu,
    DD_Shiratsuyu
} = require('../../ship-classes')

// const classesAyanamiAkatsuki = [DD_Ayanami, DD_Akatsuki]
const classesAyanamiAkatsukiShiratsuyu = [DD_Ayanami, DD_Akatsuki, DD_Shiratsuyu]
const classesAyanamiAkatsukiHatsuharu = [DD_Ayanami, DD_Akatsuki, DD_Hatsuharu]

module.exports = [

    // 綾波型 / 暁型 / 白露型
    {
        equipment: 296,
        ship: {
            isClass: classesAyanamiAkatsukiShiratsuyu,
            isNotID: DD_ShiratsuyuClass2ndRemodel,
        },
        bonus: {
            fire: 1,
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
            evasion: 1,
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                497, // 白露改二
            ]
        },
        bonus: {
            fire: 2,
            evasion: 2,
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                145, // 時雨改二
            ]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 1,
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                498, // 村雨改二
            ]
        },
        bonus: {
            fire: 1,
            aa: 1,
            evasion: 2,
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                144, // 夕立改二
            ]
        },
        bonus: {
            fire: 2,
            torpedo: 1,
            evasion: 1,
        }
    },

    {
        equipment: 296,
        ship: {
            isID: [
                469, // 江風改二
            ]
        },
        bonus: {
            fire: 1,
            evasion: 2,
        }
    },

    // ------------------------------------------------------------------------

    // + 对水上電探
    {
        list: [
            296,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [296],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu,
        },
        bonus: {
            fire: 1,
            torpedo: 2,
            evasion: 2,
        }
    },
    {
        list: [
            296,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [296],
            hasSurfaceRadar: true,
        },
        ship: {
            isClass: [DD_Shiratsuyu],
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2,
        }
    },

    // + 对空電探
    {
        list: [
            296,
            'AARadar',
        ],
        equipments: {
            hasID: [296],
            hasAARadar: true,
        },
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu,
        },
        bonus: {
            aa: 5,
        }
    },
    {
        list: [
            296,
            'AARadar',
        ],
        equipments: {
            hasID: [296],
            hasAARadar: true,
        },
        ship: {
            isClass: [DD_Shiratsuyu],
        },
        bonus: {
            aa: 6,
        }
    },

    // + 61cm三連装(酸素)魚雷後期型
    {
        list: [
            296,
            285,
        ],
        equipments: [
            {
                isID: 296,
            },
            {
                isID: 285,
            }
        ],
        ship: {
            isClass: classesAyanamiAkatsukiHatsuharu,
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        }
    },

    // + 61cm四連装(酸素)魚雷後期型
    {
        list: [
            296,
            286,
        ],
        equipments: [
            {
                isID: 296,
            },
            {
                isID: 286,
            },
        ],
        ship: {
            isClass: [DD_Shiratsuyu],
        },
        bonus: {
            fire: 1,
            torpedo: 3,
        }
    },

]
