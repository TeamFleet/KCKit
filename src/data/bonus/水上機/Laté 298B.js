/**
 * @module
 * 装备额外属性收益
 *
 * 194. Laté 298B
 *      https://wikiwiki.jp/kancolle/Late%20298B
 *
 */

const { Mizuho, Kamoi, CommandantTeste } = require('../../ship-series');
const { Richelieu改, 'Jean Bart改': JeanBart改 } = require('../../ship-ids');

module.exports = [
    {
        equipment: 194,
        ship: {
            isID: [...Mizuho, ...Kamoi],
        },
        bonus: {
            evasion: 1,
            los: 2,
        },
    },
    {
        equipment: 194,
        ship: {
            isID: [...CommandantTeste],
        },
        bonus: {
            fire: 3,
            evasion: 2,
            los: 2,
        },
    },
    {
        equipment: 194,
        ship: {
            isID: [Richelieu改, JeanBart改],
        },
        bonus: {
            fire: 1,
            evasion: 2,
            los: 2,
        },
    },
];
