const getShip = require('../../get/ship');
const getShipSlots = require('../../get/ship-slots');
const equipmentTypes = require('../../types/equipments');
const convertSlotsArr = require('../../.helpers/convert-slots-array-for-calculator');

// https://wikiwiki.jp/kancolle/%E6%88%A6%E9%97%98%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6#nightAS

// console.log('_')

const calculateNightPowerCVAssult = ({
    ship: _ship,
    equipments = [],
    equipmentStars = [],
    // equipmentRanks = [],
    bonus = {},
    count = {}
}) => {
    /**
基本攻撃力 = 素火力 + 夜間飛行機の火力 + 夜間飛行機の雷装 + 夜間飛行機の爆装 + 1スロットごとの夜間飛行機搭載補正の合計 + 夜間触接定数(+5)
※夜間飛行機……夜間戦闘機(夜戦)、夜間攻撃機(夜攻)、Swordfish系(SF系)、零戦62型(爆戦／岩井隊)(岩井爆戦)、彗星一二型(三一号光電管爆弾搭載機)(光電管彗星)のこと。
※夜間飛行機の搭載数が0になった場合火力、雷装加算は無効となる。

1スロットごとの夜間飛行機搭載補正 = A × 搭載数 + B × (火力 + 雷装 + 爆装 + 対潜) × √(搭載数) + √(★)
※夜戦・夜攻： A = 3.0、B = 0.45
※SF系・岩井爆戦・光電管彗星： A = 0、B = 0.3
     */

    const ship = getShip(_ship);
    const slots = convertSlotsArr(getShipSlots(ship));

    /*
    const starBonus = slots.reduce((total, slot, index) => {
        if (!equipments[index]) return total
        if (equipmentStars[index]) {
            return total + KC.formula.getStarBonus(
                equipments[index],
                'night',
                equipmentStars[index]
            )
            // starBonus += Math.sqrt(equipmentStars[index]) * formula.getStarMultiplier(
            //     equipments[index].type,
            //     'night'
            // )
        }
    }, 0)
    */

    /** @type {Number} 基础伤害 */
    let basePower = ship.stat.fire_max;
    // + (bonus.fire || 0) // ゆめみ: 夜袭没有蓝字加成

    /** @type {Number} 参与夜袭的特殊飞机总装备数 */
    let countOtherAttackers = 0;

    /** @type {Number[]} 可能的 CI 种类的伤害系数 */
    const multipliersCI = [];

    // if (ship.id === 599) {
    //     console.log('');
    //     console.log('----------');
    //     console.log({
    //         ship,
    //         statFire: ship.stat.fire_max,
    //         bonus,
    //         slots,
    //         equipments,
    //         equipmentStars,
    //         count,
    //         basePower
    //     });
    // }

    // 计算基础伤害
    slots.forEach((carry, index) => {
        if (!equipments[index]) return;

        const equipment = equipments[index];
        // if (ship.id === 599) console.log(equipment._name);
        /** @type {Boolean} 是否为 _夜战_ 或 _夜攻_ */
        let isNightSpecific = false;
        /** @type {Boolean} 是否参与夜袭 */
        let participateAssult = false;

        // 检测装备类型
        if (
            Array.isArray(equipment.type_ingame) &&
            (equipment.type_ingame[3] === 45 || // 夜战
                equipment.type_ingame[3] === 46) // 夜攻
        ) {
            isNightSpecific = true;
            participateAssult = true;
        } else if (equipmentTypes.TorpedoBombers.includes(equipment.type)) {
            if (equipment.hasName('Swordfish', 'ja_jp')) {
                participateAssult = true;
                countOtherAttackers++;
            }
        } else if (equipmentTypes.DiveBombers.includes(equipment.type)) {
            if (equipment.hasName('岩井', 'ja_jp')) {
                participateAssult = true;
                countOtherAttackers++;
            }
            if (equipment.hasName('三一号光電管爆弾', 'ja_jp')) {
                participateAssult = true;
                countOtherAttackers++;
            }
        }

        if (participateAssult) {
            const multiplierA = isNightSpecific ? 3 : 0;
            const multiplierB = isNightSpecific ? 0.45 : 0.3;
            basePower +=
                equipment.getStat('fire', ship) +
                equipment.getStat('torpedo', ship) +
                equipment.getStat('bomb', ship) + // 2020/10/30 - 公式更新，加入爆装
                multiplierA * carry +
                multiplierB *
                    Math.sqrt(carry) *
                    (equipment.getStat('fire', ship) +
                        equipment.getStat('torpedo', ship) +
                        equipment.getStat('bomb', ship) +
                        equipment.getStat('asw', ship)) +
                (equipmentStars[index]
                    ? KC.formula.getStarBonus(
                          equipments[index],
                          'night',
                          equipmentStars[index]
                      )
                    : 0);
        }

        // console.log('｜', {
        //     index,
        //     carry,
        //     equipment,
        //     isNightSpecific, participateAssult, countOtherAttackers,
        //     '火力': equipment.getStat('fire', ship),
        //     '雷装': equipment.getStat('torpedo', ship),
        //     '爆装': equipment.getStat('bomb', ship),
        //     '対潜': equipment.getStat('asw', ship),
        //     basePower
        // })
    });

    // 计算 CI
    if (count.carrierFighterNight >= 2 && count.torpedoBomberNight >= 1)
        multipliersCI.push(1.25);
    if (count.carrierFighterNight >= 1 && count.torpedoBomberNight >= 1)
        multipliersCI.push(1.2);
    if (
        count.carrierFighterNight >= 3 ||
        (count.carrierFighterNight >= 2 && countOtherAttackers >= 1) ||
        (count.carrierFighterNight >= 1 &&
            count.torpedoBomberNight >= 1 &&
            countOtherAttackers >= 1) ||
        (count.carrierFighterNight >= 1 && count.torpedoBomberNight >= 2) ||
        (count.carrierFighterNight >= 1 && countOtherAttackers >= 2)
    )
        multipliersCI.push(1.18);

    /** @type {Object} 结果对象 */
    const result = {
        type: '航空',
        hit: 1,
        damage: Math.floor(basePower),
        isMax: true
    };

    if (multipliersCI.length) {
        result.cis = multipliersCI.map(multiplier => [
            Math.floor(result.damage * multiplier),
            1
        ]);
    }

    // console.log({ result })

    return result;
};

module.exports = calculateNightPowerCVAssult;
