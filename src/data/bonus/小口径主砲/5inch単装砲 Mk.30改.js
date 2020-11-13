/**
 * 装备额外属性收益
 * 313. **5inch単装砲 Mk.30改**
 *
 * @module
 */

// https://wikiwiki.jp/kancolle/5inch%E5%8D%98%E8%A3%85%E7%A0%B2%20Mk.30%E6%94%B9

const { group_DD_Navy_USN } = require('../../ship-classes');
const { 丹陽, 雪風改二 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 313,
        ship: {
            isClass: group_DD_Navy_USN,
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
            armor: 1,
        },
    },
    {
        equipment: 313,
        ship: {
            isID: [丹陽, 雪風改二],
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1,
            armor: 1,
        },
    },

    // ------------------------------------------------------------------------
];
