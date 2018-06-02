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

const CL_KumaClass2ndRemodel = [
    547, // 多摩改二
    146, // 木曽改二
]
const CL_KumaClassRemodel = [
    216, // 多摩改
    217, // 木曽改
].concat(CL_KumaClass2ndRemodel)

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
 * @member {Object} [bonus] 收益
 * @member {Object} [bonusCount] 仅当为单一装备时可用：不同装备数量的收益
 * @member {Object} [bonusImprove] 仅当为单一装备时可用：不同改修星级的收益
 */
module.exports = [

    /**
     * 小口径主炮
     */
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
            isClass: [21]
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
            isClass: [22, 24]
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
            aa: 1,
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

    /**
     * 鱼雷发射管
     */
    // 61cm三連装(酸素)魚雷後期型
    // @ 特型駆逐艦 改二 / 初春型 改二
    {
        equipment: 285,
        ships: {
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
        bonus: {
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
        ships: {
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
        ships: {
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
     * 装甲板
     */
    // 北方迷彩(＋北方装備)
    // @ 球磨型 改
    {
        equipment: 268,
        ships: {
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
    // 12.7cm連装砲D型改二 + 水上電探
    // @ 夕雲型 改二 / 島風改
    {
        equipments: {
            hasId: [267],
            hasSurfaceRadar: true,
        },
        ship: {
            isId: DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2,
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様) + 水上電探
    // @ 金剛型 改二
    {
        equipments: {
            hasId: [289],
            hasSurfaceRadar: true,
        },
        ship: {
            isId: BB_KongouClass2ndRemodel
        },
        bonus: {
            fire: 2,
        }
    },
    // 41cm三連装砲改二 + 水上電探
    // @ 伊勢型 改
    {
        equipments: {
            hasId: [290],
            hasAARadar: true,
        },
        ship: {
            isId: BB_IseClassRemodel
        },
        bonus: {
            aa: 2,
            evasion: 3,
        }
    },
]