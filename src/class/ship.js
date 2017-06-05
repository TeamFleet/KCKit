const vars = require('../variables')
const {
    getSpeed,
    getRange
} = require('../helpers')
const getdb = require('../get-db.js')
const ItemBase = require('./base.js')

module.exports = class Ship extends ItemBase {
    constructor(data) {
        super(data);
    }

    /**
     * @param {string} joint - OPTIONAL - 连接符，如果存在后缀名，则在舰名和后缀名之间插入该字符串
     * @param {bollean} joint - OPTIONAL - 如果为 true，则添加默认连接符；false，则不添加连接符
     * @param {null} joint - OPTIONAL - 不添加连接符
     * @param {string} language - OPTIONAL - 语言代码，默认为 KCTip.lang
     * @return {string} 舰名 + 连接符（如果有） + 后缀名（如果有）
     * 快捷方式 - ship._name (默认连接符，默认语言)
     */
    getName(theJoint = vars.joint, theLocale = vars.locale) {
        let suffix = this.getSuffix(theLocale)
        return this.getNameNoSuffix(theLocale) + (suffix
            ? (
                (theJoint === true ? vars.joint : theJoint)
                + suffix
            )
            : ''
        )
    }

    /*	获取舰名，不包括后缀
        变量
            language	[OPTIONAL]
                String		语言代码，默认为 KC.lang
        返回值
            String		舰名，不包括后缀
    */
    getNameNoSuffix(theLocale = vars.locale) {
        return this.name[theLocale] || this.name.ja_jp
    }

    /*	获取后缀名
        变量
            language	[OPTIONAL]
                String		语言代码，默认为 KC.lang
        返回值
            String		后缀名
    */
    getSuffix(theLocale = vars.locale) {
        return this.name.suffix
            ? (
                getdb('ship_namesuffix')[this.name.suffix][theLocale]
                || getdb('ship_namesuffix')[this.name.suffix].ja_jp
                || ''
            )
            : ''
    }

    /*	获取舰种
        变量
            language	[OPTIONAL]
                String		语言代码，默认为 KC.lang
        返回值
            String		舰种
        快捷方式
            ship._type	默认语言
    */
    getType(theLocale = vars.locale) {
        return this.type
            ? (
                getdb('ship_types')[this.type].name[theLocale]
                || getdb('ship_types')[this.type].name.ja_jp
                || ''
            )
            : null
    }
    get _type() {
        return this.getType()
    }

    /*	获取系列数据
        返回值
            Object		系列
    */
    getSeriesData() {
        return this.series
            ? getdb('ship_series')[this.series].ships
            : [{
                'id': this.id
            }]
    }
    get _series() {
        return this.getSeriesData()
    }

    /**
     * 获取图鉴uri/path
     * 
     * @param {number} [picId = 0] - 图鉴Id，默认 0
     * @param {string} [ext]
     * @returns {string} uri/path
     * 
     * @memberOf Ship
     * 
     * 快捷方式
     *      ship._pics	获取全部图鉴，Array
     */
    getPic(picId = 0, ext = vars.extPic) {
        let series = this.getSeriesData()
        const thePicId = parseInt(picId)

        const getUrl = ship => `${typeof ship === 'number' ? ship : ship.id}/${picId}${ext}`

        switch (thePicId) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 12:
            case 13:
            case 14:
                return getUrl(this.id)
            default: {
                let currentShip = this
                while (currentShip.illust_same_as_prev && currentShip.remodel && currentShip.remodel.prev)
                    currentShip = currentShip.remodel.prev

                return getUrl(currentShip)
            }
            // if (series[i].illust_delete) {
            //     return getUrl(series[i - 1].id)
            // } else {
            //     return getUrl(this.id)
            // }
            //break;
        }

        // for (let i = 0; i < series.length; i++) {
        //     if (series[i].id == this.id) {
        //         switch (picId) {
        //             case 0:
        //             case 1:
        //             case 2:
        //             case 3:
        //             case 12:
        //             case 13:
        //             case 14:
        //                 return getUrl(this.id, picId)
        //             //break;
        //             default:
        //                 if (series[i].illust_delete) {
        //                     return getUrl(series[i - 1].id, picId)
        //                 } else {
        //                     return getUrl(this.id, picId)
        //                 }
        //             //break;
        //         }
        //         //break;
        //     }
        // }
    }
    get _pics() {
        let arr = []
        for (let i = 0; i < 15; i++) {
            arr.push(this.getPic(i))
        }
        return arr
    }

    getSpeed() {
        return getSpeed(this.stat.speed)
    }
    get _speed() {
        return this.getSpeed()
    }

    getSpeedRule() {
        if (this.speed_rule) return this.speed_rule
        // if (this.name.ja_jp === '天津風') return 'high-2'
        return this.class
            ? getdb('ship_classes')[this.class].speed_rule
            : 'low-2'
    }
    get _speedRule() {
        return this.getSpeedRule()
    }

    getRange() {
        return getRange(this.stat.range)
    }
    get _range() {
        return this.getRange()
    }

    getEquipmentTypes() {
        return getdb('ship_types')[this.type].equipable.concat((this.additional_item_types || [])).sort(function (a, b) {
            return a - b
        })
    }

    getAttribute(attr, lvl = 1) {
        if (lvl > vars.maxShipLv) lvl = vars.maxShipLv

        const getStatLvl = (lvl = 1, base, max, defaultValue = false) => {
            max = max || base
            if (base < 0 || max < 0)
                return undefined
            if (max === 0)
                return defaultValue
            if (base == max)
                return max
            return Math.floor(base + (max - base) * lvl / 99)
        }

        let value

        switch (attr) {
            case 'hp':
                value = this.stat.hp
                if (lvl > 99) {
                    if (this.stat.hp >= 90) value = this.stat.hp + 9
                    else if (this.stat.hp >= 70) value = this.stat.hp + 8
                    else if (this.stat.hp >= 50) value = this.stat.hp + 7
                    else if (this.stat.hp >= 40) value = this.stat.hp + 6
                    else if (this.stat.hp >= 30) value = this.stat.hp + 5
                    else value = this.stat.hp + 4
                    if (value > this.stat.hp_max) value = this.stat.hp_max
                }
                return value

            case 'speed':
                return getSpeed(this.stat.speed)

            case 'range':
                return getRange(this.stat.range)

            case 'luck':
                if (lvl > 99)
                    return this.stat.luck + 3
                return this.stat.luck

            case 'fuel':
            case 'ammo':
                if (lvl > 99)
                    return Math.floor(this.consum[attr] * 0.85)
                return this.consum[attr]

            case 'aa':
            case 'armor':
            case 'fire':
                return this.stat[attr + '_max'] || this.stat[attr]

            case 'torpedo':
                return this.stat[attr + '_max'] || this.stat[attr] || false

            case 'night': {
                if (this.isType('carrier') && !this.additional_night_shelling)
                    return false
                return (this.stat.fire_max + this.stat.torpedo_max) || 0
            }

            case 'asw':
                return getStatLvl(
                    lvl,
                    this.stat[attr],
                    this.stat[attr + '_max'],
                    /^(5|8|9|12|24|30)$/.test(this.type) ? 0 : false
                )

            default:
                return getStatLvl(lvl, this.stat[attr], this.stat[attr + '_max'])
        }
    }

    /*	获取关系
        变量
            relation	[OPTIONAL]
                String		关系名
        返回值
            Object			如果没有给出 relation，返回关系对象
            String||Number	如果给出 relation，返回值，默认读取 rels 下的属性，如果不存在，读取上一个改造版本的对应关系
    */
    getRel(relation) {
        if (relation) {
            if (!this.rels[relation] && this.remodel && this.remodel.prev) {
                let prev = getdb('ships')[this.remodel.prev]
                while (prev) {
                    if (prev.rels && prev.rels[relation])
                        return prev.rels[relation]
                    if (!prev.remodel || !prev.remodel.prev)
                        prev = null
                    else
                        prev = getdb('ships')[prev.remodel.prev]
                }
            }
            return this.rels[relation]
        } else {
            return this.rels
        }
    }

    /*	获取声优
        变量
            language	[OPTIONAL]
                String		语言代码，默认为 KC.lang
        返回值
            String		声优名
        快捷方式
            ship._cv	默认语言
    */
    getCV(theLocale = vars.locale) {
        let entity = this.getRel('cv')
        if (entity)
            return getdb('entities')[entity].getName(theLocale)
        return
    }
    get _cv() {
        return this.getCV()
    }

    /*	获取画师
        变量
            language	[OPTIONAL]
                String		语言代码，默认为 KC.lang
        返回值
            String		画师名
        快捷方式
            ship._illustrator	默认语言
    */
    getIllustrator(theLocale = vars.locale) {
        let entity = this.getRel('illustrator')
        if (entity)
            return getdb('entities')[entity].getName(theLocale)
        return
    }
    get _illustrator() {
        return this.getIllustrator()
    }

    /* 获取该舰娘可能的最低等级
     */
    getMinLv() {
        const series = this._series
        let lv
        series.some((o, index) => {
            if (this.id == o.id) {
                if (index) {
                    lv = series[index - 1].next_lvl
                } else {
                    lv = 1
                }
            }
            return lv
        })
        return lv
    }
    get _minLv() {
        return this.getMinLv()
    }

    /**
     * 判断舰种大类
     * 
     * @param {any} majorType - 舰种大类，目前支持：carrier/CV, lightcruiser/CL, submarine/SS
     * 
     * @return {boolean}
     */
    isType(majorType) {
        const shipTypes = require('../types/ships')
        switch (majorType.toLowerCase()) {
            case 'carrier':
            case 'carriers':
            case 'cv':
                return (shipTypes.Carriers.indexOf(this.type) > -1)

            case 'lightcruiser':
            case 'lightcruisers':
            case 'cl':
                return (shipTypes.LightCruisers.indexOf(this.type) > -1)

            case 'submarine':
            case 'submarines':
            case 'ss':
                return (shipTypes.Submarines.indexOf(this.type) > -1)

            default:
                return false
        }
    }
}