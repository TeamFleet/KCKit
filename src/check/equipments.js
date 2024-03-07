// const getEquipment = require('../get/equipment')
const checkEquipment = require('./equipment');

const checkListStatic = ['id', 'name', 'nameof', 'type'];

/**
 * 检查装备列表是否满足给定条件
 *
 * @param {(number[]|Equipment[])} equipments 要判断的装备列表
 * @param {Number[]} [stars=[]] 各装备的改修星级
 * @param {Number[]} [ranks=[]] 各装备的熟练度级别
 * @param {any} [conditions={}] 条件，需满足所有条件
 */
const check = (equipments, stars, ranks, conditions = {}) => {
    if (typeof stars === 'object' && !Array.isArray(stars))
        return check(equipments, [], [], stars);

    if (typeof ranks === 'object' && !Array.isArray(ranks))
        return check(equipments, stars, [], ranks);

    if (!Array.isArray(equipments))
        return check([equipments], stars, ranks, conditions);

    if (!Array.isArray(stars)) stars = [stars];
    if (!Array.isArray(ranks)) ranks = [ranks];

    // 需满足所有条件

    // Array
    if (Array.isArray(conditions)) {
        // 当条件为 Array 时，各个条件互相独立且必须同时满足
        // 存在多个条件相同的可能性，表示该条件的装备存在多个
        // 当满足一个条件后从队列中移除该装备，以确保完全匹配
        const restEquipments = [...equipments];
        const restStars = [...stars];
        const restRanks = [...ranks];
        return conditions.every((condition) =>
            restEquipments.some((equipment, index) => {
                if (
                    checkEquipment(
                        equipment,
                        restStars[index],
                        restRanks[index],
                        condition,
                    )
                ) {
                    restEquipments.splice(index, 1);
                    restStars.splice(index, 1);
                    restRanks.splice(index, 1);
                    return true;
                }
                return false;
            }),
        );
    }

    // 其他情况
    for (const key in conditions) {
        if (typeof conditions[key] === 'undefined') continue;
        if (conditions[key] === false) {
            // 条件：不存在
            if (
                !equipments.every((equipment, index) =>
                    checkEquipment(equipment, stars[index], ranks[index], {
                        [key.replace(/^has/, 'is')]: conditions[key],
                    }),
                )
            )
                return false;
        } else if (conditions[key] === true) {
            // 条件：存在
            if (
                !equipments.some((equipment, index) =>
                    checkEquipment(equipment, stars[index], ranks[index], {
                        [key.replace(/^has/, 'is')]: conditions[key],
                    }),
                )
            )
                return false;
        } else if (key.toLowerCase() === 'hasoneof') {
            if (
                !equipments.some((equipment, index) =>
                    conditions[key].some((thisCondition) =>
                        checkEquipment(
                            equipment,
                            stars[index],
                            ranks[index],
                            thisCondition,
                        ),
                    ),
                )
            )
                return false;
            // } else if (key.toLowerCase() === 'has') {
            //     console.log(conditions[key], equipments);
        } else if (
            key.substr(0, 3) === 'has' &&
            checkListStatic.includes(key.substr(3).toLowerCase())
        ) {
            // 条件：checkListStatic 中的项目
            if (Array.isArray(conditions[key])) {
                if (
                    !conditions[key].every((value) =>
                        equipments.some((equipment, index) =>
                            checkEquipment(
                                equipment,
                                stars[index],
                                ranks[index],
                                {
                                    [key.replace(/^has/, 'is')]: value,
                                },
                            ),
                        ),
                    )
                )
                    return false;
            } else {
                if (
                    !equipments.some((equipment, index) =>
                        checkEquipment(equipment, stars[index], ranks[index], {
                            [key.replace(/^has/, 'is')]: conditions[key],
                        }),
                    )
                )
                    return false;
            }
        } else if (
            key.substr(0, 3) === 'has' &&
            typeof conditions[key] === 'object' &&
            !Array.isArray(conditions[key])
        ) {
            // 条件合集
            const thisCondition = Object.assign({}, conditions[key]);
            const count =
                typeof thisCondition.count === 'undefined'
                    ? 1
                    : thisCondition.count;
            delete thisCondition.count;
            const filtered = equipments.filter((equipment, index) =>
                checkEquipment(equipment, stars[index], ranks[index], {
                    [key.replace(/^has/, 'is')]: thisCondition,
                }),
            );
            // console.log(thisCondition, equipments, filtered.length, count);
            if (filtered.length < count) return false;
            // console.log({ thisCondition, equipments, stars });
        } else if (key.substr(0, 3) === 'has' && !isNaN(conditions[key])) {
            // 条件：有至少 N 个
            let thisCondition = {
                [key.replace(/^has/, 'is')]: true,
            };
            if (/^hasID([_]*)([0-9]+)$/.test(key)) {
                thisCondition = {
                    isID: key.replace(/^hasID([_]*)/, ''),
                };
            }
            const filtered = equipments.filter((equipment, index) =>
                checkEquipment(
                    equipment,
                    stars[index],
                    ranks[index],
                    thisCondition,
                ),
            );
            if (filtered.length < conditions[key]) return false;
        } else if (
            key.substr(0, 3) === 'has' &&
            Array.isArray(conditions[key])
        ) {
            // 条件：有至少 value[0] 个至多 value[1] 个
            const filtered = equipments.filter((equipment, index) =>
                checkEquipment(equipment, stars[index], ranks[index], {
                    [key.replace(/^has/, 'is')]: true,
                }),
            );
            if (
                filtered.length < conditions[key][0] ||
                filtered.length > conditions[key][1]
            )
                return false;
        }
    }

    return true;
};
module.exports = check;
