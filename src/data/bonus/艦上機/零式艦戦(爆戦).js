/**
 * @module
 * 装备额外属性收益
 *
 *  60. 零式艦戦62型(爆戦)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A662%E5%9E%8B%28%E7%88%86%E6%88%A6%29
 *
 * 154. 零式艦戦62型(爆戦/岩井隊)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E6%88%A662%E5%9E%8B%28%E7%88%86%E6%88%A6%EF%BC%8F%E5%B2%A9%E4%BA%95%E9%9A%8A%29
 *
 * 219. 零式艦戦63型(爆戦)
 *      https://wikiwiki.jp/kancolle/%E9%9B%B6%E5%BC%8F%E8%89%A6%E6%88%A663%E5%9E%8B%28%E7%88%86%E6%88%A6%29
 *
 */

require('../../../../typedef');

const {
    CVL_Ryuuhou,
    CVL_Shouhou,
    CVL_Hiyou,
    CVL_Chitose,
} = require('../../ship-classes');

const { 龍鳳改二戊, 龍鳳改二 } = require('../../ship-ids');

/** @type {Array<EquipmentBonus>} */
const result = [];

[
    60, // 零式艦戦62型(爆戦)
    154,
    219, // 零式艦戦63型(爆戦)
].forEach((eid) => {
    result.push(
        /** @type {EquipmentBonus} */
        {
            equipment: eid,
            ship: {
                isClass: [CVL_Ryuuhou, CVL_Shouhou, CVL_Hiyou, CVL_Chitose],
            },
            bonus: {
                fire: 1,
                aa: 1,
                evasion: 1,
            },
        }
    );
    result.push(
        /** @type {EquipmentBonus} */
        {
            equipment: eid,
            ship: {
                isID: [龍鳳改二戊, 龍鳳改二],
            },
            bonus: {
                fire: 2,
                aa: 1,
                evasion: 2,
            },
        }
    );
});

module.exports = result;
