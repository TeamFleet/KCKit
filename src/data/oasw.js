/**
 * @module
 * 先制反潜攻击
 *
 * 参考
 * http://kancolle.wikia.com/wiki/Combat#Opening_Anti-Submarine_Warfare_.28OASW.29
 * http://wikiwiki.jp/kancolle/?%C2%D0%C0%F8%C0%E8%C0%A9%C7%FA%CD%EB%B9%B6%B7%E2
 *
 * 通用条件
 * 对潜属性（自身+装备）至少 100 点且至少装备 声纳，无视装备改修收益
 *
 * 特殊条件
 * 五十铃改二：永远存在，无需声纳，无视对潜属性的多少
 * 海防舰：不装备声纳时需要对潜属性 75 点，装备声纳时需要对潜属性 60 点
 * 大鹰：装备声纳时需要对潜属性 100 点，装备九三一空舰载机时需要对潜属性 65 点
 * 大鹰改 / 大鹰改二：装备任意舰攻或舰爆时需要对潜属性 65 点
 *
 */

const { CVE, CVE_TaiyouClassRemodelAll } = require('./ships');

module.exports = [
    /**
     * 通用条件
     * - 面板对潜属性至少 **100** 点（计算装备）
     * - 装备**声纳**
     */
    {
        ship: {
            isNotType: 31,
            isNotID: CVE
        },
        shipWithEquipments: {
            hasStat: {
                asw: 100
            }
        },
        equipments: {
            hasSonar: true
        }
    },

    /*************************************************************************/

    /**
     * 无条件触发
     */
    {
        ship: {
            isID: [
                // CL
                141, // 五十鈴改二
                478, // 龍田改二
                // DD (USN)
                681, // Samuel B.Roberts改
                692, // Flechter改
                689, // Johnston改
                // DD (RN)
                394 // Jervis改
            ]
        }
    },

    /*************************************************************************/

    /**
     * 海防舰
     * - 不装备*声纳*: 面板对潜属性至少 **75** 点（计算装备）
     */
    {
        ship: {
            isType: 31
        },
        shipWithEquipments: {
            hasStat: {
                asw: 75
            }
        }
    },
    /**
     * 海防舰
     * - 装备*声纳*: 面板对潜属性至少 **60** 点（计算装备）
     */
    {
        ship: {
            isType: 31
        },
        shipWithEquipments: {
            hasStat: {
                asw: 60
            }
        },
        equipments: {
            hasSonar: true
        }
    },

    /*************************************************************************/

    /**
     * 护航航母
     */
    {
        ship: {
            isID: [
                ...CVE,
                555 // 瑞鳳改二
            ],
            isNotID: CVE_TaiyouClassRemodelAll
        },
        shipWithEquipments: {
            hasStat: {
                asw: 50
            }
        },
        equipments: {
            hasSonars: true,
            hasOneOf: [
                {
                    isTorpedoBomber: {
                        hasStat: {
                            asw: 7
                        }
                    }
                },
                {
                    isAutogyro: true
                },
                {
                    isAntiSubPatrol: true
                }
            ]
        }
    },
    {
        ship: {
            isID: CVE,
            isNotID: CVE_TaiyouClassRemodelAll
        },
        shipWithEquipments: {
            hasStat: {
                asw: 65
            }
        },
        equipments: {
            hasOneOf: [
                {
                    isTorpedoBomber: {
                        hasStat: {
                            asw: 7
                        }
                    }
                },
                {
                    isAutogyro: true
                },
                {
                    isAntiSubPatrol: true
                }
            ]
        }
    },
    {
        ship: {
            isID: CVE,
            isNotID: CVE_TaiyouClassRemodelAll
        },
        shipWithEquipments: {
            hasStat: {
                asw: 100
            }
        },
        equipments: {
            hasSonars: true,
            hasOneOf: [
                {
                    isDiveBomber: {
                        hasStat: {
                            asw: 1
                        }
                    }
                },
                {
                    isTorpedoBomber: {
                        hasStat: {
                            asw: 1
                        }
                    }
                }
            ]
        }
    },
    {
        ship: {
            isID: CVE_TaiyouClassRemodelAll
        },
        shipWithEquipments: {
            hasStat: {
                asw: 1
            }
        },
        equipments: {
            hasOneOf: [
                {
                    isDiveBomber: {
                        hasStat: {
                            asw: 1
                        }
                    }
                },
                {
                    isTorpedoBomber: {
                        hasStat: {
                            asw: 1
                        }
                    }
                },
                {
                    isAutogyro: true
                },
                {
                    isAntiSubPatrol: true
                }
            ]
        }
    },

    // 日向改二 ===============================================================
    {
        ship: {
            isID: [554]
        },
        shipWithEquipments: {
            hasStat: {
                asw: 1
            }
        },
        equipments: {
            hasAutogyro: {
                hasStat: {
                    asw: 12
                }
            }
        }
    },
    {
        ship: {
            isID: [554]
        },
        shipWithEquipments: {
            hasStat: {
                asw: 1
            }
        },
        equipments: {
            hasAutogyro: 2
        }
    }
];
