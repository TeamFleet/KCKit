'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__equipmentTypes', function () {
    /*
     * HA       High Angle
     * AAFD     Anti-Air Fire Director
     */

    var types = {

        // Type ID
        SmallCaliber: 1, // 小口径主炮
        SmallCaliberHigh: 2, // 小口径高角主炮
        SmallCaliberHA: 2, // 小口径高角主炮
        SmallCaliberAA: 3, // 小口径高角主炮（强化）
        SmallCaliberAAFD: 3, // 小口径高角主炮（强化）
        MediumCaliber: 4, // 中口径主炮
        LargeCaliber: 5, // 大口径主炮
        SuperCaliber: 6, // 超大口径主炮
        SecondaryGun: 7, // 副炮
        SecondaryGunHigh: 8, // 高角副炮
        SecondaryGunHA: 8, // 高角副炮
        SecondaryGunAA: 9, // 高角副炮（强化）
        SecondaryGunAAFD: 9, // 高角副炮（强化）
        Type3Shell: 10, // 对空强化弹
        APShell: 11, // 穿甲弹
        Torpedo: 12, // 鱼雷
        SubmarineTorpedo: 13, // 潜艇鱼雷
        MidgetSubmarine: 14, // 微型潜艇
        ReconSeaplane: 15, // 水上侦察机
        ReconSeaplaneNight: 16, // 夜侦
        SeaplaneBomber: 17, // 水上轰炸机
        CarrierFighter: 18, // 舰战 / 舰载战斗机
        TorpedoBomber: 19, // 舰攻 / 舰载鱼雷轰炸机
        DiveBomber: 20, // 舰爆 / 舰载俯冲轰炸机
        CarrierRecon: 21, // 舰侦 / 舰载侦察机
        Autogyro: 22, // 旋翼机
        AntiSubPatrol: 23, // 对潜哨戒机
        SmallRadar: 24, // 小型雷达
        LargeRadar: 25, // 大型雷达
        DepthCharge: 26, // 爆雷
        Sonar: 27, // 声纳
        LargeSonar: 28, // 大型声纳
        AAGun: 29, // 对空机枪
        AAGunConcentrated: 30, // 对空机枪（强化）
        AAGunCD: 30, // 对空机枪（强化）
        CDMG: 30, // 对空机枪（强化）
        AAFireDirector: 31, // 高射装置
        AAFD: 31, // 高射装置
        AviationPersonnel: 36, // 航空作战整备员
        SurfaceShipPersonnel: 37, // 水上舰要员
        LandingCraft: 38, // 登陆艇
        Searchlight: 39, // 探照灯
        SupplyContainer: 41, // 簡易輸送部材
        CommandFacility: 45, // 舰队司令部设施
        LargeFlyingBoat: 45, // 大型水上飞艇
        SearchlightLarge: 46, // 大型探照灯
        SuparRadar: 47, // 超大型雷达
        CombatRation: 48, // 戦闘糧食
        CarrierRecon2: 50, // 舰侦II / 舰载侦察机II
        SeaplaneFighter: 51, // 水战 / 水上战斗机
        AmphibiousCraft: 52, // 特型内火艇
        LandBasedAttacker: 53, // 陆攻 / 陆上攻击机
        Interceptor: 54, // 局战 / 局地战斗机
        JetBomberFighter: 55, // 喷气式战斗轰炸机
        JetBomberFighter2: 56, // 喷气式战斗轰炸机
        TransportMaterial: 57, // 运输设备
        SubmarineEquipment: 58, // 潜艇装备
        LandBasedFighter: 59, // 陆战 / 陆上战斗机
        CarrierFighterNight: 60, // 夜战 / 舰载战斗机（夜间）
        TorpedoBomberNight: 61, // 夜攻 / 舰载鱼雷机（夜间）
        LandBasedAntiSubPatrol: 62 // 陆上哨戒机


        // Groups
    };types.MainGuns = [types.SmallCaliber, types.SmallCaliberHigh, types.SmallCaliberAA, types.MediumCaliber, types.LargeCaliber, types.SuperCaliber];
    types.MainCalibers = types.MainGuns;

    types.SmallCalibers = [types.SmallCaliber, types.SmallCaliberHigh, types.SmallCaliberAA];

    types.MediumCalibers = [types.MediumCaliber];

    types.LargeCalibers = [types.LargeCaliber, types.SuperCaliber];

    types.SecondaryGuns = [types.SecondaryGun, types.SecondaryGunHigh, types.SecondaryGunAA];

    types.HAMounts = [types.SmallCaliberHigh, types.SmallCaliberAA, types.SecondaryGunHigh, types.SecondaryGunAA];

    types.HAMountsAAFD = [types.SmallCaliberAA, types.SecondaryGunAA];

    types.APShells = [types.APShell];

    types.Torpedos = [types.Torpedo, types.SubmarineTorpedo];

    types.Seaplanes = [types.ReconSeaplane, types.ReconSeaplaneNight, types.SeaplaneBomber, types.SeaplaneFighter];

    types.Fighters = [types.SeaplaneBomber, types.CarrierFighter, types.CarrierFighterNight, types.TorpedoBomber, types.TorpedoBomberNight, types.DiveBomber, types.SeaplaneFighter, types.LandBasedAttacker, types.Interceptor,
    // types.CarrierRecon
    types.JetBomberFighter, types.JetBomberFighter2, types.LandBasedFighter];

    types.Interceptors = [types.Interceptor, types.LandBasedFighter];

    types.Recons = [types.ReconSeaplane, types.ReconSeaplaneNight, types.CarrierRecon, types.CarrierRecon2, types.LargeFlyingBoat];

    types.SeaplaneRecons = [types.ReconSeaplane, types.ReconSeaplaneNight];

    types.SeaplaneReconsAll = [types.ReconSeaplane, types.ReconSeaplaneNight, types.LargeFlyingBoat];

    types.SeaplaneBombers = [types.SeaplaneBomber, types.SeaplaneFighter];

    types.SeaplaneFighters = [types.SeaplaneFighter];

    types.CarrierFighters = [types.CarrierFighter, types.CarrierFighterNight];

    types.CarrierRecons = [types.CarrierRecon, types.CarrierRecon2];

    types.CarrierBased = [types.CarrierFighter, types.CarrierFighterNight, types.TorpedoBomber, types.TorpedoBomberNight, types.DiveBomber, types.CarrierRecon, types.CarrierRecon2, types.JetBomberFighter, types.JetBomberFighter2];

    types.LandBased = [types.LandBasedAttacker, types.Interceptor, types.JetBomberFighter, types.JetBomberFighter2, types.LandBasedFighter, types.LandBasedAntiSubPatrol];

    types.TorpedoBombers = [types.TorpedoBomber, types.TorpedoBomberNight];

    types.DiveBombers = [types.DiveBomber];

    types.JetBomberFighters = [types.JetBomberFighter, types.JetBomberFighter2];

    types.Jets = [types.JetBomberFighter, types.JetBomberFighter2];

    types.Autogyros = [types.Autogyro];

    types.AntiSubPatrols = [types.AntiSubPatrol, types.LandBasedAntiSubPatrol];

    types.Aircrafts = [];
    [].concat(types.Seaplanes).concat(types.Recons).concat(types.CarrierBased).concat(types.Autogyros).concat(types.AntiSubPatrols).concat(types.LandBased).forEach(function (v) {
        if (types.Aircrafts.indexOf(v) < 0) types.Aircrafts.push(v);
    });

    types.Radars = [types.SmallRadar, types.LargeRadar, types.SuparRadar];

    types.SmallRadars = [types.SmallRadar];

    types.LargeRadars = [types.LargeRadar, types.SuparRadar];

    types.AntiSubmarines = [types.DepthCharge, types.Sonar, types.LargeSonar];

    types.DepthCharges = [types.DepthCharge];

    types.Sonars = [types.Sonar, types.LargeSonar];

    types.AAGuns = [types.AAGun, types.AAGunConcentrated];

    types.AAFireDirectors = [types.AAFireDirector];
    types.AAFDs = types.AAFireDirectors;

    types.Searchlights = [types.Searchlight, types.SearchlightLarge];

    types.AviationPersonnels = [types.AviationPersonnel];

    types.SurfaceShipPersonnels = [types.SurfaceShipPersonnel];

    types.LandingCrafts = [types.LandingCraft, types.AmphibiousCraft];

    types.AmphibiousCrafts = [types.AmphibiousCraft];

    types.SupplyContainers = [types.SupplyContainer];

    types.CombatRations = [types.CombatRation];

    return types;
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__getEquipment', function () {
    return function (equipment) {
        if (equipment && (typeof equipment === 'undefined' ? 'undefined' : _typeof(equipment)) === 'object' && equipment.id) {
            return equipment;
        } else if (!isNaN(equipment)) {
            return _g.data.items[parseInt(equipment)];
        } else {
            return undefined;
        }
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__getShip', function () {
    return function (ship) {
        if (ship && (typeof ship === 'undefined' ? 'undefined' : _typeof(ship)) === 'object' && ship.id) {
            return ship;
        } else if (!isNaN(ship)) {
            return _g.data.ships[parseInt(ship)];
        } else {
            return undefined;
        }
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__getShipAndEquipments', function () {
    return function (ship) {
        var equipments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var equipmentStars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var equipmentRanks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        var getShip = window.__getShip;
        var getEquipment = window.__getEquipment;
        var maxSlotsPlusExtra = 5;

        if (typeof equipments === 'number' || typeof equipments === 'string') equipments = [equipments];
        if (typeof equipmentStars === 'number' || typeof equipmentStars === 'string') equipmentStars = [equipmentStars];
        if (typeof equipmentRanks === 'number' || typeof equipmentRanks === 'string') equipmentRanks = [equipmentRanks];

        ship = getShip(ship);

        equipments = [].concat(_toConsumableArray(Array(Math.max(maxSlotsPlusExtra, ship.slot.length + 1)))).map(function (_, index) {
            if (!ship) return undefined;
            if (ship.slot.length <= index && index < 4) return undefined;
            return getEquipment(equipments[index]) || undefined;
            // if (!equipment) return undefined
            // if (equipmentStars[index]) equipment.star = equipmentStars[index]
            // if (equipmentRanks[index]) equipment.rank = equipmentRanks[index]
            // return equipment
        });

        return {
            ship: ship,
            equipments: equipments,
            equipmentStars: equipments.map(function (_, index) {
                return _typeof(equipments[index]) === 'object' ? Math.min(10, parseInt(equipmentStars[index]) || 0) : undefined;
            }),
            equipmentRanks: equipments.map(function (_, index) {
                return _typeof(equipments[index]) === 'object' ? Math.min(7, parseInt(equipmentRanks[index]) || 0) : undefined;
            })
        };
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__checkEquipment', function () {
    /**
     * 检查装备是否满足给定条件
     * 
     * @param {(number|Equipment)} equipment 要判断的装备
     * @param {any} [conditions={}] 条件，需满足所有条件
     * @param {(number|number[])} [conditions.isID] 判断装备ID是否精确匹配或匹配其中一项
     * @param {(number|number[])} [conditions.isNotID] 判断装备ID是否不匹配
     * @param {(string|string[])} [conditions.isName] 判断装备名是否精确匹配或匹配其中一项
     * @param {(string|string[])} [conditions.isNotName] 判断装备名是否不匹配
     * @param {(string|string[])} [conditions.isNameOf] 判断装备名片段是否匹配或匹配其中一项
     * @param {(string|string[])} [conditions.isNotNameOf] 判断装备名片段是否不匹配
     * @param {(number|number[])} [conditions.isType] 判断装备是否属于给定舰种或匹配其中一项
     * @param {(number|number[])} [conditions.isNotType] 判断装备是否不属于给定舰种
     */
    return function (equipment) {
        var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var getEquipment = window.__getEquipment;
        var equipmentTypes = window.__equipmentTypes;
        var ArrayOrItem = window.__ArrayOrItem;
        var ArrayOrItemAll = window.__ArrayOrItemAll;

        equipment = getEquipment(equipment);
        if (typeof equipment === 'undefined') return !1;

        var checkCondition = {
            // 是特定ID
            isid: function isid(equipment, id) {
                return ArrayOrItem(id, function (id) {
                    if (isNaN(id)) return !1;
                    return parseInt(id) === equipment.id;
                });
            },
            // 不是特定ID
            isnotid: function isnotid(equipment, id) {
                return ArrayOrItemAll(id, function (id) {
                    if (isNaN(id)) return !1;
                    return parseInt(id) !== equipment.id;
                });
            },

            // 完全匹配特定名称
            isname: function isname(equipment, name) {
                return ArrayOrItem(name, function (name) {
                    return equipment.isName(name)
                    // for (let key in equipment.name) {
                    //     if (key === 'suffix') continue
                    //     if (equipment.name[key] === name) return true
                    // }
                    // return false
                    ;
                });
            },
            // 不是特定名称
            isnotname: function isnotname(equipment, name) {
                return ArrayOrItemAll(name, function (name) {
                    return !equipment.isName(name)
                    // for (let key in equipment.name) {
                    //     if (key === 'suffix') continue
                    //     if (equipment.name[key] === name) return false
                    // }
                    // return true
                    ;
                });
            },

            // 名称里包含特定字段
            isnameof: function isnameof(equipment, name) {
                return ArrayOrItem(name, function (name) {
                    return equipment.hasName(name)
                    // for (let key in equipment.name) {
                    //     if (key === 'suffix') continue
                    //     if (equipment.name[key].includes(name)) return true
                    // }
                    // return false
                    ;
                });
            },
            // 名称里不包含特定字段
            isnotnameof: function isnotnameof(equipment, name) {
                return ArrayOrItemAll(name, function (name) {
                    return !equipment.hasName(name)
                    // for (let key in equipment.name) {
                    //     if (key === 'suffix') continue
                    //     if (equipment.name[key].includes(name)) return false
                    // }
                    // return true
                    ;
                });
            },

            // 是特定类型
            // 如果判断条件为Object，也会进入该条件
            istype: function istype(equipment, type, conditions) {
                return ArrayOrItem(type, function (type) {
                    if (isNaN(type)) return !1;
                    if (parseInt(type) !== equipment.type) return !1;
                    // 条件是Object
                    if ((typeof conditions === 'undefined' ? 'undefined' : _typeof(conditions)) === 'object') {
                        // 包含属性
                        if (conditions.hasStat) {
                            var pass = !0;
                            for (var stat in conditions.hasStat) {
                                if (Array.isArray(conditions.hasStat[stat])) {
                                    if (equipment.stat[stat] < conditions.hasStat[stat][0]) pass = !1;
                                    if (equipment.stat[stat] > conditions.hasStat[stat][1]) pass = !1;
                                } else if (equipment.stat[stat] < conditions.hasStat[stat]) {
                                    pass = !1;
                                }
                            }
                            if (!pass) return !1;
                        }
                    }
                    return !0;
                });
            },
            // 不是特定类型
            isnottype: function isnottype(equipment, type) {
                return ArrayOrItemAll(type, function (type) {
                    if (isNaN(type)) return !1;
                    return parseInt(type) !== equipment.type;
                });
            },
            // 是对空电探/雷达
            isaaradar: function isaaradar(equipment, isTrue) {
                // console.log(`[${equipment.id}]`, equipment._name)
                return (this.istype(equipment, equipmentTypes.Radars) && !isNaN(equipment.stat.aa) && equipment.stat.aa >= 2) === isTrue;
            },
            // 是对水面电探/雷达
            issurfaceradar: function issurfaceradar(equipment, isTrue) {
                // console.log(`[${equipment.id}]`, equipment._name)
                return (this.istype(equipment, equipmentTypes.Radars) && (isNaN(equipment.stat.aa) || equipment.stat.aa < 2)) === isTrue;
            }

            // 需满足所有条件
        };for (var key in conditions) {
            if (checkCondition[key.toLowerCase()]) {
                // checkCondition 中存在该条件，直接运行
                if (!checkCondition[key.toLowerCase()](equipment, conditions[key])) return !1;
            } else if (key.substr(0, 2) === 'is') {
                // 以 is 为开头，通常为检查装备类型
                var typeName = key.substr(2);
                if (typeName === 'HAMountAAFD') {
                    typeName = 'HAMountsAAFD';
                } else if (typeName + 's' in equipmentTypes) {
                    typeName = typeName + 's';
                } else if (typeName in equipmentTypes) {
                    typeName = typeName;
                } else {
                    return !1;
                }
                // console.log(typeName)
                // 条件是否为Object
                var isConditionObj = _typeof(conditions[key]) === 'object' && !Array.isArray(conditions[key]);
                var objConditions = conditions[key] && isConditionObj ? conditions[key] : undefined;
                if (!checkCondition[conditions[key] === !0 || isConditionObj ? 'istype' : 'isnottype'](equipment, equipmentTypes[typeName], objConditions)) return !1;
            }
        }

        return !0;
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__checkEquipments', function () {
    var checkListStatic = ['id', 'name', 'nameof', 'type'];

    /**
     * 检查装备列表是否满足给定条件
     * 
     * @param {(number[]|Equipment[])} equipments 要判断的装备列表
     * @param {any} [conditions={}] 条件，需满足所有条件
     */
    var check = function check(equipments) {
        var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var getEquipment = window.__getEquipment;
        var checkEquipment = window.__checkEquipment;

        if (!Array.isArray(equipments)) return check([equipments], conditions);

        // 需满足所有条件

        var _loop = function _loop(key) {
            if (conditions[key] === !1) {
                // 条件：不存在
                if (!equipments.every(function (equipment) {
                    return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), conditions[key]));
                })) return {
                        v: !1
                    };
            } else if (conditions[key] === !0) {
                // 条件：存在
                if (!equipments.some(function (equipment) {
                    return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), conditions[key]));
                })) return {
                        v: !1
                    };
            } else if (key.substr(0, 3) === 'has' && checkListStatic.includes(key.substr(3).toLowerCase())) {
                // 条件：checkListStatic 中的项目
                if (Array.isArray(conditions[key])) {
                    if (!conditions[key].every(function (value) {
                        return equipments.some(function (equipment) {
                            return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), value));
                        });
                    })) return {
                            v: !1
                        };
                } else {
                    if (!equipments.some(function (equipment) {
                        return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), conditions[key]));
                    })) return {
                            v: !1
                        };
                }
            } else if (key.substr(0, 3) === 'has' && _typeof(conditions[key]) === 'object' && !Array.isArray(conditions[key])) {
                // 条件合集
                var thisCondition = Object.assign({}, conditions[key]);
                var count = typeof thisCondition.count === 'undefined' ? 1 : thisCondition.count;
                delete thisCondition.count;
                var filtered = equipments.filter(function (equipment) {
                    return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), thisCondition));
                });
                // console.log(thisCondition, equipments, filtered.length, count)
                if (filtered.length < count) return {
                        v: !1
                    };
            } else if (key.substr(0, 3) === 'has' && !isNaN(conditions[key])) {
                // 条件：有至少 N 个
                var _filtered = equipments.filter(function (equipment) {
                    return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), !0));
                });
                if (_filtered.length < conditions[key]) return {
                        v: !1
                    };
            } else if (key.substr(0, 3) === 'has' && Array.isArray(conditions[key])) {
                // 条件：有至少 value[0] 个至多 value[1] 个
                var _filtered2 = equipments.filter(function (equipment) {
                    return checkEquipment(equipment, _defineProperty({}, key.replace(/^has/, 'is'), !0));
                });
                if (_filtered2.length < conditions[key][0] || _filtered2.length > conditions[key][1]) return {
                        v: !1
                    };
            }
        };

        for (var key in conditions) {
            var _ret = _loop(key);

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        return !0;
    };

    return check;
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__checkShip', function () {
    /**
     * 检查舰娘是否满足给定条件
     * 
     * @param {(number|Ship)} ship 要判断的舰娘
     * @param {any} [conditions={}] 条件，需满足所有条件
     * @param {(number|number[])} [conditions.isID] 判断舰娘ID是否精确匹配或匹配其中一项
     * @param {(number|number[])} [conditions.isNotID] 判断舰娘ID是否不匹配
     * @param {(string|string[])} [conditions.isName] 判断舰娘名是否精确匹配或匹配其中一项
     * @param {(string|string[])} [conditions.isNotName] 判断舰娘名是否不匹配
     * @param {(number|number[])} [conditions.isType] 判断舰娘是否属于给定舰种或匹配其中一项
     * @param {(number|number[])} [conditions.isNotType] 判断舰娘是否不属于给定舰种
     * @param {(number|number[])} [conditions.isClass] 判断舰娘是否属于给定舰级或匹配其中一项
     * @param {(number|number[])} [conditions.isNotClass] 判断舰娘是否不属于给定舰级
     * @param {boolean} [conditions.isBattleship]
     * @param {boolean} [conditions.isBB]
     * @param {boolean} [conditions.isCarrier]
     * @param {boolean} [conditions.isCV]
     * @param {boolean} [conditions.isSubmarine]
     * @param {boolean} [conditions.isSS]
     * @param {number|[min,max]} [conditions.hasSlot] 判断舰娘的可配置栏位精确有 number 个，或 min ~ max 个
     * @param {number} [conditions.hasSlotMin] 判断舰娘的可配置栏位至少有 number 个
     * @param {number} [conditions.hasSlotMax] 判断舰娘的可配置栏位最多有 number 个
     */
    return function (ship) {
        var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var getShip = window.__getShip;
        var ArrayOrItem = window.__ArrayOrItem;
        var ArrayOrItemAll = window.__ArrayOrItemAll;

        var checkCondition = {
            // isID
            isid: function isid(ship, id) {
                return ArrayOrItem(id, function (id) {
                    if (isNaN(id)) return !1;
                    return parseInt(id) === ship.id;
                });
            },
            isnotid: function isnotid(ship, id) {
                return ArrayOrItemAll(id, function (id) {
                    if (isNaN(id)) return !1;
                    return parseInt(id) !== ship.id;
                });
            },

            // isName
            isname: function isname(ship, name) {
                return ArrayOrItem(name, function (name) {
                    return ship.isName(name)
                    // for (let key in ship.name) {
                    //     if (key === 'suffix') continue
                    //     if (ship.name[key].toLowerCase() === name) return true
                    // }
                    // return false
                    ;
                });
            },
            isnotname: function isnotname(ship, name) {
                return ArrayOrItemAll(name, function (name) {
                    return !ship.isName(name)
                    // for (let key in ship.name) {
                    //     if (key === 'suffix') continue
                    //     if (ship.name[key].toLowerCase() === name) return false
                    // }
                    // return true
                    ;
                });
            },

            // isType
            istype: function istype(ship, type) {
                return ArrayOrItem(type, function (type) {
                    if (isNaN(type)) return !1;
                    return parseInt(type) === ship.type;
                });
            },
            isnottype: function isnottype(ship, type) {
                return ArrayOrItemAll(type, function (type) {
                    if (isNaN(type)) return !1;
                    return parseInt(type) !== ship.type;
                });
            },
            isbattleship: function isbattleship(ship, isTrue) {
                return this.istype(ship, [8, 6, 20, 7, 18]) === isTrue;
            },
            isbb: function isbb(ship, isTrue) {
                return this.isbattleship(ship, isTrue);
            },
            iscarrier: function iscarrier(ship, isTrue) {
                return this.istype(ship, [11, 10, 9, 30, 32]) === isTrue;
            },
            iscv: function iscv(ship, isTrue) {
                return this.iscarrier(ship, isTrue);
            },
            issubmarine: function issubmarine(ship, isTrue) {
                return this.istype(ship, [14, 13]) === isTrue;
            },
            isss: function isss(ship, isTrue) {
                return this.issubmarine(ship, isTrue);
            },

            // isClass
            isclass: function isclass(ship, Class) {
                return ArrayOrItem(Class, function (Class) {
                    if (isNaN(Class)) return !1;
                    return parseInt(Class) === ship.class;
                });
            },
            isnotclass: function isnotclass(ship, Class) {
                return ArrayOrItemAll(Class, function (Class) {
                    if (isNaN(Class)) return !1;
                    return parseInt(Class) !== ship.class;
                });
            },

            // hasSlot
            hasslot: function hasslot(ship, num) {
                if (!Array.isArray(ship.slot)) return !1;
                if (Array.isArray(num)) {
                    if (isNaN(num[0]) && !isNaN(num[1])) return ship.slot.length <= parseInt(num[1]);else if (!isNaN(num[0]) && isNaN(num[1])) return ship.slot.length >= parseInt(num[0]);else if (!isNaN(num[0]) && !isNaN(num[1])) return ship.slot.length >= parseInt(num[0]) && ship.slot.length <= parseInt(num[1]);else return !1;
                } else return !isNaN(num) && parseInt(num) === ship.slot.length;
            },
            hasslotmin: function hasslotmin(ship, min) {
                return this.hasslot(ship, [min, undefined]);
            },
            hasslotmax: function hasslotmax(ship, max) {
                return this.hasslot(ship, [undefined, max]);
            },

            // minLevel
            minlevel: function minlevel(ship, level) {
                if (typeof ship.level !== 'undefined') return ship.level >= level;
                return !0;
            }
        };

        ship = getShip(ship);
        if (typeof ship === 'undefined') return !1;

        // 需满足所有条件
        for (var key in conditions) {
            if (!checkCondition[key.toLowerCase()](ship, conditions[key])) return !1;
        }

        return !0;
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__calculateBonus', function () {
    /**
     * Calculate stat bonus for specified ship with equipment(s)
     */
    var calculateBonus = function calculateBonus(ship) {
        var equipments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var equipmentStars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var equipmentRanks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var stat = arguments[4];

        if (typeof equipmentStars === 'string') return calculateBonus(ship, equipments, undefined, undefined, equipmentStars);

        var getShipAndEquipments = window.__getShipAndEquipments;
        var checkShip = window.__checkShip;
        var checkEquipments = window.__checkEquipments;
        var bonus = window.__bonus;

        var _getShipAndEquipments = getShipAndEquipments(ship, equipments, equipmentStars, equipmentRanks);

        ship = _getShipAndEquipments.ship;
        equipments = _getShipAndEquipments.equipments;
        equipmentStars = _getShipAndEquipments.equipmentStars;
        equipmentRanks = _getShipAndEquipments.equipmentRanks;


        var result = {};
        var conditions = bonus.filter(function (bonus) {
            return checkShip(ship, bonus.ship);
        });
        var addResult = function addResult() {
            var bonus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            for (var _stat in bonus) {
                if (typeof result[_stat] === 'undefined') result[_stat] = bonus[_stat];else result[_stat] += bonus[_stat];
            }
        };

        // condition: single equipment
        conditions.filter(function (bonus) {
            return typeof bonus.equipment === 'number' && equipments.some(function (equipment) {
                return equipment && equipment.id && equipment.id == bonus.equipment;
            });
        }).forEach(function (bonus) {
            var thisBonus = {};

            if (_typeof(bonus.bonusImprove) === 'object') {
                var starsDesc = Object.keys(bonus.bonusImprove).sort(function (a, b) {
                    return parseInt(b) - parseInt(a);
                });
                equipments.forEach(function (equipment, index) {
                    if (equipment && equipment.id && equipment.id == bonus.equipment) {
                        starsDesc.some(function (star) {
                            if (equipmentStars[index] >= star) {
                                for (var _stat2 in bonus.bonusImprove[star]) {
                                    if (typeof thisBonus[_stat2] === 'undefined') thisBonus[_stat2] = bonus.bonusImprove[star][_stat2];else thisBonus[_stat2] += bonus.bonusImprove[star][_stat2];
                                }
                                return !0;
                            }
                            return !1;
                        });
                    }
                });
            } else {
                var thisCount = 0;

                // count for equipment
                equipments.forEach(function (equipment) {
                    if (equipment && equipment.id && equipment.id == bonus.equipment) {
                        thisCount++;
                    }
                });

                if (_typeof(bonus.bonusCount) === 'object') {
                    Object.keys(bonus.bonusCount).sort(function (a, b) {
                        return parseInt(b) - parseInt(a);
                    }).some(function (count) {
                        if (thisCount >= count) {
                            thisBonus = _extends({}, bonus.bonusCount[count]);
                            return !0;
                        }
                        return !1;
                    });
                } else if (_typeof(bonus.bonus) === 'object') {
                    thisBonus = _extends({}, bonus.bonus);
                    // add for count
                    for (var _stat3 in thisBonus) {
                        thisBonus[_stat3] = thisBonus[_stat3] * thisCount;
                    }
                }
            }

            addResult(thisBonus);
        });

        // condition: equipment-set
        conditions.filter(function (bonus) {
            return _typeof(bonus.equipments) === 'object' && checkEquipments(equipments, bonus.equipments);
        }).forEach(function (bonus) {
            addResult(bonus.bonus);
        });

        if (typeof stat === 'string') return result[stat] || 0;

        return result;
    };

    return calculateBonus;
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__bonus', function () {
    // 装备额外属性

    var BB_KongouClass2ndRemodel = [149, // 金剛改二
    150, // 比叡改二
    151, // 榛名改二
    152];
    var BB_IseClassRemodel = [82, // 伊勢改
    88];

    var CL_KumaClass2ndRemodel = [547, // 多摩改二
    146];
    var CL_KumaClassRemodel = [216, // 多摩改
    217].concat(CL_KumaClass2ndRemodel);

    var DD_FubukiClass2ndRemodel = [426, // 吹雪改二
    420];
    var DD_AyanamiClass2ndRemodel = [195, // 綾波改二
    407];
    var DD_AkatsukiClass2ndRemodel = [437, // 暁改二
    147];
    var DD_HatsuharuClass2ndRemodel = [326, // 初春改二
    419];
    var DD_ShiratsuyuClass2ndRemodel = [145, // 時雨改二
    498, // 村雨改二
    144, // 夕立改二
    469];
    var DD_AsashioClass2ndRemodel = [463, // 朝潮改二
    468, // 朝潮改二丁
    199, // 大潮改二
    489, // 満潮改二
    490, // 荒潮改二
    198, // 霰改二
    464, // 霞改二
    470];
    var DD_KagerouClass2ndRemodel = [566, // 陽炎改二
    567];
    var DD_YuugumoClass2ndRemodel = [543];
    var DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel = DD_YuugumoClass2ndRemodel.concat([229]);

    /**
     * @member {Number} [equipment] 单一装备
     * @member {Object} [equipments] 条件：装备组合
     * @member {Object} ship 条件：匹配的舰娘
     * @member {Object} [bonus] 收益
     * @member {Object} [bonusCount] 仅当为单一装备时可用：不同装备数量的收益
     * @member {Object} [bonusImprove] 仅当为单一装备时可用：不同改修星级的收益
     */
    return [

    /**
     * 小口径主炮
     */
    // 12.7cm連装砲C型改二
    // @ 陽炎型 改二
    {
        equipment: 266,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 1
            },
            2: {
                fire: 3
            }
        }
    },
    // 12.7cm連装砲D型改二
    // @ 陽炎型
    {
        equipment: 267,
        ship: {
            isClass: [21],
            isNotID: DD_KagerouClass2ndRemodel
        },
        bonus: {
            fire: 1,
            evasion: 1
        }
    },
    // 12.7cm連装砲D型改二
    // @ 夕雲型 / 島風型
    {
        equipment: 267,
        ship: {
            isClass: [22, 24],
            isNotID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 2,
            evasion: 1
        }
    },
    // 12.7cm連装砲D型改二
    // @ 陽炎型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                fire: 2,
                evasion: 1
            },
            2: {
                fire: 3,
                evasion: 2
            },
            3: {
                fire: 4,
                evasion: 3
            }
        }
    },
    // 12.7cm連装砲D型改二
    // @ 夕雲型 改二
    {
        equipment: 267,
        ship: {
            isID: DD_YuugumoClass2ndRemodel
        },
        bonus: {
            fire: 3,
            evasion: 1
        }
    },

    /**
     * 大口径主炮
     */
    // 35.6cm連装砲(ダズル迷彩)
    // @ 金剛改二
    {
        equipment: 104,
        ship: {
            isID: [149]
        },
        bonus: {
            fire: 2
        }
    },
    // 35.6cm連装砲(ダズル迷彩)
    // @ 榛名改二
    {
        equipment: 104,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2
        }
    },
    // 35.6cm連装砲(ダズル迷彩)
    // @ 比叡改二 / 霧島改二
    {
        equipment: 104,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 金剛改二
    {
        equipment: 289,
        ship: {
            isID: [149]
        },
        bonus: {
            fire: 2
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 榛名改二
    {
        equipment: 289,
        ship: {
            isID: [151]
        },
        bonus: {
            fire: 2,
            aa: 1,
            evasion: 2
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様)
    // @ 比叡改二 / 霧島改二
    {
        equipment: 289,
        ship: {
            isID: [150, 152]
        },
        bonus: {
            fire: 1
        }
    },
    // 41cm三連装砲改二
    // @ 伊勢型 改
    {
        equipment: 290,
        ship: {
            isID: BB_IseClassRemodel
        },
        bonus: {
            fire: 2,
            aa: 2,
            evasion: 1
        }
    },

    /**
     * 鱼雷发射管
     */
    // 61cm三連装(酸素)魚雷後期型
    // @ 特型駆逐艦 改二 / 初春型 改二
    {
        equipment: 285,
        ship: {
            isID: [].concat(DD_FubukiClass2ndRemodel, DD_AyanamiClass2ndRemodel, DD_AkatsukiClass2ndRemodel, DD_HatsuharuClass2ndRemodel)
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1
            }
        }
    },
    // 61cm四連装(酸素)魚雷
    // @ 陽炎型 改二
    {
        equipment: 15,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusCount: {
            1: {
                torpedo: 2
            },
            2: {
                torpedo: 4
            }
        }
    },
    // 61cm四連装(酸素)魚雷後期型
    // @ 陽炎型 改二
    {
        equipment: 286,
        ship: {
            isID: DD_KagerouClass2ndRemodel
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1
            },
            5: {
                torpedo: 3,
                evasion: 1
            },
            10: {
                fire: 1,
                torpedo: 3,
                evasion: 1
            }
        }
    },
    // 61cm四連装(酸素)魚雷後期型
    // @ 白露型 改二 / 朝潮型 改二 / 夕雲型 改二
    {
        equipment: 286,
        ship: {
            isID: [].concat(DD_ShiratsuyuClass2ndRemodel, DD_AsashioClass2ndRemodel, DD_YuugumoClass2ndRemodel)
        },
        bonusImprove: {
            0: {
                torpedo: 2,
                evasion: 1
            },
            10: {
                fire: 1,
                torpedo: 2,
                evasion: 1
            }
        }
    },

    /**
     * 装甲板
     */
    // 北方迷彩(＋北方装備)
    // @ 球磨型 改
    {
        equipment: 268,
        ship: {
            isID: CL_KumaClassRemodel
        },
        bonusCount: {
            1: {
                armor: 2,
                evasion: 7
            }
        }
    },

    /**
     * 组合
     */
    // 12.7cm連装砲D型改二 + 水上電探
    // @ 夕雲型 改二 / 島風改
    {
        equipments: {
            hasId: [267],
            hasSurfaceRadar: !0
        },
        ship: {
            isId: DD_YuugumoClass2ndRemodel_PLUS_ShimakazeRemodel
        },
        bonus: {
            fire: 1,
            torpedo: 3,
            evasion: 2
        }
    },
    // 35.6cm三連装砲改(ダズル迷彩仕様) + 水上電探
    // @ 金剛型 改二
    {
        equipments: {
            hasId: [289],
            hasSurfaceRadar: !0
        },
        ship: {
            isId: BB_KongouClass2ndRemodel
        },
        bonus: {
            fire: 2
        }
    },
    // 41cm三連装砲改二 + 対空電探
    // @ 伊勢型 改
    {
        equipments: {
            hasId: [290],
            hasAARadar: !0
        },
        ship: {
            isId: BB_IseClassRemodel
        },
        bonus: {
            aa: 2,
            evasion: 3
        }
    }];
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__ArrayOrItem', function () {
    return function (arg, func) {
        if (Array.isArray(arg)) return arg.some(func);
        return func(arg);
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('__ArrayOrItemAll', function () {
    return function (arg, func) {
        if (Array.isArray(arg)) return arg.every(func);
        return func(arg);
    };
});(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})('KC', function () {

    "use strict";

    var KC = {
        lang: 'zh_cn',
        joint: '・',
        maxShipLv: 165,
        maxHqLv: 120,
        db: {},
        path: {
            db: '/kcdb/',
            pics: {
                ships: '/kcpic/ships/'
            }
        },
        statSpeed: {
            5: '低速',
            10: '高速',
            15: '高速+',
            20: '最速'
        },
        getStatSpeed: function getStatSpeed(speed) {
            return this.statSpeed[parseInt(speed)];
        },
        statRange: {
            1: '短',
            2: '中',
            3: '长',
            4: '超长'
        },
        getStatRange: function getStatRange(range) {
            return this.statRange[parseInt(range)];
        },
        textRank: {
            1: '|',
            2: '||',
            3: '|||',
            4: '\\',
            5: '\\\\',
            6: '\\\\\\',
            7: '》'
        }
    };

    /**
     * KC Classes
     */
    // Base class

    var ItemBase = function () {
        function ItemBase(data) {
            _classCallCheck(this, ItemBase);

            for (var i in data) {
                this[i] = data[i];
            }
        }

        _createClass(ItemBase, [{
            key: 'getName',
            value: function getName(language) {
                language = language || KC.lang;
                return this.name ? this.name[language] || this.name : null;
            }
        }, {
            key: 'isName',


            /**
             * 检查名称是否为（完全匹配）给定字符串
             * 
             * @param {String} nameToCheck - 要检查的名称
             * @param {Boolean|String} [locale] - 要检查的语言。如果为 true 检查当前语言，如果为 falsy 检查所有语言
             * @returns {Boolean} - 是否匹配
             */
            value: function isName(nameToCheck, locale) {
                if (locale === !0) locale = KC.lang;
                if (locale) {
                    if (this.name[locale] === nameToCheck) return !0;
                    return !1;
                }

                for (var key in this.name) {
                    if (key === 'suffix') continue;
                    if (this.name[key] === nameToCheck) return !0;
                }
                return !1;
            }

            /**
             * 检查名称是否包含给定字符串
             * 
             * @param {String} nameToCheck - 要检查的名称
             * @param {Boolean|String} [locale] - 要检查的语言。如果为 true 检查当前语言，如果为 falsy 检查所有语言
             * @returns {Boolean} - 是否匹配
             */

        }, {
            key: 'hasName',
            value: function hasName(nameToCheck, locale) {
                if (locale === !0) locale = KC.lang;
                if (locale) {
                    if (this.name[locale].includes(nameToCheck)) return !0;
                    return !1;
                }

                for (var key in this.name) {
                    if (key === 'suffix') continue;
                    if (this.name[key].includes(nameToCheck)) return !0;
                }
                return !1;
            }
        }, {
            key: 'isNameOf',
            value: function isNameOf() {
                return this.hasName.apply(this, arguments);
            }
        }, {
            key: '_name',
            get: function get() {
                return this.getName();
            }
        }]);

        return ItemBase;
    }();
    // Class for Entity (Person/Group, such as CVs, illustrators)


    var Entity = function (_ItemBase) {
        _inherits(Entity, _ItemBase);

        function Entity(data) {
            _classCallCheck(this, Entity);

            return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, data));
        }

        return Entity;
    }(ItemBase);

    var Equipment = function (_ItemBase2) {
        _inherits(Equipment, _ItemBase2);

        function Equipment(data) {
            _classCallCheck(this, Equipment);

            var _this2 = _possibleConstructorReturn(this, (Equipment.__proto__ || Object.getPrototypeOf(Equipment)).call(this, data));

            Object.defineProperty(_this2, 'rankupgradable', {
                value: _this2.isRankUpgradable()
            });
            return _this2;
        }

        _createClass(Equipment, [{
            key: 'getName',
            value: function getName(small_brackets, language) {
                language = language || KC.lang;
                var result = ItemBase.prototype.getName.call(this, language),
                    small_brackets_tag = small_brackets && !small_brackets === !0 ? small_brackets : 'small';
                return small_brackets ? result.replace(/（([^（^）]+)）/g, '<' + small_brackets_tag + '>($1)</' + small_brackets_tag + '>') : result;
            }
        }, {
            key: 'getType',
            value: function getType(language) {
                language = language || KC.lang;
                return this.type ? KC.db.item_types[this.type].name[language] : null;
            }
        }, {
            key: 'getIconId',
            value: function getIconId() {
                if (Array.isArray(this.type_ingame) && this.type_ingame.length > 3) return this.type_ingame[3];
                return KC.db.item_types[this.type].icon;
            }
        }, {
            key: 'getCaliber',
            value: function getCaliber() {
                var name = this.getName(!1, 'ja_jp'),
                    caliber = parseFloat(name);

                return caliber;
            }
        }, {
            key: 'getPower',
            value: function getPower() {
                return this.stat[KC.db.item_types[this.type].main_attribute || 'fire'];
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

            /**
             * 判断是否可装备入补强增设栏位
             * 
             * @returns {boolean}
             */

        }, {
            key: 'isEquipableExSlot',
            value: function isEquipableExSlot() {
                if (this.equipable_exslot) return this.equipable_exslot || !1;
                return this.type ? KC.db.item_types[this.type].equipable_exslot || !1 : !1;
            }

            /**
             * 判断是否可提升熟练度
             * 
             * @returns {boolean}
             */

        }, {
            key: 'isRankUpgradable',
            value: function isRankUpgradable() {
                return formula.equipmentType.Aircrafts.includes(this.type) && this.type !== formula.equipmentType.Autogyro && this.type !== formula.equipmentType.AntiSubPatrol;
            }

            /**
             * 获取属性
             * 
             * @param {String} statType - 属性类型
            * @param {Number|Object} [ship] - 舰娘ID或舰娘数据，如果给出，会查询额外收益
             * @returns {boolean}
             */

        }, {
            key: 'getStat',
            value: function getStat(statType, ship) {
                statType = statType.toLowerCase();
                var base = this.stat[statType];
                if (!ship || base === undefined || !Array.isArray(this.stat_bonus)) return base;
                if (ship && Array.isArray(this.stat_bonus)) {
                    if ((typeof ship === 'undefined' ? 'undefined' : _typeof(ship)) !== 'object') ship = KC.db.ships[ship];
                    var shipId = ship.id;

                    var bonus = void 0;

                    this.stat_bonus.forEach(function (o) {
                        if (Array.isArray(o.ships)) o.ships.some(function (ship) {
                            if (ship == shipId) {
                                for (var stat in o.bonus) {
                                    if (!bonus) bonus = {};
                                    bonus[stat] = Math.max(o.bonus[stat], bonus[stat] || 0);
                                }
                                return !0;
                            }
                            return !1;
                        });
                        if (Array.isArray(o.ship_classes)) o.ship_classes.some(function (classId) {
                            if (classId == ship.class) {
                                for (var stat in o.bonus) {
                                    if (!bonus) bonus = {};
                                    bonus[stat] = Math.max(o.bonus[stat], bonus[stat] || 0);
                                }
                                return !0;
                            }
                            return !1;
                        });
                        // return typeof bonus !== 'undefined'
                    });
                    if (bonus) {
                        return base + (bonus[statType] || 0);
                    }
                }
                return base;
            }
        }, {
            key: '_icon',
            get: function get() {
                return 'assets/images/itemicon/' + this.getIconId() + '.png';
            }
        }]);

        return Equipment;
    }(ItemBase);

    var Ship = function (_ItemBase3) {
        _inherits(Ship, _ItemBase3);

        function Ship(data) {
            _classCallCheck(this, Ship);

            return _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this, data));
        }
        /**
         * @param {string} joint - OPTIONAL - 连接符，如果存在后缀名，则在舰名和后缀名之间插入该字符串
         * @param {bollean} joint - OPTIONAL - 如果为 true，则添加默认连接符；false，则不添加连接符
         * @param {null} joint - OPTIONAL - 不添加连接符
         * @param {string} language - OPTIONAL - 语言代码，默认为 KCTip.lang
         * @return {string} 舰名 + 连接符（如果有） + 后缀名（如果有）
         * 快捷方式 - ship._name (默认连接符，默认语言)
         */


        _createClass(Ship, [{
            key: 'getName',
            value: function getName(joint, language) {
                joint = joint || '';
                language = language || KC.lang;
                var suffix = this.getSuffix(language);
                return (this.name[language] || this.name.ja_jp) + (suffix ? (joint === !0 ? KC.joint : joint) + suffix : '');
            }
            /*	获取舰名，不包括后缀
                变量
                    language	[OPTIONAL]
                        String		语言代码，默认为 KC.lang
                返回值
                    String		舰名，不包括后缀
            */

        }, {
            key: 'getNameNoSuffix',
            value: function getNameNoSuffix(language) {
                language = language || KC.lang;
                return this.name[language] || this.name.ja_jp;
            }
            /*	获取后缀名
                变量
                    language	[OPTIONAL]
                        String		语言代码，默认为 KC.lang
                返回值
                    String		后缀名
            */

        }, {
            key: 'getSuffix',
            value: function getSuffix(language) {
                language = language || KC.lang;
                return this.name.suffix ? KC.db.ship_namesuffix[this.name.suffix][language] || KC.db.ship_namesuffix[this.name.suffix].ja_jp || '' : '';
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

        }, {
            key: 'getType',
            value: function getType(language) {
                language = language || KC.lang;
                return this.type ? KC.db.ship_types[this.type].name[language] || KC.db.ship_types[this.type].name.ja_jp || '' : null;
            }
        }, {
            key: 'getSeriesData',

            /*	获取系列数据
                返回值
                    Object		系列
            */
            value: function getSeriesData() {
                return this.series ? KC.db.ship_series[this.series].ships : [{
                    'id': this.id
                }];
            }
        }, {
            key: 'getPic',

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
            value: function getPic(picId, ext) {
                var series = this.getSeriesData();
                picId = parseInt(picId || 0);

                var getURI = function getURI(i, p) {
                    if (typeof node != 'undefined' && node && node.path && KC.path.pics.ships) return node.path.join(KC.path.pics.ships, i + '/' + p + '.' + (ext ? ext : 'webp'));
                    if (KC.path.pics.ships) return KC.path.pics.ships + i + '/' + p + '.' + (ext ? ext : 'png');
                    return '/' + i + '/' + p + '.' + (ext ? ext : 'png');
                };

                for (var i = 0; i < series.length; i++) {
                    if (series[i].id == this.id) {
                        switch (picId) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 12:
                            case 13:
                            case 14:
                                return getURI(this.id, picId);
                            //break;
                            default:
                                if (series[i].illust_delete) {
                                    return getURI(series[i - 1].id, picId);
                                } else {
                                    return getURI(this.id, picId);
                                }
                            //break;
                        }
                        //break;
                    }
                }
            }
        }, {
            key: 'getSpeed',
            value: function getSpeed() /*language*/{
                // language = language || KC.lang
                return KC.statSpeed[parseInt(this.stat.speed)];
            }
        }, {
            key: 'getSpeedRule',
            value: function getSpeedRule() {
                if (this.speed_rule) return this.speed_rule;
                // if (this.name.ja_jp === '天津風') return 'high-2'
                return this.class ? KC.db.ship_classes[this.class].speed_rule : null;
            }
        }, {
            key: 'getRange',
            value: function getRange() /*language*/{
                // language = language || KC.lang
                return KC.statRange[parseInt(this.stat.range)];
            }
        }, {
            key: 'getEquipmentTypes',
            value: function getEquipmentTypes() {
                var disabled = this.additional_disable_item_types || [];
                return KC.db.ship_types[this.type].equipable.concat(this.additional_item_types || []).filter(function (type) {
                    return disabled.indexOf(type) < 0;
                }).sort(function (a, b) {
                    return a - b;
                });
            }
        }, {
            key: 'getAttribute',
            value: function getAttribute(attr, lvl) {
                lvl = lvl || 1;
                if (lvl > Ship.lvlMax) lvl = Ship.lvlMax;

                var getStatOfLvl = function getStatOfLvl(lvl, base, max) {
                    lvl = lvl || 1;
                    base = parseFloat(base);
                    max = parseFloat(max) || base;
                    if (base < 0 || max < 0) return -1;
                    if (base == max) return max;
                    return Math.floor(base + (max - base) * lvl / 99);
                };

                var value = void 0;

                switch (attr) {
                    case 'hp':
                        value = this.stat.hp;
                        if (lvl > 99) {
                            if (this.stat.hp >= 90) value = this.stat.hp + 9;else if (this.stat.hp >= 70) value = this.stat.hp + 8;else if (this.stat.hp >= 50) value = this.stat.hp + 7;else if (this.stat.hp >= 40) value = this.stat.hp + 6;else if (this.stat.hp >= 30) value = this.stat.hp + 5;else value = this.stat.hp + 4;
                            if (value > this.stat.hp_max) value = this.stat.hp_max;
                        }
                        return value;
                    //break;
                    case 'speed':
                        return KC.getStatSpeed(this.stat.speed);
                    //break;
                    case 'range':
                        return KC.getStatRange(this.stat.range);
                    //break;
                    case 'luck':
                        if (lvl > 99) return this.stat.luck + 3;
                        return this.stat.luck;
                    //break;
                    case 'fuel':
                    case 'ammo':
                        if (lvl > 99) return Math.floor(this.consum[attr] * 0.85);
                        return this.consum[attr];
                    //break;
                    case 'aa':
                    case 'armor':
                    case 'fire':
                    case 'torpedo':
                        return this.stat[attr + '_max'] || this.stat[attr];
                    //break;
                    default:
                        return getStatOfLvl(lvl, this.stat[attr], this.stat[attr + '_max']);
                    //break;
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

        }, {
            key: 'getRel',
            value: function getRel(relation) {
                if (relation) {
                    if (!this.rels[relation] && this.remodel && this.remodel.prev) {
                        var prev = KC.db.ships[this.remodel.prev];
                        while (prev) {
                            if (prev.rels && prev.rels[relation]) return prev.rels[relation];
                            if (!prev.remodel || !prev.remodel.prev) prev = null;else prev = KC.db.ships[prev.remodel.prev];
                        }
                    }
                    return this.rels[relation];
                } else {
                    return this.rels;
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

        }, {
            key: 'getCV',
            value: function getCV(language) {
                var entity = this.getRel('cv');
                if (entity) return KC.db.entities[entity].getName(language || KC.lang);
                return;
            }
        }, {
            key: 'getIllustrator',

            /*	获取画师
                变量
                    language	[OPTIONAL]
                        String		语言代码，默认为 KC.lang
                返回值
                    String		画师名
                快捷方式
                    ship._illustrator	默认语言
            */
            value: function getIllustrator(language) {
                var entity = this.getRel('illustrator');
                if (entity) return KC.db.entities[entity].getName(language || KC.lang);
                return;
            }
        }, {
            key: 'getMinLv',


            /* 获取该舰娘可能的最低等级
             */
            value: function getMinLv() {
                var _this4 = this;

                var series = this._series;
                var lv = void 0;
                series.some(function (o, index) {
                    if (_this4.id == o.id) {
                        if (index) {
                            lv = series[index - 1].next_lvl;
                        } else {
                            lv = 1;
                        }
                    }
                    return lv;
                });
                return lv;
            }
        }, {
            key: 'getNavy',


            /**
             * 获取所属海军简称
             * 
             * @readonly
             * @returns {String}
             */
            value: function getNavy() {
                if (this.navy) return this.navy;
                return this.class ? KC.db.ship_classes[this.class].navy || 'ijn' : 'ijn';
            }
        }, {
            key: 'getCapability',


            /**
             * 获取额外能力
             * 
             * @param {String} [type] - 要获取的能力
             * @returns {Object|...} - 如果提供了 type，返回该能力。如果没有，返回 Object
             */
            value: function getCapability(type) {
                if (!type) return this.capabilities || {};
                if (!this.capabilities) return undefined;
                return this.capabilities[type];
            }

            /**
             * 获取额外可提升的值
             * 
             * @param {String} [type] - 要获取的属性名
             * @returns {Number} - 数值
             */

        }, {
            key: 'getStatExtraMax',
            value: function getStatExtraMax(type) {
                var lvl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

                switch (type.toLowerCase()) {
                    case 'hp':
                        {
                            // const hpBase = this.getStat(type, 99)
                            // const hpAfterMarriage = this.getStat(type, 100)
                            var stat = this.getAttribute(type, lvl);
                            var statMax = this.stat.hp_max;
                            return Math.max(0, Math.min(2, statMax - stat));
                        }
                    case 'asw':
                        {
                            if (this.stat.asw) return 9;
                            if (formula.shipType.LightCruisers.concat(formula.shipType.Destroyers).includes(this.type)) return 9;
                            return !1;
                        }
                    default:
                        return !1;
                }
            }
        }, {
            key: '_type',
            get: function get() {
                return this.getType();
            }
        }, {
            key: '_series',
            get: function get() {
                return this.getSeriesData();
            }
        }, {
            key: '_pics',
            get: function get() {
                var arr = [];
                for (var i = 0; i < 15; i++) {
                    arr.push(this.getPic(i));
                }
                return arr;
            }
        }, {
            key: '_speed',
            get: function get() {
                return this.getSpeed();
            }
        }, {
            key: '_speedRule',
            get: function get() {
                return this.getSpeedRule();
            }
        }, {
            key: '_range',
            get: function get() {
                return this.getRange();
            }
        }, {
            key: '_cv',
            get: function get() {
                return this.getCV();
            }
        }, {
            key: '_illustrator',
            get: function get() {
                return this.getIllustrator();
            }
        }, {
            key: '_minLv',
            get: function get() {
                return this.getMinLv();
            }
        }, {
            key: '_navy',
            get: function get() {
                return this.getNavy();
            }
        }]);

        return Ship;
    }(ItemBase);

    Ship.lvlMax = KC.maxShipLv;

    var Consumable = function (_ItemBase4) {
        _inherits(Consumable, _ItemBase4);

        function Consumable(data) {
            _classCallCheck(this, Consumable);

            return _possibleConstructorReturn(this, (Consumable.__proto__ || Object.getPrototypeOf(Consumable)).call(this, data));
        }

        return Consumable;
    }(ItemBase);

    /**
     * KC Database
     */


    KC.dbLoad = function (o) {
        if (typeof o == 'string') return KC.dbLoad({ type: o });

        if (!o.type && !o.url) return null;

        return $.ajax({
            'url': o.url || KC.path.db + '/' + o.type + '.json',
            'dataType': 'text',
            'success': function success(data) {
                var arr = [];
                if (o.beforeProcess) arr = o.beforeProcess(data);
                if (typeof KC.db[o.type] == 'undefined') KC.db[o.type] = {};
                arr.forEach(function (str) {
                    if (str) {
                        var doc = JSON.parse(str);
                        switch (o.type) {
                            case 'ships':
                                KC.db[o.type][doc.id] = new Ship(doc);
                                break;
                            case 'items':
                                KC.db[o.type][doc.id] = new Equipment(doc);
                                break;
                            case 'entities':
                                KC.db[o.type][doc.id] = new Entity(doc);
                                break;
                            default:
                                KC.db[o.type][doc.id] = doc;
                                break;
                        }
                    }
                });
                if (o.success) o.success(data);
            },
            'complete': function complete(jqXHR, textStatus) {
                if (o.complete) o.complete(jqXHR, textStatus);
            }
        });
    };

    /**
     * KC Formulas
     */
    var _ship = function _ship(ship) {
        return ship instanceof Ship ? ship : KC.db.ships ? KC.db.ships[ship] : {};
    };
    var _equipment = function _equipment(equipment) {
        return equipment instanceof Equipment ? equipment : KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment];
    };
    var _slots = function _slots(arrSlot) {
        var slots = [];
        arrSlot.forEach(function (value, index) {
            slots[index >= 4 ? index + 1 : index] = value;
        });
        // let slots = arrSlot.map(value => value)
        slots[4] = 0;
        return slots;
    };
    var formula = {
        // 装备类型
        equipmentType: {
            SmallCaliber: 1, // 小口径主炮
            SmallCaliberHigh: 2, // 小口径主炮（高角）
            SmallCaliberAA: 3, // 小口径主炮（高射）
            MediumCaliber: 4, // 中口径主炮
            LargeCaliber: 5, // 大口径主炮
            SuperCaliber: 6, // 超大口径主炮
            SecondaryGun: 7, // 副炮
            SecondaryGunHigh: 8, // 副炮（高角）
            SecondaryGunAA: 9, // 副炮（高射）
            APShell: 11, // 穿甲弹
            Torpedo: 12, // 鱼雷
            SubmarineTorpedo: 13, // 潜艇鱼雷
            MidgetSubmarine: 14, // 微型潜艇
            ReconSeaplane: 15, // 水上侦察机
            ReconSeaplaneNight: 16, // 夜侦
            SeaplaneBomber: 17, // 水上轰炸机
            CarrierFighter: 18, // 舰战 / 舰载战斗机
            TorpedoBomber: 19, // 舰攻 / 舰载鱼雷轰炸机
            DiveBomber: 20, // 舰爆 / 舰载俯冲轰炸机
            CarrierRecon: 21, // 舰侦 / 舰载侦察机
            Autogyro: 22, // 旋翼机
            AntiSubPatrol: 23, // 对潜哨戒机
            SmallRadar: 24, // 小型雷达
            LargeRadar: 25, // 大型雷达
            DepthCharge: 26, // 爆雷
            Sonar: 27, // 声纳
            LargeSonar: 28, // 大型声纳
            AAGun: 29, // 对空机枪
            AAGunConcentrated: 30, // 对空机枪（集中配备）
            AAFireDirector: 31, // 高射装置
            AviationPersonnel: 36, // 航空作战整备员
            SurfaceShipPersonnel: 37, // 水上舰要员
            LandingCraft: 38, // 登陆艇
            Searchlight: 39, // 探照灯
            CommandFacility: 45, // 舰队司令部设施
            LargeFlyingBoat: 45, // 大型水上飞艇
            SearchlightLarge: 46, // 大型探照灯
            SuparRadar: 47, // 超大型雷达
            CarrierRecon2: 50, // 舰侦II / 舰载侦察机II
            SeaplaneFighter: 51, // 水战 / 水上战斗机
            AmphibiousCraft: 52, // 特型内火艇
            LandBasedAttacker: 53, // 陆攻 / 陆上攻击机
            Interceptor: 54, // 局战 / 局地战斗机
            JetBomberFighter: 55, // 喷气式战斗轰炸机
            JetBomberFighter2: 56, // 喷气式战斗轰炸机
            TransportMaterial: 57, // 运输设备
            SubmarineEquipment: 58, // 潜艇装备
            LandBasedFighter: 59, // 陆战 / 陆上战斗机
            CarrierFighterNight: 60, // 夜战 / 舰载战斗机（夜间）
            TorpedoBomberNight: 61, // 夜攻 / 舰载鱼雷机（夜间）
            LandBasedAntiSubPatrol: 62 // 陆上哨戒机
        },
        // 舰种
        shipType: {
            // 航母系列
            Carriers: [9, // 轻型航母
            10, // 正规航母
            11, // 装甲航母
            30, // 攻击型轻航母
            32],
            // 轻巡系列
            LightCruisers: [2, // 轻巡洋舰
            3, // 重雷装巡洋舰
            21, // 练习巡洋舰
            28 // 防空轻巡洋舰
            ],
            // 驱逐舰系列
            Destroyers: [1, // 驱逐舰
            19 // 防空驱逐舰
            ],
            // 潜艇系列
            Submarines: [13, // 潜艇
            14 // 航母潜艇
            ]
        },
        // 根据舰娘与其装备计算
        calcByShip: {},
        // 根据舰队配置计算
        calcByFleet: {},
        // 根据航空队机场与其飞行器配置计算
        calcByField: {},
        calc: {}
    };
    var _equipmentType = formula.equipmentType;
    {
        // 装备类型集合
        _equipmentType.MainGuns = [_equipmentType.SmallCaliber, _equipmentType.SmallCaliberHigh, _equipmentType.SmallCaliberAA, _equipmentType.MediumCaliber, _equipmentType.LargeCaliber, _equipmentType.SuperCaliber];

        _equipmentType.SmallCalibers = [_equipmentType.SmallCaliber, _equipmentType.SmallCaliberHigh, _equipmentType.SmallCaliberAA];

        _equipmentType.MediumCalibers = [_equipmentType.MediumCaliber];

        _equipmentType.LargeCalibers = [_equipmentType.LargeCaliber, _equipmentType.SuperCaliber];

        _equipmentType.SecondaryGuns = [_equipmentType.SecondaryGun, _equipmentType.SecondaryGunHigh, _equipmentType.SecondaryGunAA];

        _equipmentType.APShells = [_equipmentType.APShell];

        _equipmentType.Torpedos = [_equipmentType.Torpedo, _equipmentType.SubmarineTorpedo];

        _equipmentType.Seaplanes = [_equipmentType.ReconSeaplane, _equipmentType.ReconSeaplaneNight, _equipmentType.SeaplaneBomber, _equipmentType.SeaplaneFighter];

        _equipmentType.Fighters = [_equipmentType.SeaplaneBomber, _equipmentType.CarrierFighter, _equipmentType.CarrierFighterNight, _equipmentType.TorpedoBomber, _equipmentType.TorpedoBomberNight, _equipmentType.DiveBomber, _equipmentType.SeaplaneFighter, _equipmentType.LandBasedAttacker, _equipmentType.Interceptor,
        // _equipmentType.CarrierRecon
        _equipmentType.JetBomberFighter, _equipmentType.JetBomberFighter2, _equipmentType.LandBasedFighter];

        _equipmentType.Interceptors = [_equipmentType.Interceptor, _equipmentType.LandBasedFighter];

        _equipmentType.Recons = [_equipmentType.ReconSeaplane, _equipmentType.ReconSeaplaneNight, _equipmentType.CarrierRecon, _equipmentType.CarrierRecon2, _equipmentType.LargeFlyingBoat];

        _equipmentType.ReconSeaplanes = [_equipmentType.ReconSeaplane, _equipmentType.ReconSeaplaneNight];

        _equipmentType.SeaplaneRecons = [_equipmentType.ReconSeaplane, _equipmentType.ReconSeaplaneNight, _equipmentType.LargeFlyingBoat];

        _equipmentType.SeaplaneBombers = [_equipmentType.SeaplaneBomber, _equipmentType.SeaplaneFighter];

        _equipmentType.SeaplaneFighters = [_equipmentType.SeaplaneFighter];

        _equipmentType.CarrierFighters = [_equipmentType.CarrierFighter, _equipmentType.CarrierFighterNight];

        _equipmentType.CarrierRecons = [_equipmentType.CarrierRecon, _equipmentType.CarrierRecon2];

        _equipmentType.CarrierBased = [_equipmentType.CarrierFighter, _equipmentType.CarrierFighterNight, _equipmentType.TorpedoBomber, _equipmentType.TorpedoBomberNight, _equipmentType.DiveBomber, _equipmentType.CarrierRecon, _equipmentType.CarrierRecon2, _equipmentType.JetBomberFighter, _equipmentType.JetBomberFighter2];

        _equipmentType.LandBased = [_equipmentType.LandBasedAttacker, _equipmentType.Interceptor, _equipmentType.JetBomberFighter, _equipmentType.JetBomberFighter2, _equipmentType.LandBasedFighter, _equipmentType.LandBasedAntiSubPatrol];

        _equipmentType.TorpedoBombers = [_equipmentType.TorpedoBomber, _equipmentType.TorpedoBomberNight];

        _equipmentType.DiveBombers = [_equipmentType.DiveBomber];

        _equipmentType.JetBomberFighters = [_equipmentType.JetBomberFighter, _equipmentType.JetBomberFighter2];

        _equipmentType.Autogyros = [_equipmentType.Autogyro];

        _equipmentType.AntiSubPatrols = [_equipmentType.AntiSubPatrol, _equipmentType.LandBasedAntiSubPatrol];

        _equipmentType.Aircrafts = [];
        [].concat(_equipmentType.Seaplanes).concat(_equipmentType.Recons).concat(_equipmentType.CarrierBased).concat(_equipmentType.Autogyros).concat(_equipmentType.AntiSubPatrols).concat(_equipmentType.LandBased).forEach(function (v) {
            if (_equipmentType.Aircrafts.indexOf(v) < 0) _equipmentType.Aircrafts.push(v);
        });

        _equipmentType.Radars = [_equipmentType.SmallRadar, _equipmentType.LargeRadar, _equipmentType.SuparRadar];

        _equipmentType.SmallRadars = [_equipmentType.SmallRadar];

        _equipmentType.LargeRadars = [_equipmentType.LargeRadar, _equipmentType.SuparRadar];

        _equipmentType.AntiSubmarines = [_equipmentType.DepthCharge, _equipmentType.Sonar, _equipmentType.LargeSonar];

        _equipmentType.DepthCharges = [_equipmentType.DepthCharge];

        _equipmentType.Sonars = [_equipmentType.Sonar, _equipmentType.LargeSonar];

        _equipmentType.AAGuns = [_equipmentType.AAGun, _equipmentType.AAGunConcentrated];

        _equipmentType.AAFireDirectors = [_equipmentType.AAFireDirector];

        _equipmentType.Searchlights = [_equipmentType.Searchlight, _equipmentType.SearchlightLarge];

        _equipmentType.AviationPersonnels = [_equipmentType.AviationPersonnel];

        _equipmentType.SurfaceShipPersonnels = [_equipmentType.SurfaceShipPersonnel];

        _equipmentType.LandingCrafts = [_equipmentType.LandingCraft, _equipmentType.AmphibiousCraft];

        _equipmentType.AmphibiousCrafts = [_equipmentType.AmphibiousCraft];

        _equipmentType.isInterceptor = function (equipment) {
            equipment = _equipment(equipment);

            if (equipment.type_ingame && equipment.type_ingame[2] == 47) return !1;

            return _equipmentType.Interceptors.indexOf(equipment.type) > -1;
        };
    }

    // 改修收益系数
    formula.starMultiper = {
        SmallCalibers: {
            shelling: 1,
            night: 1
        },
        MediumCalibers: {
            shelling: 1,
            night: 1
        },
        LargeCalibers: {
            shelling: 1.5,
            night: 1
        },
        SecondaryGuns: {
            shelling: 1,
            night: 1,
            hit: 1
        },
        APShells: {
            shelling: 1,
            night: 1
        },
        AAFireDirectors: {
            shelling: 1,
            night: 1
        },
        Searchlights: {
            shelling: 1,
            night: 1
        },
        AAGuns: {
            shelling: 1,
            torpedo: 1.2
        },
        Torpedos: {
            torpedo: 1.2,
            night: 1
        },
        DepthCharges: {
            shelling: 0.75,
            antisub: 1
        },
        Sonars: {
            shelling: 0.75,
            antisub: 1
        },
        SmallRadars: {
            los: 1.25
        },
        LargeRadars: {
            los: 1.4
        },
        Seaplanes: {},
        ReconSeaplanes: {
            los: 1.2
        },
        SeaplaneFighters: {
            fighter: 0.2
        },
        SeaplaneBomber: {
            // fighter: 0.2
            los: 1.15
        },
        CarrierFighters: {
            fighter: 0.2
        },
        DiveBombers: {
            fighter: 0.25,
            night: 1
        },
        CarrierRecons: {
            los: 1.2
        },
        LandingCrafts: {
            shelling: 1,
            night: 1
        },
        Interceptors: {
            fighter: 0.2
        },

        _10: {
            shelling: ['multiplication', 0.2],
            night: 1
        },
        _66: {
            shelling: ['multiplication', 0.2],
            night: 1
            // aa
            // aaFleet
        },
        _220: {
            shelling: ['multiplication', 0.2],
            night: 1
            // aa
            // aaFleet
        },
        _275: {
            shelling: ['multiplication', 0.2],
            night: 1
            // aa
            // aaFleet
        },
        // _247: {
        //     _type: 'multiplication',
        //     shelling: 0.3,
        //     night: 0.3,
        // },
        _12: {
            shelling: ['multiplication', 0.3],
            night: ['multiplication', 0.3]
        },
        _234: {
            shelling: ['multiplication', 0.3],
            night: ['multiplication', 0.3]
        }
    };
    // 获取改修加成对象
    formula.getStarMultiplier = function (equipmentType, statType) {
        // 如果 equipmentType 以 _ 开头，如 _123，则代表第 123 号装备，而非装备类型
        if (!formula.starMultiper._init) {
            var _loop2 = function _loop2(i) {
                if (_equipmentType[i] && _equipmentType[i].forEach) {
                    _equipmentType[i].forEach(function (tid) {
                        formula.starMultiper[tid] = formula.starMultiper[i];
                    });
                } else if (typeof _equipmentType[i] === 'number') {
                    formula.starMultiper[_equipmentType[i]] = formula.starMultiper[i];
                }
            };

            for (var i in formula.starMultiper) {
                _loop2(i);
            }
            formula.starMultiper._init = !0;
        }
        var bonus = formula.starMultiper[equipmentType] || {};
        if (statType) return bonus[statType] || 0;
        return bonus;
    };
    // 计算改修加成
    formula.getStarBonus = function (equipment, stat, star) {
        equipment = _equipment(equipment);

        var _Object$assign = Object.assign({}, formula.getStarMultiplier(equipment.type), formula.starMultiper['_' + equipment.id]),
            _Object$assign$stat = _Object$assign[stat],
            bonus = _Object$assign$stat === undefined ? 0 : _Object$assign$stat;

        var bonusType = 'sqrt';

        if (Array.isArray(bonus)) {
            bonusType = bonus[0];
            bonus = bonus[1];
        }

        // const {
        //     [stat]: bonus = 0,
        //     _type: bonusType = 'sqrt'
        // } = typeof formula.starMultiper[`_${equipment.id}`] === 'object'
        //     ? formula.starMultiper[`_${equipment.id}`]
        //     : formula.getStarMultiplier(equipment.type)
        switch (bonusType) {
            case 'sqrt':
                {
                    return bonus * Math.sqrt(star);
                }
            case 'multiplication':
            case 'multiple':
                {
                    return bonus * star;
                }
        }
    };
    // 飞行器熟练度对制空战力的加成
    formula.getFighterPowerRankMultiper = function (equipment, rank /*, options*/) {
        equipment = _equipment(equipment);

        var rankInternal = [],
            typeValue = {};

        rankInternal[0] = [0, 9];
        rankInternal[1] = [10, 24];
        rankInternal[2] = [25, 39];
        rankInternal[3] = [40, 54];
        rankInternal[4] = [55, 69];
        rankInternal[5] = [70, 84];
        rankInternal[6] = [85, 99];
        rankInternal[7] = [100, 120];

        typeValue.CarrierFighter = [0, 0, 2, 5, 9, 14, 14, 22];

        typeValue.SeaplaneBomber = [0, 0, 1, 1, 1, 3, 3, 6];

        var _rankInternal = rankInternal[rank],
            _typeValue = 0;

        switch (equipment.type) {
            case _equipmentType.CarrierFighter:
            case _equipmentType.CarrierFighterNight:
            case _equipmentType.Interceptor:
            case _equipmentType.SeaplaneFighter:
            case _equipmentType.LandBasedFighter:
                _typeValue = typeValue.CarrierFighter[rank];
                break;
            case _equipmentType.SeaplaneBomber:
                _typeValue = typeValue.SeaplaneBomber[rank];
                break;
        }

        return {
            min: Math.sqrt(_rankInternal[0] / 10) + _typeValue,
            max: Math.sqrt(_rankInternal[1] / 10) + _typeValue
        };
    };
    formula.calculate = function (type, ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        /**
         * 计算
         * @param {string} type - 计算类型
         * @param {number || Ship} ship - 舰娘
         * @param {array} equipments_by_slot - 每格装备ID/装备object
         * @param {array} star_by_slot - 每格装备改修星级
         * @param {array} rank_by_slot - 每格装备熟练度
         * @param {object} options - 选项
         */
        if (!type || !ship) return 0;

        if (!(ship instanceof Ship)) ship = KC.db.ships[ship];

        var result = 0,
            count = {
            'main': 0,
            'secondary': 0,
            'torpedo': 0,
            'torpedoLateModel': 0,
            'seaplane': 0,
            'apshell': 0,
            'radar': 0,
            radarAA: 0,
            radarSurface: 0,
            'submarineEquipment': 0,
            'carrierFighterNight': 0,
            // 'diveBomberIwai': 0,
            'torpedoBomberNight': 0,
            // 'torpedoBomberSwordfish': 0,
            'aviationPersonnelNight': 0,
            surfaceShipPersonnel: 0
        },
            slots = _slots(ship.slot)
        // , powerTorpedo = function (options) {
        //     options = options || {}
        //     let result = 0
        //     if (formula.shipType.Carriers.indexOf(ship.type) > -1 && !options.isNight) {
        //         return options.returnZero ? 0 : -1
        //     } else {
        //         result = ship.stat.torpedo_max || 0
        //         slots.map(function (carry, index) {
        //             if (equipments_by_slot[index]) {
        //                 // result += (equipments_by_slot[index].type == _equipmentType.TorpedoBomber && !options.isNight)
        //                 result += (_equipmentType.TorpedoBombers.indexOf(equipments_by_slot[index].type) > -1 && !options.isNight)
        //                     ? 0
        //                     : (equipments_by_slot[index].stat.torpedo || 0)

        //                 // 改修加成
        //                 if (star_by_slot[index] && !options.isNight) {
        //                     result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
        //                         equipments_by_slot[index].type,
        //                         'torpedo'
        //                     )
        //                 }
        //             }
        //         })
        //         return result
        //     }
        //     //return (ship.stat.torpedo_max || 0)
        // }
        ,
            value = 0;

        equipments_by_slot = equipments_by_slot.map(function (equipment) {
            if (!equipment) return null;
            if (equipment instanceof Equipment) return equipment;
            return KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment];
        }) || [];
        star_by_slot = star_by_slot || [];
        rank_by_slot = rank_by_slot || [];
        options = options || {};

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment) return;
            // 主炮
            if (_equipmentType.MainGuns.indexOf(equipment.type) > -1) count.main += 1;
            // 副炮
            else if (_equipmentType.SecondaryGuns.indexOf(equipment.type) > -1) count.secondary += 1;
                // 鱼雷
                else if (_equipmentType.Torpedos.indexOf(equipment.type) > -1) {
                        count.torpedo += 1;
                        if (equipment.name.ja_jp.indexOf('後期型') > -1) count.torpedoLateModel += 1;
                    }
                    // 水上机
                    else if (_equipmentType.Seaplanes.indexOf(equipment.type) > -1) count.seaplane += 1;
                        // 穿甲弹
                        else if (_equipmentType.APShells.indexOf(equipment.type) > -1) count.apshell += 1;
                            // 电探/雷达
                            else if (_equipmentType.Radars.indexOf(equipment.type) > -1) {
                                    count.radar += 1;
                                    if (equipment.stat.aa) count.radarAA += 1;
                                    // else
                                    if (equipment.stat.hit && equipment.stat.hit >= 3) count.radarSurface += 1;
                                }
                                // 潜艇装备
                                else if (_equipmentType.SubmarineEquipment == equipment.type) count.submarineEquipment += 1;
                                    // else if (_equipmentType.TorpedoBombers.indexOf(equipment.type) > -1) {
                                    //     if (equipment.name.ja_jp.indexOf('Swordfish') > -1)
                                    //         count.torpedoBomberSwordfish += 1
                                    // }
                                    // 夜间整备员
                                    else if (_equipmentType.AviationPersonnels.indexOf(equipment.type) > -1) {
                                            if (equipment.name.ja_jp.indexOf('夜間') > -1) count.aviationPersonnelNight += 1;
                                        }
                                        // else if (_equipmentType.DiveBombers.indexOf(equipment.type) > -1) {
                                        //     if (equipment.name.ja_jp.indexOf('岩井') > -1)
                                        //         count.diveBomberIwai += 1
                                        // }
                                        // 水上舰要员
                                        else if (_equipmentType.SurfaceShipPersonnels.indexOf(equipment.type) > -1) count.surfaceShipPersonnel += 1;

            // 夜间飞行器
            if (equipment.type_ingame) {
                // 夜间战斗机
                if (equipment.type_ingame[3] === 45) count.carrierFighterNight += 1;
                // 夜间轰炸机
                else if (equipment.type_ingame[3] === 46) count.torpedoBomberNight += 1;
            }
        });

        var bonus = __calculateBonus(ship, equipments_by_slot, star_by_slot, rank_by_slot);

        var powerTorpedo = function powerTorpedo(options) {
            return formula.calcByShip.torpedoPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, options, bonus);
        };

        switch (type) {
            // 制空战力，装备须为战斗机类型 _equipmentType.Fighters
            // 计算公式参考 http://bbs.ngacn.cc/read.php?tid=8680767
            case 'fighterPower':
                value = 0;
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index] && _equipmentType.Fighters.indexOf(equipments_by_slot[index].type) > -1 && carry) {
                        value = Math.sqrt(carry) * (equipments_by_slot[index].getStat('aa', ship) || 0);
                        if (_equipmentType.CarrierFighters.includes(equipments_by_slot[index].type)) {
                            switch (rank_by_slot[index]) {
                                case 1:case '1':
                                    value += 1;break;
                                case 2:case '2':
                                    value += 4;break;
                                case 3:case '3':
                                    value += 6;break;
                                case 4:case '4':
                                    value += 11;break;
                                case 5:case '5':
                                    value += 16;break;
                                case 6:case '6':
                                    value += 17;break;
                                case 7:case '7':
                                    value += 25;break;
                            }
                        } else if (_equipmentType.Recons.indexOf(equipments_by_slot[index].type) == -1) {
                            var max_per_slot = equipments_by_slot[index].type == _equipmentType.SeaplaneBomber ? 9 : 3;
                            value += rank_by_slot[index] == 1 ? 1 : max_per_slot / 6 * (rank_by_slot[index] - 1);
                        }
                        result += Math.floor(value);
                    }
                });
                return result;
            //return Math.floor(result)
            //break;

            // 同时返回制空战力的上下限
            // 返回值为Array
            case 'fighterPower_v2':
                return formula.calcByShip.fighterPower_v2(ship, equipments_by_slot, star_by_slot, rank_by_slot);
            //break;

            // 炮击威力，除潜艇外
            case 'shelling':
            case 'shellingDamage':
                if (formula.shipType.Submarines.indexOf(ship.type) > -1) {
                    return '-';
                } else {
                    result = formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {}, bonus);
                    if (result && result > -1) return Math.floor(result); // + 5
                    return '-';
                }
            //break;

            // 雷击威力，航母除外
            case 'torpedo':
            case 'torpedoDamage':
                result = powerTorpedo();
                if (result && result > -1) return Math.floor(result); // + 5
                return '-';
            //break;

            // 夜战模式 & 伤害力
            case 'nightBattle':
                {
                    var nightPower = formula.calcByShip.nightPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {}, count, bonus);
                    return nightPower.damage <= 0 ? '-' : nightPower.value;
                    //break;
                }

            // 命中总和
            case 'addHit':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index]) result += equipments_by_slot[index].getStat('hit', ship) || 0;
                });
                result += bonus.hit || 0;
                return result >= 0 ? '+' + result : result;
            //break;

            // 装甲总和
            case 'addArmor':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index]) result += equipments_by_slot[index].getStat('armor', ship) || 0;
                });
                return result + (bonus.armor || 0);
            //break;

            // 回避总和
            case 'addEvasion':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index]) result += equipments_by_slot[index].getStat('evasion', ship) || 0;
                });
                return result + (bonus.evasion || 0);
            //break;

            // 索敌能力
            case 'losPower':
                return formula.calcByShip.losPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, options);
            //break;
            default:
                return formula.calcByShip[type](ship, equipments_by_slot, star_by_slot, rank_by_slot, options, bonus);
            //break;
        }

        //return '-'
    };
    // 计算快捷方式
    formula.shellingDamage = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('shellingDamage', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.torpedoDamage = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('torpedoDamage', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.fighterPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('fighterPower', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.fighterPower_v2 = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('fighterPower_v2', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.nightBattle = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('nightBattle', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.addHit = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addHit', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.addArmor = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addArmor', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.addEvasion = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addEvasion', ship, equipments_by_slot, star_by_slot, rank_by_slot);
    };
    formula.losPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        return this.calculate('losPower', ship, equipments_by_slot, star_by_slot, rank_by_slot, options);
    };
    // Formulas
    formula.calc.losPower = function (data) {
        // http://biikame.hatenablog.com/entry/2014/11/14/224925

        var calc = function calc(x) {
            if (typeof x['(Intercept)'] == 'undefined') x['(Intercept)'] = 1;
            x.hqLv = Math.ceil(x.hqLv / 5) * 5;
            var x_estimate = {};
            var y_estimate = 0;
            var x_std_error = {};
            var y_std_error = 0;
            keys.forEach(function (key) {
                var estimate = x[key] * estimate_coefficients[key];
                x_estimate[key] = estimate;
                y_estimate += estimate;
                x_std_error[key] = x[key] * std_error_coefficients[key];
            });
            keys.forEach(function (key) {
                keys.forEach(function (key2) {
                    y_std_error += x_std_error[key] * x_std_error[key2] * correlation[key][key2];
                });
            });
            return {
                x_estimate: x_estimate,
                y_estimate: y_estimate,
                x_std_error: x_std_error,
                y_std_error: y_std_error
            };
        };
        var keys = ['(Intercept)', 'DiveBombers', 'TorpedoBombers', 'CarrierRecons', 'SeaplaneRecons', 'SeaplaneBombers', 'SmallRadars', 'LargeRadars', 'Searchlights', 'statLos', 'hqLv'];
        var estimate_coefficients = {
            '(Intercept)': 0,
            'DiveBombers': 1.03745043134563,
            'TorpedoBombers': 1.3679056374142,
            'CarrierRecons': 1.65940512636315,
            'SeaplaneRecons': 2,
            'SeaplaneBombers': 1.77886368594467,
            'SmallRadars': 1.0045778494921,
            'LargeRadars': 0.990738063979571,
            'Searchlights': 0.906965144360512,
            'statLos': 1.6841895400986,
            'hqLv': -0.614246711531445
        };
        var std_error_coefficients = {
            '(Intercept)': 4.66445565766347,
            'DiveBombers': 0.0965028505325845,
            'TorpedoBombers': 0.108636184978525,
            'CarrierRecons': 0.0976055279516298,
            'SeaplaneRecons': 0.0866229392463539,
            'SeaplaneBombers': 0.0917722496848294,
            'SmallRadars': 0.0492773648320346,
            'LargeRadars': 0.0491221486053861,
            'Searchlights': 0.0658283797225724,
            'statLos': 0.0781594211213618,
            'hqLv': 0.0369222352426548
        };
        var correlation = {
            '(Intercept)': {
                '(Intercept)': 1,
                'DiveBombers': -0.147020064768061,
                'TorpedoBombers': -0.379236131621529,
                'CarrierRecons': -0.572858669501918,
                'SeaplaneRecons': -0.733913857017495,
                'SeaplaneBombers': -0.642621825152428,
                'SmallRadars': -0.674829588068364,
                'LargeRadars': -0.707418111752863,
                'Searchlights': -0.502304601556193,
                'statLos': -0.737374218573832,
                'hqLv': -0.05071933950163
            },
            'DiveBombers': {
                '(Intercept)': -0.147020064768061,
                'DiveBombers': 1,
                'TorpedoBombers': 0.288506347076736,
                'CarrierRecons': 0.365820372770994,
                'SeaplaneRecons': 0.425744409856409,
                'SeaplaneBombers': 0.417783698791503,
                'SmallRadars': 0.409046013184429,
                'LargeRadars': 0.413855653833994,
                'Searchlights': 0.308730607324667,
                'statLos': 0.317984916914851,
                'hqLv': -0.386740224500626
            },
            'TorpedoBombers': {
                '(Intercept)': -0.379236131621529,
                'DiveBombers': 0.288506347076736,
                'TorpedoBombers': 1,
                'CarrierRecons': 0.482215071254241,
                'SeaplaneRecons': 0.584455876852325,
                'SeaplaneBombers': 0.558515133495825,
                'SmallRadars': 0.547260012897553,
                'LargeRadars': 0.560437619378443,
                'Searchlights': 0.437934879351188,
                'statLos': 0.533934507932748,
                'hqLv': -0.405349979885748
            },
            'CarrierRecons': {
                '(Intercept)': -0.572858669501918,
                'DiveBombers': 0.365820372770994,
                'TorpedoBombers': 0.482215071254241,
                'CarrierRecons': 1,
                'SeaplaneRecons': 0.804494553748065,
                'SeaplaneBombers': 0.75671307047535,
                'SmallRadars': 0.748420581669228,
                'LargeRadars': 0.767980338133817,
                'Searchlights': 0.589651513349878,
                'statLos': 0.743851348255527,
                'hqLv': -0.503544281376776
            },
            'SeaplaneRecons': {
                '(Intercept)': -0.733913857017495,
                'DiveBombers': 0.425744409856409,
                'TorpedoBombers': 0.584455876852325,
                'CarrierRecons': 0.804494553748065,
                'SeaplaneRecons': 1,
                'SeaplaneBombers': 0.932444440578382,
                'SmallRadars': 0.923988080549326,
                'LargeRadars': 0.94904944359066,
                'Searchlights': 0.727912987329348,
                'statLos': 0.944434077970518,
                'hqLv': -0.614921413821462
            },
            'SeaplaneBombers': {
                '(Intercept)': -0.642621825152428,
                'DiveBombers': 0.417783698791503,
                'TorpedoBombers': 0.558515133495825,
                'CarrierRecons': 0.75671307047535,
                'SeaplaneRecons': 0.932444440578382,
                'SeaplaneBombers': 1,
                'SmallRadars': 0.864289865445084,
                'LargeRadars': 0.886872388674911,
                'Searchlights': 0.68310647756898,
                'statLos': 0.88122333327317,
                'hqLv': -0.624797255805045
            },
            'SmallRadars': {
                '(Intercept)': -0.674829588068364,
                'DiveBombers': 0.409046013184429,
                'TorpedoBombers': 0.547260012897553,
                'CarrierRecons': 0.748420581669228,
                'SeaplaneRecons': 0.923988080549326,
                'SeaplaneBombers': 0.864289865445084,
                'SmallRadars': 1,
                'LargeRadars': 0.872011318623459,
                'Searchlights': 0.671926570242336,
                'statLos': 0.857213501657084,
                'hqLv': -0.560018086758868
            },
            'LargeRadars': {
                '(Intercept)': -0.707418111752863,
                'DiveBombers': 0.413855653833994,
                'TorpedoBombers': 0.560437619378443,
                'CarrierRecons': 0.767980338133817,
                'SeaplaneRecons': 0.94904944359066,
                'SeaplaneBombers': 0.886872388674911,
                'SmallRadars': 0.872011318623459,
                'LargeRadars': 1,
                'Searchlights': 0.690102027588321,
                'statLos': 0.883771367337743,
                'hqLv': -0.561336967269448
            },
            'Searchlights': {
                '(Intercept)': -0.502304601556193,
                'DiveBombers': 0.308730607324667,
                'TorpedoBombers': 0.437934879351188,
                'CarrierRecons': 0.589651513349878,
                'SeaplaneRecons': 0.727912987329348,
                'SeaplaneBombers': 0.68310647756898,
                'SmallRadars': 0.671926570242336,
                'LargeRadars': 0.690102027588321,
                'Searchlights': 1,
                'statLos': 0.723228553177704,
                'hqLv': -0.518427865593732
            },
            'statLos': {
                '(Intercept)': -0.737374218573832,
                'DiveBombers': 0.317984916914851,
                'TorpedoBombers': 0.533934507932748,
                'CarrierRecons': 0.743851348255527,
                'SeaplaneRecons': 0.944434077970518,
                'SeaplaneBombers': 0.88122333327317,
                'SmallRadars': 0.857213501657084,
                'LargeRadars': 0.883771367337743,
                'Searchlights': 0.723228553177704,
                'statLos': 1,
                'hqLv': -0.620804120587684
            },
            'hqLv': {
                '(Intercept)': -0.05071933950163,
                'DiveBombers': -0.386740224500626,
                'TorpedoBombers': -0.405349979885748,
                'CarrierRecons': -0.503544281376776,
                'SeaplaneRecons': -0.614921413821462,
                'SeaplaneBombers': -0.624797255805045,
                'SmallRadars': -0.560018086758868,
                'LargeRadars': -0.561336967269448,
                'Searchlights': -0.518427865593732,
                'statLos': -0.620804120587684,
                'hqLv': 1
            }
        };

        var x = {
            'DiveBombers': 0,
            'TorpedoBombers': 0,
            'CarrierRecons': 0,
            'SeaplaneRecons': 0,
            'SeaplaneBombers': 0,
            'SmallRadars': 0,
            'LargeRadars': 0,
            'Searchlights': 0,
            'statLos': 1,
            'hqLv': 1
        };

        for (var i in data) {
            x[i] = data[i];
        }

        return calc(x);
        //var result = calc(x);
        //var score = result.y_estimate.toFixed(1) + ' ± ' + result.y_std_error.toFixed(1);
    };
    formula.calc.los33 = function (data) {
        if (!data) return;
        /* data {
            hq: 90,
            equipments: [
                {
                    id: 123,
                    star: 4,
                    rank: 7
                }
            ],
            ships: [
                {
                    id: 123,
                    lv: 90
                }
            ]
        }
         */

        var totalEquipmentValue = 0,
            totalShipValue = 0;

        var equipmentTypeValues = {
            TorpedoBombers: 0.8,
            CarrierRecons: 1,

            ReconSeaplane: 1.2,
            ReconSeaplaneNight: 1.2,
            SeaplaneBomber: 1.1
        };
        Object.defineProperty(equipmentTypeValues, 'default', {
            value: 0.6,
            enumerable: !1,
            configurable: !1,
            writable: !1
        });

        data.equipments.forEach(function (o) {
            if (o.id) {
                var equipment = _equipment(o.id);

                if (equipment.stat.los) {
                    var typeValue = equipmentTypeValues.default;
                    var star = o.star || 0;

                    for (var types in equipmentTypeValues) {
                        var typesForCheck = [];

                        if (Array.isArray(_equipmentType[types])) typesForCheck = _equipmentType[types];else typesForCheck = [_equipmentType[types]];

                        if (typesForCheck.indexOf(equipment.type) > -1) typeValue = equipmentTypeValues[types];
                    }

                    totalEquipmentValue += typeValue * (equipment.stat.los + formula.getStarBonus(equipment, 'los', star)
                    // + formula.getStarMultiplier(equipment.type, 'los') * Math.sqrt(star)
                    );
                }
            }
        });

        data.ships.forEach(function (o) {
            var ship = _ship(o.id);
            var shipLOS = ship.getAttribute('los', Math.max(o.lv || 1, ship.getMinLv()));

            totalShipValue += Math.sqrt(Math.max(shipLOS, 1));
        });

        return totalEquipmentValue + totalShipValue - Math.ceil(data.hq * 0.4) + 2 * (6 - data.ships.length);
    };
    formula.calc.TP = function (count) {
        /* count
        * {
        * 		ship: {
        * 			dd
        * 			cl
        * 			ct
        * 			cav
        * 			bbv
        * 			av
        * 			ssv
        * 			lha
        * 			ao
        * 			as
        * 		},
        * 		equipment: {
        * 			68	// landing craft
        * 			75  // canister
        * 			166  // landing craft (force)
        * 		}
        * }
        */
        count = count || {};
        var result = 0,
            ship = count.ship || {},
            equipment = count.equipment || {};

        for (var i in ship) {
            var multiper = 0;
            switch (i) {
                case 1:
                case '1':
                case 19:
                case '19':
                case 'dd':
                    multiper = 5;break;

                case 2:
                case '2':
                case 28:
                case '28':
                case 'cl':
                    multiper = 2;break;

                case 21:
                case '21':
                case 'ct':
                    multiper = 6;break;

                case 5:
                case '5':
                case 'cav':
                    multiper = 4;break;

                case 8:
                case '8':
                case 'bbv':
                    multiper = 7;break;

                case 12:
                case '12':
                case 24:
                case '24':
                case 'av':
                    multiper = 9.5;break;

                case 14:
                case '14':
                case 'ssv':
                    multiper = 1;break;

                case 15:
                case '15':
                case 'lha':
                    multiper = 12;break;

                case 29:
                case '29':
                case 'ao':
                    multiper = 15;break;

                case 17:
                case '17':
                case 'as':
                    multiper = 7;break;
            }
            result += multiper * (parseInt(ship[i]) || 0);
        }

        for (var _i in equipment) {
            var _multiper = 0,
                id = parseInt(_i),
                data = void 0;
            switch (id) {
                // 戦闘糧食
                case 145:
                    _multiper = 1;break;
                // 秋刀魚の缶詰
                case 150:
                    _multiper = 1;break;
                // canister
                case 75:
                    _multiper = 5;break;
                // landing craft
                case 68:
                    _multiper = 8;break;
                // landing craft (large)
                case 193:
                    _multiper = 8;break;
                // landing craft (force)
                case 166:
                    _multiper = 8;break;
                // 特二式内火艇
                case 167:
                    _multiper = 2;break;
                default:
                    // 瑞云 & 晴岚
                    data = _equipment(id);
                    switch (data.type) {
                        // case formula.equipmentType.SeaplaneBomber:
                        //     if( data.name.ja_jp.indexOf('瑞雲') > -1 )
                        //         multiper = 2
                        //     else if( data.name.ja_jp.indexOf('晴嵐') > -1 )
                        //         multiper = 4
                        //     break;
                        case formula.equipmentType.LandingCraft:
                            if (data.name.ja_jp.indexOf('大発動艇') > -1) _multiper = 8;
                            break;
                    }
            }
            result += _multiper * (parseInt(equipment[_i]) || 0);
        }

        return result;
    };
    formula.calc.fighterPower = function (equipment, carry, rank, star) {
        if (!equipment) return [0, 0];

        equipment = equipment instanceof Equipment ? equipment : KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment];
        carry = carry || 0;
        rank = rank || 0;
        star = star || 0;

        // http://bbs.ngacn.cc/read.php?tid=8680767
        // http://ja.kancolle.wikia.com/wiki/%E8%89%A6%E8%BC%89%E6%A9%9F%E7%86%9F%E7%B7%B4%E5%BA%A6

        var results = [0, 0];

        if (_equipmentType.Fighters.indexOf(equipment.type) > -1 && carry) {
            // Math.floor(Math.sqrt(carry) * (equipment.stat.aa || 0) + Math.sqrt( rankInternal / 10 ) + typeValue)
            // if( star ) console.log( equipment._name, '★+' + star, star * formula.getStarMultiplier( equipment.type, 'fighter' ) )
            var statAA = (equipment.stat.aa || 0) + (_equipmentType.isInterceptor(equipment) ? equipment.stat.evasion * 1.5 : 0) + star * formula.getStarMultiplier(equipment.type, 'fighter'),
                base = statAA * Math.sqrt(carry),
                rankBonus = formula.getFighterPowerRankMultiper(equipment, rank);

            results[0] += Math.floor(base + rankBonus.min);
            results[1] += Math.floor(base + rankBonus.max);
        }

        return results;
    };
    formula.calc.fighterPowerAA = function (equipment, carry, rank, star) {
        if (!equipment) return [0, 0];

        equipment = _equipment(equipment);
        carry = carry || 0;
        rank = rank || 0;
        star = star || 0;

        // http://wikiwiki.jp/kancolle/?%B4%F0%C3%CF%B9%D2%B6%F5%C2%E2#AirSupremacy

        var results = [0, 0];

        if (carry) {
            var statAA = (equipment.stat.aa || 0) + (_equipmentType.isInterceptor(equipment) ? equipment.stat.evasion : 0) + (_equipmentType.isInterceptor(equipment) ? equipment.stat.hit * 2 : 0) + star * formula.getStarMultiplier(equipment.type, 'fighter'),
                base = statAA * Math.sqrt(carry),
                rankBonus = formula.getFighterPowerRankMultiper(equipment, rank, {
                isAA: !0
            });

            results[0] += Math.floor(base + rankBonus.min);
            results[1] += Math.floor(base + rankBonus.max);
        }

        return results;
    };
    // Calculate by Ship
    formula.calcByShip.shellingPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options, bonus) {
        options = options || {};
        bonus = bonus || __calculateBonus(ship, equipments_by_slot, star_by_slot, rank_by_slot);

        var result = 0,
            isCV = !1,
            slots = _slots(ship.slot);

        // 检查是否为航母攻击模式
        if (formula.shipType.Carriers.indexOf(ship.type) > -1) {
            isCV = !0;
        } else {
            //equipments_by_slot.forEach(function(equipment){
            //	if( equipment && !isCV && _equipmentType.CarrierBased.indexOf( equipment.type ) > -1 )
            //		isCV = true
            //})
            equipments_by_slot.some(function (equipment) {
                if (equipment && !isCV && _equipmentType.CarrierBased.indexOf(equipment.type) > -1) {
                    isCV = !0;
                    return !0;
                }
            });
        }

        if (isCV && !options.isNight) {
            // 航母攻击模式
            var torpedoDamage = 0,
                bombDamage = 0;
            slots.map(function (carry, index) {
                if (equipments_by_slot[index]) {
                    var equipment = equipments_by_slot[index];
                    // result += (equipment.stat.fire * 1.5) || 0
                    result += equipment.getStat('fire', ship) * 1.5 || 0;

                    // if (equipment.type == _equipmentType.TorpedoBomber)
                    if (_equipmentType.TorpedoBombers.indexOf(equipment.type) > -1)
                        // torpedoDamage += equipment.stat.torpedo || 0
                        torpedoDamage += equipment.getStat('torpedo', ship) || 0;

                    //if( equipment.type == _equipmentType.DiveBomber )
                    // bombDamage += equipment.stat.bomb || 0
                    bombDamage += equipment.getStat('bomb', ship) || 0;

                    if (_equipmentType.SecondaryGuns.indexOf(equipment.type) > -1) result += Math.sqrt((star_by_slot[index] || 0) * 1.5);
                }
            });
            if (!torpedoDamage && !bombDamage) return -1;else result += Math.floor(1.5 * (Math.floor(bombDamage * 1.3) + torpedoDamage + ship.stat.fire_max + (bonus.fire || 0))) + 50;
            return result;
        } else {
            // 其他舰种
            result = ship.stat.fire_max || 0;

            // 特定种类装备数量，仅在满足对特定条件时才会纳入数量统计
            var count = {
                CLMainGunNaval: 0, // 轻巡系主炮（单装炮）
                CLMainGunTwin: 0, // 轻巡系主炮（连装炮）
                ItalianCAMainGun: 0 // 意大利重巡主炮（仅对意大利重巡洋舰生效）
            };
            slots.map(function (carry, index) {
                if (equipments_by_slot[index]) {
                    var equipment = equipments_by_slot[index];
                    // result += equipment.stat.fire || 0
                    result += equipment.getStat('fire', ship) || 0;

                    // 轻巡系主炮加成
                    if (formula.shipType.LightCruisers.indexOf(ship.type) > -1) {
                        ['14cm単装砲', '15.2cm単装砲'].forEach(function (name) {
                            // console.log(
                            //     name,
                            //     equipment.name.ja_jp,
                            //     equipment.name.ja_jp.includes(name)
                            // );
                            if (equipment.name.ja_jp.includes(name)) count.CLMainGunNaval += 1;
                        });
                        ['14cm連装砲', '15.2cm連装砲'].forEach(function (name) {
                            if (equipment.name.ja_jp.includes(name)) count.CLMainGunTwin += 1;
                        });
                    }

                    // 意大利重巡主炮加成
                    if (ship._navy === 'rm') {
                        // console.log(ship, equipment)
                        if (equipment.name.ja_jp.includes('203mm/53')) count.ItalianCAMainGun += 1;
                    }

                    // 改修加成
                    if (star_by_slot[index] && !options.isNight) {
                        /*
                        console.log(
                            equipments_by_slot[index]._name,
                            '★+' + star_by_slot[index],
                            formula.getStarMultiplier(
                                equipments_by_slot[index].type,
                                options.isNight ? 'night' : 'shelling'
                            ),
                            Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                                equipments_by_slot[index].type,
                                options.isNight ? 'night' : 'shelling'
                            ),
                            options.isNight ? '夜战' : '昼战'
                        )
                        */
                        result += formula.getStarBonus(equipment, 'shelling', star_by_slot[index]);
                        // result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                        //     equipment.type,
                        //     'shelling'
                        // )
                    }
                }
            });

            // console.log(count)

            // 加成
            var thisBonus = 0
            // 轻巡系主炮加成
            + 2 * Math.sqrt(count.CLMainGunTwin) + Math.sqrt(count.CLMainGunNaval)
            // 意大利重巡主炮加成（仅对意大利重巡洋舰生效）
            + Math.sqrt(count.ItalianCAMainGun) + (bonus.fire || 0);

            return result + thisBonus;
        }
        //return (ship.stat.fire_max || 0)
    };
    formula.calcByShip.torpedoPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options, bonus) {
        options = options || {};
        bonus = bonus || __calculateBonus(ship, equipments_by_slot, star_by_slot, rank_by_slot);

        var result = 0;
        var slots = _slots(ship.slot);

        if (formula.shipType.Carriers.indexOf(ship.type) > -1 && !options.isNight) {
            return options.returnZero ? 0 : -1;
        } else {
            result = (ship.stat.torpedo_max || 0) + (bonus.torpedo || 0);
            slots.map(function (carry, index) {
                if (equipments_by_slot[index]) {
                    var equipment = equipments_by_slot[index];
                    // result += (equipment.type == _equipmentType.TorpedoBomber && !options.isNight)
                    result += _equipmentType.TorpedoBombers.indexOf(equipment.type) > -1 && !options.isNight ? 0 : equipment.getStat('torpedo', ship) || 0;

                    // 改修加成
                    if (star_by_slot[index] && !options.isNight) {
                        result += formula.getStarBonus(equipment, 'torpedo', star_by_slot[index]);
                        // result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                        //     equipment.type,
                        //     'torpedo'
                        // )
                    }
                }
            });
            return result;
        }
    };
    formula.calcByShip.nightPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options, count, bonus) {
        options = options || {};
        bonus = bonus || __calculateBonus(ship, equipments_by_slot, star_by_slot, rank_by_slot);

        var result = {
            // value: ''
            // type: undefined,
            damage: 0

            // 改修加成
        };var starBonus = 0;
        var slots = _slots(ship.slot);

        // 航空夜战
        // http://bbs.ngacn.cc/read.php?tid=12445064
        // http://bbs.ngacn.cc/read.php?tid=12590487
        if ((count.aviationPersonnelNight || ship.getCapability('count_as_night_operation_aviation_personnel')) && (count.carrierFighterNight >= 1 || count.torpedoBomberNight >= 1)) {
            // (裸火力+特殊机体火力+特殊机体雷装+3*sum(夜战机体格子剩余机数)+sum(特殊机体系数*sqrt(特殊机体格子剩余机数))+夜间接触补正+特殊机体改修补正)*CI系数
            // 夜战机体：F6F-3N，F6F-5N，TBM-3D
            // 特殊机体：所有夜战机体，剑鱼系，零战62型(爆战/岩井队)

            // 基本攻击力 = 素火力 + ∑(夜间飞机火力)※ +∑(夜间飞机雷装)※ + ∑(夜间飞机搭载补正) + 夜间接触补正
            // 夜间飞机搭载补正 = 系数A*机数 + 系数B*(火力+雷装+爆装+对潜)*√(机数) + √(★)

            slots.forEach(function (carry, index) {
                if (!equipments_by_slot[index]) return;

                if (star_by_slot[index]) {
                    starBonus += formula.getStarBonus(equipments_by_slot[index], 'night', star_by_slot[index]);
                    // starBonus += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                    //     equipments_by_slot[index].type,
                    //     'night'
                    // )
                }
            });

            var nightCarry = 0; // 夜战机体机数
            var spFire = 0; // 特殊机体火力
            var spTorpedo = 0; // 特殊机体雷装
            var spBonus = 0; // sum(特殊机体系数*sqrt(特殊机体机数))
            var spStarBonus = 0; // 特殊机体改修补正
            var multiplierCI = [];
            // let hasAttacker = false

            var countTorpedoBomberSwordfish = 0;
            var countDiveBomberIwai = 0;

            slots.forEach(function (carry, index) {
                if (!equipments_by_slot[index]) return;

                var equipment = equipments_by_slot[index];
                var isNightAircraft = !1; // 是否为夜战机
                var isSPAircraft = !1; // 是否为特殊机

                if (equipment.type_ingame) {
                    // 夜战
                    if (equipment.type_ingame[3] === 45) {
                        isSPAircraft = !0;
                        isNightAircraft = !0;
                    }
                    // 夜攻
                    else if (equipment.type_ingame[3] === 46) {
                            isSPAircraft = !0;
                            isNightAircraft = !0;
                        }
                }
                if (_equipmentType.TorpedoBombers.indexOf(equipment.type) > -1) {
                    if (equipment.hasName('Swordfish', 'ja_jp')) {
                        isSPAircraft = !0;
                        countTorpedoBomberSwordfish++;
                    }
                } else if (_equipmentType.DiveBombers.indexOf(equipment.type) > -1) {
                    if (equipment.hasName('岩井', 'ja_jp')) {
                        isSPAircraft = !0;
                        countDiveBomberIwai++;
                    }
                }
                // if (
                //     _equipmentType.Aircrafts.indexOf(equipment.type) > -1
                //     && (
                //         equipment.stat.bomb
                //         || equipment.stat.torpedo
                //     )
                // ) hasAttacker = true

                if (isNightAircraft) {
                    nightCarry += carry;
                }

                if (isSPAircraft) {
                    spFire += equipment.getStat('fire', ship);
                    spTorpedo += equipment.getStat('torpedo', ship);
                    spBonus += Math.sqrt(carry) * ((3 + 1.5 * (isNightAircraft ? 1 : 0)) * (equipment.getStat('fire', ship) + equipment.getStat('torpedo', ship) + equipment.getStat('bomb', ship) + equipment.getStat('asw', ship)) / 10);
                    if (star_by_slot[index]) {
                        spStarBonus += formula.getStarBonus(equipments_by_slot[index], 'night', star_by_slot[index]);
                        // spStarBonus += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                        //     equipments_by_slot[index].type,
                        //     'night'
                        // )
                    }
                }
            });

            // if (!hasAttacker) return { damage: 0 }

            var equipSPBomber = countTorpedoBomberSwordfish + countDiveBomberIwai;
            if (count.carrierFighterNight >= 2 && count.torpedoBomberNight >= 1) multiplierCI.push(1.25);
            if (count.carrierFighterNight >= 1 && count.torpedoBomberNight >= 1) multiplierCI.push(1.2);
            if (count.carrierFighterNight >= 3 || count.carrierFighterNight >= 2 && equipSPBomber >= 1 || count.carrierFighterNight >= 1 && count.torpedoBomberNight >= 1 && equipSPBomber >= 1 || count.carrierFighterNight >= 1 && count.torpedoBomberNight >= 2 || count.carrierFighterNight >= 1 && equipSPBomber >= 2) multiplierCI.push(1.18);

            result.type = '航空';
            result.hit = 1;
            result.damage = Math.floor(ship.stat.fire_max + (bonus.fire || 0) + spFire + spTorpedo + 3 * nightCarry + spBonus + spStarBonus);
            result.isMax = !0;

            if (multiplierCI.length) {
                result.cis = multiplierCI.map(function (multiplier) {
                    return [Math.floor(result.damage * multiplier), 1];
                });
                // result.damage_ci = Math.floor(result.damage * CI)
            }
        }

        // Ark Royal：剑鱼夜战
        else if (ship.getCapability('participate_night_battle_when_equip_swordfish')) {
                result.damage += ship.stat.fire_max + (bonus.fire || 0) + ship.stat.torpedo_max + (bonus.torpedo || 0);
                slots.forEach(function (carry, index) {
                    var equipment = equipments_by_slot[index];
                    if (!equipments_by_slot[index]) return;
                    if (_equipmentType.TorpedoBombers.indexOf(equipment.type) > -1) {
                        if (equipment.name.ja_jp.indexOf('Swordfish') > -1) {
                            // result.damage += equipment.stat.fire + equipment.stat.torpedo
                            result.damage += equipment.getStat('fire', ship) + equipment.getStat('torpedo', ship);
                        }
                    }
                });
                result.type = '通常';
                result.damage = Math.floor(result.damage);
                result.hit = 1;
            }

            // Base rule: If a ships has either Fire or Torpedo stat on level 1, she can participate night battle

            else if (ship.stat.fire + ship.stat.torpedo <= 0)
                    // if (!ship.additional_night_shelling && formula.shipType.Carriers.indexOf(ship.type) > -1) {
                    // 航母没有夜战
                    return {
                        damage: 0

                        // 其他夜战方式
                    };else {
                    var equipmentCount = {};
                    slots.forEach(function (carry, index) {
                        if (!equipments_by_slot[index]) return;

                        if (star_by_slot[index]) {
                            starBonus += formula.getStarBonus(equipments_by_slot[index], 'night', star_by_slot[index]);
                            // starBonus += Math.sqrt(star_by_slot[index]) * formula.getStarMultiplier(
                            //     equipments_by_slot[index].type,
                            //     'night'
                            // )
                        }

                        if (!equipments_by_slot[index]) return;
                        var equipment = equipments_by_slot[index];
                        if (!equipmentCount[equipment.id]) equipmentCount[equipment.id] = 1;else equipmentCount[equipment.id]++;
                    });

                    //console.log(count)
                    result.damage = formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {
                        isNight: !0
                    }, bonus) + formula.calcByShip.torpedoPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {
                        isNight: !0, returnZero: !0
                    }, bonus) + starBonus;
                    /*
                    console.log(
                        '夜',
                        formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {isNight: true}),
                        powerTorpedo({isNight: true, returnZero: true}),
                        result.damage
                    )
                    */
                    // http://wikiwiki.jp/kancolle/?%C0%EF%C6%AE%A4%CB%A4%C4%A4%A4%A4%C6#NightBattle
                    // console.log(
                    //     count,
                    //     formula.shipType.Submarines.indexOf(ship.type)
                    // )

                    // 潜艇专用
                    if (formula.shipType.Submarines.indexOf(ship.type) > -1 && count.torpedoLateModel >= 1 && count.submarineEquipment >= 1) {
                        result.type = '雷击CI';
                        result.damage = Math.floor(result.damage * 1.75);
                        result.hit = 2;
                    }

                    // 潜艇专用
                    else if (formula.shipType.Submarines.indexOf(ship.type) > -1 && count.torpedoLateModel >= 2) {
                            result.type = '雷击CI';
                            result.damage = Math.floor(result.damage * 1.6);
                            result.hit = 2;
                        } else if (count.torpedo >= 2) {
                            result.type = '雷击CI';
                            result.damage = Math.floor(result.damage * 1.5);
                            result.hit = 2;
                        } else if (count.main >= 3) {
                            result.type = '炮击CI';
                            result.damage = Math.floor(result.damage * 2);
                            result.hit = 1;
                        } else if (count.main == 2 && count.secondary >= 1) {
                            result.type = '炮击CI';
                            result.damage = Math.floor(result.damage * 1.75);
                            result.hit = 1;
                        }

                        // 驱逐舰专用 - 鱼雷+水上电探+瞭望员
                        else if (formula.shipType.Destroyers.indexOf(ship.type) > -1 && count.torpedo >= 1 && count.radarSurface >= 1 && count.surfaceShipPersonnel >= 1) {
                                result.type = '电探CI';
                                result.damage = Math.floor(result.damage * 1.25);
                                result.hit = 1;
                                // result.isMin = true
                            }

                            // 驱逐舰专用 - 主炮+鱼雷+水上电探
                            else if (formula.shipType.Destroyers.indexOf(ship.type) > -1 && count.torpedo >= 1 && count.radarSurface >= 1 && count.main >= 1) {
                                    // [267] 12.7cm連装砲D型改二
                                    result.type = '电雷CI';
                                    result.damage = equipmentCount[267] ? Math.floor(result.damage * 1.625) : Math.floor(result.damage * 1.3);
                                    result.hit = 1;
                                    // result.isMin = true
                                }

                                // 
                                else if (count.main >= 1 && count.torpedo == 1) {
                                        result.type = '炮雷CI';
                                        result.damage = Math.floor(result.damage * 1.3);
                                        result.hit = 2;
                                    }

                                    // 标准连击
                                    else if (count.main == 2 && count.secondary <= 0 && count.torpedo <= 0 || count.main == 1 && count.secondary >= 1 && count.torpedo <= 0 || count.main == 0 && count.secondary >= 2 && count.torpedo >= 0) {
                                            result.type = '连击';
                                            result.damage = Math.floor(result.damage * 1.2);
                                            result.hit = 2;
                                        }

                                        // 通常攻击
                                        else {
                                                result.type = '通常';
                                                result.damage = Math.floor(result.damage);
                                                result.hit = 1;
                                            }
                }

        var jointSymbol = ' ';
        if (result.isMax) jointSymbol = ' ≤ ';
        if (result.isMin) jointSymbol = ' ≥ ';
        result.value = '' + result.type + jointSymbol + result.damage;
        if (result.hit && result.hit > 1) result.value += ' x ' + result.hit;
        if (Array.isArray(result.cis) && result.cis.length) {
            result.value += ' (CI' + jointSymbol + result.cis.sort(function (a, b) {
                return a[0] - b[0];
            }).map(function (ci) {
                return ci[0] + (ci[1] && ci[1] > 1 ? ' x ' + ci[1] : '');
            }).join(' 或 ') + ')';
        } else if (result.damage_ci) {
            var hit = result.hit_ci || result.hit || 1;
            result.value += ' (CI' + jointSymbol + result.damage_ci + ')';
            if (hit && hit > 1) result.value += ' x ' + hit;
        }

        return result;
    };
    formula.calcByShip.fighterPower_v2 = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        var results = [0, 0],
            slots = _slots(ship.slot);

        slots.map(function (carry, index) {
            var r = formula.calc.fighterPower(equipments_by_slot[index], carry, rank_by_slot[index] || 0, star_by_slot[index] || 0);
            results[0] += r[0];
            results[1] += r[1];
        });
        return results;
    };
    formula.calcByShip.losPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        // http://biikame.hatenablog.com/entry/2014/11/14/224925

        options = options || {};
        options.shipLv = options.shipLv || 1;
        options.hqLv = options.hqLv || 1;

        if (options.shipLv < 0) options.shipLv = 1;
        if (options.hqLv < 0) options.hqLv = 1;

        var x = {
            'DiveBombers': 0,
            'TorpedoBombers': 0,
            'CarrierRecons': 0,
            'SeaplaneRecons': 0,
            'SeaplaneBombers': 0,
            'SmallRadars': 0,
            'LargeRadars': 0,
            'Searchlights': 0,
            'statLos': Math.sqrt(ship.getAttribute('los', options.shipLv)),
            'hqLv': options.hqLv
        };

        equipments_by_slot.forEach(function (equipment) {
            if (equipment) {
                for (var i in x) {
                    if (_equipmentType[i] && _equipmentType[i].push && _equipmentType[i].indexOf(equipment.type) > -1) x[i] += equipment.stat.los;
                }
            }
        });

        return formula.calc.losPower(x);
    };
    formula.calcByShip.TP = function (ship, equipments_by_slot) {
        if (!ship || !equipments_by_slot || !equipments_by_slot.push) return 0;

        ship = _ship(ship);
        var count = {
            ship: {},
            equipment: {}
        };
        count.ship[ship.type] = 1;
        equipments_by_slot.forEach(function (equipment) {
            if (equipment) {
                var id = typeof equipment == 'number' ? equipment : _equipment(equipment)['id'];
                if (!count.equipment[id]) count.equipment[id] = 0;
                count.equipment[id]++;
            }
        });

        var count_as_landing_craft = ship.getCapability('count_as_landing_craft');
        // console.log('count_as_landing_craft', count_as_landing_craft)
        if (count_as_landing_craft) {
            if (!count.equipment[68]) count.equipment[68] = 0;
            count.equipment[68]++;
        }

        return formula.calc.TP(count);
    };
    formula.calcByShip.speed = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        if (!ship) return '';
        if ((typeof star_by_slot === 'undefined' ? 'undefined' : _typeof(star_by_slot)) === 'object' && star_by_slot.push) return formula.calcByShip.speed(ship, equipments_by_slot, [], [], star_by_slot);
        if ((typeof rank_by_slot === 'undefined' ? 'undefined' : _typeof(rank_by_slot)) === 'object' && rank_by_slot.push) return formula.calcByShip.speed(ship, equipments_by_slot, star_by_slot, [], rank_by_slot);

        ship = _ship(ship);
        equipments_by_slot = equipments_by_slot || [];
        options = options || {};

        var result = parseInt(ship.stat.speed);
        var theResult = function theResult(_theResult) {
            _theResult = Math.min(20, _theResult || result);
            if (options.returnNumber) return _theResult;
            return KC.statSpeed[_theResult];
        };

        // if (equipments_by_slot[4]) {
        //     let id = typeof equipment == 'number' ? equipments_by_slot[4] : _equipment(equipments_by_slot[4])['id']
        //     if( id != 33 )
        //         return theResult()
        // } else {
        //     return theResult()
        // }

        var count = {
            '33': 0,
            '34': 0,
            '87': 0
        };
        var rule = ship._speedRule || 'low-2';
        var multiper = 0;

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment) return;

            var id = typeof equipment == 'number' ? equipment : _equipment(equipment)['id'];

            if (typeof count['' + id] !== 'undefined') count['' + id]++;
        });

        if (!count['33']) return theResult();

        switch (rule) {
            case 'low-1':
                // 低速A
                // 	基础		5
                // 	最大		20
                // 	1x + 0y		+5		0.3x
                // 	2x + 0y		+5		0.3x
                // 	3x + 0y		+5		0.3x
                // 	0x + 1y		+5		0.7x
                // 	1x + 1y		+10		1x
                // 	2x + 1y		+10		1x
                // 	3x + 1y		+10		1x
                // 	0x + 2y		+10		1.4x
                // 	1x + 2y		+15		1.7x
                // 	2x + 2y		+15		1.7x
                // 	3x + 2y		+15		1.7x
                // 	0x + 3y		+15		2.1x
                // 	1x + 2y		+15
                // 	2x + 2y		+15
                // 	3x + 2y		+15
                // 	x = 0.3
                // 	y = 0.7
                multiper = 0.3 * Math.min(count['34'], 1) + 0.7 * count['87'];
                break;
            case 'low-2':
            case 'high-3':
                // 低速B
                // 	基础		5
                // 	最大		15
                // 	1x + 0y		+5		0.33x
                // 	2x + 0y		+5		0.66x
                // 	3x + 0y		+10		1x
                // 	0x + 1y		+5		0.5x
                // 	1x + 1y		+5		0.83x
                // 	2x + 1y		+10		1.33x
                // 	0x + 2y		+10		1x
                // 	x = 0.33
                // 	y = 0.5
                // 高速C
                // 	基础		10
                // 	最大		20
                // 	1x + 0y		+5		0.33x
                // 	2x + 0y		+5		0.66x
                // 	3x + 0y		+10		1x
                // 	0x + 1y		+5		0.5x
                // 	1x + 1y		+5		0.83x
                // 	2x + 1y		+10		1.33x
                // 	0x + 2y		+10		1x
                // 	x = 0.33
                // 	y = 0.5
                if (count['34'] || count['87']) multiper = Math.min(1, count['34'] / 3 + 0.5 * count['87']);
                break;
            case 'low-3':
            case 'high-4':
                // 低速C
                // 	基础		5
                // 	最大		10
                // 高速D
                // 	基础		10
                // 	最大		15
                if (count['34'] || count['87']) result += 5;
                break;
            case 'high-1':
                // 高速A
                // 	基础		10
                // 	最大 		20
                // 	1x + 0y		+5		0.5x
                // 	1x + 1y		+10		1.5x
                // 	0x + 1y		+10		1x
                // 	x = 0.5
                // 	y = 1
                multiper = 0.5 * count['34'] + 1 * count['87'];
                break;
            case 'high-2':
                // 高速B
                // 	基础		10
                // 	最大 		20
                // 	1x + 0y		+5		0.5x
                // 	2x + 0y		+10		1x
                // 	0x + 1y		+5		0.5x
                // 	1x + 1y		+10		1x
                // 	0x + 2y		+10		1x
                // 	x = 0.5
                // 	y = 0.5
                multiper = 0.5 * count['34'] + 0.5 * count['87'];
                break;
            case 'low-4':
                // 低速4
                // 	基础		5
                // 	最大 		20
                // 	1x + 0y		+5		0.5x
                // 	2x + 0y		+10		1x
                // 	0x + 1y		+5		0.5x
                // 	1x + 1y		+10		1x
                // 	0x + 2y		+10		1x
                // 	x = 0.5
                // 	y = 0.5
                multiper = 0.5;
                break;
        }

        // console.log(
        //     ship, equipments_by_slot,
        //     count,
        //     rule,
        //     multiper
        // )

        if (multiper > 0 && multiper < 1) result += 5;else if (multiper >= 1 && multiper < 1.5) result += 10;else if (multiper >= 1.5) result += 15;

        return theResult();
    };
    formula.calcByShip.fireRange = function (ship, equipments_by_slot) {
        if (!ship) return '-';
        equipments_by_slot = equipments_by_slot || [];

        var result = parseInt(ship.stat.range);

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment) return;

            result = Math.max(result, _equipment(equipment).stat.range || 0);
        });

        return KC.statRange[result];
    };
    // Calculate by Fleet
    formula.calcByFleet.los33 = function (data, hq) {
        /* data [
            [
                {number} shipId,
                [ // ship stat
                    {number} shipLv,
                    {number} shipLuck
                ],
                [ // equipment id
                    {number} slot 1 id,
                    {number} slot 2 id,
                    {number} slot 3 id,
                    {number} slot 4 id,
                    {number} slot x id
                ],
                [ // equipment star
                    {number} slot 1 star,
                    {number} slot 2 star,
                    {number} slot 3 star,
                    {number} slot 4 star,
                    {number} slot x star
                ],
                [ // equipment rank
                    {number} slot 1 rank,
                    {number} slot 2 rank,
                    {number} slot 3 rank,
                    {number} slot 4 rank,
                    {number} slot x rank
                ]
            ]
        ]*/

        var equipments = [],
            ships = [];

        data.forEach(function (dataShip) {
            if (!Array.isArray(dataShip)) return;

            var shipId = dataShip[0];

            if (shipId) {
                var equipmentIdPerSlot = dataShip[2];
                var equipmentStarPerSlot = dataShip[3];
                var equipmentRankPerSlot = dataShip[4];
                ships.push({
                    id: shipId,
                    lv: dataShip[1][0]
                });
                equipmentIdPerSlot.forEach(function (equipmentId, index) {
                    equipments.push({
                        id: equipmentId,
                        star: equipmentStarPerSlot[index],
                        rank: equipmentRankPerSlot[index]
                    });
                });
            }
        });

        return formula.calc.los33({
            hq: hq,
            equipments: equipments,
            ships: ships
        });
    };
    // Calculate by Airfield
    formula.calcByField.fighterPowerAA = function (data) {
        /*
         * data [
         *      equipment: equipmentId || Equipment,
         *      star: Number,
         *      rank: Number,
         *      [carry]: Number
         * ]
         */
        var result = [0, 0],
            reconBonus = 1;

        function getReconBonus(bonus) {
            reconBonus = Math.max(bonus, reconBonus);
            return reconBonus;
        }

        data.forEach(function (d) {
            var equipment = _equipment(d[0] || d.equipment || d.equipmentId),
                star = d[1] || d.star || 0,
                rank = d[2] || d.rank || 0,
                carry = d[3] || d.carry || 0,
                _r = formula.calc.fighterPowerAA(equipment, carry, rank, star);

            if (!carry) {
                if (formula.equipmentType.Recons.indexOf(equipment.type) > -1) carry = 4;else carry = 18;
            }
            result[0] += _r[0];
            result[1] += _r[1];

            // 计算侦察机加成
            switch (equipment.type) {
                case _equipmentType.CarrierRecon:
                case _equipmentType.CarrierRecon2:
                    if (equipment.stat.los <= 7) {
                        getReconBonus(1.2);
                    } else if (equipment.stat.los >= 9) {
                        getReconBonus(1.3);
                    } else {
                        getReconBonus(1.25);
                    }
                    break;
                case _equipmentType.ReconSeaplane:
                case _equipmentType.ReconSeaplaneNight:
                case _equipmentType.LargeFlyingBoat:
                    if (equipment.stat.los <= 7) {
                        getReconBonus(1.1);
                    } else if (equipment.stat.los >= 9) {
                        getReconBonus(1.16);
                    } else {
                        getReconBonus(1.13);
                    }
                    break;
            }
        });

        result[0] = result[0] * reconBonus;
        result[1] = result[1] * reconBonus;

        return result;
    };
    // Get bonus for specified ship and equipment(s)
    formula.getBonus = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, stat) {
        return __calculateBonus(ship, equipments_by_slot, star_by_slot, rank_by_slot, stat);
    };

    /**
     * ES/JS Functions/Features
     */
    // Array.prototype.indexOf()
    // Production steps of ECMA-262, Edition 5, 15.4.4.14
    // Reference: http://es5.github.io/#x15.4.4.14
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {

            var k;

            // 1. Let o be the result of calling ToObject passing
            //    the this value as the argument.
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let lenValue be the result of calling the Get
            //    internal method of o with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = o.length >>> 0;

            // 4. If len is 0, return -1.
            if (len === 0) {
                return -1;
            }

            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }

            // 6. If n >= len, return -1.
            if (n >= len) {
                return -1;
            }

            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            // 9. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the
                //    HasProperty internal method of o with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                //    i.  Let elementK be the result of calling the Get
                //        internal method of o with the argument ToString(k).
                //   ii.  Let same be the result of applying the
                //        Strict Equality Comparison Algorithm to
                //        searchElement and elementK.
                //  iii.  If same is true, return k.
                if (k in o && o[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

    /**
     * 
     */
    KC.Entity = Entity;
    KC.Equipment = Equipment;
    KC.Ship = Ship;
    KC.Consumable = Consumable;
    KC.formula = formula;

    return KC;
});