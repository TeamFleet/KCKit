    /**
     * KC Formulas
     */
    let _ship = (ship) => {
        return ship instanceof Ship
            ? ship
            : (KC.db.ships ? KC.db.ships[ship] : {})
    };
    let _equipment = (equipment) => {
        return equipment instanceof Equipment
            ? equipment
            : (KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment])
    };
    let _slots = (arrSlot) => {
        let slots = arrSlot.map(value => value)
        slots[4] = 0
        return slots
    }
    let formula = {
        // 装备类型
        equipmentType: {
            SmallCaliber: 1,		// 小口径主炮
            SmallCaliberHigh: 2,		// 小口径主炮（高角）
            SmallCaliberAA: 3,		// 小口径主炮（高射）
            MediumCaliber: 4,		// 中口径主炮
            LargeCaliber: 5,		// 大口径主炮
            SuperCaliber: 6,		// 超大口径主炮
            SecondaryGun: 7,		// 副炮
            SecondaryGunHigh: 8,		// 副炮（高角）
            SecondaryGunAA: 9,		// 副炮（高射）
            APShell: 11,		// 穿甲弹
            Torpedo: 12,		// 鱼雷
            SubmarineTorpedo: 13,		// 潜艇鱼雷
            MidgetSubmarine: 14,		// 微型潜艇
            ReconSeaplane: 15,		// 水上侦察机
            ReconSeaplaneNight: 16,		// 夜侦
            SeaplaneBomber: 17,		// 水上轰炸机
            CarrierFighter: 18,		// 舰战 / 舰载战斗机
            TorpedoBomber: 19,		// 舰攻 / 舰载鱼雷轰炸机
            DiveBomber: 20,		// 舰爆 / 舰载俯冲轰炸机
            CarrierRecon: 21,		// 舰侦 / 舰载侦察机
            Autogyro: 22,		// 旋翼机
            AntiSubPatrol: 23,		// 对潜哨戒机
            SmallRadar: 24,		// 小型雷达
            LargeRadar: 25,		// 大型雷达
            DepthCharge: 26,		// 爆雷
            Sonar: 27,		// 声纳
            LargeSonar: 28,		// 大型声纳
            AAGun: 29,		// 对空机枪
            AAGunConcentrated: 30,		// 对空机枪（集中配备）
            AAFireDirector: 31,     // 高射装置
            LandingCraft: 38,     // 登陆艇
            Searchlight: 39,		// 探照灯
            CommandFacility: 45,    // 舰队司令部设施
            LargeFlyingBoat: 45,		// 大型水上飞艇
            SearchlightLarge: 46,		// 大型探照灯
            SuparRadar: 47,		// 超大型雷达
            CarrierRecon2: 50,		// 舰侦II / 舰载侦察机II
            SeaplaneFighter: 51,		// 水战 / 水上战斗机
            AmphibiousCraft: 52,     // 特型内火艇
            LandBasedAttacker: 53,		// 陆攻 / 陆上攻击机
            Interceptor: 54,		// 局战 / 局地战斗机
            JetBomberFighter: 55,		// 喷气式战斗轰炸机
            JetBomberFighter2: 56,		// 喷气式战斗轰炸机
            TransportMaterial: 57,	    // 运输设备
            SubmarineEquipment: 58,		// 潜艇装备
            LandBasedFighter: 59    // 陆战 / 陆上战斗机
        },
        // 舰种
        shipType: {
            // 航母系列
            Carriers: [
                9,		// 轻型航母
                10,		// 正规航母
                11,		// 装甲航母
                30,		// 攻击型轻航母
                32      // 特设航母
            ],
            // 轻巡系列
            LightCruisers: [
                2,		// 轻巡洋舰
                3,		// 重雷装巡洋舰
                21,		// 练习巡洋舰
                28		// 防空轻巡洋舰
            ],
            // 潜艇系列
            Submarines: [
                13,		// 潜艇
                14		// 航母潜艇
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
    let _equipmentType = formula.equipmentType;
    // 装备类型集合
    _equipmentType.MainGuns = [
        _equipmentType.SmallCaliber,
        _equipmentType.SmallCaliberHigh,
        _equipmentType.SmallCaliberAA,
        _equipmentType.MediumCaliber,
        _equipmentType.LargeCaliber,
        _equipmentType.SuperCaliber
    ];

    _equipmentType.SmallCalibers = [
        _equipmentType.SmallCaliber,
        _equipmentType.SmallCaliberHigh,
        _equipmentType.SmallCaliberAA
    ];

    _equipmentType.MediumCalibers = [
        _equipmentType.MediumCaliber
    ];

    _equipmentType.LargeCalibers = [
        _equipmentType.LargeCaliber,
        _equipmentType.SuperCaliber
    ];

    _equipmentType.SecondaryGuns = [
        _equipmentType.SecondaryGun,
        _equipmentType.SecondaryGunHigh,
        _equipmentType.SecondaryGunAA
    ];

    _equipmentType.APShells = [
        _equipmentType.APShell
    ];

    _equipmentType.Torpedos = [
        _equipmentType.Torpedo,
        _equipmentType.SubmarineTorpedo
    ];

    _equipmentType.Seaplanes = [
        _equipmentType.ReconSeaplane,
        _equipmentType.ReconSeaplaneNight,
        _equipmentType.SeaplaneBomber,
        _equipmentType.SeaplaneFighter
    ];

    _equipmentType.Fighters = [
        _equipmentType.SeaplaneBomber,
        _equipmentType.CarrierFighter,
        _equipmentType.TorpedoBomber,
        _equipmentType.DiveBomber,
        _equipmentType.SeaplaneFighter,
        _equipmentType.LandBasedAttacker,
        _equipmentType.Interceptor,
        // _equipmentType.CarrierRecon
        _equipmentType.JetBomberFighter,
        _equipmentType.JetBomberFighter2,
        _equipmentType.LandBasedFighter
    ];

    _equipmentType.Interceptors = [
        _equipmentType.Interceptor,
        _equipmentType.LandBasedFighter
    ]

    _equipmentType.Recons = [
        _equipmentType.ReconSeaplane,
        _equipmentType.ReconSeaplaneNight,
        _equipmentType.CarrierRecon,
        _equipmentType.CarrierRecon2,
        _equipmentType.LargeFlyingBoat
    ];

    _equipmentType.SeaplaneRecons = [
        _equipmentType.ReconSeaplane,
        _equipmentType.ReconSeaplaneNight,
    ];

    _equipmentType.SeaplaneReconsAll = [
        _equipmentType.ReconSeaplane,
        _equipmentType.ReconSeaplaneNight,
        _equipmentType.LargeFlyingBoat
    ];

    _equipmentType.SeaplaneBombers = [
        _equipmentType.SeaplaneBomber,
        _equipmentType.SeaplaneFighter
    ];

    _equipmentType.SeaplaneFighters = [
        _equipmentType.SeaplaneFighter
    ];

    _equipmentType.CarrierFighters = [
        _equipmentType.CarrierFighter
    ];

    _equipmentType.CarrierRecons = [
        _equipmentType.CarrierRecon,
        _equipmentType.CarrierRecon2
    ];

    _equipmentType.CarrierBased = [
        _equipmentType.CarrierFighter,
        _equipmentType.TorpedoBomber,
        _equipmentType.DiveBomber,
        _equipmentType.CarrierRecon,
        _equipmentType.CarrierRecon2,
        _equipmentType.JetBomberFighter,
        _equipmentType.JetBomberFighter2
    ];

    _equipmentType.LandBased = [
        _equipmentType.LandBasedAttacker,
        _equipmentType.Interceptor,
        _equipmentType.JetBomberFighter,
        _equipmentType.JetBomberFighter2,
        _equipmentType.LandBasedFighter
    ];

    _equipmentType.TorpedoBombers = [
        _equipmentType.TorpedoBomber
    ];

    _equipmentType.DiveBombers = [
        _equipmentType.DiveBomber
    ];

    _equipmentType.JetBomberFighters = [
        _equipmentType.JetBomberFighter,
        _equipmentType.JetBomberFighter2
    ];

    _equipmentType.Autogyros = [
        _equipmentType.Autogyro
    ];

    _equipmentType.AntiSubPatrols = [
        _equipmentType.AntiSubPatrol
    ];

    _equipmentType.Aircrafts = [];
    [].concat(_equipmentType.Seaplanes)
        .concat(_equipmentType.Recons)
        .concat(_equipmentType.CarrierBased)
        .concat(_equipmentType.Autogyros)
        .concat(_equipmentType.AntiSubPatrols)
        .concat(_equipmentType.LandBased)
        .forEach(function (v) {
            if (_equipmentType.Aircrafts.indexOf(v) < 0)
                _equipmentType.Aircrafts.push(v)
        });

    _equipmentType.Radars = [
        _equipmentType.SmallRadar,
        _equipmentType.LargeRadar,
        _equipmentType.SuparRadar
    ];

    _equipmentType.SmallRadars = [
        _equipmentType.SmallRadar
    ];

    _equipmentType.LargeRadars = [
        _equipmentType.LargeRadar,
        _equipmentType.SuparRadar
    ];

    _equipmentType.AntiSubmarines = [
        _equipmentType.DepthCharge,
        _equipmentType.Sonar,
        _equipmentType.LargeSonar
    ];

    _equipmentType.DepthCharges = [
        _equipmentType.DepthCharge
    ];

    _equipmentType.Sonars = [
        _equipmentType.Sonar,
        _equipmentType.LargeSonar
    ];

    _equipmentType.AAGuns = [
        _equipmentType.AAGun,
        _equipmentType.AAGunConcentrated
    ];

    _equipmentType.AAFireDirectors = [
        _equipmentType.AAFireDirector
    ];

    _equipmentType.Searchlights = [
        _equipmentType.Searchlight,
        _equipmentType.SearchlightLarge
    ];

    _equipmentType.LandingCrafts = [
        _equipmentType.LandingCraft,
        _equipmentType.AmphibiousCraft
    ];

    _equipmentType.AmphibiousCrafts = [
        _equipmentType.AmphibiousCraft
    ];

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
            night: 1
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
        Radars: {
            los: 1.25
        },
        Seaplanes: {
        },
        SeaplaneRecons: {
            los: 1.2
        },
        SeaplaneFighters: {
            fighter: 0.2
        },
        CarrierFighters: {
            fighter: 0.2
        },
        DiveBombers: {
            fighter: 0.25
        },
        LandingCrafts: {
            shelling: 1,
            night: 1
        }
    };
    formula.getStarMultiper = function (equipmentType, type) {
        if (!formula.starMultiper._init) {
            for (let i in formula.starMultiper) {
                if (_equipmentType[i] && _equipmentType[i].forEach) {
                    _equipmentType[i].forEach(function (tid) {
                        formula.starMultiper[tid] = formula.starMultiper[i]
                    })
                }
            }
            formula.starMultiper._init = true
        }
        return formula.starMultiper[equipmentType] ? (formula.starMultiper[equipmentType][type] || 0) : 0
    };
    // 飞行器熟练度对制空战力的加成
    formula.getFighterPowerRankMultiper = (equipment, rank, options) => {
        equipment = _equipment(equipment)

        let rankInternal = []
            , typeValue = {}

        rankInternal[0] = [0, 9]
        rankInternal[1] = [10, 24]
        rankInternal[2] = [25, 39]
        rankInternal[3] = [40, 54]
        rankInternal[4] = [55, 69]
        rankInternal[5] = [70, 84]
        rankInternal[6] = [85, 99]
        rankInternal[7] = [100, 120]

        typeValue.CarrierFighter = [
            0,
            0,
            2,
            5,
            9,
            14,
            14,
            22
        ]

        typeValue.SeaplaneBomber = [
            0,
            0,
            1,
            1,
            1,
            3,
            3,
            6
        ]

        let _rankInternal = rankInternal[rank]
            , _typeValue = 0

        switch (equipment.type) {
            case _equipmentType.CarrierFighter:
            case _equipmentType.Interceptor:
            case _equipmentType.SeaplaneFighter:
            case _equipmentType.LandBasedFighter:
                _typeValue = typeValue.CarrierFighter[rank];
                break;
            case _equipmentType.SeaplaneBomber:
                _typeValue = typeValue.SeaplaneBomber[rank]
                break;
        }

        return {
            min: Math.sqrt(_rankInternal[0] / 10) + _typeValue,
            max: Math.sqrt(_rankInternal[1] / 10) + _typeValue
        }
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
        if (!type || !ship)
            return 0

        if (!(ship instanceof Ship))
            ship = KC.db.ships[ship]

        let result = 0
            , count = {
                'main': 0,
                'secondary': 0,
                'torpedo': 0,
                'seaplane': 0,
                'apshell': 0,
                'radar': 0
            }
            , slots = _slots(ship.slot)
            , powerTorpedo = function (options) {
                options = options || {}
                let result = 0
                if (formula.shipType.Carriers.indexOf(ship.type) > -1 && !options.isNight) {
                    return options.returnZero ? 0 : -1
                } else {
                    result = ship.stat.torpedo_max || 0
                    slots.map(function (carry, index) {
                        if (equipments_by_slot[index]) {
                            result += (equipments_by_slot[index].type == _equipmentType.TorpedoBomber && !options.isNight)
                                ? 0
                                : (equipments_by_slot[index].stat.torpedo || 0)

                            // 改修加成
                            if (star_by_slot[index] && !options.isNight) {
                                result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiper(
                                    equipments_by_slot[index].type,
                                    'torpedo'
                                )
                            }
                        }
                    })
                    return result
                }
                //return (ship.stat.torpedo_max || 0)
            }
            , value = 0

        equipments_by_slot = equipments_by_slot.map(function (equipment) {
            if (!equipment)
                return null
            if (equipment instanceof Equipment)
                return equipment
            return KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment]
        }) || []
        star_by_slot = star_by_slot || []
        rank_by_slot = rank_by_slot || []
        options = options || {}

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment)
                return
            if (_equipmentType.MainGuns.indexOf(equipment.type) > -1)
                count.main += 1
            else if (_equipmentType.SecondaryGuns.indexOf(equipment.type) > -1)
                count.secondary += 1
            else if (_equipmentType.Torpedos.indexOf(equipment.type) > -1)
                count.torpedo += 1
            else if (_equipmentType.Seaplanes.indexOf(equipment.type) > -1)
                count.seaplane += 1
            else if (_equipmentType.APShells.indexOf(equipment.type) > -1)
                count.apshell += 1
            else if (_equipmentType.Radars.indexOf(equipment.type) > -1)
                count.radar += 1
        })

        switch (type) {
            // 制空战力，装备须为战斗机类型 _equipmentType.Fighters
            // 计算公式参考 http://bbs.ngacn.cc/read.php?tid=8680767
            case 'fighterPower':
                value = 0
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index]
                        && _equipmentType.Fighters.indexOf(equipments_by_slot[index].type) > -1
                        && carry
                    ) {
                        value = Math.sqrt(carry) * (equipments_by_slot[index].stat.aa || 0)
                        if (equipments_by_slot[index].type == _equipmentType.CarrierFighter) {
                            switch (rank_by_slot[index]) {
                                case 1: case '1':
                                    value += 1; break;
                                case 2: case '2':
                                    value += 4; break;
                                case 3: case '3':
                                    value += 6; break;
                                case 4: case '4':
                                    value += 11; break;
                                case 5: case '5':
                                    value += 16; break;
                                case 6: case '6':
                                    value += 17; break;
                                case 7: case '7':
                                    value += 25; break;
                            }
                        } else if (_equipmentType.Recons.indexOf(equipments_by_slot[index].type) == -1) {
                            let max_per_slot = equipments_by_slot[index].type == _equipmentType.SeaplaneBomber
                                ? 9
                                : 3
                            value += rank_by_slot[index] == 1
                                ? 1
                                : max_per_slot / 6 * (rank_by_slot[index] - 1)
                        }
                        result += Math.floor(value)
                    }
                })
                return result
            //return Math.floor(result)
            //break;

            // 同时返回制空战力的上下限
            // 返回值为Array
            case 'fighterPower_v2':
                return formula.calcByShip.fighterPower_v2(ship, equipments_by_slot, star_by_slot, rank_by_slot)
            //break;

            // 炮击威力，除潜艇外
            case 'shelling':
            case 'shellingDamage':
                if (formula.shipType.Submarines.indexOf(ship.type) > -1) {
                    return '-'
                } else {
                    result = formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot)
                    if (result && result > -1)
                        return Math.floor(result)// + 5
                    return '-'
                }
            //break;

            // 雷击威力，航母除外
            case 'torpedo':
            case 'torpedoDamage':
                result = powerTorpedo()
                if (result && result > -1)
                    return Math.floor(result)// + 5
                return '-'
            //break;

            // 夜战模式 & 伤害力
            case 'nightBattle':
                if (!ship.additional_night_shelling && formula.shipType.Carriers.indexOf(ship.type) > -1) {
                    // 航母没有夜战
                    return '-'
                } else {
                    //console.log(count)
                    result = formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {
                        isNight: true
                    }) + powerTorpedo({ isNight: true, returnZero: true })
                    // 改修加成
                    slots.map(function (carry, index) {
                        if (equipments_by_slot[index]) {
                            if (star_by_slot[index]) {
                                result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiper(
                                    equipments_by_slot[index].type,
                                    'night'
                                )
                            }
                        }
                    })
                    /*
                    console.log(
                        '夜',
                        formula.calcByShip.shellingPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, {isNight: true}),
                        powerTorpedo({isNight: true, returnZero: true}),
                        result
                    )
                    */
                    if (count.torpedo >= 2) {
                        return '雷击CI ' + Math.floor(result * 1.5) + ' x 2'
                    } else if (count.main >= 3) {
                        return '炮击CI ' + Math.floor(result * 2) + ''
                    } else if (count.main == 2 && count.secondary >= 1) {
                        return '炮击CI ' + Math.floor(result * 1.75) + ''
                    } else if (count.main >= 1 && count.torpedo == 1) {
                        return '炮雷CI ' + Math.floor(result * 1.3) + ' x 2'
                    } else if (
                        (count.main == 2 && count.secondary <= 0 && count.torpedo <= 0)
                        || (count.main == 1 && count.secondary >= 1 && count.torpedo <= 0)
                        || (count.main == 0 && count.secondary >= 2 && count.torpedo >= 0)
                    ) {
                        return '连击 ' + Math.floor(result * 1.2) + ' x 2'
                    } else {
                        return '通常 ' + Math.floor(result) + ''
                    }
                }
            //break;

            // 命中总和
            case 'addHit':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index])
                        result += equipments_by_slot[index].stat.hit || 0
                })
                return result >= 0 ? '+' + result : result
            //break;

            // 装甲总和
            case 'addArmor':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index])
                        result += equipments_by_slot[index].stat.armor || 0
                })
                return result
            //break;

            // 回避总和
            case 'addEvasion':
                slots.map(function (carry, index) {
                    if (equipments_by_slot[index])
                        result += equipments_by_slot[index].stat.evasion || 0
                })
                return result
            //break;

            // 索敌能力
            case 'losPower':
                return formula.calcByShip.losPower(ship, equipments_by_slot, star_by_slot, rank_by_slot, options)
            //break;
            default:
                return formula.calcByShip[type](ship, equipments_by_slot, star_by_slot, rank_by_slot, options)
            //break;
        }

        //return '-'
    };
    // 计算快捷方式
    formula.shellingDamage = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('shellingDamage', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.torpedoDamage = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('torpedoDamage', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.fighterPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('fighterPower', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.fighterPower_v2 = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('fighterPower_v2', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.nightBattle = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('nightBattle', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.addHit = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addHit', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.addArmor = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addArmor', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.addEvasion = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        return this.calculate('addEvasion', ship, equipments_by_slot, star_by_slot, rank_by_slot)
    };
    formula.losPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        return this.calculate('losPower', ship, equipments_by_slot, star_by_slot, rank_by_slot, options)
    };
    // Formulas
    formula.calc.losPower = function (data) {
        // http://biikame.hatenablog.com/entry/2014/11/14/224925

        var calc = function (x) {
            if (typeof x['(Intercept)'] == 'undefined')
                x['(Intercept)'] = 1
            x.hqLv = (Math.ceil(x.hqLv / 5) * 5);
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
                x_estimate: x_estimate
                , y_estimate: y_estimate
                , x_std_error: x_std_error
                , y_std_error: y_std_error
            };
        };
        var keys = [
            '(Intercept)'
            , 'DiveBombers'
            , 'TorpedoBombers'
            , 'CarrierRecons'
            , 'SeaplaneReconsAll'
            , 'SeaplaneBombers'
            , 'SmallRadars'
            , 'LargeRadars'
            , 'Searchlights'
            , 'statLos'
            , 'hqLv'
        ];
        var estimate_coefficients = {
            '(Intercept)': 0
            , 'DiveBombers': 1.03745043134563
            , 'TorpedoBombers': 1.3679056374142
            , 'CarrierRecons': 1.65940512636315
            , 'SeaplaneReconsAll': 2
            , 'SeaplaneBombers': 1.77886368594467
            , 'SmallRadars': 1.0045778494921
            , 'LargeRadars': 0.990738063979571
            , 'Searchlights': 0.906965144360512
            , 'statLos': 1.6841895400986
            , 'hqLv': -0.614246711531445
        };
        var std_error_coefficients = {
            '(Intercept)': 4.66445565766347
            , 'DiveBombers': 0.0965028505325845
            , 'TorpedoBombers': 0.108636184978525
            , 'CarrierRecons': 0.0976055279516298
            , 'SeaplaneReconsAll': 0.0866229392463539
            , 'SeaplaneBombers': 0.0917722496848294
            , 'SmallRadars': 0.0492773648320346
            , 'LargeRadars': 0.0491221486053861
            , 'Searchlights': 0.0658283797225724
            , 'statLos': 0.0781594211213618
            , 'hqLv': 0.0369222352426548
        };
        var correlation = {
            '(Intercept)': {
                '(Intercept)': 1
                , 'DiveBombers': -0.147020064768061
                , 'TorpedoBombers': -0.379236131621529
                , 'CarrierRecons': -0.572858669501918
                , 'SeaplaneReconsAll': -0.733913857017495
                , 'SeaplaneBombers': -0.642621825152428
                , 'SmallRadars': -0.674829588068364
                , 'LargeRadars': -0.707418111752863
                , 'Searchlights': -0.502304601556193
                , 'statLos': -0.737374218573832
                , 'hqLv': -0.05071933950163
            }
            , 'DiveBombers': {
                '(Intercept)': -0.147020064768061
                , 'DiveBombers': 1
                , 'TorpedoBombers': 0.288506347076736
                , 'CarrierRecons': 0.365820372770994
                , 'SeaplaneReconsAll': 0.425744409856409
                , 'SeaplaneBombers': 0.417783698791503
                , 'SmallRadars': 0.409046013184429
                , 'LargeRadars': 0.413855653833994
                , 'Searchlights': 0.308730607324667
                , 'statLos': 0.317984916914851
                , 'hqLv': -0.386740224500626
            }
            , 'TorpedoBombers': {
                '(Intercept)': -0.379236131621529
                , 'DiveBombers': 0.288506347076736
                , 'TorpedoBombers': 1
                , 'CarrierRecons': 0.482215071254241
                , 'SeaplaneReconsAll': 0.584455876852325
                , 'SeaplaneBombers': 0.558515133495825
                , 'SmallRadars': 0.547260012897553
                , 'LargeRadars': 0.560437619378443
                , 'Searchlights': 0.437934879351188
                , 'statLos': 0.533934507932748
                , 'hqLv': -0.405349979885748
            }
            , 'CarrierRecons': {
                '(Intercept)': -0.572858669501918
                , 'DiveBombers': 0.365820372770994
                , 'TorpedoBombers': 0.482215071254241
                , 'CarrierRecons': 1
                , 'SeaplaneReconsAll': 0.804494553748065
                , 'SeaplaneBombers': 0.75671307047535
                , 'SmallRadars': 0.748420581669228
                , 'LargeRadars': 0.767980338133817
                , 'Searchlights': 0.589651513349878
                , 'statLos': 0.743851348255527
                , 'hqLv': -0.503544281376776
            }
            , 'SeaplaneReconsAll': {
                '(Intercept)': -0.733913857017495
                , 'DiveBombers': 0.425744409856409
                , 'TorpedoBombers': 0.584455876852325
                , 'CarrierRecons': 0.804494553748065
                , 'SeaplaneReconsAll': 1
                , 'SeaplaneBombers': 0.932444440578382
                , 'SmallRadars': 0.923988080549326
                , 'LargeRadars': 0.94904944359066
                , 'Searchlights': 0.727912987329348
                , 'statLos': 0.944434077970518
                , 'hqLv': -0.614921413821462
            }
            , 'SeaplaneBombers': {
                '(Intercept)': -0.642621825152428
                , 'DiveBombers': 0.417783698791503
                , 'TorpedoBombers': 0.558515133495825
                , 'CarrierRecons': 0.75671307047535
                , 'SeaplaneReconsAll': 0.932444440578382
                , 'SeaplaneBombers': 1
                , 'SmallRadars': 0.864289865445084
                , 'LargeRadars': 0.886872388674911
                , 'Searchlights': 0.68310647756898
                , 'statLos': 0.88122333327317
                , 'hqLv': -0.624797255805045
            }
            , 'SmallRadars': {
                '(Intercept)': -0.674829588068364
                , 'DiveBombers': 0.409046013184429
                , 'TorpedoBombers': 0.547260012897553
                , 'CarrierRecons': 0.748420581669228
                , 'SeaplaneReconsAll': 0.923988080549326
                , 'SeaplaneBombers': 0.864289865445084
                , 'SmallRadars': 1
                , 'LargeRadars': 0.872011318623459
                , 'Searchlights': 0.671926570242336
                , 'statLos': 0.857213501657084
                , 'hqLv': -0.560018086758868
            }
            , 'LargeRadars': {
                '(Intercept)': -0.707418111752863
                , 'DiveBombers': 0.413855653833994
                , 'TorpedoBombers': 0.560437619378443
                , 'CarrierRecons': 0.767980338133817
                , 'SeaplaneReconsAll': 0.94904944359066
                , 'SeaplaneBombers': 0.886872388674911
                , 'SmallRadars': 0.872011318623459
                , 'LargeRadars': 1
                , 'Searchlights': 0.690102027588321
                , 'statLos': 0.883771367337743
                , 'hqLv': -0.561336967269448
            }
            , 'Searchlights': {
                '(Intercept)': -0.502304601556193
                , 'DiveBombers': 0.308730607324667
                , 'TorpedoBombers': 0.437934879351188
                , 'CarrierRecons': 0.589651513349878
                , 'SeaplaneReconsAll': 0.727912987329348
                , 'SeaplaneBombers': 0.68310647756898
                , 'SmallRadars': 0.671926570242336
                , 'LargeRadars': 0.690102027588321
                , 'Searchlights': 1
                , 'statLos': 0.723228553177704
                , 'hqLv': -0.518427865593732
            }
            , 'statLos': {
                '(Intercept)': -0.737374218573832
                , 'DiveBombers': 0.317984916914851
                , 'TorpedoBombers': 0.533934507932748
                , 'CarrierRecons': 0.743851348255527
                , 'SeaplaneReconsAll': 0.944434077970518
                , 'SeaplaneBombers': 0.88122333327317
                , 'SmallRadars': 0.857213501657084
                , 'LargeRadars': 0.883771367337743
                , 'Searchlights': 0.723228553177704
                , 'statLos': 1
                , 'hqLv': -0.620804120587684
            }
            , 'hqLv': {
                '(Intercept)': -0.05071933950163
                , 'DiveBombers': -0.386740224500626
                , 'TorpedoBombers': -0.405349979885748
                , 'CarrierRecons': -0.503544281376776
                , 'SeaplaneReconsAll': -0.614921413821462
                , 'SeaplaneBombers': -0.624797255805045
                , 'SmallRadars': -0.560018086758868
                , 'LargeRadars': -0.561336967269448
                , 'Searchlights': -0.518427865593732
                , 'statLos': -0.620804120587684
                , 'hqLv': 1
            }
        };

        var x = {
            'DiveBombers': 0,
            'TorpedoBombers': 0,
            'CarrierRecons': 0,
            'SeaplaneReconsAll': 0,
            'SeaplaneBombers': 0,
            'SmallRadars': 0,
            'LargeRadars': 0,
            'Searchlights': 0,
            'statLos': 1,
            'hqLv': 1
        };

        for (var i in data) {
            x[i] = data[i]
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

        let totalEquipmentValue = 0,
            totalShipValue = 0

        let equipmentTypeValues = {
            TorpedoBombers: 0.8,
            CarrierRecons: 1,

            ReconSeaplane: 1.2,
            ReconSeaplaneNight: 1.2,
            SeaplaneBomber: 1.1
        }
        Object.defineProperty(
            equipmentTypeValues,
            'default',
            {
                value: 0.6,
                enumerable: false,
                configurable: false,
                writable: false
            }
        )
        
        data.equipments.forEach(function(o){
            if (o.id) {
                const equipment = _equipment(o.id)

                if (equipment.stat.los) {
                    let typeValue = equipmentTypeValues.default
                    const star = o.star || 0

                    for (let types in equipmentTypeValues) {
                        let typesForCheck = []

                        if (Array.isArray(_equipmentType[types]))
                            typesForCheck = _equipmentType[types]
                        else
                            typesForCheck = [_equipmentType[types]]

                        if (typesForCheck.indexOf(equipment.type) > -1)
                            typeValue = equipmentTypeValues[types]
                    }

                    totalEquipmentValue
                        += typeValue
                        * (
                            equipment.stat.los
                            + formula.getStarMultiper(equipment.type, 'los') * Math.sqrt(star)
                        )
                }
            }
        })

        data.ships.forEach(function(o){
            const ship = _ship(o.id)
            const shipLOS = ship.getAttribute(
                    'los',
                    Math.max(
                        o.lv || 1,
                        ship.getMinLv()
                    )
                )

            totalShipValue
                += Math.sqrt(Math.max(shipLOS,1))
        })

        return totalEquipmentValue
            + totalShipValue
            - Math.ceil(data.hq * 0.4)
            + 2 * ( 6 - data.ships.length )
    };
    formula.calc.TP = function (count) {
        /* count
        * {
        * 		ship: {
        * 			dd
        * 			cl
        * 			cav
        * 			bbv
        * 			ssv
        * 			av
        * 			lha
        * 			ao
        * 			ct
        * 		},
        * 		equipment: {
        * 			68	// landing craft
        * 			75  // canister
        * 			166  // landing craft (force)
        * 		}
        * }
        */
        count = count || {}
        var result = 0
            , ship = count.ship || {}
            , equipment = count.equipment || {}

        for (let i in ship) {
            let multiper = 0
            switch (i) {
                case 1:
                case '1':
                case 19:
                case '19':
                case 'dd': multiper = 5; break;
                case 2:
                case '2':
                case 28:
                case '28':
                case 'cl': multiper = 2; break;
                case 5:
                case '5':
                case 'cav': multiper = 4; break;
                case 12:
                case '12':
                case 24:
                case '24':
                case 'av': multiper = 9.5; break;
                case 15:
                case '15':
                case 'lha': multiper = 12.25; break;
                case 29:
                case '29':
                case 'ao': multiper = 14.75; break;
                case 8:
                case '8':
                case 'bbv':
                case 14:
                case '14':
                case 'ssv': multiper = 7; break;
                case 21:
                case '21':
                case 'ct': multiper = 6; break;
            }
            result += multiper * (parseInt(ship[i]) || 0)
        }

        for (let i in equipment) {
            let multiper = 0
                , id = parseInt(i)
                , data
            switch (id) {
                // canister
                case 75: multiper = 5; break;
                // landing craft
                case 68: multiper = 8; break;
                // landing craft (large)
                case 193: multiper = 8; break;
                // landing craft (force)
                case 166: multiper = 8; break;
                // 特二式内火艇
                case 167: multiper = 8; break;
                // 戦闘糧食
                case 145: multiper = 1; break;
                // 秋刀魚の缶詰
                case 150: multiper = 1; break;
                default:
                    // 瑞云 & 晴岚
                    data = _equipment(id)
                    switch( data.type ){
                        // case formula.equipmentType.SeaplaneBomber:
                        //     if( data.name.ja_jp.indexOf('瑞雲') > -1 )
                        //         multiper = 2
                        //     else if( data.name.ja_jp.indexOf('晴嵐') > -1 )
                        //         multiper = 4
                        //     break;
                        case formula.equipmentType.LandingCraft:
                            if( data.name.ja_jp.indexOf('大発動艇') > -1 )
                                multiper = 8
                            break;
                    }
            }
            result += multiper * (parseInt(equipment[i]) || 0)
        }

        return result
    };
    formula.calc.fighterPower = function (equipment, carry, rank, star) {
        if (!equipment)
            return [0, 0]

        equipment = equipment instanceof Equipment
            ? equipment
            : (KC.db.equipments ? KC.db.equipments[equipment] : KC.db.items[equipment])
        carry = carry || 0
        rank = rank || 0
        star = star || 0

        // http://bbs.ngacn.cc/read.php?tid=8680767
        // http://ja.kancolle.wikia.com/wiki/%E8%89%A6%E8%BC%89%E6%A9%9F%E7%86%9F%E7%B7%B4%E5%BA%A6

        let results = [0, 0]

        if (_equipmentType.Fighters.indexOf(equipment.type) > -1
            && carry
        ) {
            // Math.floor(Math.sqrt(carry) * (equipment.stat.aa || 0) + Math.sqrt( rankInternal / 10 ) + typeValue)
            // if( star ) console.log( equipment._name, '★+' + star, star * formula.getStarMultiper( equipment.type, 'fighter' ) )
            let statAA = (equipment.stat.aa || 0)
                + (_equipmentType.Interceptors.indexOf(equipment.type) > -1 ? equipment.stat.evasion * 1.5 : 0)
                + (star * formula.getStarMultiper(equipment.type, 'fighter'))
                , base = statAA * Math.sqrt(carry)
                , rankBonus = formula.getFighterPowerRankMultiper(equipment, rank)

            results[0] += Math.floor(base + rankBonus.min)
            results[1] += Math.floor(base + rankBonus.max)
        }

        return results
    };
    formula.calc.fighterPowerAA = function (equipment, carry, rank, star) {
        if (!equipment)
            return [0, 0]

        equipment = _equipment(equipment)
        carry = carry || 0
        rank = rank || 0
        star = star || 0

        // http://wikiwiki.jp/kancolle/?%B4%F0%C3%CF%B9%D2%B6%F5%C2%E2#AirSupremacy

        let results = [0, 0]

        if (carry) {
            let statAA = (equipment.stat.aa || 0)
                + (_equipmentType.Interceptors.indexOf(equipment.type) > -1 ? equipment.stat.evasion : 0)
                + (_equipmentType.Interceptors.indexOf(equipment.type) > -1 ? equipment.stat.hit * 2 : 0)
                + (star * formula.getStarMultiper(equipment.type, 'fighter'))
                , base = statAA * Math.sqrt(carry)
                , rankBonus = formula.getFighterPowerRankMultiper(equipment, rank, {
                    isAA: true
                })

            results[0] += Math.floor(base + rankBonus.min)
            results[1] += Math.floor(base + rankBonus.max)
        }

        return results
    };
    // Calculate by Ship
    formula.calcByShip.shellingPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        options = options || {}

        let result = 0
            , isCV = false
            , slots = _slots(ship.slot)

        // 检查是否为航母攻击模式
        if (formula.shipType.Carriers.indexOf(ship.type) > -1) {
            isCV = true
        } else {
            //equipments_by_slot.forEach(function(equipment){
            //	if( equipment && !isCV && _equipmentType.CarrierBased.indexOf( equipment.type ) > -1 )
            //		isCV = true
            //})
            equipments_by_slot.some(function (equipment) {
                if (equipment && !isCV && _equipmentType.CarrierBased.indexOf(equipment.type) > -1) {
                    isCV = true
                    return true
                }
            })
        }

        if (isCV && !options.isNight) {
            // 航母攻击模式
            let torpedoDamage = 0
                , bombDamage = 0
            slots.map(function (carry, index) {
                if (equipments_by_slot[index]) {
                    result += (equipments_by_slot[index].stat.fire * 1.5) || 0

                    if (equipments_by_slot[index].type == _equipmentType.TorpedoBomber)
                        torpedoDamage += equipments_by_slot[index].stat.torpedo || 0

                    //if( equipments_by_slot[index].type == _equipmentType.DiveBomber )
                    bombDamage += equipments_by_slot[index].stat.bomb || 0

                    if (_equipmentType.SecondaryGuns.indexOf(equipments_by_slot[index].type) > -1)
                        result += Math.sqrt((star_by_slot[index] || 0) * 1.5)
                }
            })
            if (!torpedoDamage && !bombDamage)
                return -1
            else
                result += Math.floor((Math.floor(bombDamage * 1.3) + torpedoDamage + ship.stat.fire_max) * 1.5) + 50
            return result
        } else {
            result = ship.stat.fire_max || 0
            // 其他舰种
            let CLGunNavalNumber = 0
                , CLGunTwinNumber = 0
            slots.map(function (carry, index) {
                if (equipments_by_slot[index]) {
                    result += equipments_by_slot[index].stat.fire || 0

                    // 轻巡系主炮加成
                    if (formula.shipType.LightCruisers.indexOf(ship.type) > -1) {
                        // 4	14cm单装炮
                        // 65	15.2cm连装炮
                        // 119	14cm连装炮
                        // 139	15.2cm连装炮改
                        if (equipments_by_slot[index].id == 4)
                            CLGunNavalNumber += 1
                        if (equipments_by_slot[index].id == 119 || equipments_by_slot[index].id == 65 || equipments_by_slot[index].id == 139)
                            CLGunTwinNumber += 1
                    }

                    // 改修加成
                    if (star_by_slot[index] && !options.isNight) {
                        /*
                        console.log(
                            equipments_by_slot[index]._name,
                            '★+' + star_by_slot[index],
                            formula.getStarMultiper(
                                equipments_by_slot[index].type,
                                options.isNight ? 'night' : 'shelling'
                            ),
                            Math.sqrt(star_by_slot[index]) * formula.getStarMultiper(
                                equipments_by_slot[index].type,
                                options.isNight ? 'night' : 'shelling'
                            ),
                            options.isNight ? '夜战' : '昼战'
                        )
                        */
                        result += Math.sqrt(star_by_slot[index]) * formula.getStarMultiper(
                            equipments_by_slot[index].type,
                            'shelling'
                        )
                    }
                }
            })
            return result + 2 * Math.sqrt(CLGunTwinNumber) + Math.sqrt(CLGunNavalNumber)
        }
        //return (ship.stat.fire_max || 0)
    };
    formula.calcByShip.fighterPower_v2 = function (ship, equipments_by_slot, star_by_slot, rank_by_slot) {
        let results = [0, 0]
            , slots = _slots(ship.slot)

        slots.map(function (carry, index) {
            let r = formula.calc.fighterPower(equipments_by_slot[index], carry, rank_by_slot[index] || 0, star_by_slot[index] || 0)
            results[0] += r[0]
            results[1] += r[1]
        })
        return results
    };
    formula.calcByShip.losPower = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        // http://biikame.hatenablog.com/entry/2014/11/14/224925

        options = options || {}
        options.shipLv = options.shipLv || 1
        options.hqLv = options.hqLv || 1

        if (options.shipLv < 0)
            options.shipLv = 1
        if (options.hqLv < 0)
            options.hqLv = 1

        var x = {
            'DiveBombers': 0,
            'TorpedoBombers': 0,
            'CarrierRecons': 0,
            'SeaplaneReconsAll': 0,
            'SeaplaneBombers': 0,
            'SmallRadars': 0,
            'LargeRadars': 0,
            'Searchlights': 0,
            'statLos': Math.sqrt(ship.getAttribute('los', options.shipLv)),
            'hqLv': options.hqLv
        };

        equipments_by_slot.forEach(function (equipment) {
            if (equipment) {
                for (let i in x) {
                    if (_equipmentType[i]
                        && _equipmentType[i].push
                        && _equipmentType[i].indexOf(equipment.type) > -1
                    )
                        x[i] += equipment.stat.los
                }
            }
        })

        return formula.calc.losPower(x);
    };
    formula.calcByShip.TP = function (ship, equipments_by_slot) {
        if (!ship || !equipments_by_slot || !equipments_by_slot.push)
            return 0;

        ship = _ship(ship);
        var count = {
            ship: {},
            equipment: {}
        }
        count.ship[ship.type] = 1
        equipments_by_slot.forEach(function (equipment) {
            if (equipment) {
                let id = typeof equipment == 'number' ? equipment : _equipment(equipment)['id']
                if (!count.equipment[id])
                    count.equipment[id] = 0
                count.equipment[id]++
            }
        })
        return formula.calc.TP(count)
    };
    formula.calcByShip.speed = function (ship, equipments_by_slot, star_by_slot, rank_by_slot, options) {
        if (!ship) return ''
        if( typeof star_by_slot === 'object' && star_by_slot.push )
            return formula.calcByShip.speed(ship, equipments_by_slot, [], [], star_by_slot)
        if( typeof rank_by_slot === 'object' && rank_by_slot.push )
            return formula.calcByShip.speed(ship, equipments_by_slot, star_by_slot, [], rank_by_slot)

        ship = _ship(ship);
        equipments_by_slot = equipments_by_slot || []
        options = options || {}

        let result = parseInt(ship.stat.speed)
        const theResult = function(theResult){
            theResult = Math.min(20, theResult || result)
            if( options.returnNumber )
                return theResult
            return KC.statSpeed[theResult]
        }

        // if (equipments_by_slot[4]) {
        //     let id = typeof equipment == 'number' ? equipments_by_slot[4] : _equipment(equipments_by_slot[4])['id']
        //     if( id != 33 )
        //         return theResult()
        // } else {
        //     return theResult()
        // }

        let count = {
            '33': 0,
            '34': 0,
            '87': 0
        }
        let rule = ship._speedRule || 'low-2'
        let multiper = 0

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment) return

            let id = typeof equipment == 'number' ? equipment : _equipment(equipment)['id']

            if (typeof count['' + id] !== 'undefined')
                count['' + id]++
        })

        if( !count['33'] ) return theResult()

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
                multiper = 0.3 * Math.min(count['34'], 1)
                    + 0.7 * count['87']
                break
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
                if(count['34'] || count['87'])
                    multiper = Math.min(
                        1,
                        count['34'] / 3 + 0.5 * count['87']
                    )
                break
            case 'low-3':
            case 'high-4':
                // 低速C
                // 	基础		5
                // 	最大		10
                // 高速D
                // 	基础		10
                // 	最大		15
                if (count['34'] || count['87'])
                    result += 5
                break
            case 'high-1':
                // 高速A
                // 	基础		10
                // 	最大 		20
                // 	1x + 0y		+5		0.5x
                // 	1x + 1y		+10		1.5x
                // 	0x + 1y		+10		1x
                // 	x = 0.5
                // 	y = 1
                multiper = 0.5 * count['34'] + 1 * count['87']
                break
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
                multiper = 0.5 * count['34'] + 0.5 * count['87']
                break
        }

        // console.log(
        //     ship, equipments_by_slot,
        //     count,
        //     rule,
        //     multiper
        // )

        if (multiper > 0 && multiper < 1)
            result += 5
        else if (multiper >= 1 && multiper < 1.5)
            result += 10
        else if (multiper >= 1.5)
            result += 15

        return theResult()
    };
    formula.calcByShip.fireRange = function (ship, equipments_by_slot) {
        if (!ship) return '-'
        equipments_by_slot = equipments_by_slot || []

        let result = parseInt(ship.stat.range)

        equipments_by_slot.forEach(function (equipment) {
            if (!equipment) return

            result = Math.max(
                result,
                _equipment(equipment).stat.range || 0
            )
        })

        return KC.statRange[result]
    };
    // Calculate by Fleet
    formula.calcByFleet.los33 = (data, hq) => {
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

        let equipments = [],
            ships = []
        
        data.forEach(function(dataShip) {
            const shipId = dataShip[0]

            if (shipId) {
                const equipmentIdPerSlot = dataShip[2]
                const equipmentStarPerSlot = dataShip[3]
                const equipmentRankPerSlot = dataShip[4]
                ships.push({
                    id: shipId,
                    lv: dataShip[1][0]
                })
                equipmentIdPerSlot.forEach(function(equipmentId, index){
                    equipments.push({
                        id: equipmentId,
                        star: equipmentStarPerSlot[index],
                        rank: equipmentRankPerSlot[index]
                    })
                })
            }
        })

        return formula.calc.los33({
            hq: hq,
            equipments: equipments,
            ships: ships
        })
    };
    // Calculate by Airfield
    formula.calcByField.fighterPowerAA = (data) => {
        /*
         * data [
         *      equipment: equipmentId || Equipment,
         *      star: Number,
         *      rank: Number,
         *      [carry]: Number
         * ]
         */
        let result = [0, 0]
            , reconBonus = 1;

        function getReconBonus(bonus) {
            reconBonus = Math.max(bonus, reconBonus)
            return reconBonus
        }

        data.forEach((d) => {
            let equipment = _equipment(d[0] || d.equipment || d.equipmentId)
                , star = d[1] || d.star || 0
                , rank = d[2] || d.rank || 0
                , carry = d[3] || d.carry || 0
                , _r = formula.calc.fighterPowerAA(equipment, carry, rank, star)

            if (!carry) {
                if (formula.equipmentType.Recons.indexOf(equipment.type) > -1)
                    carry = 4
                else
                    carry = 18
            }
            result[0] += _r[0]
            result[1] += _r[1]

            // 计算侦察机加成
            switch (equipment.type) {
                case _equipmentType.CarrierRecon:
                case _equipmentType.CarrierRecon2:
                    if (equipment.stat.los <= 7) {
                        getReconBonus(1.2)
                    } else if (equipment.stat.los >= 9) {
                        getReconBonus(1.3)
                    } else {
                        getReconBonus(1.25)
                    }
                    break;
                case _equipmentType.ReconSeaplane:
                case _equipmentType.ReconSeaplaneNight:
                case _equipmentType.LargeFlyingBoat:
                    if (equipment.stat.los <= 7) {
                        getReconBonus(1.1)
                    } else if (equipment.stat.los >= 9) {
                        getReconBonus(1.16)
                    } else {
                        getReconBonus(1.13)
                    }
                    break;
            }
        });

        result[0] = result[0] * reconBonus
        result[1] = result[1] * reconBonus

        return result;
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
