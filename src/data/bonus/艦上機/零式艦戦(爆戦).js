/**
 * @module
 * 装备额外属性收益
 *
 *  60. 零式艦戦62型(爆戦)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A662%E5%9E%8B%28%E7%88%86%E6%88%A6%29
 *
 * 219. 零式艦戦63型(爆戦)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A663%E5%9E%8B%28%E7%88%86%E6%88%A6%29
 *
 */

require('../../../../typedef');

const {
    CVL_Ryuuhou,
    CVL_RyuuhouRevised,
    CVL_Shouhou,
    CVL_Hiyou,
    CVL_Chitose,
} = require('../../ship-classes');

/** @type {Array<EquipmentBonus>} */
const result = [];

[
    60, // 零式艦戦62型(爆戦)
    219, // 零式艦戦63型(爆戦)
].forEach((eid) => {
    result.push(
        /** @type {EquipmentBonus} */
        {
            equipment: eid,
            ship: {
                isClass: [
                    CVL_Ryuuhou,
                    CVL_RyuuhouRevised,
                    CVL_Shouhou,
                    CVL_Hiyou,
                    CVL_Chitose,
                ],
            },
            bonus: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
        }
    );
});

module.exports = result;
