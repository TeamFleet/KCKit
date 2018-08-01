// https://github.com/KC3Kai/KC3Kai/blob/master/src/library/modules/AntiAir.js
// http://wikiwiki.jp/kancolle/?%B9%D2%B6%F5%C0%EF#antiairfire
// http://kancolle.wikia.com/wiki/Combat/Aerial_Combat#Anti-Air_Cut-In

const data = {
    5: {
        fixed: 4,
        modifier: 1.5,
        icons: ['16+', '16+', '11AA'],
        ship: {
            hasSlotMin: 3,
            isSS: false,
            isNotClass: 33,
        },
        equipments: {
            hasHAMountAAFD: 2,
            hasAARadar: true
        }
    },

    7: {
        fixed: 3,
        modifier: 1.35,
        icons: [16, 30, '11AA'],
        ship: {
            hasSlotMin: 2,
            isSS: false,
            isNotClass: 33,
        },
        equipments: {
            hasHAMount: true,
            hasAAFD: true,
            hasAARadar: true
        }
    },

    8: {
        fixed: 4,
        modifier: 1.4,
        icons: ['16+', '11AA'],
        ship: {
            hasSlotMin: 2,
            isSS: false,
            isNotClass: 33,
        },
        equipments: {
            hasHAMountAAFD: true,
            hasAARadar: true
        }
    },

    9: {
        fixed: 2,
        modifier: 1.3,
        icons: [16, 30],
        ship: {
            hasSlotMin: 1,
            isSS: false,
            isNotClass: 33,
        },
        equipments: {
            hasHAMount: true,
            hasAAFD: true
        }
    },

    12: {
        fixed: 3,
        modifier: 1.25,
        icons: ['15+', '15[3,]', '11AA'],
        ship: {
            hasSlotMin: 2,
            isSS: false,
            isNotClass: 33,
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
    },

    ...require('./shiptype/battleships'),
    ...require('./shiptype/cruisers'),
    ...require('./shiptype/destroyers'),
    ...require('./shiptype/submarines'),

    ...require('./navy/rn'),

    // 13: {},
    // 27: {},
}

/**
 * @param {number} [id] 
 * @param {any} [options={}] 
 * @param {number} [options.fixed] 固定额外击坠量
 * @param {number} [options.modifier] 击坠量系数
 * @param {(number[]|string[])} [options.icons] 显示图标
 * @param {object} [options.ship] 舰娘的判断条件
 * @param {object} [options.equipments] 装备的判断条件
 */
// const register = (id, options = {}) => {
//     if (typeof data[id] !== 'undefined')
//         return data[id]
//     if (!options.id) options.id = id
//     data[id] = options
// }

Object.keys(data)
    .forEach(id => {
        data[id].id = parseInt(id)
    })

module.exports = data
