/*
 * 先制反潜攻击
 * 
 * 参考
 * http://kancolle.wikia.com/wiki/Combat#Opening_Anti-Submarine_Warfare_.28OASW.29
 * http://wikiwiki.jp/kancolle/?%C0%EF%C6%AE%A4%CB%A4%C4%A4%A4%A4%C6#antisubpreemptiveattack
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

let data = []

/**
 * 注册数据
 * 
 * @param {any} [options={}] 
 * @param {object} [options.ship]
 * @param {object} [options.shipWithEquipments]
 * @param {object} [options.equipments]
 */
const register = (options = {}) => {
    data.push(options)
}

// 通用条件
register({
    ship: {
        isNotType: 31
    },
    shipWithEquipments: {
        hasStat: {
            asw: 100
        }
    },
    equipments: {
        hasSonar: true
    }
})

// 特殊条件 - 五十铃改二
register({
    ship: {
        isID: 141
    }
})

// 特殊条件 - 海防舰
register({
    ship: {
        isType: 31
    },
    shipWithEquipments: {
        hasStat: {
            asw: 75
        }
    }
})
register({
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
})

// 特殊条件 - 大鹰
register({
    ship: {
        isID: 526
    },
    shipWithEquipments: {
        hasStat: {
            asw: 65
        }
    },
    equipments: {
        hasNameOf: '九三一空'
    }
})

// 特殊条件 - 大鹰改 / 大鹰改二
register({
    ship: {
        isID: [380, 529]
    },
    shipWithEquipments: {
        hasStat: {
            asw: 65
        }
    },
    equipments: {
        hasTorpedoBomber: true
    }
})
register({
    ship: {
        isID: [380, 529]
    },
    shipWithEquipments: {
        hasStat: {
            asw: 65
        }
    },
    equipments: {
        hasDiveBomber: true
    }
})

module.exports = data