/**
 * @module
 * 装备额外属性收益
 *
 *   5. 15.5cm三連装砲
 *      https://wikiwiki.jp/kancolle/15.5cm%E4%B8%89%E9%80%A3%E8%A3%85%E7%A0%B2
 *
 */

require('../../../../typedef');

const {
    CAV_Mogami,
    CAV_MogamiRevised,
    CAV_MogamiSuper,
    CA_Mogami,
    CL_Ooyodo,
} = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
module.exports = [
    {
        equipment: 5,
        ship: {
            isClass: [CL_Ooyodo],
        },
        bonus: {
            fire: 2,
        },
    },
    {
        equipment: 5,
        ship: {
            isClass: [
                CAV_Mogami,
                CAV_MogamiRevised,
                CAV_MogamiSuper,
                CA_Mogami,
            ],
        },
        bonus: {
            fire: 1,
        },
    },
];
