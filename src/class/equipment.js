const vars = require('../variables')
const getdb = require('../get/db')
const ItemBase = require('./base.js')
const equipmentTypes = require('../types/equipments')

module.exports = class Equipment extends ItemBase {
    constructor(data) {
        super(data)

        Object.defineProperty(this, 'rankupgradable', {
            value: this.isRankUpgradable()
        })
    }

    getName(small_brackets, theLocale = vars.locale) {
        var result = ItemBase.prototype.getName.call(this, theLocale)
            , small_brackets_tag = small_brackets && !small_brackets === true ? small_brackets : 'small'
        return small_brackets
            ? result.replace(/（([^（^）]+)）/g, '<' + small_brackets_tag + '>($1)</' + small_brackets_tag + '>')
            : result
    }

    getType(theLocale = vars.locale) {
        return this.type
            ? getdb('equipment_types')[this.type].name[theLocale]
            : null
    }
    get _type() {
        return this.getType()
    }

    getIcon() {
        return getdb('equipment_types')[this.type].icon
    }
    get _icon() {
        return this.getIcon()
    }

    getCaliber() {
        let name = this.getName(false, 'ja_jp')
            , caliber = parseFloat(name)

        return caliber
    }

    getPower() {
        return this.stat[
            getdb('equipment_types')[this.type].main_attribute || 'fire'
        ]
    }

    /**
     * 判断是否可装备入补强增设栏位
     * 
     * @returns {boolean}
     */
    isEquipableExSlot() {
        if (this.equipable_exslot) return this.equipable_exslot || false
        return this.type
            ? getdb('equipment_types')[this.type].equipable_exslot || false
            : false
    }

    /**
     * 判断是否可提升熟练度
     * 
     * @returns {boolean}
     */
    isRankUpgradable() {
        return (
            equipmentTypes.Aircrafts.includes(this.type)

            && this.type !== equipmentTypes.Autogyro
            && this.type !== equipmentTypes.AntiSubPatrol
        )
    }
}