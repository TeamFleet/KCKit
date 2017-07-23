/*
 * 先制雷击
 * 
 * 参考
 * http://wikiwiki.jp/kancolle/?%C0%EF%C6%AE%A4%CB%A4%C4%A4%A4%A4%C6#p046407a
 * 
 * 通用条件
 * 装备微型潜艇
 * 
 * 特殊条件
 * Lv.10 以上的潜艇
 * 
 */
let data = []

/**
 * 注册数据
 * 
 * @param {any} [options={}] 
 * @param {object} [options.ship]
 * @param {object} [options.equipments]
 */
const register = (options = {}) => {
    data.push(options)
}

// 通用条件
register({
    equipments: {
        hasMidgetSubmarine: true
    }
})

// 特殊条件 - 潜艇
register({
    ship: {
        isSS: true,
        minLevel: 10
    }
})

module.exports = data