/**
 * 装备额外属性收益 - SG レーダー(初期型)
 * 
 * @module
 */

// https://wikiwiki.jp/kancolle/SG%20%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29

const { group_Navy_USN, DD_JohnCButler } = require('../../ship-classes')

const bonusNormalClasses = [...group_Navy_USN]
bonusNormalClasses.splice(bonusNormalClasses.indexOf(DD_JohnCButler), 1)

module.exports = [

    // @ US Navy
    {
        equipment: 315,
        ship: {
            isClass: bonusNormalClasses,
        },
        bonus: {
            fire: 2,
            evasion: 3,
            los: 4
        }
    },

    {
        equipment: 315,
        ship: {
            isClass: DD_JohnCButler,
        },
        bonus: {
            fire: 3,
            evasion: 3,
            los: 4,
            range: '1',
        }
    },

    // ------------------------------------------------------------------------
]
