// https://github.com/KC3Kai/KC3Kai/blob/master/src/library/modules/AntiAir.js
// http://wikiwiki.jp/kancolle/?%B9%D2%B6%F5%C0%EF#antiairfire
// http://kancolle.wikia.com/wiki/Combat/Aerial_Combat#Anti-Air_Cut-In

let data = {}

/**
 * 注册 AACI 数据
 * 
 * @param {number} [id] 
 * @param {any} [options={}] 
 * @param {number} [options.fixed] 固定额外击坠量
 * @param {number} [options.modifier] 击坠量系数
 * @param {(number[]|string[])} [options.icons] 显示图标
 * @param {object} [options.ship] 舰娘的判断条件
 * @param {object} [options.equipments] 装备的判断条件
 */
const register = (id, options = {}) => {
    if (typeof data[id] !== 'undefined')
        return data[id]
    if (!options.id) options.id = id
    data[id] = options
}



// ==================================================
// All non-sub ships
{
    register(5, {
        fixed: 4,
        modifier: 1.5,
        icons: ['16+', '16+', '11AA'],
        ship: {
            isSS: false,
            hasSlotMin: 3
        },
        equipments: {
            hasHAMountAAFD: 2,
            hasAARadar: true
        }
    })
    register(8, {
        fixed: 4,
        modifier: 1.4,
        icons: ['16+', '11AA'],
        ship: {
            isSS: false,
            hasSlotMin: 2
        },
        equipments: {
            hasHAMountAAFD: true,
            hasAARadar: true
        }
    })
    register(7, {
        fixed: 3,
        modifier: 1.35,
        icons: [16, 30, '11AA'],
        ship: {
            isSS: false,
            hasSlotMin: 2
        },
        equipments: {
            hasHAMount: true,
            hasAAFD: true,
            hasAARadar: true
        }
    })
    register(9, {
        fixed: 2,
        modifier: 1.3,
        icons: [16, 30],
        ship: {
            isSS: false,
            hasSlotMin: 1
        },
        equipments: {
            hasHAMount: true,
            hasAAFD: true
        }
    })
    // register(12, {
    //     fixed: 3,
    //     modifier: 1.25,
    //     icons: ['15+', 15, '11AA'],
    //     ship: {
    //         isSS: false,
    //         hasSlotMin: 2
    //     },
    //     equipments: {
    //         hasAAGunCD: true,
    //         /* CDMGs are AAGuns, so we need at least 2 AA guns 
    //            including the CDMG one we have just counted */
    //         hasAAFD: 2,
    //         hasAARadar: true
    //     }
    // })
    // register(12, {
    //     fixed: 3,
    //     modifier: 1.25,
    //     icons: ['15+', '15[3,8]', '11AA'],
    //     ship: {
    //         isSS: false,
    //         hasSlotMin: 2
    //     },
    //     equipments: {
    //         hasAAGunCD: true,
    //         hasAAGun: {
    //             hasStat: {
    //                 aa: [3, 8]
    //             }
    //         },
    //         hasAARadar: true
    //     }
    // })
    register(12, {
        fixed: 3,
        modifier: 1.25,
        icons: ['15+', '15[3,]', '11AA'],
        ship: {
            isSS: false,
            hasSlotMin: 2
        },
        equipments: {
            hasAAGunCD: true,
            hasAAGun: {
                hasStat: {
                    aa: 3
                },
                count: 2
            },
            hasAARadar: true
        }
    })
}

// ==================================================
// Battleships
{
    // all battleships
    register(4, {
        fixed: 6,
        modifier: 1.5,
        icons: [3, 12, 30, '11AA'],
        ship: {
            isBB: true,
            hasSlotMin: 4
        },
        equipments: {
            hasLargeCaliber: true,
            hasType3Shell: true,
            hasAAFD: true,
            hasAARadar: true
        }
    })

    // all battleships
    register(6, {
        fixed: 4,
        modifier: 1.45,
        icons: [3, 12, 30],
        ship: {
            isBB: true,
            hasSlotMin: 3
        },
        equipments: {
            hasLargeCaliber: true,
            hasType3Shell: true,
            hasAAFD: true
        }
    })

    // 伊勢・改
    // 日向・改
    register(25, {
        fixed: 7,
        modifier: 1.55,
        icons: ['15:274', '11AA', 12],
        ship: {
            isID: [82, 88]
        },
        equipments: {
            hasID: 274,
            hasAARadar: true,
            hasType3Shell: true,
        }
    })

    // 武蔵・改二
    register(26, {
        fixed: 6,
        modifier: 1.4,
        icons: ['16:275', '11AA'],
        ship: {
            isID: [546]
        },
        equipments: {
            hasID: 275,
            hasAARadar: true,
        }
    })

    // 伊勢・改
    // 日向・改
    // 武蔵・改
    // 武蔵・改二
    register(28, {
        fixed: 4,
        modifier: 1.4,
        icons: ['15:274', '11AA'],
        ship: {
            isID: [82, 88, 148, 546]
        },
        equipments: {
            hasID: [274],
            hasAARadar: true,
        }
    })
}

// ==================================================
// Cruisers
{
    // 摩耶・改二
    register(10, {
        fixed: 8,
        modifier: 1.65,
        icons: [16, '15+', '11AA'],
        ship: {
            isID: 428
        },
        equipments: {
            hasHAMount: true,
            hasAAGunCD: true,
            hasAARadar: true
        }
    })
    // 摩耶・改二
    register(11, {
        fixed: 6,
        modifier: 1.5,
        icons: [16, '15+'],
        ship: {
            isID: 428
        },
        equipments: {
            hasHAMount: true,
            hasAAGunCD: true
        }
    })

    // 五十鈴・改二
    register(14, {
        fixed: 4,
        modifier: 1.45,
        icons: [16, 15, '11AA'],
        ship: {
            isID: 141
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true,
            hasAARadar: true
        }
    })
    // 五十鈴・改二
    register(15, {
        fixed: 3,
        modifier: 1.3,
        icons: [16, 15],
        ship: {
            isID: 141
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true
        }
    })

    // 鬼怒・改二
    register(19, {
        fixed: 5,
        modifier: 1.45,
        icons: ['16-', '15+'],
        ship: {
            isID: 487
        },
        equipments: {
            hasHAMount: {
                hasStat: {
                    aa: [0, 7]
                }
            },
            hasAAGunCD: true,
            // hasHAMountAAFD: false,
            // hasHAMount: true,
            // hasAAGunCD: true
        }
    })
    // 鬼怒・改二
    register(20, {
        fixed: 3,
        modifier: 1.25,
        icons: ['15+'],
        ship: {
            isID: 487
        },
        equipments: {
            hasAAGunCD: true
        }
    })

    // 由良・改二
    register(21, {
        fixed: 5,
        modifier: 1.45,
        icons: [16, '11AA'],
        ship: {
            isID: 488
        },
        equipments: {
            hasHAMount: true,
            hasAARadar: true
        }
    })

    // 龍田・改二
    register(24, {
        fixed: 3,
        modifier: 1.25,
        icons: [16, '15[3,8]'],
        ship: {
            isID: 478
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: {
                hasStat: {
                    aa: [3, 8]
                }
            },
        }
    })
}

// ==================================================
// Destroyers
{
    // 秋月型駆逐艦
    register(1, {
        fixed: 7,
        modifier: 1.7,
        icons: [16, 16, 11],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: 2,
            hasRadar: true
        }
    })
    // 秋月型駆逐艦
    register(2, {
        fixed: 6,
        modifier: 1.7,
        icons: [16, 11],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: true,
            hasRadar: true
        }
    })
    // 秋月型駆逐艦
    register(3, {
        fixed: 4,
        modifier: 1.6,
        icons: [16, 16],
        ship: {
            isClass: 23
        },
        equipments: {
            hasHAMount: 2
        }
    })

    // 皐月・改二
    register(18, {
        fixed: 2,
        modifier: 1.2,
        icons: ['15+'],
        ship: {
            isID: 418
        },
        equipments: {
            hasAAGunCD: true
        }
    })

    // 文月・改二
    register(22, {
        fixed: 2,
        modifier: 1.2,
        icons: ['15+'],
        ship: {
            isID: 548
        },
        equipments: {
            hasAAGunCD: true
        }
    })

    // 霞・改二乙
    register(16, {
        fixed: 4,
        modifier: 1.4,
        icons: [16, 15, '11AA'],
        ship: {
            isID: 470
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true,
            hasAARadar: true
        }
    })
    // 霞・改二乙
    register(17, {
        fixed: 2,
        modifier: 1.25,
        icons: [16, 15],
        ship: {
            isID: 470
        },
        equipments: {
            hasHAMount: true,
            hasAAGun: true
        }
    })

    // 磯風・乙改
    // 浜風・乙改
    register(29, {
        fixed: 5,
        modifier: 1.55,
        icons: ['16-', '11AA'],
        ship: {
            isID: [557, 558]
        },
        equipments: {
            hasHAMount: {
                hasStat: {
                    aa: [0, 7]
                }
            },
            hasAARadar: true,
        }
    })
}

// ==================================================
// Submarines
{
    // UIT-25
    // 伊504
    register(23, {
        fixed: 1,
        modifier: 1.05,
        icons: ['15[3,8]'],
        ship: {
            isID: [539, 530]
        },
        equipments: {
            hasAAGun: {
                hasStat: {
                    aa: [3, 8]
                }
            },
        }
    })
}

// ==================================================
// register(13, {
// })
// register(27, {
// })

module.exports = data
