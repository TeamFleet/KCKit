/**
 * 装备额外属性收益
 * 315. **SG レーダー(初期型)**
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/SG%20%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC%28%E5%88%9D%E6%9C%9F%E5%9E%8B%29

const { group_Navy_USN, group_DD_Navy_USN } = require('../../ship-classes');

module.exports = [
    // @ US Navy
    {
        equipment: 315,
        ship: {
            isClass: group_Navy_USN.filter(
                classId => !group_DD_Navy_USN.includes(classId)
            )
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
            isClass: group_DD_Navy_USN
        },
        bonus: {
            fire: 3,
            evasion: 3,
            los: 4,
            range: '1'
        }
    }

    // ------------------------------------------------------------------------
];
