/**
 * @module
 * 装备额外属性收益
 *
 * 194. Laté 298B
 *      https://wikiwiki.jp/kancolle/Late%20298B
 *
 */

const { Mizuho, Kamoi, CommandantTeste } = require('../../ship-series');

module.exports = [
    {
        equipment: 194,
        ship: {
            isID: [...Mizuho, ...Kamoi]
        },
        bonus: {
            evasion: 1,
            los: 2
        }
    },
    {
        equipment: 194,
        ship: {
            isID: [...CommandantTeste]
        },
        bonus: {
            fire: 3,
            evasion: 2,
            los: 2
        }
    },
    {
        equipment: 194,
        ship: {
            isID: [
                392 // Richelieu改
            ]
        },
        bonus: {
            fire: 1,
            evasion: 2,
            los: 2
        }
    }
];
