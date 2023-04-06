const vars = require('../variables');
const getdb = require('../get/db');
const ItemBase = require('./base.js');
const equipmentTypes = require('../types/equipments');
const checkEquipment = require('../check/equipment');
const bonuses = require('../data/bonus');
const getShip = require('../get/ship');
const getShipType = require('../get/ship-type');
const getShipClass = require('../get/ship-class');
// const dataTP = require('../data/tp')

module.exports = class Equipment extends ItemBase {
    constructor(data) {
        super(data);

        Object.defineProperty(this, 'rankupgradable', {
            value: this.isRankUpgradable(),
        });
    }

    getName(small_brackets, theLocale = vars.locale) {
        const result = ItemBase.prototype.getName.call(this, theLocale),
            small_brackets_tag =
                small_brackets && !small_brackets === true
                    ? small_brackets
                    : 'small';
        return small_brackets
            ? result.replace(
                  /（([^（^）]+)）/g,
                  '<' +
                      small_brackets_tag +
                      '>($1)</' +
                      small_brackets_tag +
                      '>'
              )
            : result;
    }

    getType(theLocale = vars.locale) {
        return this.type
            ? getdb('equipment_types')[this.type].name[theLocale]
            : null;
    }
    get _type() {
        return this.getType();
    }

    getIcon() {
        // if (equipmentTypes.LandBasedAttacker === this.type && Array.isArray(this.type_ingame) && this.type_ingame[3] === 44) {

        // }
        if (Array.isArray(this.type_ingame) && this.type_ingame.length > 3)
            return this.type_ingame[3];
        return getdb('equipment_types')[this.type].icon;
    }
    get _icon() {
        return this.getIcon();
    }

    getCaliber() {
        const name = this.getName(false, 'ja_jp'),
            caliber = parseFloat(name);

        return caliber;
    }

    getPower() {
        return this.stat[
            getdb('equipment_types')[this.type].main_attribute || 'fire'
        ];
    }

    /**
     * 判断是否可装备入补强增设栏位
     *
     * @returns {boolean}
     */
    isEquipableExSlot() {
        if (this.equipable_exslot) return this.equipable_exslot || false;
        return this.type
            ? getdb('equipment_types')[this.type].equipable_exslot || false
            : false;
    }

    /**
     * 判断是否可提升熟练度
     *
     * @returns {boolean}
     */
    isRankUpgradable() {
        return equipmentTypes.Aircrafts.includes(this.type);
    }

    /**
     * 判断是否属于目标类型
     *
     * @param {String} type - 装备类型，目前支持：所有在 equipmentTypes 中存在的项，如：MainGuns, Aircraft, Interceptor。大小写敏感
     * @return {Boolean}
     */
    isType(type) {
        return checkEquipment(this, {
            ['is' + type]: true,
        });
        // switch (type.toLowerCase()) {
        //     case 'aircraft':
        //     case 'aircrafts':
        //         return equipmentTypes.Aircrafts.includes(this.type)

        //     case 'interceptor':
        //     case 'interceptors': {
        //         if (equipmentTypes.Interceptors.includes(this.type)) {
        //             if (Array.isArray(this.type_ingame) && this.type_ingame[2] === 47)
        //                 return false
        //             return true
        //         }
        //         return false
        //     }

        //     default:
        //         return false
        // }
    }

    /**
     * 获取TP
     *
     * @return {Number}
     */
    getTP(/*type*/) {
        // return dataTP.equipmentType[this.type] || 0
        if (this.tp) return this.tp;
        return this.type ? getdb('equipment_types')[this.type].tp || 0 : 0;
    }

    /**
     * 获取属性
     *
     * @param {String} statType - 属性类型
     * @param {Number|Object} [ship] - 舰娘ID或舰娘数据，如果给出，会查询额外收益
     * @returns {boolean}
     */
    getStat(statType, ship) {
        statType = statType.toLowerCase();
        const base = this.stat[statType];
        if (!ship || base === undefined || !Array.isArray(this.stat_bonus))
            return base;
        // if (ship && Array.isArray(this.stat_bonus)) {
        //     if (typeof ship !== 'object')
        //         ship = getdb('ships')[ship]
        //     const shipId = ship.id

        //     let bonus

        //     this.stat_bonus.forEach(o => {
        //         if (Array.isArray(o.ships))
        //             o.ships.some(ship => {
        //                 if (ship == shipId) {
        //                     for (const stat in o.bonus) {
        //                         if (!bonus) bonus = {}
        //                         bonus[stat] = Math.max(o.bonus[stat], bonus[stat] || 0)
        //                     }
        //                     // console.log(
        //                     //     ship, shipId,
        //                     //     o.bonus,
        //                     //     bonus
        //                     // )
        //                     return true
        //                 }
        //                 return false
        //             })
        //         if (Array.isArray(o.ship_classes))
        //             o.ship_classes.some(classId => {
        //                 if (classId == ship.class) {
        //                     for (const stat in o.bonus) {
        //                         if (!bonus) bonus = {}
        //                         bonus[stat] = Math.max(o.bonus[stat], bonus[stat] || 0)
        //                     }
        //                     // console.log(
        //                     //     o.bonus,
        //                     //     bonus
        //                     // )
        //                     return true
        //                 }
        //                 return false
        //             })
        //         // return typeof bonus !== 'undefined'
        //     })
        //     if (bonus) {
        //         // if (shipId === 543)
        //         //     console.log(ship._name, bonus)
        //         return base + (bonus[statType] || 0)
        //     }
        // }
        return base;
    }

    /**
     * 获取该装备所有可用的属性加成和装备组合
     * @returns {Array} Bonuses
     */
    getBonuses() {
        if (!Array.isArray(this.__bonuses))
            this.__bonuses = bonuses.filter((bonus) => {
                // eslint-disable-next-line eqeqeq
                if (bonus.equipment == this.id) return true;
                if (
                    typeof bonus.equipments !== 'undefined' &&
                    typeof bonus.ship === 'object' &&
                    !bonus.passEquippableCheck
                ) {
                    if (
                        Array.isArray(bonus.ship.isID) &&
                        !bonus.ship.isID.every((shipId) =>
                            getShip(shipId).canEquipThis(this, true)
                        )
                    )
                        return false;
                    if (
                        typeof bonus.ship.isID === 'number' &&
                        !getShip(bonus.ship.isID).canEquipThis(this, true)
                    )
                        return false;
                    if (
                        Array.isArray(bonus.ship.isType) &&
                        !bonus.ship.isType.every((typeId) =>
                            getShipType(typeId).equipable.includes(this.type)
                        )
                    )
                        return false;
                    if (
                        typeof bonus.ship.isType === 'number' &&
                        !getShipType(bonus.ship.isType).equipable.includes(
                            this.type
                        )
                    )
                        return false;
                    // if (typeof bonus.equipments === 'object')
                    //     console.log(bonus.equipments);
                    if (
                        Array.isArray(bonus.ship.isClass) &&
                        !bonus.ship.isClass.every((classId) => {
                            const shipClass = getShipClass(classId) || {};
                            return [
                                ...(shipClass.additional_item_types || []),
                                ...getShipType(shipClass.ship_type_id)
                                    .equipable,
                            ].includes(this.type);
                        })
                    )
                        return false;
                    if (
                        typeof bonus.ship.isClass === 'number' &&
                        !getShipType(
                            getShipClass(bonus.ship.isClass).ship_type_id
                        ).equipable.includes(this.type)
                    )
                        return false;
                }
                if (Array.isArray(bonus.equipments)) {
                    return bonus.equipments.some((condition) =>
                        checkEquipment(this, 10, 7, condition)
                    );
                }
                if (typeof bonus.equipments === 'object') {
                    return (
                        Object.keys(bonus.equipments)
                            .filter((key) => /^has/.test(key))
                            // .map((key) => {
                            //     console.log(key);
                            //     return key;
                            // })
                            .some((key) =>
                                checkEquipment(this, {
                                    [key.replace(/^has/, 'is')]:
                                        bonus.equipments[key],
                                })
                            )
                    );
                }
                return false;
            });
        return this.__bonuses;
    }
};
