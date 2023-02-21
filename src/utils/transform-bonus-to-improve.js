/**
 * 将一组普通强化统一改为按改修星级强化
 * @param {Array<EquipmentBonus>} bonuses
 * @param {Object.<number, EquipmentBonusValues>} improveTable
 */
function transformBonusToImprove(bonuses = [], improveTable = {}) {
    bonuses.forEach((b) => {
        const baseBonus = { ...b.bonus };
        delete b.bonus;

        b.bonusImprove = {
            0: { ...baseBonus },
        };

        for (const [star, stats] of Object.entries(improveTable)) {
            b.bonusImprove[star] = {
                ...baseBonus,
            };
            for (const [stat, value] of Object.entries(stats)) {
                if (!b.bonusImprove[star][stat]) b.bonusImprove[star][stat] = 0;
                b.bonusImprove[star][stat] += value;
            }
        }
    });

    return bonuses;
}

module.exports = transformBonusToImprove;
