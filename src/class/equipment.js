const {
    locale,
    db
} = require('../variables')
const ItemBase = require('./base.js')

module.exports = class Consumable extends ItemBase {
    constructor(data) {
        super(data);
    }

    getName(small_brackets, locale = locale) {
        var result = ItemBase.prototype.getName.call(this, locale)
            , small_brackets_tag = small_brackets && !small_brackets === true ? small_brackets : 'small'
        return small_brackets
            ? result.replace(/（([^（^）]+)）/g, '<' + small_brackets_tag + '>($1)</' + small_brackets_tag + '>')
            : result
    }

    getType(locale = locale) {
        return this.type
            ? db.item_types[this.type].name[locale]
            : null
    }

    getIconId() {
        return db.item_types[this.type].icon
    }
    get _icon() {
        return 'assets/images/itemicon/' + this.getIconId() + '.png'
    }

    getCaliber() {
        let name = this.getName(false, 'ja_jp')
            , caliber = parseFloat(name)

        return caliber
    }

    getPower() {
        return this.stat[
            db.item_types[this.type].main_attribute || 'fire'
        ]
        /*
        switch( this.type ){
            // Guns
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
        }
        */
    }
}