// 装备额外属性

const BB_KongouClass2ndRemodel = [
    149, // 金剛改二
    150, // 比叡改二
    151, // 榛名改二
    152, // 霧島改二
]
const BB_IseClassRemodel = [
    82, // 伊勢改
    88, // 日向改
]
const BB_IseClass2ndRemodel = [
    553, // 伊勢改二
]
const BB_IseClassRemodelAll = BB_IseClassRemodel.concat(BB_IseClass2ndRemodel)
const BB_FusouClass2ndRemodel = [
    411, // 扶桑改二
    412, // 山城改二
]
const BB_IseClassRemodel_PLUS_FusouClass2ndRemodel = BB_IseClassRemodel.concat(BB_FusouClass2ndRemodel)

const CL_KumaClass2ndRemodel = [
    547, // 多摩改二
    146, // 木曽改二
]
const CL_KumaClassRemodel = [
    216, // 多摩改
    217, // 木曽改
].concat(CL_KumaClass2ndRemodel)
const CL_NagaraClass2ndRemodel = [
    488, // 由良改二
]

const DD_FubukiClass2ndRemodel = [
    426, // 吹雪改二
    420, // 叢雲改二
]
const DD_AyanamiClass2ndRemodel = [
    195, // 綾波改二
    407, // 潮改二
]
const DD_AkatsukiClass2ndRemodel = [
    437, // 暁改二
    147, // Верный
]
const DD_HatsuharuClass2ndRemodel = [
    326, // 初春改二
    419, // 初霜改二
]
const DD_ShiratsuyuClass2ndRemodel = [
    145, // 時雨改二
    498, // 村雨改二
    144, // 夕立改二
    469, // 江風改二
]
const DD_AsashioClass2ndRemodel = [
    463, // 朝潮改二
    468, // 朝潮改二丁
    199, // 大潮改二
    489, // 満潮改二
    490, // 荒潮改二
    198, // 霰改二
    464, // 霞改二
    470, // 霞改二乙
]
const DD_KagerouClass2ndRemodel = [
    566, // 陽炎改二
    567, // 不知火改二
    568, // 黒潮改二
]
const DD_YuugumoClass2ndRemodel = [
    543, // 長波改二
]
const DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel = DD_YuugumoClass2ndRemodel.concat([
    229, // 島風改
])

/**
 * @member {Number} [equipment] 单一装备
 * @member {Object} [equipments] 条件：装备组合
 * @member {Object} ship 条件：匹配的舰娘
 * @member {Object} [bonus] 收益。数字表示可叠加，字符串表示仅单次
 * @member {Object} [bonusCount] 仅当为单一装备时可用：不同装备数量的收益
 * @member {Object} [bonusImprove] 仅当为单一装备时可用：不同改修星级的收益
 * @member {Array} [list] 显示的内容
 */
module.exports = [

    /**
     * 小口径主炮
     */
    // 12.7cm単装高角砲(後期型)
    // @ 神風型 / 睦月型
    // @ 占守型 / 択捉型 / 日振型
    {
        equipment: 229,
        ship: {
            isClass: [84, 12, 92, 94, 108],
        },
        bonusImprove: {
            10: {
                fire: 1,
                aa: 1,
            }
        }
    },
    // 12.7cm単装高角砲(後期型)
    // @ 長良型 改二
    {
        equipment: 229,
        ship: {
            isID: CL_NagaraClass2ndRemodel,
        },
        bonusImprove: {
            10: {
                fire: 2,
                aa: 3,
            }
        }
    },
    // 12.7cm連装砲C型改二
    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 1,
            },
            2: {
                fire: 3,
            }
        }
    },
    // 12.7cm連装砲D型改二
    // @ 陽炎型
    {
        equipment: 267,
        ship: {
            isClass: [21],
            isNotID: DD_KagerouClass2ndRemodel,
        },
        bonus: {
            fire: 1,
            evasion: 1,
        }
    },
    // 12.7cm連装砲D型改二
    // @ 夕雲型 / 島風型
    {
        equipment: 267,
        ship: {
            isClass: [22, 24],
            isNotID: DD_YuugumoClass2ndRemodel,
        },
        bonus: {
            fire: 2,
            evasion: 1,
        }
    },
    // 12.7cm連装砲D型改二
    // @ 陽炎型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 1,
            },
            2: {
                fire: 3,
                evasion: 2,
            },
            3: {
                fire: 4,
                evasion: 3,
            },
        }
    },
    // 12.7cm連装砲D型改二
    // @ 夕雲型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 3,
            evasion: 1,
        }
    },


    /**
     * 大口径主炮
     */
    // 35.6cm連装砲(ダズル迷彩)
    // @ 金剛改二
    {
        equipment: 104,
        ship: {
            isID: [149]
        },
        bonus: {
            fire: 2,
        }
    },
    // 35.6cm連装砲(ダズル迷彩)
    // @ 榛名改二
    {
        equipment: 104,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2,
        }
    },
    // 35.6cm連装砲(ダズル迷彩)
    // @ 比叡改二 / 霧島改二
    {
        equipment: 104,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1,
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 金剛改二
    {
        equipment: 289,
        ship: {
            isID: [149]
        },
        bonus: {
            fire: 2,
            aa: 1,
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 榛名改二
    {
        equipment: 289,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 2,
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 比叡改二 / 霧島改二
    {
        equipment: 289,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1,
        }
    },
    // 41cm三連装砲改二
    // @ 扶桑型 改二
    {
        equipment: 290,
        ship: {
            isID: BB_FusouClass2ndRemodel
        },
        bonus: {
            fire: 1,
        }
    },
    // 41cm三連装砲改二
    // @ 伊勢型 改
    {
        equipment: 290,
        ship: {
            isID: BB_IseClassRemodel
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
        }
    },
    // 41cm三連装砲改二
    // @ 伊勢型 改二
    {
        equipment: 290,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
            aa: 2,
            evasion: 1,
        }
    },

    /**
     * 鱼雷发射管
     */
    // 61cm三連装(酸素)魚雷後期型
    // @ 特型駆逐艦 改二 / 初春型 改二
    {
        equipment: 285,
        ship: {
            isID: [].concat(
                DD_FubukiClass2ndRemodel,
                DD_AyanamiClass2ndRemodel,
                DD_AkatsukiClass2ndRemodel,
                DD_HatsuharuClass2ndRemodel,
            )
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1,
            }
        }
    },
    // 61cm四連装(酸素)魚雷
    // @ 陽炎型 改二
    {
        equipment: 15,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                torpedo: 2,
            },
            2: {
                torpedo: 4,
            }
        }
    },
    // 61cm四連装(酸素)魚雷後期型
    // @ 陽炎型 改二
    {
        equipment: 286,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            5: {
                torpedo: 3,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 3,
                evasion: 1,
            }
        }
    },
    // 61cm四連装(酸素)魚雷後期型
    // @ 白露型 改二 / 朝潮型 改二 / 夕雲型 改二
    {
        equipment: 286,
        ship: {
            isID: [].concat(
                DD_ShiratsuyuClass2ndRemodel,
                DD_AsashioClass2ndRemodel,
                DD_YuugumoClass2ndRemodel,
            )
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1,
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1,
            }
        }
    },

    /**
     * 水上轰炸机
     */
    // 瑞雲(六三四空)
    // @ 伊勢型 改二
    {
        equipment: 79,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
        }
    },
    // 瑞雲(六三四空)
    // @ 伊勢型 改 / 扶桑型 改二
    {
        equipment: 79,
        ship: {
            isID: BB_IseClassRemodel_PLUS_FusouClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    // 瑞雲12型(六三四空)
    // @ 伊勢型 改二
    {
        equipment: 81,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
        }
    },
    // 瑞雲12型(六三四空)
    // @ 伊勢型 改 / 扶桑型 改二
    {
        equipment: 81,
        ship: {
            isID: BB_IseClassRemodel_PLUS_FusouClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    // 瑞雲(六三四空/熟練)
    // @ 伊勢型 改二
    {
        equipment: 237,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 4,
        }
    },
    // 瑞雲(六三四空/熟練)
    // @ 伊勢型 改 / 扶桑型 改二
    {
        equipment: 237,
        ship: {
            isID: BB_IseClassRemodel_PLUS_FusouClass2ndRemodel
        },
        bonus: {
            fire: 3,
        }
    },

    /**
     * 舰载轰炸机
     */
    // 彗星
    // @ 伊勢型 改二
    {
        equipment: 24,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    // 彗星一二型甲
    // @ 伊勢型 改二
    {
        equipment: 57,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    // 彗星(江草隊)
    // @ 伊勢型 改二
    {
        equipment: 100,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 4,
        }
    },
    // 彗星二二型(六三四空)
    // @ 伊勢型 改二
    {
        equipment: 291,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 6,
            evasion: 1,
        }
    },
    // 彗星二二型(六三四空/熟練)
    // @ 伊勢型 改二
    {
        equipment: 292,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 8,
            aa: 1,
            evasion: 2,
        }
    },

    /**
     * 舰载侦察机
     */
    // 二式艦上偵察機
    // @ 伊勢型 改二
    {
        equipment: 61,
        ship: {
            isID: BB_IseClass2ndRemodel
        },
        bonus: {
            fire: 3,
            armor: 1,
            evasion: 2,
            range: '1',
        }
    },

    /**
     * 装甲板
     */
    // 北方迷彩(＋北方装備)
    // @ 球磨型 改
    {
        equipment: 268,
        ship: {
            isID: CL_KumaClassRemodel
        },
        bonusCount: {
            1: {
                armor: 2,
                evasion: 7,
            }
        }
    },

    /**
     * 组合
     */
    // 12.7cm単装高角砲(後期型) + 对水上電探
    // @ 神風型 / 睦月型
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 10,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isClass: [84, 12],
        },
        bonus: {
            fire: 2,
            evasion: 3,
        }
    },
    // 12.7cm単装高角砲(後期型) + 对水上電探
    // @ 占守型 / 択捉型 / 日振型
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 10,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isClass: [92, 94, 108],
        },
        bonus: {
            fire: 1,
            evasion: 4,
        }
    },
    // 12.7cm単装高角砲(後期型)
    // @ 長良型 改二
    {
        list: [
            {
                id: 229,
                star: 10,
            },
            'SurfaceRadar',
        ],
        equipments: [
            {
                isID: 229,
                improvement: 10,
            },
            {
                isSurfaceRadar: true
            }
        ],
        ship: {
            isID: CL_NagaraClass2ndRemodel,
        },
        bonus: {
            fire: 3,
            evasion: 2,
        }
    },
    // 12.7cm連装砲D型改二 + 对水上電探
    // @ 夕雲型 改二 / 島風改
    {
        list: [
            267,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2,
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様) + 对水上電探
    // @ 金剛型 改二
    {
        list: [
            289,
            'SurfaceRadar',
        ],
        equipments: {
            hasID: [289],
            hasSurfaceRadar: true,
        },
        ship: {
            isID: BB_KongouClass2ndRemodel
        },
        bonus: {
            fire: 2,
            evasion: 2,
        }
    },
    // 41cm三連装砲改二 + 对空電探
    // @ 伊勢型 改+
    {
        list: [
            290,
            'AARadar',
        ],
        equipments: {
            hasID: [290],
            hasAARadar: true,
        },
        ship: {
            isID: BB_IseClassRemodelAll
        },
        bonus: {
            aa: 2,
            evasion: 3,
        }
    },
]
