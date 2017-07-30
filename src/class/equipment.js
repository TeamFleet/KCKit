const vars = require('../variables')
const getdb = require('../get/db')
const ItemBase = require('./base.js')

module.exports = class Consumable extends ItemBase {
    constructor(data) {
        super(data);
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
}