const getShipAndEquipments = require('../get/ship-and-equipments');
const checkShip = require('../check/ship');
const checkEquipments = require('../check/equipments');
const bonus = require('../data/bonus');

/**
 * Calculate stat bonus for specified ship with equipment(s)
 */
const calculateBonus = (
    ship,
    equipments = [],
    equipmentStars = [],
    equipmentRanks = [],
    stat,
) => {
    if (typeof equipmentStars === 'string')
        return calculateBonus(
            ship,
            equipments,
            undefined,
            undefined,
            equipmentStars,
        );
    if (typeof equipmentRanks === 'string')
        return calculateBonus(
            ship,
            equipments,
            equipmentStars,
            undefined,
            equipmentRanks,
        );

    ({ ship, equipments, equipmentStars, equipmentRanks } =
        getShipAndEquipments(ship, equipments, equipmentStars, equipmentRanks));

    const result = {};
    const conditions = bonus.filter((bonus) => checkShip(ship, bonus.ship));
    const addResult = (bonus = {}) => {
        for (const stat in bonus) {
            if (typeof result[stat] === 'undefined') result[stat] = bonus[stat];
            else if (typeof result[stat] === 'number')
                result[stat] += bonus[stat];
            else result[stat] = bonus[stat];
        }
    };

    // 条件：单一装备
    conditions
        .filter(
            (bonus) =>
                typeof bonus.equipment === 'number' &&
                equipments.some(
                    (equipment) =>
                        equipment &&
                        equipment.id &&
                        // eslint-disable-next-line eqeqeq
                        equipment.id == bonus.equipment,
                ),
        )
        .forEach((bonus) => {
            let thisBonus = {};

            // 根据改修星级
            // 目前的数据结构下，改修星级条件与其他条件不能共存
            if (typeof bonus.bonusImprove === 'object') {
                // 从大到小排序可能的改修星级
                const starsDesc = Object.keys(bonus.bonusImprove)
                    .filter((key) => !isNaN(key))
                    .sort((a, b) => parseInt(b) - parseInt(a));
                // 每个装备的收益单独计算
                equipments
                    .map((equipment, index) => ({
                        equipment,
                        star: equipmentStars[index] || 0,
                        rank: equipmentRanks[index] || 0,
                    }))
                    .filter(
                        ({ equipment }) =>
                            equipment &&
                            equipment.id &&
                            // eslint-disable-next-line eqeqeq
                            equipment.id == bonus.equipment,
                    )
                    .sort((a, b) => {
                        if (a.star === b.star) return b.rank - a.rank;
                        return b.star - a.star;
                    })
                    .slice(0, bonus.bonusImprove.maxCount || equipments.length)
                    .forEach(({ equipment, star, rank }) => {
                        starsDesc.some((checkStar) => {
                            if (star >= checkStar) {
                                for (const stat in bonus.bonusImprove[
                                    checkStar
                                ]) {
                                    if (typeof thisBonus[stat] === 'undefined')
                                        thisBonus[stat] =
                                            bonus.bonusImprove[checkStar][stat];
                                    else if (
                                        typeof thisBonus[stat] === 'number'
                                    )
                                        thisBonus[stat] +=
                                            bonus.bonusImprove[checkStar][stat];
                                    else
                                        thisBonus[stat] =
                                            bonus.bonusImprove[checkStar][stat];
                                }
                                return true;
                            }
                            return false;
                        });
                    });
            } else {
                let thisCount = 0;

                // 统计目标装备的数量
                equipments.forEach((equipment) => {
                    if (
                        equipment &&
                        equipment.id &&
                        // eslint-disable-next-line eqeqeq
                        equipment.id == bonus.equipment
                    ) {
                        thisCount++;
                    }
                });

                if (typeof bonus.bonusCount === 'object') {
                    Object.keys(bonus.bonusCount)
                        .sort((a, b) => parseInt(b) - parseInt(a))
                        .some((count) => {
                            if (thisCount >= count) {
                                thisBonus = { ...bonus.bonusCount[count] };
                                return true;
                            }
                            return false;
                        });
                } else if (typeof bonus.bonus === 'object') {
                    thisBonus = { ...bonus.bonus };
                    // add for count
                    for (const stat in thisBonus)
                        thisBonus[stat] =
                            typeof thisBonus[stat] === 'number'
                                ? thisBonus[stat] * thisCount
                                : parseInt(thisBonus[stat]);
                }
            }

            addResult(thisBonus);
        });

    // 条件：套装
    conditions
        .filter(
            (bonus) =>
                typeof bonus.equipments === 'object' &&
                checkEquipments(
                    equipments,
                    equipmentStars,
                    equipmentRanks,
                    bonus.equipments,
                ),
        )
        .forEach((bonus) => {
            addResult(bonus.bonus);
        });

    if (typeof stat === 'string') return result[stat] || 0;

    return result;
};

module.exports = calculateBonus;
