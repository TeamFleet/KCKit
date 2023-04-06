/**
 * @module
 * 装备额外属性收益
 *
 * 356. 8inch三連装砲 Mk.9
 *      https://wikiwiki.jp/kancolle/8inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.9
 *
 * 357. 8inch三連装砲 Mk.9 mod.2
 *      https://wikiwiki.jp/kancolle/8inch%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2%20Mk.9%20mod.2
 *
 */

const {
    CA_Mogami,
    CAV_Mogami,
    CAV_MogamiRevised,
    CAV_MogamiSuper,
    CA_Northampton,
    CA_NewOrleans,
} = require('../../ship-classes');

const result = [];
[356, 357].forEach((equipment) => {
    result.push({
        equipment,
        ship: {
            isClass: [
                CA_Mogami,
                CAV_Mogami,
                CAV_MogamiRevised,
                CAV_MogamiSuper,
            ],
        },
        bonus: {
            fire: 1,
        },
    });
    result.push({
        equipment,
        ship: {
            isClass: [CA_Northampton, CA_NewOrleans],
        },
        bonus: {
            fire: 2,
        },
    });
});
module.exports = result;
