/*
 * HA       High Angle
 * AAFD     Anti-Air Fire Director
 */

/**
 * @type {Object} 装备类型和类型集合
 */
const types = {
    // Type ID
    SmallCaliber: 1, // 小口径主炮
    SmallCaliberHigh: 2, // 小口径高角主炮
    SmallCaliberHA: 2, // 小口径高角主炮
    SmallCaliberAA: 3, // 小口径高角主炮（强化）
    SmallCaliberAAFD: 3, // 小口径高角主炮（强化）
    MediumCaliber: 4, // 中口径主炮
    MediumCaliberAA: 64, // 中口径高角主炮（强化）
    MediumCaliberAAFD: 64, // 中口径高角主炮（强化）
    LargeCaliber: 5, // 大口径主炮
    SuperCaliber: 6, // 超大口径主炮
    SecondaryGun: 7, // 副炮
    SecondaryGunHigh: 8, // 高角副炮
    SecondaryGunHA: 8, // 高角副炮
    SecondaryGunAA: 9, // 高角副炮（强化）
    SecondaryGunAAFD: 9, // 高角副炮（强化）
    SecondaryGunAA2: 67, // 高角副炮（强化）II
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
    LandBasedAntiSubPatrol: 62, // 陆上哨戒机
    LandBasedRecon: 63, // 陆上侦察机
    LargeLandBasedAircraft: 65, // 大型陸上機
    NewLandBasedAttacker: 66, // 新型襲撃機
    SeaplaneBomberNight: 68, // 水上轰炸机（夜间）
};

// Groups
types.MainGuns = [
    types.SmallCaliber,
    types.SmallCaliberHigh,
    types.SmallCaliberAA,
    types.MediumCaliber,
    types.MediumCaliberAA,
    types.LargeCaliber,
    types.SuperCaliber,
];
types.MainCalibers = types.MainGuns;

types.SmallCalibers = [
    types.SmallCaliber,
    types.SmallCaliberHigh,
    types.SmallCaliberAA,
];

types.MediumCalibers = [types.MediumCaliber, types.MediumCaliberAA];

types.LargeCalibers = [types.LargeCaliber, types.SuperCaliber];

types.SecondaryGuns = [
    types.SecondaryGun,
    types.SecondaryGunHigh,
    types.SecondaryGunAA,
    types.SecondaryGunAA2,
];

types.HAMounts = [
    types.SmallCaliberHigh,
    types.SmallCaliberAA,
    types.MediumCaliberAA,
    types.SecondaryGunHigh,
    types.SecondaryGunAA,
    types.SecondaryGunAA2,
];

types.HAMountsAAFD = [
    types.SmallCaliberAA,
    types.MediumCaliberAA,
    types.SecondaryGunAA,
    types.SecondaryGunAA2,
];

types.APShells = [types.APShell];

types.AAShells = [types.Type3Shell];

types.Torpedos = [types.Torpedo, types.SubmarineTorpedo];

types.Seaplanes = [
    types.ReconSeaplane,
    types.ReconSeaplaneNight,
    types.SeaplaneBomber,
    types.SeaplaneBomberNight,
    types.SeaplaneFighter,
];

types.Interceptors = [types.Interceptor, types.LandBasedFighter];

types.Recons = [
    types.ReconSeaplane,
    types.ReconSeaplaneNight,
    types.CarrierRecon,
    types.CarrierRecon2,
    types.LargeFlyingBoat,
    types.LandBasedRecon,
];

types.SeaplaneRecons = [types.ReconSeaplane, types.ReconSeaplaneNight];

types.SeaplaneReconsAll = [
    types.ReconSeaplane,
    types.ReconSeaplaneNight,
    types.LargeFlyingBoat,
];

types.SeaplaneBombers = [
    types.SeaplaneBomber,
    types.SeaplaneBomberNight,
    types.SeaplaneFighter,
];
types.SeaplaneBombersNoFighters = [
    types.SeaplaneBomber,
    types.SeaplaneBomberNight,
];

types.SeaplaneFighters = [types.SeaplaneFighter];

types.CarrierFighters = [types.CarrierFighter, types.CarrierFighterNight];

types.CarrierRecons = [types.CarrierRecon, types.CarrierRecon2];

types.CarrierBased = [
    types.CarrierFighter,
    types.CarrierFighterNight,
    types.TorpedoBomber,
    types.TorpedoBomberNight,
    types.DiveBomber,
    types.CarrierRecon,
    types.CarrierRecon2,
    types.JetBomberFighter,
    types.JetBomberFighter2,
];

types.LandBasedBombers = [
    types.LandBasedAttacker,
    types.NewLandBasedAttacker,
    types.LandBasedAntiSubPatrol,
    types.LargeLandBasedAircraft,
];

types.LandBased = [
    ...types.LandBasedBombers,
    types.Interceptor,
    types.JetBomberFighter,
    types.JetBomberFighter2,
    types.LandBasedFighter,
    types.LandBasedRecon,
];

types.LandBasedLarge = [types.LargeLandBasedAircraft];

types.TorpedoBombers = [types.TorpedoBomber, types.TorpedoBomberNight];

types.DiveBombers = [types.DiveBomber];

types.JetBomberFighters = [types.JetBomberFighter, types.JetBomberFighter2];

types.Jets = [types.JetBomberFighter, types.JetBomberFighter2];

types.Autogyros = [types.Autogyro];

types.AntiSubPatrols = [types.AntiSubPatrol, types.LandBasedAntiSubPatrol];

types.Fighters = [
    types.SeaplaneBomber,
    types.SeaplaneBomberNight,
    types.CarrierFighter,
    types.CarrierFighterNight,
    types.TorpedoBomber,
    types.TorpedoBomberNight,
    types.DiveBomber,
    types.SeaplaneFighter,
    types.LandBasedAttacker,
    types.NewLandBasedAttacker,
    types.LargeLandBasedAircraft,
    types.Interceptor,
    // types.CarrierRecon
    types.JetBomberFighter,
    types.JetBomberFighter2,
    types.LandBasedFighter,
    ...types.AntiSubPatrols,
];

types.Aircrafts = [];
[]
    .concat(types.Seaplanes)
    .concat(types.Recons)
    .concat(types.CarrierBased)
    .concat(types.Autogyros)
    .concat(types.AntiSubPatrols)
    .concat(types.LandBased)
    .forEach(function (v) {
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

module.exports = types;
